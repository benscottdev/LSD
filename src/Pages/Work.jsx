import HomeBtn from "../Components/HomeBtn";
import Transition from "../Components/Transition";

function Work() {
  const workArray = [
    {
      client: "1. Songworks",
      link: "https://songworks.com.au/",
    },
    {
      client: "2. TAGT",
      link: "https://tagt.netlify.app/",
    },
  ];

  return (
    <div className="work">
      <HomeBtn />
      <div className="workItems">
        {workArray.map((item, key) => (
          <div className="clientItem" key={item.index}>
            <a href={item.link} target="_blank" rel="noreferrer">
              <h1>{item.client}</h1>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Transition(Work);
