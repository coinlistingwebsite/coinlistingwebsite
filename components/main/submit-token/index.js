"use client";
import { validateSubmitForm } from "@/lib/validations/submit-validations";
import SelectChain from "./select-chain";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import LogoUploader from "./uploadImages";
import { uploadProjectImages } from "@/lib/post-data";

const SubmitTokenComponent = () => {
  const [formData, setFormData] = useState({
    request: true,
    email: "",
    approval: false,
    relationship_project: "",
    launch_date: "",
    project_name: "",
    symbol: "",
    full_description: "",
    platform: "",
    website: "",
    chain: "",
    contract_address: "",
    etherscan: "",
    twitter: "",
    reddit: "",
    facebook: "",
    youtube: "",
    chat: "",
    telegram: "",
    telegram_contact: "",
    linkedin: "",
    mobile_app: "",
    circulating_supply: "",
    total_supply: "",
    max_supply: "",
    aims: "",
    public_verification_post: "",
  });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [requestid, setRequestid] = useState("");
  const [imageState, setImageState] = useState({
    logo: null,
    banner: null,
    logoError: null,
    bannerError: null,
  });
  const recaptchaRef = useRef();

  const handleSubmit = async () => {
    setError(false);
    setRequestid("");

    // const recaptchaValue = recaptchaRef.current.getValue();
    // if (!recaptchaValue) {
    //   setError("Please interact with RECAPTCHA");
    //   return;
    // }

    const { response, message } = await validateSubmitForm(
      formData,
      imageState
    );

    if (response) {
      setError(message);
      return;
    }

    setLoading(true);

    // Upload images and get URLs
    const imageUrls = await uploadProjectImages(formData, imageState);
    if (!imageUrls) {
      setError(
        "Error in submitting token, please try again or contact support"
      );
      setLoading(false);
      return;
    }

    // Add image URLs to form data
    const submissionData = {
      ...formData,
      logo: imageUrls.logoURL,
      banner: imageUrls.bannerURL || "", // Use empty string if no banner
    };

    const result = await fetch("/api/submit", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(submissionData),
    });

    const { requestID, errorStatus, status } = await result.json();

    setLoading(false);

    if (errorStatus) {
      setError(
        "Error in submitting token, please try again or contact support"
      );
      return;
    }

    setRequestid(requestID);
  };

  return (
    <div className="max-w-2xl">
      {/* Type of Request */}
      <span className="submit_token_text">
        To ensure your request is routed to the correct team, please review ALL
        options and select the CORRECT form. Please submit well-structured,
        actionable and complete information.
        <br />
        <br />
        All fields are mandatory, with the exceptions of fields tagged with
        (optional).
      </span>

      {/* Your Email Address */}

      <span className="submit_token_text">Your Email Address</span>

      <label className="input input-bordered flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        >
          <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
          <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
        </svg>
        <input
          type="email"
          className="grow outline-none"
          onChange={(event) => {
            setFormData({ ...formData, email: event.target.value });
          }}
        />
      </label>

      {/* ------------------------ */}
      {/* Terms and Conditions */}

      <br />
      <br />

      <span className="submit_token_text">Terms & Conditions</span>
      <br />
      <input
        type="checkbox"
        className="checkbox checkbox-xs"
        onChange={(event) => {
          setFormData({ ...formData, approval: event.target.checked });
        }}
      />
      <br />
      <span className="submit_token_text">
        I acknowledge that RankCoins reserves the right, in their sole
        discretion, to determine the suitability of my request for the site. In
        the event that RankCoins rejects my request, I acknowledge that
        RankCoins is not obligated to inform me or provide any reasons for such
        refusal. I declare that the information provided on the form is accurate
        and complete to the best of my knowledge and that failure to fulfill
        these requirements may render my request inadmissible.
      </span>

      <br />
      <br />

      <label className="form-control w-full">
        <div className="label">
          <span className="submit_token_text">Project Name</span>
        </div>
        <input
          type="text"
          className="input input-bordered w-full"
          onChange={(event) => {
            setFormData({
              ...formData,
              project_name: event.target.value,
            });
          }}
        />
        <div className="label">
          <span className="submit_token_text">
            Please provide the FULL name of the project (e.g. Bitcoin, Ethereum,
            Ripple, Holochain, Binance, Bittrex).
          </span>
        </div>
      </label>

      {/* ------------------------ */}
      {/* Project Ticker/Symbol */}

      <label className="form-control w-full">
        <div className="label">
          <span className="submit_token_text">
            Project Ticker/Symbol (Do not put a $ sign if there is none in the
            ticker)
          </span>
        </div>
        <input
          type="text"
          className="input input-bordered w-full"
          onChange={(event) => {
            setFormData({
              ...formData,
              symbol: event.target.value,
            });
          }}
        />
        <div className="label">
          <span className="submit_token_text">(e.g. BTC, ETH, XRP, HOT)</span>
        </div>
      </label>

      <label className="form-control">
        <div className="label">
          <span className="submit_token_text">
            Detailed Project Description (Cryptoasset)
          </span>
        </div>
        <textarea
          className="textarea textarea-bordered min-h-24"
          onChange={(event) => {
            setFormData({
              ...formData,
              full_description: event.target.value,
            });
          }}
        ></textarea>
        <div className="label">
          <span className="submit_token_text">
            Recommended word count: 450 - 600 words.
            <br />
            Provide a detailed description of your project, which may be used on
            the asset page, Minimize the use of hyperbole, superlatives, and
            redundant statements (e.g. leading, amazing, best, first of its
            kind, state of the art, decentralized blockchain). It should not
            read like a sales pitch. Focus on factual statements about your
            project. Write in third-person. Be concise - avoid redundant
            statements. (e.g. decentralized blockchain). For example, Launched
            in [dd/mm/yyyy] by a team based in [country], [project] is a smart
            contract platform that enables developers to build decentralized
            applications.
          </span>
        </div>
      </label>

      {/* ------------------------ */}
      {/* Platform */}

      <label className="form-control w-full">
        <div className="label">
          <span className="submit_token_text">
            Platform (e.g. EOS, NEO, Ethereum, proprietary blockchain).
          </span>
        </div>
        <input
          type="text"
          className="input input-bordered w-full"
          onChange={(event) => {
            setFormData({
              ...formData,
              platform: event.target.value,
            });
          }}
        />
        <div className="label">
          <span className="submit_token_text">
            Please specify all token platforms that the asset is currently on.
            For example, CHZ has ERC20 and BEP20 tokens and is therefore on the
            Ethereum and Binance blockchains.
          </span>
        </div>
      </label>

      {/* ------------------------ */}

      <LogoUploader imageState={imageState} setImageState={setImageState} />

      {/* ------------------------ */}
      {/* Website */}

      <label className="form-control w-full">
        <div className="label">
          <span className="submit_token_text">Website</span>
        </div>
        <input
          type="text"
          className="input input-bordered w-full"
          onChange={(event) => {
            setFormData({
              ...formData,
              website: event.target.value,
            });
          }}
        />
        <div className="label">
          <span className="submit_token_text">
            There is data validation for this field. Kindly ensure that your URL
            conforms to the following format: https://www.website.com.
          </span>
        </div>
      </label>

      {/* ------------------------ */}
      {/* Chain */}

      <SelectChain formData={formData} setFormData={setFormData} />

      {/* ------------------------ */}
      {/* Contract Address */}

      <label className="form-control w-full">
        <div className="label">
          <span className="submit_token_text">Contract Address</span>
        </div>
        <input
          type="text"
          className="input input-bordered w-full"
          onChange={(event) => {
            setFormData({
              ...formData,
              contract_address: event.target.value,
            });
          }}
        />
      </label>

      <label className="form-control w-full">
        <div className="label">
          <span className="submit_token_text">Twitter</span>
        </div>
        <input
          type="text"
          className="input input-bordered w-full"
          onChange={(event) => {
            setFormData({
              ...formData,
              twitter: event.target.value,
            });
          }}
        />
        <div className="label">
          <span className="submit_token_text">
            There is data validation for this field. Kindly ensure that your URL
            conforms to the following format.
            <a
              href="https://twitter.com/bitcoin"
              target="_blank"
              className="underline text-secondary"
            >
              https://twitter.com/bitcoin
            </a>
          </span>
        </div>
      </label>

      {/* ------------------------ */}
      {/* Chat 1 (e.g. Discord, Telegram, Slack, Weibo).
       */}

      <label className="form-control w-full">
        <div className="label">
          <span className="submit_token_text">Discord Chat</span>
        </div>
        <input
          type="text"
          className="input input-bordered w-full"
          onChange={(event) => {
            setFormData({
              ...formData,
              chat: event.target.value,
            });
          }}
        />
        <div className="label">
          <span className="submit_token_text">
            There is data validation for this field.
          </span>
        </div>
      </label>

      <label className="form-control w-full">
        <div className="label">
          <span className="submit_token_text">Telegram Chat</span>
        </div>
        <input
          type="text"
          className="input input-bordered w-full"
          onChange={(event) => {
            setFormData({
              ...formData,
              telegram: event.target.value,
            });
          }}
        />
        <div className="label">
          <span className="submit_token_text">
            There is data validation for this field. Ex:{" "}
            <a
              href="https://t.me/BullishMarktCap"
              target="_blank"
              className="underline text-secondary"
            ></a>
            https://t.me/rankcoins
          </span>
        </div>
      </label>

      {/* =---------= */}
      <label className="form-control w-full">
        <div className="label">
          <span className="submit_token_text">Telegram Contact</span>
        </div>
        <input
          type="text"
          className="input input-bordered w-full"
          onChange={(event) => {
            setFormData({
              ...formData,
              telegram_contact: event.target.value,
            });
          }}
        />
        <div className="label">
          <span className="submit_token_text">
            Please provide your Telegram contact information
          </span>
        </div>
      </label>

      <br />
      <br />

      <label className="form-control">
        <div className="label">
          <span className="submit_token_text">
            Important aims in the future (Optional)
          </span>
        </div>
        <textarea
          className="textarea textarea-bordered min-h-24"
          onChange={(event) => {
            setFormData({
              ...formData,
              aims: event.target.value,
            });
          }}
        ></textarea>
      </label>

      <br />
      <br />

      <label className="form-control w-full mb-10">
        <div className="label flex flex-row">
          <span className="submit_token_text">
            Public Verification Post (Twitter). Please Post a Tweet, copy the
            tweet link, and paste in the box.
          </span>

          <a
            href="https://twitter.com/share?ref_src=twsrc%5Etfw"
            class="twitter-share-button"
            target="_blank"
            data-size="large"
            data-text=" 🚀 We have successfully applied to get listed on RankCoins!
🌐 https://rankcoins.com/
@RankCoins
#rankcoins"
            data-hashtags="coinlisting"
            data-show-count="false"
          >
            Tweet now
          </a>
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charset="utf-8"
          ></script>
        </div>
        <input
          type="text"
          className="input input-bordered w-full"
          onChange={(event) => {
            setFormData({
              ...formData,
              public_verification_post: event.target.value,
            });
          }}
        />
      </label>

      {/* ------------------------------- */}

      {/* <div>
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_SITE_KEY}
          ref={recaptchaRef}
        />
      </div> */}

      {/* ------------------------------- */}
      {error && (
        <div role="alert" className="alert alert-error mt-5 alert-outline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{error}</span>
        </div>
      )}
      {/* ------------------------------- */}

      <button className="btn btn-accent w-full my-5" onClick={handleSubmit}>
        {loading && <span className="loading loading-spinner"></span>}
        Submit Request
      </button>

      {/* ------------------------------- */}

      {requestid && (
        <div role="alert" className="alert shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-info shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <div>
            <h3 className="font-bold">Your Request has been Submitted!</h3>
            <div className="text-xs">
              Request Id is {requestid} Please Store this ID number.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubmitTokenComponent;
