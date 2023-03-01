import React from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "../styles/aboutus.module.css";
import { Brand } from "../components/componentsindex";
import images from "../img";

const aboutus = () => {
  const founderArray = [
    {
      name: "Earl",
      position: "Co-Owner ",
      images: images.founder1,
    },
    {
      name: "Shakil Hossain",
      position: "dev-Co-founder",
      images: images.founder2,
    },
    {
      name: "Delton ",
      position: "Co-founder",
      images: images.founder3,
    },
    {
      name: "Krish",
      position: "Co-Founder",
      images: images.founder4,
    },
  ];


  return (
    <div className={Style.aboutus}>
      <div className={Style.aboutus_box}>
        <div className={Style.aboutus_box_hero}>
          <div className={Style.aboutus_box_hero_left}>
            <h1><span style={{fontWeight:'bold', color:'#ecd97e'}}>About</span> Us.</h1>
            <p>
              We’re impartial and independent, We create world-class Earning Projects So Peoples can Earn Passive, Income Stay with Us Stay TinyTesla 
            </p>
          </div>
          <div style={{border:'3px solid #00ff00', borderRadius:'30px'}} className={Style.aboutus_box_hero_right}>
            <Image style={{borderRadius:'30px',}} src={images.hero2} />
          </div>
        </div>

        <div className={Style.aboutus_box_title}>
          <h2>⛱ Founder</h2>
          <p>
              Our Core Team and Founder
          </p>
        </div>

        <div className={Style.aboutus_box_founder}>
          <div className={Style.aboutus_box_founder_box}>
            {founderArray.map((el, i) => (
              <div className={Style.aboutus_box_founder_box_img}>
                <Image
                  src={el.images}
                  alt={el.name}
                  width={500}
                  height={500}
                  className={Style.aboutus_box_founder_box_img_img}
                />
                <h3>{el.name}</h3>
                <p>{el.position}</p>
              </div>
            ))}
          </div>
        </div>


      </div>
      <Brand />
    </div>
  );
};

export default aboutus;
