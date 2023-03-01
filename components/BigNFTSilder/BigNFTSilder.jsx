import React, { useState, useEffect, useCallback, useContext } from "react";
import Image from "next/image";
import { AiFillFire, AiFillHeart, } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import { TbArrowBigLeftLines, TbArrowBigRightLine } from "react-icons/tb";

//INTERNAL IMPORT
import Style from "./BigNFTSilder.module.css";
import images from "../../img";
import Button from "../Button/Button";
const BigNFTSilder = ({fetchNFTs}) => {

  const [idNumber, setIdNumber] = useState(0);
    const [nftsl, setNftsl] = useState([
      {
        name:'example',
        price:'$10',
        image:images.nft_image_1,
        description:'tesign',
        tokenId:1,
        

      }
    ]);

     useEffect(()=>{
          try{
            fetchNFTs().then((nftData)=>{
              setNftsl(nftData);
           })
          }catch(error){
            console.log(error);
          }
     },[])



  const sliderData = [
    {
      title: "Hello NFT",
      id: 1,
      name: "Shakil Hossain",
      collection: "1",
      price: "00664 BNB",
      like: 243,
      image: images.user1,
      nftImage: images.nft_image_1,
      time: {
        days: 21,
        hours: 40,
        minutes: 81,
        seconds: 15,
      },
    },
    
    
    
  ];

  //-------INC
  const inc = useCallback(() => {
    if (idNumber + 1 < nftsl.length) {
      setIdNumber(idNumber + 1);
    }
  }, [idNumber, nftsl.length]);

  //-------DEC
  const dec = useCallback(() => {
    if (idNumber > 0) {
      setIdNumber(idNumber - 1);
    }
  }, [idNumber]);

  return (
    <div className={Style.bigNFTSlider}>
      <div className={Style.bigNFTSlider_box}>
        <div className={Style.bigNFTSlider_box_left}>
          <h2>{nftsl[idNumber].title}</h2>
          <div className={Style.bigNFTSlider_box_left_creator}>
            <div className={Style.bigNFTSlider_box_left_creator_profile}>
               <Image
                className={Style.bigNFTSlider_box_left_creator_profile_img}
                src={nftsl[idNumber].image}
                alt="profile image"
                width={50}
                height={50}
              />
              <div className={Style.bigNFTSlider_box_left_creator_profile_info}>
                <p style={{fontSize:'16px'}}>Creator</p>
                <h4 style={{fontSize:'20px'}}>
                 <a href={`/NFT-details/${nftsl[idNumber].tokenId}`}>
                 {'0x....' }{" "}
                  <span>
                    <MdVerified />
                  </span>
                 </a>
                </h4>
              </div>
            </div>

            <div className={Style.bigNFTSlider_box_left_creator_collection}>
              <AiFillFire
                className={Style.bigNFTSlider_box_left_creator_collection_icon}
              />

              <div
                className={Style.bigNFTSlider_box_left_creator_collection_info}
              >
                <p>Collection</p>
                <h4>{nftsl[idNumber].collection}</h4>
              </div>
            </div>
          </div>

          <div className={Style.bigNFTSlider_box_left_bidding}>
            <div className={Style.bigNFTSlider_box_left_bidding_box}>
              <small>Current Bid</small>
              <p style={{fontSize:'25px'}}>
                {nftsl[idNumber].price} BNB 
              </p>
            </div>
                   <div style={{margin:'16px 0px'}}>
                    <h1>{nftsl[idNumber].name}</h1>
                   </div>

                   <div style={{margin:'16px 0px'}}>
                    <h1># {nftsl[idNumber].tokenId}</h1>
                   </div>
            <div className={Style.bigNFTSlider_box_left_button}>
              <Button btnName="Place" handleClick={() => {}} />
              <Button btnName="View" handleClick={() => {}} />
            </div>
          </div>

          <div className={Style.bigNFTSlider_box_left_sliderBtn}>
            <TbArrowBigLeftLines
              className={Style.bigNFTSlider_box_left_sliderBtn_icon}
              onClick={() => dec()}
            />
            <TbArrowBigRightLine
              className={Style.bigNFTSlider_box_left_sliderBtn_icon}
              onClick={() => inc()}
            />
          </div>
        </div>

        <div className={Style.bigNFTSlider_box_right}>
          <div className={Style.bigNFTSlider_box_right_box}>
          
            <Image
              src={nftsl[idNumber].image}
              alt="NFT IMAGE"
              className={Style.bigNFTSlider_box_right_box_img}
              width={800}
              height={800}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigNFTSilder;
