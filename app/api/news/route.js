import { db } from "@/firebase";
import { NextResponse } from "next/server";
import { getDoc, doc } from "firebase/firestore";

export const dynamic = "force-dynamic";
const newsdata = async () => {
  let results;
  try {
    const docRef = doc(db, "news", process.env.NEXT_PUBLIC_DB_NEWS_ID);
    const docSnap = await getDoc(docRef);
    results = { ...docSnap.data() };
  } catch (err) {
    console.log("Function Error - Failed to fetch news data" + "/n" + err);
    return false;
  }
  const loopData = results.news;
  return loopData;
};

export async function GET(request) {
  try {
    let response = await newsdata();

    if (!response) {
      throw new Error("Failed to fetch News Data from Database");
    }

    return NextResponse.json({ news: response, status: 200, error: false });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ news: false, status: 400, error: true });
  }
}
