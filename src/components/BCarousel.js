import React from "react";
import { Carousel } from "react-bootstrap";

export default function BCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 h-40"
          src="https://www.todocanada.ca/wp-content/uploads/Harveys.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>You'll be back for seconds</h3>
          <p>Try our new deals out.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-40"
          src="https://www.eatatjacks.com/wp-content/uploads/2022/08/big-jacks.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Order Now!</h3>
          <p>For you and the whole family</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-40"
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hamburger-horizontal-jpg-1523395905.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Signature burgers coming soon!</h3>
          <p>Be ready for the smoky signatures</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
