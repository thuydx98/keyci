import Navbar from "./components/navbar";
import navLinks from "./assets/site-map.json";
import Slider from "./components/slider";

function App() {
  return (
    <div
      className="h-screen"
      style={{ backgroundImage: `url(${navLinks[0].videos[0].background}` }}
    >
      <Navbar />
      <div className="w-full h-[54vh] md:w-6/12 lg:w-5/12 text-white sm:px-16 px-4">
        <p className="text-5xl py-10">{navLinks[0].videos[0].title}</p>
        <p>{navLinks[0].videos[0].description}</p>
      </div>
      <Slider />
    </div>
  );
}

export default App;
