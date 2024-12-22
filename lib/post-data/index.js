import { db } from "@/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { fetchSubmittedTokens } from "../fetch-data";

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "@/firebase";
import { v4 } from "uuid";

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

export const uploadProjectImages = async (formData, imageState) => {
  try {
    // Check for required logo
    if (!imageState.logo) {
      return false;
    }

    // Create folder path using project name
    const folderPath = `projects/${formData.project_name.trim()}`;

    // Upload logo
    const logoRef = ref(
      storage,
      `${folderPath}/logo/${imageState.logo.name + v4()}`
    );

    const logoUpload = await uploadBytes(logoRef, imageState.logo)
      .then((snapshot) => snapshot)
      .catch((error) => {
        console.error("Error uploading logo:", error);
        return false;
      });

    if (!logoUpload) {
      return false;
    }

    // Get logo URL
    const logoURL = await getDownloadURL(logoUpload.ref);

    // If there's no banner, return just the logo URL
    if (!imageState.banner) {
      return {
        logoURL,
        bannerURL: "",
      };
    }

    // Upload banner if it exists
    const bannerRef = ref(
      storage,
      `${folderPath}/banner/${imageState.banner.name + v4()}`
    );

    const bannerUpload = await uploadBytes(bannerRef, imageState.banner)
      .then((snapshot) => snapshot)
      .catch((error) => {
        console.error("Error uploading banner:", error);
        // Return false only for banner error if you want to handle it separately
        return false;
      });

    // If banner upload failed, still return logo URL but empty banner URL
    if (!bannerUpload) {
      return {
        logoURL,
        bannerURL: "",
      };
    }

    // Get banner URL
    const bannerURL = await getDownloadURL(bannerUpload.ref);

    // Return both URLs
    return {
      logoURL,
      bannerURL,
    };
  } catch (error) {
    console.error("Error in uploadProjectImages:", error);
    return false;
  }
};