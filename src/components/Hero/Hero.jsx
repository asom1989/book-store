import "./hero.css";
import { useState } from "react";
import FirstBook from "../../assets/images/book1.png";
import SecondBook from "../../assets/images/book2.png";
import ThirdBook from "../../assets/images/book3.png";
import Slide from "./Slide";
function Hero() {
  const [slideIndex, setSetslideIndex] = useState(0);
  const handelSlideClick = (direction) => {
    direction === "left"
      ? setSetslideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
      : setSetslideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
  };
  return (
    <div className="slider-container ">
      <i
        onClick={() => handelSlideClick("left")}
        className="bi bi-chevron-double-left arrow-left"
      />

      <div
        style={{ transform: `translateX(${slideIndex * -100}vw)` }}
        className="slider-wrapper"
      >
        <Slide
          className={"first-slide"}
          title={"Book store"}
          desc={"It's not just reading. it's living the adventure."}
          img={FirstBook}
        />
        <Slide
          className={"second-slide"}
          title={"The Book For Everyone"}
          desc={"You can read at home or at the book store"}
          img={SecondBook}
        />
        <Slide
          className={"third-slide"}
          title={"Check Out The New Title"}
          desc={"We send you the book you want at home."}
          img={ThirdBook}
        />
      </div>

      <i
        onClick={() => handelSlideClick("right")}
        className="bi bi-chevron-double-right arrow-right"
      />
    </div>
  );
}

export default Hero;
