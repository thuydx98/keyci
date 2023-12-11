import Navbar from "./components/navbar";
import navLinks from "./assets/site-map.json";
import Slider from "./components/slider";
import VideoModal from "./components/video-modal";

function App() {
  return (
    <div
      className="h-screen w-full bg-contain bg-repeat-x bg-right"
      style={{ backgroundImage: `url(${navLinks[0].videos[0].background}` }}
    >
      <div
        className="absolute h-screen w-full text-white"
        style={{
          backgroundImage:
            "linear-gradient(to left, rgba(5,0,0,0), rgba(5,0,0,1))",
        }}
      >
        <div
          className="h-screen"
          // style={{ backgroundImage: `url(${navLinks[0].videos[0].background}` }}
        >
          <Navbar />
          <div className="w-full h-[57vh] md:w-6/12 lg:w-5/12 sm:px-16 px-4 pt-14">
            <p className="text-5xl">{navLinks[0].videos[0].title}</p>
            <p className="text-sm text-gray-400 py-8">
              {navLinks[0].videos[0].vendor} -{" "}
              {new Date(navLinks[0].videos[0].createAt).toLocaleDateString(
                "en-US",
                { year: "numeric", month: "long" }
              )}
              {" - "}
              {navLinks[0].videos[0].duration} seconds
            </p>
            <p>{navLinks[0].videos[0].description}</p>
            
            <VideoModal />
          </div>
          <Slider />
        </div>
      </div>
    </div>
  );
}

export default App;
