import React from "react";
import Marquee from "react-fast-marquee";

import Image1 from "../../assets/galleryImages/1.jpg";
import Image2 from "../../assets/galleryImages/2.jpg";
import Image3 from "../../assets/galleryImages/3.jpg";
import Image4 from "../../assets/galleryImages/4.jpg";
import Image5 from "../../assets/galleryImages/5.jpg";
import Image6 from "../../assets/galleryImages/6.jpg";
import Image7 from "../../assets/galleryImages/7.jpg";
import Image8 from "../../assets/galleryImages/8.jpg";
import Image9 from "../../assets/galleryImages/9.jpg";
import Image10 from "../../assets/galleryImages/10.jpg";

import Image11 from "../../assets/galleryImages/11.jpg";
import Image12 from "../../assets/galleryImages/12.jpg";
import Image13 from "../../assets/galleryImages/13.jpg";
import Image14 from "../../assets/galleryImages/14.jpg";
import Image15 from "../../assets/galleryImages/15.jpg";
import Image16 from "../../assets/galleryImages/16.jpg";
import Image17 from "../../assets/galleryImages/17.jpg";
import Image18 from "../../assets/galleryImages/18.jpg";
import Image19 from "../../assets/galleryImages/19.jpg";
import Image20 from "../../assets/galleryImages/20.jpg";

import Image21 from "../../assets/galleryImages/21.jpg";
import Image22 from "../../assets/galleryImages/22.jpg";
import Image23 from "../../assets/galleryImages/23.jpg";
import Image24 from "../../assets/galleryImages/24.jpg";
import Image25 from "../../assets/galleryImages/25.jpg";
import Image26 from "../../assets/galleryImages/26.jpeg";
import Image27 from "../../assets/galleryImages/27.jpeg";
import Image28 from "../../assets/galleryImages/28.jpeg";
import Image29 from "../../assets/galleryImages/29.jpg";
import Image30 from "../../assets/galleryImages/30.jpeg";

import "./style.css";

const Gallery = () => {
  return (
    <div className="gallery-section">
      <div className="gallery-wrapper">
        <Marquee
          className="gallery-marq"
          // pauseOnHover="true"
          speed={20}
          // delay="5"
          // gradientColor="[0, 0, 0]"
          gradient={false}
          direction="right"
        >
          <div>
            <img src={Image1} alt="construction21" />
          </div>
          <div>
            <img src={Image2} alt="construction22" />
          </div>
          <div>
            <img src={Image3} alt="construction23" />
          </div>
          <div>
            <img src={Image4} alt="construction24" />
          </div>
          <div>
            <img src={Image5} alt="construction25" />
          </div>
          <div>
            <img src={Image6} alt="construction26" />
          </div>
          <div>
            <img src={Image7} alt="construction27" />
          </div>
          <div>
            <img src={Image8} alt="construction28" />
          </div>
          <div>
            <img src={Image9} alt="construction29" />
          </div>
          <div>
            <img src={Image10} alt="construction30" />
          </div>
        </Marquee>
      </div>
      <div>
        <Marquee
          className="gallery-marq"
          // pauseOnHover="true"
          speed={20}
          // delay="5"
          // gradientColor={[0, 0, 0]}
          gradient={false}
          direction="left"
        >
          <div>
            <img src={Image11} alt="construction1" />
          </div>
          <div>
            <img src={Image12} alt="construction2" />
          </div>
          <div>
            <img src={Image13} alt="construction3" />
          </div>
          <div>
            <img src={Image14} alt="construction4" />
          </div>
          <div>
            <img src={Image15} alt="construction5" />
          </div>
          <div>
            <img src={Image16} alt="construction6" />
          </div>
          <div>
            <img src={Image17} alt="construction7" />
          </div>
          <div>
            <img src={Image18} alt="construction8" />
          </div>
          <div>
            <img src={Image19} alt="construction9" />
          </div>
          <div>
            <img src={Image20} alt="construction10" />
          </div>
        </Marquee>
      </div>
      <div>
        <Marquee
          className="gallery-marq"
          // pauseOnHover="true"
          speed={20}
          // delay="5"
          // gradientColor="[0, 0, 0]"
          gradient={false}
          direction="right"
        >
          <div>
            <img src={Image21} alt="construction11" />
          </div>
          <div>
            <img src={Image22} alt="construction12" />
          </div>
          <div>
            <img src={Image23} alt="construction13" />
          </div>
          <div>
            <img src={Image24} alt="construction14" />
          </div>
          <div>
            <img src={Image25} alt="construction15" />
          </div>
          <div>
            <img src={Image26} alt="construction16" />
          </div>
          <div>
            <img src={Image27} alt="construction17" />
          </div>
          <div>
            <img src={Image28} alt="construction18" />
          </div>
          <div>
            <img src={Image29} alt="construction19" />
          </div>
          <div>
            <img src={Image30} alt="construction20" />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Gallery;
