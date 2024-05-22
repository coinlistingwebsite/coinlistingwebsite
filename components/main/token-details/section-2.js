import Tweet from "@/components/sub-main/tweets/tweet";
import { ThemeContext } from "@/context/ThemeContext";
import { ArrowForward, Twitter } from "@mui/icons-material";
import React, { useContext } from "react";

const SectionTwo = ({ details, onDatabase }) => {
  let { theme } = useContext(ThemeContext);

  console.log(details);

  return (
    <div className="p-1 lg:w-[65%]">
      <div id="dexscreener-embed">
        {onDatabase ? (
          <iframe
            src={`https://dexscreener.com/${details?.chain}/${
              details?.contract_address
            }?embed=1&trades=1&info=0&chart=1&theme=${
              theme != "corporate" ? "dark" : "light"
            }`}
          ></iframe>
        ) : (
          <iframe
            src={`https://dexscreener.com/${details?.platform?.slug}/${
              details?.platform?.token_address
            }?embed=1&trades=1&info=0&chart=1&theme=${
              theme != "corporate" ? "dark" : "light"
            }`}
          ></iframe>
        )}
      </div>
      <div className="flex flex-row mt-5">
        <b>About {onDatabase ? details.project_name : details.name}</b>{" "}
        <span className="opacity-75 ml-3">({details.symbol})</span>
      </div>
      <div className="opacity-75 text-xs leading-7">
        {onDatabase ? details.full_description : details.description}
      </div>
      <div className="mt-5">Tags</div>
      <div className="opacity-75 text-xs mt-2">
        {details.tags?.map((tag, index) => (
          <span className="badge badge-ghost mr-3" key={index}>
            {tag}
          </span>
        ))}
      </div>

      {onDatabase ? (
        <>
          <div className="mt-5">Public Verification Post</div>

          <p className="text-xs opacity-75 my-2">
            Public Verification Posts are made by Project owners to announce
            their project
          </p>

          <a
            href={details?.urls?.public_verification_post}
            className="badge badge-info"
          >
            View Tweet <Twitter /> <ArrowForward />
          </a>
        </>
      ) : null}
    </div>
  );
};

export default SectionTwo;
