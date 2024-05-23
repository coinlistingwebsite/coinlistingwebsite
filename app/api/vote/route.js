import { NextResponse } from "next/server";
import { collection, updateDoc, doc } from "firebase/firestore";
import { Votes } from "@/lib/fetch-data";
import { db } from "@/firebase";

export async function POST(request) {
  const { vote, coinid } = await request.json();

  var currentDate = new Date();
  var timestamp = currentDate.getTime();

  const data = await Votes();
  if (!data) return NextResponse.json({ error: true, status: 400 });

  let newVote = {
    coinid: coinid,
    vote: vote,
    timestamp: timestamp,
  };

  data.push(newVote);

  let voteDoc = doc(db, "comments", process.env.NEXT_PUBLIC_VOTES_ID);

  try {
    await updateDoc(voteDoc, { votes: data });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      error: true,
      status: 400,
    });
  }

  return NextResponse.json({
    error: false,
    status: 200,
  });
}
