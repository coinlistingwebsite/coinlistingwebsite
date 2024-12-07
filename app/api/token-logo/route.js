import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  try {
    const response = await fetch(
      `https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?id=${id}`,
      {
        headers: {
          "X-CMC_PRO_API_KEY": process.env.NEXT_CMC_API_KEY,
        },
      }
    );

    const data = await response.json();
    const quote = data.data[id];

    return NextResponse.json({
      logo: quote.logo,
      error: false,
    });
  } catch (error) {
    console.error("Error fetching token info:", error);
    return NextResponse.json({
      logo: false,
      error: false,
    });
  }
}
