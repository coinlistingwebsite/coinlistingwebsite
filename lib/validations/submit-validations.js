import { isEmail } from "./validations";

export const validateSubmitForm = (formData, imageState) => {
  if (!formData.approval)
    return { response: true, message: "Terms & Conditions must be Accepted" };

  if (!isEmail(formData.email))
    return { response: true, message: "Email is Invalid" };

  if (!formData.project_name)
    return {
      response: true,
      message: "Please Fill in your Project Name",
    };

  if (!formData.symbol || formData.symbol.length < 2)
    return {
      response: true,
      message: "Please Fill in your Project Symbol",
    };

  if (!formData.full_description || formData.full_description.length < 100)
    return {
      response: true,
      message: "Please fill in content for your Detailed Project Description",
    };

  if (!formData.platform)
    return {
      response: true,
      message: "Please Fill in the Platfom of your contract",
    };

  if (!formData.website)
    return {
      response: true,
      message: "Please Fill in the Website of your Project",
    };

  if (!formData.chain)
    return {
      response: true,
      message: "Please Fill in the Chain of your Project",
    };

  if (!formData.contract_address)
    return {
      response: true,
      message: "Contract Address InValid",
    };

  if (!formData.twitter)
    return {
      response: true,
      message: "Please Fill in a Valid Link to your Twitter Account",
    };

  if (!formData.telegram)
    return {
      response: true,
      message: "Please Fill in a Valid Link to your Telegram",
    };

  if (!formData.telegram_contact)
    return {
      response: true,
      message: "Please Fill in a Valid Link of your Telegram Contact",
    };

  if (!formData.public_verification_post)
    return {
      response: true,
      message: "Public Verification Post is very Important. Please Fill",
    };

  // Image validation
  if (!imageState?.logo) {
    return {
      response: true,
      message: "Please upload a logo image for your project",
    };
  }

  if (imageState?.logoError) {
    return {
      response: true,
      message: imageState.logoError,
    };
  }

  if (!imageState?.banner) {
    return {
      response: true,
      message: "Please upload a banner image for your project",
    };
  }

  if (imageState?.bannerError) {
    return {
      response: true,
      message: imageState.bannerError,
    };
  }

  return { response: false, message: "All Inputs are valid" };
};
