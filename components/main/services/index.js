"use client";

import BlurImage from "@/components/elements/BlurImage";
import {
  Brush,
  CurrencyBitcoin,
  GitHub,
  SmartToy,
  Telegram,
  Twitter,
} from "@mui/icons-material";
import ForumIcon from "@mui/icons-material/Forum";

const Services = () => {
  return (
    <main className="max-w-[1400px] mx-auto min-h-[70vh] my-10">
      {/* Information */}
      <div className=" mb-10 border border-base-200 border-[1px] text-sm p-5 rounded-3xl">
        Welcome to <b>CexGate</b> Services, where innovation meets expertise in
        Fullstack Development, Graphics, and Blockchain Contract Creation. Our
        dedicated team brings together a blend of technical prowess and creative
        vision to elevate your digital presence and empower your blockchain
        initiatives. Whether you're envisioning a dynamic website, captivating
        graphics, or need smart contracts deployed on the blockchain,{" "}
        <b>Cexgate</b> is your go-to partner for cutting-edge solutions. With a
        deep understanding of the evolving digital landscape and a commitment to
        excellence, we tailor our services to exceed your expectations and drive
        your success. Join forces with <b>Cexgate</b> and unleash the full
        potential of your digital endeavors.
      </div>

      {/* Services Card */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-2 lg:px-0">
        {/* Card No 1 */}

        <div className="card card-compact shadow-xl">
          <figure>
            <BlurImage
              image="https://firebasestorage.googleapis.com/v0/b/bmc-database-f73bd.appspot.com/o/services%2Fphoto_2024-04-23%209.48.16%20PM.jpeg?alt=media&token=6f1e3350-201d-4227-88f7-13246e7e7a91"
              alt="CEXGATE SERVICES"
              height={200}
              width={300}
            />
          </figure>

          <div className="card-body">
            <h2 className="card-title">
              <Brush className="text-xl" /> Crypto Designer
            </h2>
            <p className="text-xs">
              Logo & banners(For Social Media Plaforms)
              <br />
              Website Graphics & Banners
              <br />
              Telegram Buy Bot GIFs
              <br /> Content Creator
            </p>
            <div className="card-actions justify-center">
              <a
                href="https://t.me/CRYPTO_Designer_Jack"
                target="_blank"
                className="btn btn-xs"
              >
                <ForumIcon />
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Card No 2 */}

        <div className="card card-compact shadow-xl">
          <figure>
            <BlurImage
              image="https://firebasestorage.googleapis.com/v0/b/bmc-database-f73bd.appspot.com/o/services%2Fphoto_2024-04-23%209.08.59%20PM.jpeg?alt=media&token=01569c10-6100-4ce2-b020-1983b399f108"
              alt="CEXGATE SERVICES"
              height={200}
              width={300}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              <GitHub className="text-xl" /> FullStack Developer
            </h2>
            <p className="text-xs">
              Payments Platforms (Crypto & Bank Payments)
              <br />
              IOS & Android Apps
              <br />
              MacOS, Windows & Lunix Software
              <br />
              Meme-coin, NFT Websites, Animated 3js & E-commerce Websites
              <br />
              Website Cloning & API Development
              <br />
            </p>
            <div className="card-actions justify-center">
              <a
                href="https://t.me/smart_developer_bmc"
                target="_blank"
                className="btn btn-xs"
              >
                <ForumIcon />
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Card No 3 */}

        <div className="card card-compact shadow-xl">
          <figure>
            <BlurImage
              image="https://firebasestorage.googleapis.com/v0/b/bmc-database-f73bd.appspot.com/o/services%2Fphoto_2024-04-23%209.48.12%20PM.jpeg?alt=media&token=a0f82360-5520-4b99-ab5b-5ac92f6563b1"
              alt="CEXGATE SERVICES"
              height={200}
              width={300}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              <CurrencyBitcoin className="text-xl" />
              Blockchain Developer
            </h2>
            <p className="text-xs">
              BSC Contract
              <br /> Eth Contract <br /> Sol Contract <br /> Other Chains, etc
            </p>
            <div className="card-actions justify-center">
              <a
                href="https://t.me/maxim_contractdeveloper"
                target="_blank"
                className="btn btn-xs"
              >
                <ForumIcon />
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Card No 4 */}
        <div className="card card-compact shadow-xl">
          <figure>
            <BlurImage
              image="https://firebasestorage.googleapis.com/v0/b/bmc-database-f73bd.appspot.com/o/photo_2024-04-23%208.52.05%20PM.jpeg?alt=media&token=9fe50c49-d105-4bd6-b0d0-4e70b725a0e7"
              alt="CEXGATE SERVICES"
              height={200}
              width={300}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              <SmartToy className="text-xl" />
              Bot Services
            </h2>
            <p className="text-xs">
              Website Alert Bots
              <br />
              Telegram Bots
              <br />
              Twitter Bots
              <br />
              Automated Bots
              <br />
              Instagram Bots Support
            </p>
            <div className="card-actions justify-center">
              <a
                href="https://t.me/smart_developer_bmc"
                target="_blank"
                className="btn btn-xs"
              >
                <ForumIcon />
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Card No 5 */}

        <div className="card card-compact shadow-xl">
          <figure>
            <BlurImage
              image="https://firebasestorage.googleapis.com/v0/b/bmc-database-f73bd.appspot.com/o/services%2Fphoto_2024-04-23%209.48.21%20PM.jpeg?alt=media&token=849fcb18-8427-46b4-a407-92ef732a2194"
              alt="CEXGATE SERVICES"
              height={200}
              width={300}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              <Telegram className="text-xl" />
              Telegram Shilling & Fomo Support
            </h2>
            <p className="text-xs">
              Creative Comments
              <br />
              Shilling Contents
              <br />
              Active Community Support
              <br />
              Bullish Community Support
            </p>
            <div className="card-actions justify-center">
              <a
                href="https://t.me/grok_telegram_shilling"
                target="_blank"
                className="btn btn-xs"
              >
                <ForumIcon />
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Card No 6 */}
        <div className="card card-compact shadow-xl">
          <figure>
            <BlurImage
              image="https://firebasestorage.googleapis.com/v0/b/bmc-database-f73bd.appspot.com/o/services%2Fphoto_2024-04-23%2010.49.25%20PM.jpeg?alt=media&token=34edeabf-3a64-4799-b696-67ef5754131f"
              alt="CEXGATE SERVICES"
              height={200}
              width={300}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              <Twitter className="text-xl" />
              Twitter Shilling
            </h2>
            <p className="text-xs">
              Twitter Shilling
              <br />
              Fomo Support
            </p>
            <div className="card-actions justify-center">
              <a
                href="https://t.me/Oscar_Twitter_Shilling"
                target="_blank"
                className="btn btn-xs"
              >
                <ForumIcon />
                Contact
              </a>
            </div>
          </div>
        </div>


      </div>
    </main>
  );
};

export default Services;
