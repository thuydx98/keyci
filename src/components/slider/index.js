import React, { useCallback, useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./styles.css";
import { useLocation } from "react-router-dom";
import tabs from "../../assets/site-map.json";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 9,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const Slider = (props) => {
  let location = useLocation();
  const [selectedItem, setSelectedItem] = useState();
  const [selectedTab, setSelectedTab] = useState();

  useEffect(() => {
    const selected = tabs.find((t) => t.href === location.pathname);
    setSelectedTab(selected);
    setSelectedItem(selected.videos[0]);
  }, [location]);

  const updateSelectedItem = useCallback((video) => {
    setSelectedItem(video);
    props.onChange(video);
  }, [props]);

  return selectedTab && (
    <div className="parent bottom-0">
      <Carousel
        responsive={responsive}
        autoPlay={false}
        centerMode
        // swipeable
        // draggable
        infinite={false}
        // partialVisible
        // focusOnSelect
        // showDots
      >
        {selectedTab.videos.map((video) => {
          return (
            <div className={`slider ${selectedItem?.id === video.id && 'selected'}`} key={video.id}>
              <img src={video.background} alt="movie" onClick={() => updateSelectedItem(video)} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default Slider;
