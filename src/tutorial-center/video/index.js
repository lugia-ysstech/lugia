import React, { Component } from "react";
import styled from "styled-components";
import switchImg from "../img/switch.png";

const VideoWrap = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #e8e8e8;
  box-shadow: 0 0 10px 0 rgba(80, 87, 93, 0.2);
  position: relative;
  background: #fff;
  &:hover {
    border: 1px solid #4d68ff;
  }
`;
const VideoSwitchWrap = styled.div`
  width: 72px;
  height: 72px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: url(${switchImg}) no-repeat;
  background-size: contain;
  cursor: pointer;
  z-index: 2;
  display: ${props => (props.visible ? "none" : "block")};
`;

const VideoPoster = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
`;

export default class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playStatus: false
    };
    this.videoRef = React.createRef();
  }

  handleSwitchClick = () => {
    const { paused, ended } = this.videoRef.current;
    if (paused || ended) {
      this.videoRef.current.play();
    } else {
      this.videoRef.current.pause();
    }
  };
  switchPlayStatus = () => {
    const { playStatus } = this.state;
    const currentVideo = this.videoRef.current;
    this.setState({
      playStatus: !playStatus
    });
    currentVideo && (currentVideo.controls = !playStatus);
  };

  componentDidMount() {
    const currentVideo = this.videoRef.current;
    currentVideo.addEventListener("play", () => {
      this.switchPlayStatus();
    });
    currentVideo.addEventListener("pause", () => {
      this.switchPlayStatus();
    });
    currentVideo.addEventListener("ended", () => {
      currentVideo.load();
    });
  }
  componentWillUnmount() {
    const currentVideo = this.videoRef.current;
    currentVideo.removeEventListener("play", () => {
      this.switchPlayStatus();
    });
    currentVideo.removeEventListener("pause", () => {
      this.switchPlayStatus();
    });
    currentVideo.removeEventListener("ended", () => {
      currentVideo.load();
    });
  }

  render() {
    const {
      src = "https://interactive-examples.mdn.mozilla.net/media/examples/flower.mp4"
    } = this.props;
    const { playStatus } = this.state;
    return (
      <VideoWrap>
        <VideoSwitchWrap
          onClick={this.handleSwitchClick}
          visible={playStatus}
        />
        <video
          ref={this.videoRef}
          src={src}
          style={{ width: "100%", height: "100%" }}
          controls={false}
          poster={<VideoPoster />}
        ></video>
      </VideoWrap>
    );
  }
}
