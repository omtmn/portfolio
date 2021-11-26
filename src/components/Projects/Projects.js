import React from 'react'
import { Carousel, Wrap, CarouselWrap, Heading } from './ProjectsEl'
import img1 from "../../assets/pic1.jpeg"
import img2 from "../../assets/pic2.jpeg"
import img3 from "../../assets/pic3.jpeg"
import img4 from "../../assets/pic4.jpeg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"


const Projects = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 600,
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
                    <a href="https://www.youtube.com"> <img src={img2} alt="project two"/> </a>
                </Wrap>
                <Wrap>
                    <a href="https://www.youtube.com"> <img src={img3} alt="project three"/> </a>
                </Wrap>
                <Wrap>
                    <a href="https://www.youtube.com"> <img src={img4} alt="project four"/> </a>
                </Wrap>
            </Carousel>
        </CarouselWrap>
    )
}

export default Projects
