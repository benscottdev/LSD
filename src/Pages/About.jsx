import HomeBtn from "../Components/HomeBtn";
import Transition from "../Components/Transition";
import reactIcon from "../Assets/LanguageIcons/React.png";
import htmlIcon from "../Assets/LanguageIcons/Html.png";
import cssIcon from "../Assets/LanguageIcons/Css.png";
import pythonIcon from "../Assets/LanguageIcons/Python.png";
import javascriptIcon from "../Assets/LanguageIcons/JavaScript.png";
import gitIcon from "../Assets/LanguageIcons/Git.png";
import { useState } from "react";

function About({ lightMode }) {
  const iconArray = [
    { language: "React", source: reactIcon },
    { language: "JS", source: javascriptIcon },
    { language: "HTML", source: htmlIcon },
    { language: "CSS", source: cssIcon },
    { language: "Python", source: pythonIcon },
    { language: "Git", source: gitIcon },
  ];

  const [hoveredLanguage, setHoveredLangauge] = useState(null);

  const handleHover = (language) => {
    setHoveredLangauge(language);
    console.log(language);
    return;
  };

  const handleLeave = () => {
    setHoveredLangauge(null);
  };

  return (
    <div className={lightMode}>
      <HomeBtn />
      <div className="about">
        <p>
          Yo! I'm Ben Scott, a 23-year-old self-taught web developer hailing
          from Australia. Over the past couple of years, I've been diving
          headfirst into the world of web development, mastering languages like
          React, JavaScript, HTML, CSS, and Python.
          <br />
          <br />
          My journey into this field started with a healthy dose of curiosity
          and a knack for tinkering with just about anything. Through plenty of
          trial and error (and maybe a few late-night debugging sessions), I've
          gained a solid grip on the technologies that power the web. From
          crafting sleek layouts to adding that extra touch of interactivity, I
          love the challenge of bringing ideas to life with clean, efficient
          code. Whether it's optimizing performance or troubleshooting tricky
          issues, I'm always up for a coding adventure.
          <br />
          <br />
          Thanks for dropping by, and I can't wait to chat about how we can
          bring your next web project to life!
        </p>

        <div className="languageIcons">
          {iconArray.map((icon, index) => (
            <div className="iconMap">
              <img
                id="languageIcons"
                key={icon.index}
                src={icon.source}
                alt="skill icon"
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => handleLeave()}
              />
              <h1
                className="langaugeDisplay"
                style={{ opacity: hoveredLanguage === index ? 1 : 0 }}
              >
                {icon.language}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Transition(About);
