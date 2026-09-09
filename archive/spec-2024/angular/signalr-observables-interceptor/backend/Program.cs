using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.IdentityModel.Tokens;
using ProductsApi.Hubs;

var builder = WebApplication.CreateBuilder(args);

const string JwtIssuer = "ProductsApi";
const string JwtAudience = "ProductsApi.Client";
const string JwtKey = "super-secret-demo-key-change-me-please-12345"; // min. 32 char

builder.Services.AddCors(o =>
    o.AddPolicy("AllowAll", p => p.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod())
);

builder.Services.AddSignalR();

builder
    .Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(o =>
    {
        o.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidIssuer = JwtIssuer,
            ValidateAudience = true,
            ValidAudience = JwtAudience,
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(JwtKey)),
            ValidateLifetime = true,
            ClockSkew = TimeSpan.Zero,
        };
    });

builder.Services.AddAuthorization();

var products = new List<Product>
{
    new(1, "MacBook Pro", 349999, 5, "electronics"),
    new(2, "Wireless Mouse", 499, 50, "electronics"),
    new(3, "Dog Food 2kg", 2999, 100, "pet"),
    new(4, "Cat Food 5kg", 5999, 110, "pet"),
    new(5, "LG ultrawide monitor", 290000, 22, "electronics"),
    new(6, "Cat toy", 999, 120, "pet"),
};
builder.Services.AddSingleton(products);

var users = new List<User>
{
    new(1, "demouser", "demopass", "user"),
    new(2, "admin", "admin", "admin"),
};
builder.Services.AddSingleton(users);

var app = builder.Build();

app.UseCors("AllowAll");
app.UseAuthentication();
app.UseAuthorization();

app.MapHub<ProductsHub>("/hubs/product");

var nextId = products.Max(p => p.Id) + 1;

// --------------------------------- ENDPOINTS ---------------------------------
app.MapGet("/api/status", () => Results.Ok(new { status = "OK" }));

// Auth: login -> JWT
app.MapPost(
    "/api/auth/login",
    ([FromBody] LoginDto dto) =>
    {
        if (string.IsNullOrWhiteSpace(dto.Username) || string.IsNullOrWhiteSpace(dto.Password))
            return Results.BadRequest(new { error = "Username and password must be provided" });

        var u = users.FirstOrDefault(x =>
            string.Equals(x.Username, dto.Username, StringComparison.OrdinalIgnoreCase)
            && x.Password == dto.Password
        );

        if (u is null)
            return Results.Unauthorized();

        var token = CreateJwt(u, JwtKey, JwtIssuer, JwtAudience, expiresMinutes: 60);
        return Results.Ok(
            new TokenDto
            {
                AccessToken = token,
                TokenType = "Bearer",
                ExpiresIn = 3600,
            }
        );
    }
);

app.MapGet("/api/product", () => Results.Ok(products));

app.MapGet(
    "/api/product/{id:int}",
    ([FromRoute] int id) =>
    {
        var p = products.FirstOrDefault(x => x.Id == id);
        return p is null ? Results.NotFound(new { error = "Product not found" }) : Results.Ok(p);
    }
);

app.MapPost(
    "/api/product",
    async ([FromBody] ProductCreateDto dto, IHubContext<ProductsHub> hub) =>
    {
        if (string.IsNullOrWhiteSpace(dto.Name) || dto.Price is null)
            return Results.BadRequest(new { error = "Name and price are required" });

        var prod = new Product(
            nextId++,
            dto.Name!,
            dto.Price.Value,
            dto.Stock ?? 0,
            dto.Category ?? "misc"
        );
        products.Add(prod);

        await hub.Clients.All.SendAsync("products:created", prod);
        return Results.Created($"/api/product/{prod.Id}", prod);
    }
);

app.MapPut(
    "/api/product/{id:int}",
    async ([FromRoute] int id, [FromBody] ProductUpdateDto dto, IHubContext<ProductsHub> hub) =>
    {
        var idx = products.FindIndex(p => p.Id == id);
        if (idx < 0)
            return Results.NotFound(new { error = "Product not found" });

        if (string.IsNullOrWhiteSpace(dto.Name) || dto.Price is null)
            return Results.BadRequest(new { error = "Name and price are required" });

        var updated = new Product(
            id,
            dto.Name!,
            dto.Price.Value,
            dto.Stock ?? 0,
            dto.Category ?? "misc"
        );
        products[idx] = updated;

        await hub.Clients.All.SendAsync("products:updated", updated);
        return Results.Ok(updated);
    }
);

// DELETE: csak bejelentkezett felhasználó
app.MapDelete(
        "/api/product/{id:int}",
        async ([FromRoute] int id, IHubContext<ProductsHub> hub) =>
        {
            var idx = products.FindIndex(p => p.Id == id);
            if (idx < 0)
                return Results.NotFound(new { error = "Product not found" });

            var removed = products[idx];
            products.RemoveAt(idx);

            await hub.Clients.All.SendAsync("products:deleted", new { id = removed.Id });
            return Results.NoContent();
        }
    )
    .RequireAuthorization(); // ha csak admin törölhet: .RequireAuthorization(p => p.RequireRole("admin"))

app.Run();

// ------------------------------- Helpers & Modellek -------------------------------
static string CreateJwt(User user, string key, string issuer, string audience, int expiresMinutes)
{
    var claims = new List<Claim>
    {
        new(JwtRegisteredClaimNames.Sub, user.Id.ToString()),
        new(JwtRegisteredClaimNames.UniqueName, user.Username),
        new(ClaimTypes.Name, user.Username),
        new(ClaimTypes.NameIdentifier, user.Id.ToString()),
        new(ClaimTypes.Role, user.Role),
    };

    var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key));
    var creds = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

    var token = new JwtSecurityToken(
        issuer: issuer,
        audience: audience,
        claims: claims,
        notBefore: DateTime.UtcNow,
        expires: DateTime.UtcNow.AddMinutes(expiresMinutes),
        signingCredentials: creds
    );

    return new JwtSecurityTokenHandler().WriteToken(token);
}

public record Product(int Id, string Name, decimal Price, int Stock, string Category);

public record ProductCreateDto
{
    public string? Name { get; init; }
    public decimal? Price { get; init; }
    public int? Stock { get; init; }
    public string? Category { get; init; }
}

public record ProductUpdateDto
{
    public string? Name { get; init; }
    public decimal? Price { get; init; }
    public int? Stock { get; init; }
    public string? Category { get; init; }
}

public record User(int Id, string Username, string Password, string Role);

public record LoginDto
{
    public string Username { get; init; } = "";
    public string Password { get; init; } = "";
}

public record TokenDto
{
    public string AccessToken { get; init; } = "";
    public string TokenType { get; init; } = "";
    public int ExpiresIn { get; init; } = 0;
}
