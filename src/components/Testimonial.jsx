import React from "react";
// import { Carousel,CarouselCaption,CarouselItem,CarouselControl} from "bootstrap";
import "../assets/Testimonial.css";
import DOG_IMAGE from "../assets/dog-img.jpg";
import LADY_IMAGE from "../assets/lady-img.jpg";

const Testimonial = (props) => {
  return (
    <div className="testimonial">
      <h2>
        I no longer have to sniff other dogs for love. I've found the hottest
        Corgi on TinDog. Woof.
      </h2>
      <img src={DOG_IMAGE} alt="dog-profile" className="testimonial-img" />
      <em>Pebbles, New York</em>
      <h2 class="testimonial-text">
        My dog used to be so lonely, but with TinDog's help, they've found the
        love of their life. I think.
      </h2>
      <img
        class="testimonial-image"
        src={LADY_IMAGE}
        alt="lady-profile"
        className="testimonial-img"
      />
      <em>Beverly, Illinois</em>

      {/* <Carousel
        activeIndex={0}
        next={function noRefCheck() {}}
        previous={function noRefCheck() {}}
      >
        <CarouselItem
          onExited={function noRefCheck() {}}
          onExiting={function noRefCheck() {}}
        >
          <img alt="Slide 1" src="https://picsum.photos/id/123/1200/600" />
          <CarouselCaption captionHeader="Slide 1" captionText="Slide 1" />
        </CarouselItem>
        <CarouselItem
          onExited={function noRefCheck() {}}
          onExiting={function noRefCheck() {}}
        >
          <img alt="Slide 2" src="https://picsum.photos/id/456/1200/600" />
          <CarouselCaption captionHeader="Slide 2" captionText="Slide 2" />
        </CarouselItem>
        <CarouselItem
          onExited={function noRefCheck() {}}
          onExiting={function noRefCheck() {}}
        >
          <img alt="Slide 3" src="https://picsum.photos/id/678/1200/600" />
          <CarouselCaption captionHeader="Slide 3" captionText="Slide 3" />
        </CarouselItem>
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={function noRefCheck() {}}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={function noRefCheck() {}}
        />
      </Carousel> */}
    </div>
  );
}


export default Testimonial;