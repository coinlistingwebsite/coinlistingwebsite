// app/api/search-tokens/route.js
import { NextResponse } from "next/server";
import { searchTokensByName } from "@/lib/db/dbConfig";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");

  if (!query) {
    return NextResponse.json({
      results: [],
      error: false,
      message: "No search query provided",
    });
  }

  try {
    const results = await searchTokensByName(query);
    return NextResponse.json({
      results,
      error: false,
    });
  } catch (error) {
    console.error("Error searching tokens:", error);
    return NextResponse.json({
      results: [],
      error: true,
      message: error.message,
    });
  }
}
