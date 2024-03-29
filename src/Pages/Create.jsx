import HomeBtn from "../Components/HomeBtn";
import Transition from "../Components/Transition";

function Create({ lightMode }) {
  return (
    <div className={lightMode}>
      <div className="create">
        <HomeBtn />
        <p>
          Ready to collaborate and bring your ideas to life online? Count me in.
          Whether you've got questions, bursts of creativity, or you're just
          eager to chat about the latest web trends, I'm all ears. Let's roll up
          our sleeves and create something awesome together!
          <br />
          <br />
          Chat soon, Ben Scott.
          <br />
          <br />
          phone: 0498 095 622
          <br />
          email:{" "}
          <a href="mailto:benscott.dev@gmail.com">benscott.dev@gmail.com</a>
        </p>
      </div>
    </div>
  );
}
export default Transition(Create);
