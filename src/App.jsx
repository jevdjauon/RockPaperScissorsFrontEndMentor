import { useState } from "react";
import "./App.scss";
import data from "./assets/data.json";

const App = () => {
  const [theme, setTheme] = useState("dark");
  const [value, setValue] = useState(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [oldValue, setOldValue] = useState(null);

  const onChangeTheme = (e) => {
    console.log(e.target.value);
    setTheme(e.target.value);
  };

  const handleNumbers = (e) => {
    e.preventDefault();
    console.log(oldValue);
    const valueTest = e.target.innerText;
    console.log(valueTest);
    // setOldValue(valueTest);

    if (oldValue == null) {
      setOldValue(valueTest);
    } else {
      setOldValue(oldValue + valueTest);
    }
    console.log(oldValue, "end");
  };

  return (
    <div
      className={
        theme === "dark"
          ? "app dark"
          : theme === "light"
          ? "app light"
          : "app violet"
      }
    >
      <div className="calc">
        <nav>
          <h1>calc</h1>
          <div>
            <p>theme</p>
            <div onChange={onChangeTheme}>
              <input type="radio" value="dark" name="theme" defaultChecked />
              <input type="radio" value="light" name="theme" />
              <input type="radio" value="violet" name="theme" />
            </div>
          </div>
        </nav>
        <div className="screen">
          <p>{value}</p>
        </div>
        <form action="">
          <div className="controls">
            {data.map(({ value, id }) => (
              <button
                key={id}
                id={
                  id == "del"
                    ? "del"
                    : id == "rst"
                    ? "rst"
                    : id == "eqv"
                    ? "eqv"
                    : null
                }
                onClick={handleNumbers}
              >
                {value}
              </button>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
