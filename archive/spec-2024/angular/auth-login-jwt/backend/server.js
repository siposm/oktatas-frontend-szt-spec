// Telepítés: npm i express cors jsonwebtoken
// Futtatás: node server.js

const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'super-secret-demo-key';

app.use(cors());
app.use(express.json());

// --------- "Adatbázis" (memóriában) ---------
const USERS = [
    { username: 'admin', password: 'admin', role: 'ADMIN' },
    { username: 'demouser', password: 'demopass', role: 'USER' },
    { username: 'john', password: 'doe', role: 'USER' },
    { username: 'root', password: 'toor', role: 'ROOT' },
];

const PEOPLE = [
    { id: 1, name: 'Ada Lovelace', birthyear: 1815 },
    { id: 2, name: 'Alan Turing', birthyear: 1912 },
    { id: 3, name: 'Grace Hopper', birthyear: 1906 },
    { id: 4, name: 'John von Neumann', birthyear: 1903 },
];

const PRODUCTS = [
    { id: 1, name: 'Laptop Pro 14"', price: 349999, stock: 5, category: 'electronics' },
    { id: 2, name: 'Wireless Mouse', price: 4999, stock: 50, category: 'electronics' },
    { id: 3, name: 'Dog Food 2kg', price: 2999, stock: 100, category: 'pet' },
];
let nextProductId = Math.max(...PRODUCTS.map(p => p.id)) + 1;



// --------- Helper: token blacklist ---------
const tokenBlacklist = new Set(); // memóriában tárolt tokenek
function blacklistToken(token) {
    tokenBlacklist.add(token);
}
function isTokenBlacklisted(token) {
    return tokenBlacklist.has(token);
}

// --------- Helper: JWT készítés ---------
function makeToken(user) {
    const payload = {
        sub: user.username,
        roles: [user.role],
    };
    return jwt.sign(payload, JWT_SECRET, { expiresIn: '2h' });
}

// --------- Auth middleware (JWT ellenőrzés) ---------
function authRequired(req, res, next) {
    const auth = req.headers.authorization || '';
    const parts = auth.split(' ');
    if (parts.length !== 2 || parts[0] !== 'Bearer') {
        return res.status(401).json({ error: 'Missing or invalid Authorization header' });
    }
    const token = parts[1];
    if (isTokenBlacklisted(token)) {
        return res.status(401).json({ error: 'Token has been logged out' });
    }
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        req.token = token;
        next();
    } catch (err) {
        return res.status(401).json({ error: 'Invalid or expired token' });
    }
}

// --------- Endpontok ---------

// Health-check (nyitott)
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
});

// Bejelentkezés: POST /api/auth/login
app.post('/api/auth/login', (req, res) => {
    const { username, password } = req.body || {};
    if (!username || !password) {
        return res.status(400).json({ error: 'username and password required' });
    }
    const user = USERS.find(u => u.username === username && u.password === password);
    if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = makeToken(user);
    res.json({ token });
});

// Kijelentkezés: POST /api/auth/logout
app.post('/api/auth/logout', authRequired, (req, res) => {
    blacklistToken(req.token);
    res.json({ message: 'Logged out successfully' });
});

// Emberek listázása (védett)
app.get('/api/person', authRequired, (req, res) => {
    res.json(PEOPLE);
});

// Egy ember lekérése id alapján (védett)
app.get('/api/person/:id', authRequired, (req, res) => {
    const id = Number(req.params.id);
    const p = PEOPLE.find(x => x.id === id);
    if (!p) return res.status(404).json({ error: 'Person not found' });
    res.json(p);
});

// ******************************************************************************************

// Lista (GET /api/products)
app.get('/api/product', (req, res) => {
    res.json(PRODUCTS);
});

// Egy termék lekérése (GET /api/product/:id)
app.get('/api/product/:id', (req, res) => {
    const id = Number(req.params.id);
    const prod = PRODUCTS.find(p => p.id === id);
    if (!prod) return res.status(404).json({ error: 'Product not found' });
    res.json(prod);
});

// Létrehozás (POST /api/product)
// Body példa: { "name":"X", "price":12345, "stock":10, "category":"electronics" }
app.post('/api/product', (req, res) => {
    const { name, price, stock = 0, category = null } = req.body || {};
    if (!name || typeof price !== 'number') {
        return res.status(400).json({ error: 'name and numeric price are required' });
    }
    const newProd = { id: nextProductId++, name, price, stock, category };
    PRODUCTS.push(newProd);
    res.status(201).json(newProd);
});

// Teljes módosítás (PUT /api/product/:id)
// Body-ben legyen legalább name + price (stock, category opcionális)
app.put('/api/product/:id', (req, res) => {
    const id = Number(req.params.id);
    const idx = PRODUCTS.findIndex(p => p.id === id);
    if (idx === -1) return res.status(404).json({ error: 'Product not found' });

    const { name, price, stock = 0, category = null } = req.body || {};
    if (!name || typeof price !== 'number') {
        return res.status(400).json({ error: 'name and numeric price are required' });
    }

    PRODUCTS[idx] = { id, name, price, stock, category };
    res.json(PRODUCTS[idx]);
});

// Részleges módosítás (PATCH /api/product/:id)
app.patch('/api/product/:id', (req, res) => {
    const id = Number(req.params.id);
    const prod = PRODUCTS.find(p => p.id === id);
    if (!prod) return res.status(404).json({ error: 'Product not found' });

    const candidate = { ...prod, ...req.body };
    if ('price' in req.body && typeof candidate.price !== 'number') {
        return res.status(400).json({ error: 'price must be numeric' });
    }
    Object.assign(prod, candidate);
    res.json(prod);
});

// Törlés (DELETE /api/product/:id)
app.delete('/api/product/:id', (req, res) => {
    const id = Number(req.params.id);
    const idx = PRODUCTS.findIndex(p => p.id === id);
    if (idx === -1) return res.status(404).json({ error: 'Product not found' });

    PRODUCTS.splice(idx, 1);
    res.status(204).send();
});







// --------- Szerver indítás ---------
app.listen(PORT, () => {
    const pink = '\x1b[95m'   // világos magenta (pink)
    const green = '\x1b[92m'  // világos zöld
    const reset = '\x1b[0m'   // visszaállítja az alap színt

    console.log()
    console.log(`${pink}=======================================================${reset}`)
    console.log(`${green}Server listening on http://localhost:${PORT}${reset}`)
    console.log()
    console.log(`${pink}> API endpoints${reset}`)
    console.log('  /api/health')
    console.log('  /api/person')
    console.log('  /api/person/:id')
    console.log('  /api/product')
    console.log('  /api/product/:id')
    console.log()
    console.log(`${pink}> Demo users${reset}`)
    console.log('  admin / admin [role: ADMIN]')
    console.log('  demouser / demopass [role: USER]')
    console.log('  john / doe [role: USER]')
    console.log('  root / toor [role: ROOT]')
    console.log(`${pink}=======================================================${reset}`)
    console.log()
})