import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "providers/ThemeProvider";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faPeopleGroup,
  faMagnifyingGlassChart,
} from "@fortawesome/free-solid-svg-icons";

export default function Testimonials() {
  const { theme } = useContext(ThemeContext);

  const [slideNumber, setSlideNumber] = useState(1);
  const lastSlide = 4;

  const [slide, setSlide] = useState({
    text: "I have learned a ton about UI design and using tools like Adobe XD. I use React both at my internship and at Bevara, so getting some extra experience with React here has helped me at work and vice versa.",
    credit: "Jace Simmons",
    icon: faReact,
  });

  function slideHandler() {
    switch (slideNumber) {
      case 1:
        setSlide({
          text: "I have learned a ton about UI design and using tools like Adobe XD. I use React both at my internship and at Bevara, so getting some extra experience with React here has helped me at work and vice versa.",
          credit: "Jace Simmons",
          icon: faReact,
        });
        break;

      case 2:
        setSlide({
          text: "The blueprint experience has been truly special. It’s hard to find a better way to apply the skills you are learning in your classes to a real, impactful project and learn so many things...",
          credit: "Jasey Chanders",
          icon: faCode,
        });
        break;

      case 3:
        setSlide({
          text: "I've enjoyed working on Blueprint projects because I can practice using my technical and team skills to work on projects that have a direct impact on the local community...",
          credit: "Anonymous",
          icon: faPeopleGroup,
        });
        break;

      case 4:
        setSlide({
          text: "I’ve enjoyed getting to collaborate ideas with peers and get a real insight to what it takes to lead a team. I’ve developed skill for communication, organization, and execution of ideas...",
          credit: "Ishan Gohil",
          icon: faMagnifyingGlassChart,
        });
        break;

      default:
        break;
    }
  }

  function prevSlide() {
    if (slideNumber > 1) {
      setSlideNumber((slideNumber) => slideNumber - 1);
    } else {
      setSlideNumber(4);
    }
  }

  function nextSlide() {
    if (slideNumber === lastSlide) {
      setSlideNumber(1);
    } else {
      setSlideNumber((slideNumber) => slideNumber + 1);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (slideNumber < lastSlide) {
        setSlideNumber((slideNumber) => slideNumber + 1);
      } else {
        setSlideNumber(1);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [slideNumber]);

  useEffect(slideHandler, [slideNumber]);

  return (
    <>
      <div
        className="carousel"
        style={{ background: theme === "light" ? "#fff" : "#181717" }}
        theme={theme}
      >
        <p
          className="testimonialText"
          style={{ color: theme === "dark" ? "#73b7ff" : "#0078f8" }}
        >
          "{slide.text}"
        </p>
        <button onClick={prevSlide} className="button leftButton">
          <i className="arrow leftArrow" />
        </button>
        <button onClick={nextSlide} className="button rightButton">
          <i className="arrow rightArrow" />
        </button>
        <p
          className="credit"
          style={{ color: theme === "dark" ? "#73b7ff" : "#0078f8" }}
        >
          - {slide.credit}
        </p>
        <FontAwesomeIcon icon={slide.icon} size="4x" className="icon" />
      </div>
      <div className="slideIndicator">
        <span
          className="dot"
          style={{ background: slideNumber === 1 ? "#aaa" : "#ddd" }}
        ></span>
        <span
          className="dot"
          style={{ background: slideNumber === 2 ? "#aaa" : "#ddd" }}
        ></span>
        <span
          className="dot"
          style={{ background: slideNumber === 3 ? "#aaa" : "#ddd" }}
        ></span>
        <span
          className="dot"
          style={{ background: slideNumber === 4 ? "#aaa" : "#ddd" }}
        ></span>
      </div>
    </>
  );
}
