"use client";
import { validateSubmitForm } from "@/lib/validations/submit-validations";
import SelectChain from "./select-chain";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const SubmitTokenComponent = () => {
  const [formData, setFormData] = useState({
    request: true,
    email: "",
    approval: false,
    relationship_project: "",
    launch_date: "",
    project_name: "",
    symbol: "",
    tags: "",
    short_description: "",
    full_description: "",
    platform: "",
    logo: "",
    website: "",
    website_2: "",
    chain: "",
    contract_address: "",
    contract_decimals: "",
    etherscan: "",
    source_code: "",
    technical_doc: "",
    announcement: "",
    message_board: "",
    twitter: "",
    reddit: "",
    facebook: "",
    youtube: "",
    chat: "",
    linkedin: "",
    mobile_app: "",
    circulating_supply: "",
    total_supply: "",
    max_supply: "",
    cex_name: "",
    cex_link: "",
    dex_name: "",
    dex_link: "",
    public_verification_post: "",
  });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [requestid, setRequestid] = useState("");
  const recaptchaRef = useRef();

  const handleSubmit = async () => {
    setError(false);
    setRequestid("");

    const recaptchaValue = recaptchaRef.current.getValue();
    if (!recaptchaValue) {
      setError("Please interact with RECAPTCHA");
      return;
    }

    const { response, message } = await validateSubmitForm(formData);

    if (response) {
      setError(message);
      return;
    }

    setLoading(true);

    // Send FormData to Server API

    const result = await fetch("/api/submit", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const { requestID, errorStatus, status } = await result.json();

    setLoading(false);

    if (errorStatus) {
      setError(requestID);
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

      <select
        className="select select-bordered w-full my-2 outline-none"
        onChange={(event) => {
          setFormData({ ...formData, request: event.target.value });
        }}
      >
        <option value={true}>[New Listing] Add cryptoasset</option>
        <option value={false}>[Update] Project Info</option>
      </select>

      {/* ------------------------ */}
      <hr className="my-5" />
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
        I acknowledge that BMC reserves the right, in their sole discretion, to
        determine the suitability of my request for the site. In the event that
        BMC rejects my request, I acknowledge that BMC is not obligated to
        inform me or provide any reasons for such refusal. I declare that the
        information provided on the form is accurate and complete to the best of
        my knowledge and that failure to fulfill these requirements may render
        my request inadmissible.
      </span>

      <br />
      <br />

      {/* ------------------------ */}
      {/* Relationship with the project */}

      <label className="form-control">
        <div className="label">
          <span className="submit_token_text">
            Relationship with the project
          </span>
        </div>
        <textarea
          className="textarea textarea-bordered min-h-24"
          onChange={(event) => {
            setFormData({
              ...formData,
              relationship_project: event.target.value,
            });
          }}
        ></textarea>
        <div className="label">
          <span className="submit_token_text">
            Please describe your relationship with the project (e.g. CEO,
            founder, employee, community member and exchange)
          </span>
        </div>
      </label>

      {/* ------------------------ */}

      {/* Project Launch Date */}

      <label className="form-control w-full">
        <div className="label">
          <span className="submit_token_text">Project Launch Date</span>
        </div>
        <input
          type="date"
          className="input input-bordered w-full"
          onChange={(event) => {
            setFormData({
              ...formData,
              launch_date: event.target.value,
            });
          }}
        />
        <div className="label">
          <span className="submit_token_text">
            The date the project launched (e.g. token sale, genesis block,
            formation of company, drafting of business plan).
          </span>
        </div>
      </label>

      {/* ------------------------ */}
      {/* Project Name */}

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

      {/* ------------------------ */}
      {/* Cryptoasset Tags - Sector/Categories */}

      <label className="form-control w-full my-3">
        <div className="label">
          <span className="submit_token_text">
            Cryptocurrency Tags, Seperate each tage by comma.
          </span>
        </div>
        <input
          type="text"
          className="input input-bordered w-full"
          onChange={(event) => {
            setFormData({
              ...formData,
              tags: event.target.value,
            });
          }}
        />
        <div className="label">
          <span className="submit_token_text">
            Example - Education, Fashion, Transport, DeFi
          </span>
        </div>
      </label>

      {/* ------------------------ */}
      {/* One line description */}

      <label className="form-control w-full">
        <div className="label">
          <span className="submit_token_text">One-liner description</span>
        </div>
        <input
          type="text"
          className="input input-bordered w-full"
          onChange={(event) => {
            setFormData({
              ...formData,
              short_description: event.target.value,
            });
          }}
        />
        <div className="label">
          <span className="submit_token_text">
            Provide a snappy and concise tagline for the project. E,g, KAVA - A
            Cross-Chain Platform for Decentralized Finance. Band Protocol -
            Secure and scalable decentralized oracle for Web3.0.{" "}
          </span>
        </div>
      </label>

      {/* ------------------------ */}
      {/* Detailed Project Description (Cryptoasset) */}

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
      {/* Link To Logo */}

      <label className="form-control w-full my-5">
        <span className="submit_token_text">Link to Logo</span>
        <input
          type="text"
          className="input input-bordered w-full"
          onChange={(event) => {
            setFormData({
              ...formData,
              logo: event.target.value,
            });
          }}
        />
        <div className="label">
          <span className="submit_token_text">
            3 conditions MUST be met: (1) Transparent background; (2) Square
            (200x200); unequal dimensions will be rejected! (3) PNG format. If
            possible, it is recommended that you provide logo URLs ending with
            .png so that our system can extract the logo directly.
          </span>
        </div>
      </label>

      {/* ------------------------ */}
      {/* Website */}

      <label className="form-control w-full">
        <div className="label">
          <span className="submit_token_text">Website 1</span>
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
      {/* Website 2 */}

      <label className="form-control w-full">
        <div className="label">
          <span className="submit_token_text">Website 2 (optional)</span>
        </div>
        <input
          type="text"
          className="input input-bordered w-full"
          onChange={(event) => {
            setFormData({
              ...formData,
              website_2: event.target.value,
            });
          }}
        />
        <div className="label">
          <span className="submit_token_text">
            There is data validation for this field. Kindly ensure that your URL
            conforms to the following format: https://www.website.com. We
            recommend adding your dexscan URL for this field e.g.
            https://dexscan.app/bsc/0x2170ed0880ac9a755fd29b2688956bd959f933f8/
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
          <span className="submit_token_text">Contract Address 1</span>
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

      {/* ------------------------ */}
      {/* Number of Decimals */}

      <label className="form-control w-full">
        <div className="label">
          <span className="submit_token_text">
            Number of Decimals (Contract Address 1)(optional)
          </span>
        </div>
        <input
          type="number"
          className="input input-bordered w-full"
          onChange={(event) => {
            setFormData({
              ...formData,
              contract_decimals: event.target.value,
            });
          }}
        />
        <div className="label">
          <span className="submit_token_text">
            This is usually found on the explorer page of the asset. See example
            -
            <a
              href="https://gyazo.com/7e2b24ca517cd90fd3a36f83d7c0a88f"
              target="_blank"
              className="underline text-secondary"
            >
              https://gyazo.com/7e2b24ca517cd90fd3a36f83d7c0a88f
            </a>
          </span>
        </div>
      </label>

      {/* ------------------------ */}
      {/* Block Explorer 1(optional) */}

      <label className="form-control w-full">
        <div className="label">
          <span className="submit_token_text">Block Explorer 1(optional)</span>
        </div>
        <input
          type="text"
          className="input input-bordered w-full"
          onChange={(event) => {
            setFormData({
              ...formData,
              etherscan: event.target.value,
            });
          }}
        />
        <div className="label">
          <span className="submit_token_text">
            Insert a valid URL with the CONTRACT ADDRESS, e.g.
            <a
              href="https://etherscan.io/token/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599"
              target="_blank"
              className="underline text-secondary"
            >
              https://etherscan.io/token/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599{" "}
            </a>
            This is a mandatory field for projects that are already trading on
            an exchange.
          </span>
        </div>
      </label>

      {/* ------------------------ */}
      {/* Source Code (e.g. Github, Gitter)(optional)
       */}

      <label className="form-control w-full">
        <div className="label">
          <span className="submit_token_text">
            Source Code (e.g. Github, Gitter)(optional)
          </span>
        </div>
        <input
          type="text"
          className="input input-bordered w-full"
          onChange={(event) => {
            setFormData({
              ...formData,
              source_code: event.target.value,
            });
          }}
        />
        <div className="label">
          <span className="submit_token_text">Insert a valid URL.</span>
        </div>
      </label>

      {/* ------------------------ */}
      {/* Source Code (e.g. Github, Gitter)(optional)
       */}

      <label className="form-control w-full">
        <div className="label">
          <span className="submit_token_text">
            Whitepaper / Technical Documentation(optional)
          </span>
        </div>
        <input
          type="text"
          className="input input-bordered w-full"
          onChange={(event) => {
            setFormData({
              ...formData,
              technical_doc: event.target.value,
            });
          }}
        />
        <div className="label">
          <span className="submit_token_text">Insert a valid URL.</span>
        </div>
      </label>

      {/* ------------------------ */}
      {/* Source Code (e.g. Github, Gitter)(optional)
       */}

      <label className="form-control w-full">
        <div className="label">
          <span className="submit_token_text">
            Announcement (e.g. Bitcointalk)(optional)
          </span>
        </div>
        <input
          type="text"
          className="input input-bordered w-full"
          onChange={(event) => {
            setFormData({
              ...formData,
              announcement: event.target.value,
            });
          }}
        />
        <div className="label">
          <span className="submit_token_text">Insert a valid URL.</span>
        </div>
      </label>

      {/* ------------------------ */}
      {/* Source Code (e.g. Github, Gitter)(optional)
       */}

      <label className="form-control w-full">
        <div className="label">
          <span className="submit_token_text">
            Message Board 1 (e.g. Blog/Medium)(optional)
          </span>
        </div>
        <input
          type="text"
          className="input input-bordered w-full"
          onChange={(event) => {
            setFormData({
              ...formData,
              message_board: event.target.value,
            });
          }}
        />
        <div className="label">
          <span className="submit_token_text">Insert a valid URL.</span>
        </div>
      </label>

      {/* ------------------------ */}
      {/* Source Code (e.g. Github, Gitter)(optional)
       */}

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
      {/* Source Code (e.g. Github, Gitter)(optional)
       */}

      <label className="form-control w-full">
        <div className="label">
          <span className="submit_token_text">Reddit (optional)</span>
        </div>
        <input
          type="text"
          className="input input-bordered w-full"
          onChange={(event) => {
            setFormData({
              ...formData,
              reddit: event.target.value,
            });
          }}
        />
        <div className="label">
          <span className="submit_token_text">
            Insert a valid URL for a subreddit.
          </span>
        </div>
      </label>

      {/* ------------------------ */}
      {/* Source Code (e.g. Github, Gitter)(optional)
       */}

      <label className="form-control w-full">
        <div className="label">
          <span className="submit_token_text">Facebook(optional)</span>
        </div>
        <input
          type="text"
          className="input input-bordered w-full"
          onChange={(event) => {
            setFormData({
              ...formData,
              facebook: event.target.value,
            });
          }}
        />
        <div className="label">
          <span className="submit_token_text">Insert a valid URL</span>
        </div>
      </label>

      {/* ------------------------ */}
      {/* Source Code (e.g. Github, Gitter)(optional)
       */}

      <label className="form-control w-full">
        <div className="label">
          <span className="submit_token_text">
            Video Channel (e.g. YouTube)(optional)
          </span>
        </div>
        <input
          type="text"
          className="input input-bordered w-full"
          onChange={(event) => {
            setFormData({
              ...formData,
              youtube: event.target.value,
            });
          }}
        />
        <div className="label">
          <span className="submit_token_text">Insert a valid URL</span>
        </div>
      </label>

      {/* ------------------------ */}
      {/* Chat 1 (e.g. Discord, Telegram, Slack, Weibo).
       */}

      <label className="form-control w-full">
        <div className="label">
          <span className="submit_token_text">
            Chat (e.g. Discord, Telegram, Slack, Weibo).
          </span>
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
            There is data validation for this field. Ex:{" "}
            <a
              href="https://t.me/BullishMarktCap"
              target="_blank"
              className="underline text-secondary"
            ></a>
            https://t.me/BullishMarktCap
          </span>
        </div>
      </label>

      {/* ------------------------ */}
      {/* Chat 1 (e.g. Discord, Telegram, Slack, Weibo).
       */}

      <label className="form-control w-full">
        <div className="label">
          <span className="submit_token_text">LinkedIn(optional)</span>
        </div>
        <input
          type="text"
          className="input input-bordered w-full"
          onChange={(event) => {
            setFormData({
              ...formData,
              linkedin: event.target.value,
            });
          }}
        />
        <div className="label">
          <span className="submit_token_text">Insert a valid URL.</span>
        </div>
      </label>

      {/* ------------------------ */}
      {/* Chat 1 (e.g. Discord, Telegram, Slack, Weibo).
       */}

      <label className="form-control w-full">
        <div className="label">
          <span className="submit_token_text">
            Mobile App 1 (e.g. Google Play store, iTunes store)(optional)
          </span>
        </div>
        <input
          type="text"
          className="input input-bordered w-full"
          onChange={(event) => {
            setFormData({
              ...formData,
              mobile_app: event.target.value,
            });
          }}
        />
        <div className="label">
          <span className="submit_token_text">Insert a valid URL.</span>
        </div>
      </label>

      {/* ------------------------ */}
      {/* Chat 1 (e.g. Discord, Telegram, Slack, Weibo).
       */}

      <label className="form-control w-full">
        <div className="label">
          <span className="submit_token_text">
            Circulating Supply (# of coins that are circulating in the market
            and in the general public's hands.)
          </span>
        </div>
        <input
          type="number"
          className="input input-bordered w-full"
          onChange={(event) => {
            setFormData({
              ...formData,
              circulating_supply: event.target.value,
            });
          }}
        />
        <div className="label">
          <span className="submit_token_text">
            Insert EXACT number of units (e.g. 21000000).
          </span>
        </div>
      </label>

      {/* ------------------------ */}
      {/* Chat 1 (e.g. Discord, Telegram, Slack, Weibo).
       */}

      <label className="form-control w-full">
        <div className="label">
          <span className="submit_token_text">
            Total Supply (# of coins in existence right now minus any coins that
            have been verifiably burned.)(optional)
          </span>
        </div>
        <input
          type="number"
          className="input input-bordered w-full"
          onChange={(event) => {
            setFormData({
              ...formData,
              total_supply: event.target.value,
            });
          }}
        />
        <div className="label">
          <span className="submit_token_text">
            Insert EXACT number of units (e.g. 21000000).
          </span>
        </div>
      </label>
      {/* ------------------------ */}
      {/* Chat 1 (e.g. Discord, Telegram, Slack, Weibo).
       */}

      <label className="form-control w-full">
        <div className="label">
          <span className="submit_token_text">
            Max Supply (maximum # of coins that will ever exist in the lifetime
            of the asset)
          </span>
        </div>
        <input
          type="number"
          className="input input-bordered w-full"
          onChange={(event) => {
            setFormData({
              ...formData,
              max_supply: event.target.value,
            });
          }}
        />
        <div className="label">
          <span className="submit_token_text">
            Insert EXACT number of units (e.g. 21000000). If the max supply is
            infinite, type '0'
          </span>
        </div>
      </label>

      {/* ------------------------ */}

      <label className="form-control w-full">
        <div className="label">
          <span className="submit_token_text">
            CEX Lisitng Platfom (Optional)
          </span>
        </div>
        <input
          type="text"
          className="input input-bordered w-full"
          onChange={(event) => {
            setFormData({
              ...formData,
              cex_name: event.target.value,
            });
          }}
        />
      </label>
      {/* ------------------------ */}

      <label className="form-control w-full">
        <div className="label">
          <span className="submit_token_text">CEX Lisitng Link (Optional)</span>
        </div>
        <input
          type="text"
          className="input input-bordered w-full"
          onChange={(event) => {
            setFormData({
              ...formData,
              cex_link: event.target.value,
            });
          }}
        />
      </label>
      {/* ------------------------ */}

      <label className="form-control w-full">
        <div className="label">
          <span className="submit_token_text">
            DEX Lisitng Platform (Optional)
          </span>
        </div>
        <input
          type="text"
          className="input input-bordered w-full"
          onChange={(event) => {
            setFormData({
              ...formData,
              dex_name: event.target.value,
            });
          }}
        />
      </label>
      {/* ------------------------ */}

      <label className="form-control w-full">
        <div className="label">
          <span className="submit_token_text">DEX Lisitng Link (Optional)</span>
        </div>
        <input
          type="text"
          className="input input-bordered w-full"
          onChange={(event) => {
            setFormData({
              ...formData,
              dex_link: event.target.value,
            });
          }}
        />
      </label>

      {/* ------------------------ */}
      {/* Chat 1 (e.g. Discord, Telegram, Slack, Weibo).
       */}

      <label className="form-control w-full mb-10">
        <div className="label">
          <span className="submit_token_text">
            Public Verification Post (Twitter)
          </span>
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
        <div className="label">
          <span className="submit_token_text">
            Hereby, We want to list [ @Project twitter Username ] on
            BullishMarketCap(@BullishMarktCap). Please attach your tweet link in
            the blank.
          </span>
        </div>
      </label>

      {/* ------------------------------- */}

      <div>
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_SITE_KEY}
          ref={recaptchaRef}
        />
      </div>

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
              Request Id is {requestid} {" "} Please Store this ID number.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubmitTokenComponent;
