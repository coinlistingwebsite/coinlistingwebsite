import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  let tokenData = [];
  let losers = [];
  let gainers = [];
  let newTokens = [];

  try {
    // Token Data
    let response = await axios.get(
      `https://pro-api.coinmarketcap.com/v1/cryptocurrency/trending/most-visited?limit=50`,
      {
        headers: {
          "X-CMC_PRO_API_KEY": process.env.NEXT_CMC_API_KEY,
        },
      }
    );
    tokenData = response.data.data;
  } catch (error) {
    console.log(error);
  }

  try {
    // New Listing Data
    let response = await axios.get(
      `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/new?limit=100`,
      {
        headers: {
          "X-CMC_PRO_API_KEY": process.env.NEXT_CMC_API_KEY,
        },
      }
    );
    newTokens = response.data.data;
  } catch (error) {
    console.log(error);
  }

  try {
    // Losers Data
    let response = await axios.get(
      `https://pro-api.coinmarketcap.com/v1/cryptocurrency/trending/gainers-losers?sort_dir=asc&limit=50`,
      {
        headers: {
          "X-CMC_PRO_API_KEY": process.env.NEXT_CMC_API_KEY,
        },
      }
    );
    losers = response.data.data;
  } catch (error) {
    console.log(error);
  }

  try {
    // Gainers Data
    let response = await axios.get(
      `https://pro-api.coinmarketcap.com/v1/cryptocurrency/trending/gainers-losers?sort_dir=desc&limit=50`,
      {
        headers: {
          "X-CMC_PRO_API_KEY": process.env.NEXT_CMC_API_KEY,
        },
      }
    );
    gainers = response.data.data;
  } catch (error) {
    console.log(error);
  }

  return NextResponse.json({
    tokenData,
    losers,
    gainers,
    newTokens,

    status: 200,
    error: false,
  });
}
