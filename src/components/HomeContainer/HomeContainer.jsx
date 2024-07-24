import React, { useRef } from "react";
import Imagen from "../Imagen/Imagen";
import style from "./HomeContainer.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomeContainer = () => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  var settings = {
    dots: true,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    waitForAnimate: false,
  };
  return (
    <div>
      <div className={style.carruselContainer}>
        <div className="slider-container">
          <Slider
            ref={(slider) => {
              sliderRef = slider;
            }}
            {...settings}
          >
            <div>
              <Imagen fuente="https://i.imgur.com/GNYJZrm.png" />
            </div>
            <div>
              <Imagen fuente="https://i.imgur.com/770RKIM.png" />
            </div>
            <div>
              <Imagen fuente="https://i.imgur.com/rEQzsbG.jpeg" />
            </div>
            <div>
              <Imagen fuente="https://i.imgur.com/czXjPK5.jpeg" />
            </div>
            <div>
              <Imagen fuente="https://i.imgur.com/gEFyTeD.png" />
            </div>
            <div>
              <Imagen fuente="https://i.imgur.com/9MmHbGw.png" />
            </div>
          </Slider>
        </div>
        <button className="button" onClick={previous}>
          <FaArrowLeft />
        </button>
        <button className="button" onClick={next}>
          <FaArrowRight />
        </button>
      </div>
      <div className={style.aboutUsSection}>
        <h4>No le digas a nadie</h4>
      </div>
      <div className={style.showRoomLink}>
        <Link to={"/showroom"}>
          <button >Showroom</button>
        </Link>
      </div>
    </div>
  );
};

export default HomeContainer;
