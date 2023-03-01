import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

//INTERNAL IMPORT
import Style from "./Brand.module.css";
import images from "../../img";
import { Button } from "../../components/componentsindex.js";

const Brand = () => {
  const router = useRouter();
  return (
    <div className={Style.Brand}>
      <div className={Style.Brand_box}>
        <div className={Style.Brand_box_left}>
     
          <a href="/">
          <Image src={images.logo} style={{borderRadius:'30px'}} alt="brand logo" width={100} height={100} /> 
          </a>
          <h1>Explor TinyTesla NFT Market & List NFTs</h1>
          <p>TinyTesla Provide Earning Ways.</p>

          <div className={Style.Brand_box_left_btn}>
            <Button
              btnName="Create NFT"
              handleClick={() => router.push("/uploadNFT")}
            />
            <Button
              btnName="Discover"
              handleClick={() => router.push("/searchPage")}
            />
          </div>
        </div>
        <div className={Style.Brand_box_right} style={{borderRadius:'30px'}}>
          <Image src={images.earn} alt="brand logo" style={{borderRadius:'30px'}} width={800} height={600} />
        </div>
      </div>
    </div>
  );
};

export default Brand;
