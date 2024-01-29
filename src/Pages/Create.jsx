import HomeBtn from "../Components/HomeBtn";
import Transition from "../Components/Transition";

function Create() {
  return (
    <div className="create">
      <HomeBtn />
      <p>
        Thanks for checking out our digital hub! Ready to turn your ideas into
        sleek online experiences? Cool, we're here for it. Got questions,
        creative sparks, or just want to geek out about the latest web trends?
        We're all ears.
        <br />
        <br />
        phone: 0498 095 622
        <br />
        email:
        <a href="mailto:benscott.dev@gmail.com">benscott.dev@gmail.com</a>
      </p>
    </div>
  );
}
export default Transition(Create);
