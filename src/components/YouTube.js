import React, { Component } from "react";
import YouTube from "react-youtube";

class Video extends Component {
  render() {
    const opts = {
      height: "500",
      width: "640",
      playerVars: {
        autoplay: 1
      }
    };

    return (
      <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={this._onReady} />
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default Video;
