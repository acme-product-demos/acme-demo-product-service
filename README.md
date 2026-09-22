# product-service

A minimal in-memory product catalog service for the acme-corp demo e-commerce project. Built with Node.js + Express, no database — data lives in a JS array and resets on restart.

## Run

```bash
npm install
npm start
```

The service listens on `http://localhost:4001`.

## Endpoints

### Health check

```bash
curl http://localhost:4001/health
```

### List all products

```bash
curl http://localhost:4001/api/products
```

Filter by category (case-insensitive exact match):

```bash
curl "http://localhost:4001/api/products?category=electronics"
```

### Get a single product

```bash
curl http://localhost:4001/api/products/p1
```

Returns `404 { "error": "Product not found" }` for an unknown id.

### Unknown routes

Any other route returns `404 { "error": "Not found" }`.

## Product shape

```json
{
  "id": "p1",
  "name": "string",
  "description": "string",
  "price": 0,
  "category": "string",
  "image": "🎧",
  "stock": 0
}
```
