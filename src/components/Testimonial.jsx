import React, { useState } from 'react';

import {
  Carousel,
  CarouselItem,
  CarouselControl,
} from 'reactstrap';
import DOG_IMAGE from "../assets/dog-img.jpg";
import LADY_IMAGE from "../assets/lady-img.jpg";
import "../assets/Testimonial.css";


const items = [
  {
    src: {DOG_IMAGE},
    altText:"dog_image",
    text: "I no longer have to sniff other dogs for love. I've found the hottest Corgi on TinDog. Woof.",
    caption: "Pebbles, New York"
  },
  {
    src: {LADY_IMAGE},
    altText:"lady_image",
    text:" My dog used to be so lonely, but with TinDog's help, they've found the love of their life. I think.",
    caption: "Beverly, Illinois"
  },
];

const Testimonial = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  // const goToIndex = (newIndex) => {
  //   if (animating) return;
  //   setActiveIndex(newIndex);
  // }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.altText}
      >
        <div className='testimonial-item'>
          <h2>{item.text}</h2>
          <img src={item.src} alt={item.altText} className="testimonial-img" />
          <em>{item.caption}</em>
        </div>
        {/* <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        /> */}
      </CarouselItem>
    );
  });

  return (
    <div className='testimonial'>
      <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      {/* <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} /> */}
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>

    </div>
  );
}

export default Testimonial;
