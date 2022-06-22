import React from 'react'
import { Carousel, Wrap, CarouselWrap } from './ProjectsEl'
import img1 from "../../assets/screen1.png"
import img2 from "../../assets/screen2.png"
import img3 from "../../assets/screen3.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"


const Projects = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false
    }
    return (
        <CarouselWrap>
            <Carousel {...settings}>
                <Wrap>
                    <a href="https://github.com/beyoutoday/Physics-Simulator"> <img src={img1} alt="Physics Application"/> </a>
                </Wrap>
                <Wrap>
                    <a href="https://github.com/beyoutoday/BankApp"> <img src={img2} alt="Bank Application"/> </a>
                </Wrap>
                <Wrap>
                    <a href="https://github.com/beyoutoday/WeatherApp"> <img src={img3} alt="Weather Application"/> </a>
                </Wrap>
            </Carousel>
        </CarouselWrap>
    )
}

export default Projects
