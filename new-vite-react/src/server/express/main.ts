import express from "express";
import ViteExpress from "vite-express";
import pg from "pg";

const pool = new pg.Pool({ user: 'postgres', host: '192.168.1.77', password: 'postgres', database: 'shooa', port: 5432 });
const app = express(); app.use(express.json()); app.use(express.urlencoded({ extended: true }))

async function initDatabase() {
  await pool.query(`CREATE TABLE IF NOT EXISTS products (
    id bigserial PRIMARY KEY,
    type varchar(30) NOT NULL,
    title varchar(50) NOT NULL,
    description varchar(500) NOT NULL,
    price integer NOT NULL
  )`)
}

app.get("/products", async (_, res) => {
  const result = await pool.query(`SELECT * FROM products`)
  await res.json(result.rows)
});

app.post("/products", async (req, res) => {
  const result = await pool.query(`INSERT INTO products (type, title, description, price) VALUES (
    '${req.body.type}', '${req.body.title}', '${req.body.description}', ${req.body.price}  
  )`)
});

ViteExpress.listen(app, 3000, async () => {
  await initDatabase()
  console.log("Server is listening on port 3000...")
})
