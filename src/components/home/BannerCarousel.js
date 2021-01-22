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
            speed: 1500,
            autoplaySpeed: 6000,
            cssEase: "linear"
        };
        return (
            <div >
                <Slider {...settings} >
                    <div>
                        <img src="/images/baner/3.png" alt='' width='100%'></img>
                    </div>
                    <div>
                        <img src="/images/baner/2.png" alt='' width='100%'></img>
                    </div>
                    <div>
                        <img src="/images/baner/1.png" alt='' width='100%'></img>
                    </div>
                </Slider>
            </div>
        );
    }
}

