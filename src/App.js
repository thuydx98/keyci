import Navbar from "./components/navbar";
import Slider from "./components/slider";
import VideoModal from "./components/video-modal";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import tabs from "./assets/site-map.json";

function App() {
  let location = useLocation();
  const [selectedTab, setSelectedTab] = useState();
  const [selectedVideo, setSelectedVideo] = useState();

  useEffect(() => {
    const selectedTab = tabs.find((t) => location.pathname.replace('keyci', '').endsWith( t.href))
    setSelectedTab(selectedTab);
    setSelectedVideo(selectedTab?.videos[0]);
  }, [location]);

  return selectedTab && (
    <div
      id="bg-screen"
      className="h-screen w-full bg-contain bg-repeat-x bg-right"
      style={{ backgroundImage: `url(${selectedVideo.background}` }}
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
          // style={{ backgroundImage: `url(${selectedVideo.background}` }}
        >
          <Navbar />
          <div className="w-full h-[57vh] md:w-6/12 lg:w-5/12 sm:px-16 px-4 pt-14">
            <p className="text-5xl">{selectedVideo.title}</p>
            <p className="text-sm text-gray-400 py-8">
              {selectedVideo.vendor} -{" "}
              {new Date(selectedVideo.createAt).toLocaleDateString(
                "en-US",
                { year: "numeric", month: "long" }
              )}
              {" - "}
              {selectedVideo.duration} seconds
            </p>
            <p dangerouslySetInnerHTML={{__html: selectedVideo.description}} />
            <VideoModal source={"https://www.youtube.com/embed/" + selectedVideo.id + "?autoplay=1&loop=1" }/>
          </div>
          {selectedTab?.videos?.length > 1 && <Slider onChange={(video) => setSelectedVideo(video)} />}
        </div>
      </div>
    </div>
  );
}

export default App;
