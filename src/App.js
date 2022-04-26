import "./App.css";
import CountryUsingHook from "./Components/CountryUsingHook";
import CountryUsingHoc from "./Components/CountryUsingHoc";

function App() {
  return (
    <div className="App">
      <CountryUsingHook />
      <CountryUsingHoc />
    </div>
  );
}

export default App;
