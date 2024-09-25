import "locomotive-scroll/dist/locomotive-scroll.css";

import { AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { ThemeProvider } from "styled-components";
// import './App.css'
import Loader from "./components/Loader";
import GlobalStyles from "./styles/GlobalStyles";
import ScrollTriggerProxy from "./components/ScrollTriggerProxy";
import Home from "./section/Home";
import About from "./section/About";

const App=()=> {

  const containerRef = useRef(null);
  const [Loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={{ mode: "dark" }}>
        <LocomotiveScrollProvider
            options={{
              smooth: true,
              // ... all available Locomotive Scroll instance options
              smartphone: {
                smooth: true,
              },
              tablet: {
                smooth: true,
              },
            }}
            watch={
              []
            }
            containerRef={containerRef}
          >
            <AnimatePresence>
              {!Loaded ? <Loader /> : null}
            </AnimatePresence>
            <main className="App" data-scroll-container ref={containerRef}>
              <ScrollTriggerProxy />
              <AnimatePresence>
                {Loaded ? null : <Loader />}

                <Home key="home" />
                <About key="about" />
              </AnimatePresence>
            </main>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  )
}

export default App
