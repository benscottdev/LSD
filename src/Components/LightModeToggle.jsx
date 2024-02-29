import nightModeIcon from "../Assets/NightMode.png";
import dayModeIcon from "../Assets/DayMode.png";

function LightModeToggle({ lightMode, setLightMode }) {
  function toggle() {
    if (lightMode === "dark") {
      setLightMode("light");
      console.log(lightMode);
    } else {
      setLightMode("dark");
      console.log(lightMode);
    }
  }

  return (
    <div className="toggleMode">
      <button onClick={toggle}>
        <img src={lightMode === "light" ? dayModeIcon : nightModeIcon} alt="" />
      </button>
    </div>
  );
}

export default LightModeToggle;
