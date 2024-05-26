import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Link from "next/link";
import React from "react";
import SectionTwo from "./section-2";

const TestOne = ({ details, onDatabase }) => {
  return (
    <>
      <div className="w-[100%]">
        <div className="text-lg breadcrumbs">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>Cryptocurrencies</li>

            <li className="underline">{details.name}</li>
          </ul>
        </div>
        <div className="switch bg-base-300 rounded-lg shadow-lg mb-5 p-5">
          <div className="flex flex-row flex-1 gap-4">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={details?.logo} alt={details.symbol} />
              </div>
            </div>

            <div className="my-auto">
              <b className="text-xl">{details.name}</b>

              <small className="badge badge-neutral my-auto font-light ml-2">
                {details.symbol}
              </small>
              <br />

              <div className="flex flex-row">
                <small className="badge badge-primary mr-3 my-auto">
                  {onDatabase ? (
                    <>{details.chain}</>
                  ) : (
                    <>{details.platform.symbol}</>
                  )}
                </small>

                <span className="badge badge-success badge-md mr-1 my-2 hover:cursor-pointer">
                  <ContentCopyIcon className="text-sm" />
                  {onDatabase ? (
                    <>{details.contract_address.substr(0, 20)}...</>
                  ) : (
                    <>{details.platform.token_address.substr(0, 20)}...</>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SectionTwo details={details} onDatabase={onDatabase} />
    </>
  );
};

export default TestOne;
