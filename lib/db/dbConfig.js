// lib/db/dbConfig.js
import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from "path";

let db = null;

export async function getDb() {
  if (db) {
    return db;
  }

  // Initialize the database connection
  db = await open({
    filename: path.join(process.cwd(), "lib/db/market.db"),
    driver: sqlite3.Database,
  });

  return db;
}

export async function getTokenLogo(id) {
  const db = await getDb();
  try {
    const result = await db.get(
      "SELECT logo FROM cryptocurrencies WHERE id = ?",
      id
    );

    console.log(result, id);
    return result?.logo || null;
  } catch (error) {
    console.error("Error fetching logo from database:", error);
    return null;
  }
}

// lib/db/dbConfig.js
export async function searchTokensByName(searchQuery) {
  const db = await getDb();
  try {
    const results = await db.all(
      "SELECT id, name, logo, symbol FROM cryptocurrencies WHERE name LIKE ? LIMIT 10",
      [`%${searchQuery}%`]
    );
    return results;
  } catch (error) {
    console.error("Error searching tokens:", error);
    throw error;
  }
}
