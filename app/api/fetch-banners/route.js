import { db } from "@/firebase";
import { NextResponse } from "next/server";
import { getDoc, doc } from "firebase/firestore";

export const dynamic = "force-dynamic";

export const fetchCexBanners = async () => {
  let results;
  try {
    const docRef = doc(db, "cexBanners", process.env.NEXT_PUBLIC_CEX_BANNERS);
    const docSnap = await getDoc(docRef);
    results = { ...docSnap.data() };
  } catch (err) {
    console.log("error");
    return false;
  }

  return results;
};

export async function GET(request) {
  try {
    let response = await fetchCexBanners();

    if (!response) {
      throw new Error("Failed to banner Data from Database");
    }

    return NextResponse.json({ banners: response, status: 200, error: false });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ banners: false, status: 400, error: true });
  }
}
