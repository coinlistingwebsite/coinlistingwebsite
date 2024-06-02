import { isEmail } from "./validations";

export const validateSubmitForm = (formData) => {
  if (!formData.approval)
    return { response: true, message: "Terms & Conditions must be Accepted." };

  if (!isEmail(formData.email))
    return { response: true, message: "Email is Invalid." };

  if (!formData.relationship_project)
    return {
      response: true,
      message: "Please Fill in your Relationship with the Project.",
    };

  // if (!formData.launch_date)
  //   return {
  //     response: true,
  //     message: "Please Fill in the Launch Date of your Project.",
  //   };

  if (!formData.project_name)
    return {
      response: true,
      message: "Please Fill in your Project Name.",
    };

  if (!formData.symbol || formData.symbol.length < 2)
    return {
      response: true,
      message: "Please Fill in your Project Symbol.",
    };

  // if (!formData.tags)
  //   return {
  //     response: true,
  //     message: "Please you need to input Tags for your Project.",
  //   };

  // const tagsList = formData.tags.split(",");

  // if (tagsList.length < 2)
  //   return {
  //     response: true,
  //     message: "Please you need at least 2 tags to your Project.",
  //   };

  // if (!formData.short_description || formData.short_description.length < 30)
  //   return {
  //     response: true,
  //     message: "Please fill in content for your Short Description.",
  //   };

  if (!formData.full_description || formData.full_description.length < 100)
    return {
      response: true,
      message: "Please fill in content for your Detailed Project Description.",
    };

  if (!formData.platform)
    return {
      response: true,
      message: "Please Fill in the Platfom of your contract.",
    };

  if (!formData.logo)
    return {
      response: true,
      message: "Please Fill in the Logo of your Project.",
    };

  if (!formData.website)
    return {
      response: true,
      message: "Please Fill in the Website of your Project.",
    };

  if (!formData.chain)
    return {
      response: true,
      message: "Please Fill in the Chain of your Project.",
    };

  if (!formData.contract_address)
    return {
      response: true,
      message: "Contract Address InValid",
    };

  if (!formData.twitter)
    return {
      response: true,
      message: "Please Fill in a Valid Link to your Twitter Account.",
    };

  // if (!formData.chat)
  //   return {
  //     response: true,
  //     message:
  //       "Please Fill in a Valid Link to Chat Account. Preferably Telegram",
  //   };

  if (!formData.public_verification_post)
    return {
      response: true,
      message: "Public Verification Post is very Important. Please Fill",
    };

  return { response: false, message: "All Inputs are valid" };
};
