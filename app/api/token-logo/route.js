// app/api/token-logo/route.js
import { NextResponse } from "next/server";
import { getTokenLogo } from "@/lib/db/dbConfig";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({
      logo: null,
      error: true,
      message: "No ID provided",
    });
  }

  try {
    // First check the database
    const dbLogo = await getTokenLogo(id);

    console.log(dbLogo, "marketdata");

    if (dbLogo) {
      return NextResponse.json({
        logo: dbLogo,
        error: false,
        source: "db",
      });
    }

    // If not in database, fallback to CMC API
    const response = await fetch(
      `https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?id=${id}`,
      {
        headers: {
          "X-CMC_PRO_API_KEY": process.env.NEXT_CMC_API_KEY,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`CMC API responded with status: ${response.status}`);
    }

    const data = await response.json();
    const quote = data.data[id];

    if (!quote || !quote.logo) {
      return NextResponse.json({
        logo: null,
        error: true,
        message: "Logo not found",
      });
    }

    return NextResponse.json({
      logo: quote.logo,
      error: false,
      source: "api",
    });
  } catch (error) {
    console.error("Error fetching token info:", error);
    return NextResponse.json({
      logo: null,
      error: true,
      message: error.message,
    });
  }
}
