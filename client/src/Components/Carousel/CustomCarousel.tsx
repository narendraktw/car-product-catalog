import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface Props {
    autoPlay: boolean,
    swipeable: boolean,
    infiniteLoop: boolean,
    carouselItems: Array<number | string>,
    alt: string,
}


const CustomCarousel: React.FC<Props> = ({
    autoPlay,
    swipeable,
    infiniteLoop,
    carouselItems,
    alt}) => {
    return (
        <Carousel 
        autoPlay={autoPlay}
        swipeable={swipeable}
        infiniteLoop={infiniteLoop}
        >
        {carouselItems.map((carouselItem) => (
          <img
            alt={alt}
            src={`${process.env.PUBLIC_URL}/assets/images/detail-images/${carouselItem}.jpg`}
          />
        ))}
      </Carousel>
    )
}

export default CustomCarousel
