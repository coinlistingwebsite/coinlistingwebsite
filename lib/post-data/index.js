import { db } from "@/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { fetchSubmittedTokens } from "../fetch-data";

export const postSubmittedToken = async (newTokenRequest) => {
  const tokensArray = await fetchSubmittedTokens();
  if (!tokensArray) return false;

  tokensArray.push(newTokenRequest);

  try {
    const docRef = doc(
      db,
      "tokens",
      process.env.NEXT_PUBLIC_DB_SUBMITTED_TOKEN_ID
    );

    await updateDoc(docRef, {
      submittedTokens: tokensArray,
    });
    return true;
  } catch (error) {
    console.log("Error Uploading Submitted Token Array. Reason: " + error);
    return false;
  }
};
