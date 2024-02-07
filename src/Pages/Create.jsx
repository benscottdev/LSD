import HomeBtn from "../Components/HomeBtn";
import Transition from "../Components/Transition";

function Create() {
  return (
    <div className="create">
      <HomeBtn />
      <p>
        Hey there, welcome to my corner of the web! Ready to collaborate and
        bring your ideas to life online? Count me in. Whether you've got
        questions, bursts of creativity, or you're just eager to chat about the
        latest web trends, I'm all ears. Let's roll up our sleeves and create
        something awesome together!
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
