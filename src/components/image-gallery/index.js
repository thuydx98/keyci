import React from "react";
import "./styles.css";

const ImageGallery = (props) => {
  return (
    props.selectedTab && (
      <div id="image-gallery" className="max-h-[35vh] flex gap-x-3  px-4">
        {props.selectedTab.videos?.map((video) => {
          return (
            <img
              className={`${props.selectedVideo?.id === video.id && "selected"} max-h-[25vh] m-2.5`}
              key={video.id}
              src={"/slider-images/" + video.id + ".jpg"}
              alt="movie"
              onClick={() => props.onChange(video)}
            />
          );
        })}
      </div>
    )
  );
};
export default ImageGallery;
