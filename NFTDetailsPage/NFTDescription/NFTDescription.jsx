import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  MdVerified,
  MdCloudUpload,
  MdTimer,
  MdReportProblem,
  MdOutlineDeleteSweep,
} from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { FaWallet, FaPercentage } from "react-icons/fa";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";
import { BiTransferAlt, BiDollar } from "react-icons/bi";

//INTERNAL IMPORT
import Style from "./NFTDescription.module.css";
import images from "../../img";
import { Button } from "../../components/componentsindex.js";
import { NFTTabs } from "../NFTDetailsIndex";

//IMPORT SMART CONTRACT
import { NFTMarketplaceContext } from "../../Context/NFTMarketplaceContext";

const NFTDescription = ({ nft }) => {
  const [social, setSocial] = useState(false);
  const [NFTMenu, setNFTMenu] = useState(false);
  const [history, setHistory] = useState(true);
  const [provanance, setProvanance] = useState(false);
  const [owner, setOwner] = useState(false);

  const router = useRouter();

  const historyArray = [
    images.user1,
    images.user2,
    images.user3,
    images.user4,
    images.user5,
  ];
  const provananceArray = [
    images.user6,
    images.user7,
    images.user8,
    images.user9,
    images.user10,
  ];
  const ownerArray = [
    images.user1,
    images.user8,
    images.user2,
    images.user6,
    images.user5,
  ];

   const openTabs = (e) => {
    const btnText = e.target.innerText;

    if (btnText == "Bid History") {
      setHistory(true);
      setProvanance(false);
      setOwner(false);
    } else if (btnText == "Provanance") {
      setHistory(false);
      setProvanance(true);
      setOwner(false);
    }
  };

  const openOwmer = () => {
    if (!owner) {
      setOwner(true);
      setHistory(false);
      setProvanance(false);
    } else {
      setOwner(false);
      setHistory(true);
    }
  };

  //SMART CONTRACT DATA
  const { buyNFT, currentAccount } = useContext(NFTMarketplaceContext);

  return (
    <div className={Style.NFTDescription}>
      <div className={Style.NFTDescription_box}>
        {/* //Part ONE */}
        <div className={Style.NFTDescription_box_share}>
          <p>Virtual Worlds</p>
        </div>
        {/* //Part TWO */}
        <div className={Style.NFTDescription_box_profile}>
          <h1>
            {nft.name} #{nft.tokenId}
          </h1>
          <div className={Style.NFTDescription_box_profile_box}>
            <div className={Style.NFTDescription_box_profile_box_left}>
              <Image
                src={images.user1}
                alt="profile"
                width={40}
                height={40}
                className={Style.NFTDescription_box_profile_box_left_img}
              />
              <div className={Style.NFTDescription_box_profile_box_left_info}>
                <small>Creator</small> <br />
                <Link href={{ pathname: "/author", query: `${nft.seller}` }}>
                  <span>
                    {!nft.owner == nft.owner ? 
                    <span>  nft.owner.substring(0, 4)+ '..'+ nft.owner.substring(38, 42) <MdVerified /></span>
                 
                    : 
                   <a href={nft.owner}>
                    {nft.owner.substring(0, 4)+ '..'+ nft.owner.substring(38, 42)} <MdVerified />
                  
                   </a>
                  }
                  
                  </span>
                </Link>
              </div>
            </div>

            <div className={Style.NFTDescription_box_profile_box_right}>
              <Image
                src={images.creatorbackground1}
                alt="profile"
                width={40}
                height={40}
                className={Style.NFTDescription_box_profile_box_left_img}
              />

              <div className={Style.NFTDescription_box_profile_box_right_info}>
                <small>Collection</small> <br />
                <span>
                <span>  {nft.owner.substring(0, 4)+ '..'+ nft.owner.substring(38, 42)} <MdVerified /></span>
                 
                </span>
              </div>
            </div>
          </div>

          <div className={Style.NFTDescription_box_profile_biding}>
            


            <div className={Style.NFTDescription_box_profile_biding_box_price}>
              <div
                className={
                  Style.NFTDescription_box_profile_biding_box_price_bid
                }
              >
                <small>Current Bid</small>
                <p>
                  {nft.price} BNB <span> </span>
                </p>
              </div>

              
            </div>

            <div className={Style.NFTDescription_box_profile_biding_box_button}>
              {currentAccount == nft.seller.toLowerCase() ? (
                <p>You can't buy your own NFT</p>
              ) : currentAccount == nft.owner.toLowerCase() ? (
                <Button
                  icon={FaWallet }
                  btnName="List on Marketplace"
                  handleClick={() =>
                    router.push(
                      `/reSellToken?id=${nft.tokenId}&tokenURI=${nft.tokenURI}&price=${nft.price}`
                    )
                  }
                  classStyle={Style.button}
                />
              ) : (
                <Button
                  icon={FaWallet }
                  btnName="Buy NFT"
                  handleClick={() => buyNFT(nft)}
                  classStyle={Style.button}
                />
              )}

              <Button
                icon={FaPercentage }
                btnName="Make offer"
                handleClick={() => {}}
                classStyle={Style.button}
              />
            </div>

          

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTDescription;
