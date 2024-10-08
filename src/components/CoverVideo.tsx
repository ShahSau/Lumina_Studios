import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

import MainVideo from "../assets/Walking Girl.mp4";

const VideoContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;

    @media (max-width: 48em) {
      object-position: center 10%;
    }
    @media (max-width: 30em) {
      object-position: center 50%;
    }
  }
`;

const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: 'rgba(32,32,32,0.6)';
`;

const Title = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;

  div {
    display: flex;
    flex-direction: row;
  }

  h1 {
    font-size: 10em;

    text-shadow: 1px 1px 1px #202020;

    @media (max-width: 30em) {
      font-size: calc(5rem + 8vw);
    }
  }
  h2 {
    font-size: 1.2em;
    font-family: "Sirin Stencil";
    font-weight: 500;
    text-shadow: 1px 1px 1px #202020;
    margin: 0 auto;

    text-transform: capitalize;

    @media (max-width: 30em) {
      font-size: 1em;
      /* font-size: calc(5rem + 8vw); */
      margin-top: -1.5rem;
    }
  }
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 5, 
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const CoverVideo = () => {
  return (
    <VideoContainer data-scroll>
      <DarkOverlay />

      <Title variants={container} initial="hidden" animate="show">
        <div style={{
            color: "#fff",
            textShadow: "1px 1px 1px #202020",
        }}>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.21"
            data-scroll-speed="4"
          >
            L
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.17"
            data-scroll-speed="4"
          >
            u
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.13"
            data-scroll-speed="4"
          >
            m
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.09"
            data-scroll-speed="4"
          >
            i
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.06"
            data-scroll-speed="4"
          >
            n
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.03"
            data-scroll-speed="4"
          >
            a
          </motion.h1>
        </div>
        <motion.h2
          style={{ alignSelf: "flex-end" }}
          variants={item}
          data-scroll
          data-scroll-delay="0.04"
          data-scroll-speed="2"
        >
          inspire. create. belive
        </motion.h2>
      </Title>

      <video src={MainVideo} autoPlay muted loop />
    </VideoContainer>
  );
};

export default CoverVideo;
