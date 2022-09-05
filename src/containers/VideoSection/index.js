import React from "react";
import { Icon } from "react-icons-kit";
import { ic_play_arrow } from "react-icons-kit/md/ic_play_arrow";
import { openModal } from "@redq/reuse-modal";
import Button from "common/components/Button";
import Container from "common/components/UI/Container";
import NextImage from "common/components/NextImage";

import SectionWrapper, { VideoWrapper, VideoArea } from "./experience.style";
import "@redq/reuse-modal/lib/index.css";

const ModalContent = ({ url }) => (
  <VideoWrapper>
    <iframe title="Video" src={url} frameBorder="0" />
  </VideoWrapper>
);

const VideoSection = ({ url, image }) => {
  // modal handler
  const handleVideoModal = () => {
    openModal({
      config: {
        className: "video-modal",
        disableDragging: true,
        default: {
          width: "auto",
          height: "auto",
          x: 0,
          y: 0,
        },
      },
      component: ModalContent,
      componentProps: { url },
      closeOnClickOutside: true,
    });
  };

  return (
    <SectionWrapper id="experience">
      <Container>
        <VideoArea onClick={handleVideoModal}>
          <NextImage src={image} alt="Aut Video" />
          <Button
            className="video__btn"
            icon={<Icon className="plus" icon={ic_play_arrow} />}
          />
        </VideoArea>
      </Container>
    </SectionWrapper>
  );
};

export default VideoSection;
