import HomeBtn from "../Components/HomeBtn";
import Transition from "../Components/Transition";
import reactIcon from "../Assets/React.png";
import htmlIcon from "../Assets/Html.png";
import cssIcon from "../Assets/Css.png";
import pythonIcon from "../Assets/Python.png";
import javascriptIcon from "../Assets/JavaScript.png";

function About({ lightMode }) {
  const iconArray = [reactIcon, htmlIcon, cssIcon, javascriptIcon, pythonIcon];

  return (
    <div className={lightMode}>
      <HomeBtn />
      <div className="about">
        <p>
          Yo! I'm a 23-year-old web enthusiast with a knack for crafting sleek
          online experiences.
          <br /> <br />
          Fluent in CSS, HTML, JavaScript, and React, I specialize in turning
          ideas into polished interfaces that not only look great but also
          function seamlessly. When I'm not buried in lines of code, you'll find
          me exploring the latest design trends or brainstorming over a cup of
          coffee. Let's team up and bring your web visions to life in a way
          that's both professional and effortlessly cool.
          <br />
          <br />
          Let's make some digital magic happen!
        </p>

        <div className="icons">
          {iconArray.map((icon) => (
            <img id="languageIcons" key={icon} src={icon} alt="skill icon" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Transition(About);
