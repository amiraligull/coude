/** @format */
import "./App.css";
import Navbar from "./Compnents/Navbar/Navbar";
import Hero from "./Compnents/Hero/Hero";
import Trending from "./Compnents/TopTrending/Trending";
import Why from "./Compnents/why/Why";
import Features from "./Compnents/Features/Features";
import Partner from "./Compnents/Partners/Partner";
import Start from "./Compnents/GetStarted/Start";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Trending />
      <Why />
      <Features />
      <Partner />
      <Start />
    </div>
  );
}

export default App;
