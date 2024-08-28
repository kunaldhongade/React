import React from "react";
import "./Video.css";

const Video = ({ title, id, channel, time, views }) => {
  return (
    <>
      <div className="container">
        <div className="pic">
          <img
            src={`https://picsum.photos/id/${id}/160/90`}
            alt="Random IMG"
            srcset="Fu Img"
          />
        </div>
        <div className="title">{title}</div>
        <div className="channel">{channel}</div>
        <div className="views">
          {views} M views <span>.</span> {time} Y ago
        </div>
      </div>
    </>
  );
};

export default Video;
