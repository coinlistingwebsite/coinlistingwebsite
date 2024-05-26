import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { favourites } = await request.json();

  let formattedString = favourites
    .toString()
    .replace("[", "")
    .replace("]", "")
    .trim();

  try {
    let response = await axios.get(
      `https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?symbol=${formattedString}`,
      {
        headers: {
          "X-CMC_PRO_API_KEY": process.env.NEXT_CMC_API_KEY,
        },
      }
    );
    const quoteData = response.data.data;


    return NextResponse.json({
      favData: quoteData,
      status: 200,
      error: false,
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      favData: false,
      status: 200,
      error: false,
    });
  }
}
