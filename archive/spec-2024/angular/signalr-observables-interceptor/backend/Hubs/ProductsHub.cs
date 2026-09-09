using Microsoft.AspNetCore.SignalR;

namespace ProductsApi.Hubs
{
    public class ProductsHub : Hub
    {
        private readonly List<Product> _products;
        private static readonly object _lock = new();

        public ProductsHub(List<Product> products)
        {
            _products = products;
        }

        public Task<List<Product>> ReadAll()
        {
            lock (_lock)
            {
                return Task.FromResult(_products.Select(p => p with { }).ToList());
            }
        }

        public async Task<Product> Create(ProductCreateDto dto)
        {
            if (string.IsNullOrWhiteSpace(dto.Name) || dto.Price is null)
                throw new HubException("name and price are required");

            Product created;
            lock (_lock)
            {
                var nextId = _products.Count == 0 ? 1 : _products.Max(x => x.Id) + 1;
                created = new Product(
                    nextId,
                    dto.Name!,
                    dto.Price.Value,
                    dto.Stock ?? 0,
                    dto.Category ?? "misc"
                );
                _products.Add(created);
            }

            await Clients.All.SendAsync("products:created", created);
            return created;
        }
    }
}
