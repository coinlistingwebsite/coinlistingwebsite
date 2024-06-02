import { postSubmittedToken } from "@/lib/post-data";
import { validateSubmitForm } from "@/lib/validations/submit-validations";
import { idGenerator } from "@/lib/validations/unique-id-generator";
import { NextResponse } from "next/server";

export async function POST(request) {
  const formData = await request.json();

  // Validate the Data
  const { response, message } = await validateSubmitForm(formData);
  if (response) {
    return NextResponse.json({
      errorStatus: true,
      requestID: message,
      status: 500,
    });
  }

  const request_id = await idGenerator(formData.project_name);

  // Tags Array
  let tags = formData.tags.split(",");

  // Post Data to Server
  let newTokenRequest = {
    promoted: false,
    request_id: request_id,
    request: formData.request,
    email: formData.email,
    relationship_project: formData.relationship_project,
    launch_date: formData.launch_date,
    project_name: formData.project_name,
    symbol: formData.symbol,
    tags: tags,
    date_added: Date.now(),
    short_description: formData.short_description,
    full_description: formData.full_description,
    platform: formData.platform,
    logo: formData.logo,
    banner: formData.banner,
    urls: {
      website: formData.website,
      website_2: formData.website_2,
      etherscan: formData.etherscan,
      source_code: formData.source_code,
      technical_doc: formData.technical_doc,
      announcement: formData.announcement,
      message_board: formData.message_board,
      twitter: formData.twitter,
      reddit: formData.reddit,
      facebook: formData.facebook,
      youtube: formData.youtube,
      chat: formData.chat,
      telegram: formData.telegram,
      telegram_contact: formData.telegram_contact,
      linkedin: formData.linkedin,
      mobile_app: formData.mobile_app,
      cex_name_1: formData.cex_name_1,
      cex_link_1: formData.cex_link_1,
      cex_name_2: formData.cex_name_2,
      cex_link_2: formData.cex_link_2,
      cex_name_3: formData.cex_name_3,
      cex_link_3: formData.cex_link_3,
      cex_target_1: formData.cex_target_1,
      cex_target_2: formData.cex_target_2,
      cex_target_3: formData.cex_target_3,
      aims: formData.aims,
      public_verification_post: formData.public_verification_post,
    },
    chain: formData.chain,
    contract_address: formData.contract_address,
    circulating_supply: formData.circulating_supply,
    total_supply: formData.total_supply,
    max_supply: formData.max_supply,
  };

  //POST Data

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
