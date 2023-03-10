/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prefer-stateless-function */

import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./carousel.module.css";
import demo1 from "../../images/demo1.jpg";
import demo2 from "../../images/demo2.jpg";
import demo3 from "../../images/demo3.jpg";
import demo4 from "../../images/demo4.jpg";
import demo5 from "../../images/demo5.jpg";

class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      dotsClass: `slick-dots ${style.custom}`,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 7000,
      arrows: false,
      pauseOnHover: false,
      speed: 600,
      swipeToSlide: true,
    };
    return (
      <div className={style.container}>
        <Slider {...settings}>
          <div>
            <img className={style.image} alt="Изображение блюда" src={demo1} />
          </div>
          <div>
            <img className={style.image} alt="Изображение блюда" src={demo2} />
          </div>
          <div>
            <img className={style.image} alt="Изображение блюда" src={demo3} />
          </div>
          <div>
            <img className={style.image} alt="Изображение блюда" src={demo4} />
          </div>
          <div>
            <img className={style.image} alt="Изображение блюда" src={demo5} />
          </div>
        </Slider>
      </div>
    );
  }
}
export default Carousel;
