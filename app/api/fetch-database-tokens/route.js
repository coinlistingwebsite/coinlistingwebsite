import { fetchTokens } from "@/lib/fetch-data";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  let dbTokens = [];

  try {
    let response = await fetchTokens();
    if (!response) throw new Error("Error fetching tokens");
    dbTokens = response;
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      dbTokens,
      status: 200,
      error: true,
    });
  }

  return NextResponse.json({
    dbTokens,
    status: 200,
    error: false,
  });
}
