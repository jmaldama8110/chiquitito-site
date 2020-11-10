import React from "react";
import Slider from "react-slick";

export default class BannerCarousel extends React.Component {
    render() {
        const settings = {
            centerMode: false,
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 2500,
            cssEase: "linear"
        };
        return (
            <div>
                <Slider {...settings}>
                    <div>
                        <img src="/images/baner/1.png" ></img>
                    </div>
                    <div>
                        <img src="/images/baner/2.png"></img>
                    </div>
                    <div>
                        <img src="/images/baner/3.png"></img>
                    </div>
                </Slider>
            </div>
        );
    }
}

