import { postSubmittedToken } from "@/lib/post-data";
import { validateSubmitForm } from "@/lib/validations/submit-validations";
import { idGenerator } from "@/lib/validations/unique-id-generator";
import { NextResponse } from "next/server";

export async function POST(request) {
  const formData = await request.json();
  const request_id = idGenerator(formData.project_name);

  // Create new token request with only existing fields
  let newTokenRequest = {
    promoted: false,
    request_id: request_id,
    request: formData.request,
    email: formData.email,
    project_name: formData.project_name,
    symbol: formData.symbol,
    date_added: Date.now(),
    full_description: formData.full_description,
    platform: formData.platform,
    logo: formData.logo, // Now contains the logo URL
    banner: formData.banner, // Now contains the banner URL
    votes: 1000,
    urls: {
      website: formData.website,
      twitter: formData.twitter,
      chat: formData.chat,
      telegram: formData.telegram,
      telegram_contact: formData.telegram_contact,
      aims: formData.aims,
      public_verification_post: formData.public_verification_post,
    },
    chain: formData.chain,
    contract_address: formData.contract_address,
  };

  let result = await postSubmittedToken(newTokenRequest);

  if (!result) {
    return NextResponse.json({
      errorStatus: true,
      requestID: false,
      status: 400,
    });
  }

  return NextResponse.json({
    errorStatus: false,
    requestID: request_id,
    status: 200,
  });
}
