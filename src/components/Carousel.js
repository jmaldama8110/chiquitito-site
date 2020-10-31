import React from "react";
import Slider from "react-slick";

export default class SimpleSlider extends React.Component {
    render() {
        const settings = {
            centerMode: false,
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 5000,
            cssEase: "linear"
        };
        return (
            <div>
                <Slider {...settings}>
                    <div>
                        <img src="/images/1.png"></img>
                    </div>
                    <div>
                        <img src="/images/2.png"></img>
                    </div>
                    <div>
                        <img src="/images/3.png"></img>
                    </div>
                </Slider>
            </div>
        );
    }
}

