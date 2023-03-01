import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

//INTERNAL IMPORT
import Style from "./HeroSection.module.css";
import { Button } from "../componentsindex";
import images from "../../img";

//SMART CONTRACT IMPORT
import { NFTMarketplaceContext } from "../../Context/NFTMarketplaceContext";

const HeroSection = () => {
  const { titleData } = useContext(NFTMarketplaceContext);
  const router = useRouter();
  return (
    <div className={Style.heroSection}>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
          <h1>{titleData} </h1>
          <p>
            Discover the most outstanding NTFs in all topics of life. Creative
            your NTFs and sell them, TinyTesla, best binance network marketplace
          </p>
          <Button
            btnName="Start your search"
            handleClick={() => router.push("/searchPage")}
          />
        </div>
        <div  className={Style.heroSection_box_right}>
         <div style={{borderRadius:'40px', display:'grid', placeItems:'center'}}>
         <Image 
              style={{borderRadius:'30px' , }}
            src={images.hero}
            alt="Hero section"
            width={600}
            height={600}
          />
         </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
