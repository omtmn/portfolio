import styled from 'styled-components'
import Slider from 'react-slick'

export const Carousel = styled(Slider) `
    display: flex;
    justify-content: center;
    width: 85%;
    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(150, 150, 171);
        }
    }
    li.slick-active button::before {
        color: rgb(150, 150, 171);
    }
    li.slick-active button::after {
        color: yellow;
    }
    .slick-list {
        overflow: hidden;
    }
    button { 
        z-index: 1;
    }
`

export const Wrap = styled.div `
    img {
        border: 4px solid transparent;
        height: 100%;
        width: 100%;
        border-radius: 10px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 38px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    }
`

export const CarouselWrap = styled.div `
    display: flex;
    justify-content: center;
`

export const Heading = styled.h1 `
    color: #6C63FF;
    display: flex;
    justify-content: center;
    margin-top: 5rem;
`