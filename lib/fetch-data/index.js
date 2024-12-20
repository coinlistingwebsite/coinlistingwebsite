import { db } from "@/firebase";
import axios from "axios";
import { doc, getDoc } from "firebase/firestore";
import { delay } from "../validations/validations";

export const fetchSubmittedTokens = async () => {
  try {
    const docRef = doc(
      db,
      "tokens",
      process.env.NEXT_PUBLIC_DB_SUBMITTED_TOKEN_ID
    );
    const docSnap = await getDoc(docRef);
    let tokens = { ...docSnap.data() };

    return tokens.submittedTokens;
  } catch (error) {
    console.log("Error fetching submitted tokens. Reason: " + error);
    return false;
  }
};

export const fetchTokens = async () => {
  try {
    const docRef = doc(db, "tokens", process.env.NEXT_PUBLIC_DB_TOKEN_ID);
    const docSnap = await getDoc(docRef);
    let tokens = { ...docSnap.data() };

    return tokens.tokens;
  } catch (error) {
    console.log("Error fetching submitted tokens. Reason: " + error);
    return false;
  }
};

export const fetchTokenDetails = async (id) => {
  //check if the token exists on the database

  // Delay the function
  for (let p = 0; p < 2; p++) {
    await delay(2000);
  }

  // Fetch Database Data
  const tokensData = await fetchTokens();
  if (!tokensData)
    return {
      details: false,
      onDatabase: false,
      error: true,
    };

  // Analyse the data
  const filteredData = tokensData.filter((coin) => {
    return coin.request_id == id;
  });

  if (filteredData.length == 0) {
    // Fetch Data from the API
    try {
      let response = await axios.get(
        `https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?id=${id}`,
        {
          headers: {
            "X-CMC_PRO_API_KEY": process.env.NEXT_CMC_API_KEY,
          },
        }
      );
      const quote = response.data.data[id];

      return {
        details: quote,
        onDatabase: false,
        error: false,
      };
    } catch (error) {
      // console.log(error);
      return {
        details: false,
        onDatabase: false,
        error: true,
      };
    }
  } else {
    // Fetch Data from the Database

    return {
      details: filteredData[0],
      onDatabase: true,
      error: false,
    };
  }
};

export const Votes = async () => {
  let results;
  try {
    const docRef = doc(db, "comments", process.env.NEXT_PUBLIC_VOTES_ID);
    const docSnap = await getDoc(docRef);
    results = { ...docSnap.data() };
  } catch (err) {
    console.log(err);
    return false;
  }
  const loopData = results.votes;

  return loopData;
};

export const VotesById = async (id) => {
  const data = await Votes();
  if (!data) return false;

  const totalVotes = data.filter((vote) => {
    return vote.coinid == id;
  });

  const Bullish = data.filter((vote) => {
    return vote.coinid == id && vote.vote == true;
  });

  const Bearish = data.filter((vote) => {
    return vote.coinid == id && vote.vote == false;
  });

  return {
    totalVotes: totalVotes.length,
    bullish: Bullish.length,
    bearish: Bearish.length,
  };
};

export const fetchTokenLogo = async (id) => {
  try {
    const response = await fetch(`/api/token-logo?id=${id}`);
    const data = await response.json();

    console.log(data);

    return {
      details: data.details,
      onDatabase: data.onDatabase,
      error: data.error,
    };
  } catch (error) {
    return {
      details: false,
      onDatabase: false,
      error: true,
    };
  }
};
