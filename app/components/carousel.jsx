'use client'
import Image from "next/image";
import Slider from "react-slick";
import imageOne from '../../public/nethini/imageOne.jpg';
import imageThree from '../../public/nethini/imageThree.jpg';
import imageTwo from '../../public/nethini/imageTwo.jpg';

function Carousel()
{
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false
    };
    return (
        <div className="slider-container w-[100%]">
            <Slider {...settings}>
                <div>
                    <Image src={imageOne} className="w-[200px] h-[400px]" />
                </div>
                <div>
                    <Image src={imageTwo} className="w-[200px] h-[400px]" />
                </div>
                <div>
                    <Image src={imageThree} className="w-[200px] h-[400px]" />
                </div>
            </Slider>
        </div>
    );
}

export default Carousel;
