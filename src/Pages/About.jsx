import HomeBtn from "../Components/HomeBtn";
import Transition from "../Components/Transition";

function About() {
  return (
    <div className="about">
      <HomeBtn />
      <p>
        Hey there! I'm a 23-year-old web enthusiast with a passion for crafting
        awesome online experiences.
        <br />
        <br />
        Fluent in the languages of: CSS, HTML, JavaScript, and React, I bring
        your digital dreams to life. I thrive on turning ideas into clean,
        user-friendly interfaces that not only look good but work seamlessly.
        When I'm not immersed in lines of code, you'll likely find me exploring
        new design trends or sipping coffee while brainstorming my next creative
        breakthrough.
        <br />
        <br />
        Let's collaborate and bring your web visions to reality in a way that's
        both professional and effortlessly cool. Cheers to coding and creating!
      </p>
    </div>
  );
}
export default Transition(About);
