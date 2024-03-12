import HomeBtn from "../Components/HomeBtn";
import Transition from "../Components/Transition";

function Work({ lightMode }) {
  const workArray = [
    {
      client: "1. Songworks",
      link: "https://songworks.com.au/",
    },
    {
      client: "2. Weather API",
      link: "https://lsdstudiosweatherapp.netlify.app/",
    },
    {
      client: "3. The Workshop",
      link: "https://theadlworkshop.netlify.app/",
    },
  ];

  return (
    <div className={lightMode}>
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
          <h2 id="moreProjects">More projects on the way...</h2>
        </div>
      </div>
    </div>
  );
}
export default Transition(Work);
