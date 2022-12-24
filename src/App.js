import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import Plans from "./components/Plans";
import Rooms from "./components/Rooms";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Offers />
      <Plans />
      <Rooms />
    </div>
  );
}

export default App;
