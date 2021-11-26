import React from 'react'
import { Carousel, Wrap, CarouselWrap } from './ProjectsEl'
import img1 from "../../assets/pic1.jpeg"
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
                    <a href="https://www.youtube.com"> <img src={img1} alt="project one"/> </a>
                </Wrap>
                <Wrap>
                    <a href="https://www.youtube.com"> <img src={img1} alt="project two"/> </a>
                </Wrap>
                <Wrap>
                    <a href="https://www.youtube.com"> <img src={img1} alt="project three"/> </a>
                </Wrap>
                <Wrap>
                    <a href="https://www.youtube.com"> <img src={img1} alt="project four"/> </a>
                </Wrap>
            </Carousel>
        </CarouselWrap>
    )
}

export default Projects
