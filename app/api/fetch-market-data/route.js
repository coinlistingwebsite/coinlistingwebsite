import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { symbol, id } = await request.json();

  try {
    let response = await axios.get(
      `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/historical?id=${id}&count=1`,
      {
        headers: {
          "X-CMC_PRO_API_KEY": process.env.NEXT_CMC_API_KEY,
        },
      }
    );

    const quote = response.data;

    if (quote.status.credit_count == 1) {
      let data = quote.data.quotes[0].quote.USD;
      return NextResponse.json({
        data: data,
        status: 200,
        error: false,
      });
    }

    return NextResponse.json({
      data: false,
      status: 400,
      error: true,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      data: false,
      status: 400,
      error: true,
    });
  }
}
