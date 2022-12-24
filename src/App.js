import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import Plans from "./components/Plans";
import Rooms from "./components/Rooms";
import ImageSlider from "./components/ImageSlider";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Offers />
      <Plans />
      <Rooms />
      <ImageSlider />
      <Footer />
    </div>
  );
}

export default App;
