function LightModeToggle({ lightMode, setLightMode }) {
  function toggle() {
    if (lightMode === "dark") {
      setLightMode("light");
      console.log(lightMode);
    } else if (lightMode === "light") {
      setLightMode("dark");
      console.log(lightMode);
    }
  }
  return (
    <div className="toggleMode">
      <button onClick={toggle}>
        LIGHT <br />
        MODE
      </button>
    </div>
  );
}

export default LightModeToggle;
