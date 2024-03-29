import Navbar from "./components/navbar";
import ImageGallery from "./components/image-gallery";
import VideoModal from "./components/video-modal";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import tabs from "./assets/site-map.json";

function App() {
  let location = useLocation();
  const [selectedTab, setSelectedTab] = useState();
  const [selectedVideo, setSelectedVideo] = useState();

  useEffect(() => {
    const selectedTab = tabs.find((t) => location.pathname.endsWith(t.href));
    setSelectedTab(selectedTab);
    setSelectedVideo(selectedTab?.videos[0]);
  }, [location]);

  return selectedTab && (
    <div
      id="bg-screen"
      className="h-screen w-full bg-cover bg-center bg-no-repeat animate-background lg:bg-contain lg:bg-left-top lg:bg-repeat-x lg:animate-background-desktop"
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
          <Navbar selectedTab={selectedTab} />
          <div className="w-full h-[55vh] md:w-9/12 lg:w-5/12 sm:px-16 px-4 lg:pt-14 md:pt-12 pt-6">
            <p className="font-montserrat text-5xl">{selectedVideo.title}</p>
            <p className="text-sm text-gray-400 pt-6 pb-4">
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
          {selectedTab?.videos?.length > 1 && <ImageGallery selectedTab={selectedTab} selectedVideo={selectedVideo} onChange={(video) => setSelectedVideo(video)} />}
        </div>
      </div>
    </div>
  );
}

export default App;
