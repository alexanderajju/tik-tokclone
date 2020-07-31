import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import InstagramEmbed from "react-instagram-embed";
import VideoSidebar from "./VideoSidebar";

function Video() {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);
  const onVideoPress = () => {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  };
  return (
    <div className="video">
      {/* 
<InstagramEmbed
className="video__player"
ref={videoRef}
              onClick={onVideoPress}
             loop
url='https://www.instagram.com/p/CDQ1TirjEiS/' /> */}

      {/* <video className="video__player"
             ref={videoRef}
              onClick={onVideoPress}
             loop
             src="https://www.youtube.com/embed/3HanWyYtIyE"> */}
      {/* 
            </video> */}
      <iframe
        className="video__player"
        loop
        onClick={onVideoPress}
        ref={videoRef}
        src="https://www.youtube.com/embed/3HanWyYtIyE"
      ></iframe>
      <VideoFooter
        channel="alexanderajju"
        description="checkout"
        song="blash.........blash"
      />
      <VideoSidebar/>
    </div>
  );
}

export default Video;
