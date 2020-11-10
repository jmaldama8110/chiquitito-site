import React, { Component } from "react";
import Slider from "react-slick";

export default class CatalogoTelasCarousel extends Component {
  render() {
    const settings = {
      customPaging: function (i) {
        return (
          <a>
            <img src={`images/telas/0${i + 1}.jpg`} />
          </a>
        );
      },
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div>
        <h2>Telas pul</h2>
        <Slider {...settings}>
          <div>
            <img src={"images/telas/01.jpg"} />
          </div>
          <div>
            <img src={"images/telas/02.jpg"} />
          </div>
          <div>
            <img src={"images/telas/03.jpg"} />
          </div>
          <div>
            <img src={"images/telas/04.jpg"} />
          </div>
          <div>
            <img src={"images/telas/05.jpg"} />
          </div>
          <div>
            <img src={"images/telas/06.jpg"} />
          </div>
          <div>
            <img src={"images/telas/07.jpg"} />
          </div>
          <div>
            <img src={"images/telas/08.jpg"} />
          </div>
          <div>
            <img src={"images/telas/09.jpg"} />
          </div>

        </Slider>
      </div>
    );
  }
}