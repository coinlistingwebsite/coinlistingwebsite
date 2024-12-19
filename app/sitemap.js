// app/sitemap.js
import { fetchTokens } from "@/lib/fetch-data";
import { getDb } from "@/lib/db/dbConfig";

async function getFirebaseTokens() {
  try {
    const tokens = await fetchTokens();
    if (!tokens) return [];

    return tokens.map((token) => ({
      url: `${
        process.env.NEXT_PUBLIC_BASE_URL
      }/currencies/${token.project_name.replace(/\s+/g, "-")}/${
        token.request_id
      }`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    }));
  } catch (error) {
    console.error("Error fetching Firebase tokens for sitemap:", error);
    return [];
  }
}

async function getSqliteTokens() {
  try {
    const db = await getDb();
    const tokens = await db.all(
      "SELECT id, name, updated_at FROM cryptocurrencies"
    );

    return tokens.map((token) => ({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/currencies/${token.name.replace(
        /\s+/g,
        "-"
      )}/${token.id}`,
      lastModified: token.updated_at ? new Date(token.updated_at) : new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    }));
  } catch (error) {
    console.error("Error fetching SQLite tokens for sitemap:", error);
    return [];
  }
}

const staticPages = [
  {
    url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 1.0,
  },
  // {
  //   url: `${process.env.NEXT_PUBLIC_BASE_URL}/cexlisted`,
  //   lastModified: new Date(),
  //   changeFrequency: "daily",
  //   priority: 0.8,
  // },
  {
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/newcryptocurrencies`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 0.8,
  },
];

export default async function sitemap() {
  // Fetch both token sets concurrently
  const [firebaseTokens, sqliteTokens] = await Promise.all([
    getFirebaseTokens(),
    getSqliteTokens(),
  ]);

  // Create a Set of URLs to prevent duplicates
  const urlSet = new Set();
  const allEntries = [...staticPages];

  // Helper to add entries while preventing duplicates
  const addUniqueEntry = (entry) => {
    if (!urlSet.has(entry.url)) {
      urlSet.add(entry.url);
      allEntries.push(entry);
    }
  };

  // Add tokens from both sources
  firebaseTokens.forEach(addUniqueEntry);
  sqliteTokens.forEach(addUniqueEntry);

  return allEntries;
}
