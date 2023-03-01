import React, { useState } from "react";
import Image from "next/image";
import { MdVerified } from "react-icons/md";


//INTERNAL IMPORT
import Style from "./FollowerTabCard.module.css";
import images from "../../../img";
const FollowerTabCard = ({ i, el }) => {

  return (
    <div className={Style.FollowerTabCard} style={{border:'1px solid #00ff00', borderRadius:'30px'}}>
      <div className={Style.FollowerTabCard_rank}>
        <p>
         <span style={{fontWeight:'bold', fontSize:'20px'}}> #{i + 1}</span> <span>🥇</span>
        </p>
      </div>

      <div className={Style.FollowerTabCard_box}>
        <div className={Style.FollowerTabCard_box_img}>
          <Image
            className={Style.FollowerTabCard_box_img_img}
            src={el.background || images[`creatorbackground${i + 1}`]}
            alt="profile braground"
            width={500}
            height={300}
            objectFit="cover"
          />
        </div>

        <div className={Style.FollowerTabCard_box_profile}>
          <Image
            className={Style.FollowerTabCard_box_profile_img}
            alt="profile picture"
            width={50}
            height={50}
            src={el.user || images[`user${i + 1}`]}
          /> 
        </div>

        <div className={Style.FollowerTabCard_box_info}>
          <div className={Style.FollowerTabCard_box_info_name}>
            <h4>
              {el.seller.slice(0, 9)}
              {""}{" "}
              <span>
                <MdVerified />
              </span>
            </h4>
            <p>{el.total || 0} BNB</p>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default FollowerTabCard;
