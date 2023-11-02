import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function App() {
  const [imageNumber, setImageNumber] = useState(0);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      let background = gsap.timeline({
        defaults: { duration: 0.2 },
        scrollTrigger: {
          trigger: ".hero-img",
          start: "top center",
          end: "bottom center",
          scrub: false,
          markers: false,
        },
      });

      background.to(".hero-img", {
        scale: 1,
      });

      let heroTitle1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero-text-wrap1",
          start: "300 center",
          end: "1400 center",
          scrub: true,
          markers: true,
          pin: true,
          onEnterBack: () =>
            gsap.to(".hero-title1", { opacity: 1, duration: 0.5 }),
          onLeave: () => gsap.to(".hero-title1", { opacity: 0, duration: 0.5 }),
        },
      });

      let heroTitle2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero-text-wrap1",
          start: "299 center",
          end: "1400 center",
          scrub: true,
          markers: true,
          pin: true,
          onEnterBack: () =>
            gsap.to(".hero-title2", { opacity: 1, duration: 0.5 }),
          onLeave: () => gsap.to(".hero-title2", { opacity: 0, duration: 0.5 }),
        },
      });

      heroTitle1.to(".hero-title1", { x: 1000, delay: 1 });

      heroTitle2.to(".hero-title2", {
        x: -1200,
        scale: 1.1,
        opacity: 1,
      });

      let desc = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero-text-wrap2",
          start: "0 center",
          end: "500 center",
          scrub: true,
          markers: true,
          pin: true,
          onEnterBack: () =>
            gsap.to(".hero-desc", { color: "black", duration: 0.5 }),
          onLeave: () =>
            gsap.to(".hero-desc", { color: "white", duration: 0.5 }),
        },
      });

      desc.to(".hero-desc", { opacity: 1, scale: 1.3 });

      let desc2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero-desc-vid",
          start: "0 center",
          end: "1000 center",
          scrub: true,
          markers: true,
          // onEnterBack: () =>
          //   gsap.to(".hero-title2", { opacity: 1, duration: 0.5 }),
          // onLeave: () => gsap.to(".hero-title2", { opacity: 0, duration: 0.5 }),
        },
      });

      desc2.to(".hero-desc-vid-text", { opacity: 1, scale: 1.1 });

      let span1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".span1",
          start: "0 center",
          end: "30 center",
          scrub: true,
          markers: true,
          // onEnterBack: () =>
          //   gsap.to(".hero-title2", { opacity: 1, duration: 0.5 }),
          // onLeave: () => gsap.to(".hero-title2", { opacity: 0, duration: 0.5 }),
        },
      });

      span1.to(".span1", { color: "white", delay: 0.1 });

      let span2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".span2",
          start: "90 center",
          end: "110 center",
          scrub: true,
          markers: true,
          // onEnterBack: () =>
          //   gsap.to(".hero-title2", { opacity: 1, duration: 0.5 }),
          // onLeave: () => gsap.to(".hero-title2", { opacity: 0, duration: 0.5 }),
        },
      });

      span2.to(".span2", { color: "white", delay: 0.1 });

      let span3 = gsap.timeline({
        scrollTrigger: {
          trigger: ".span3",
          start: "90 center",
          end: "110 center",
          scrub: true,
          markers: true,
          // onEnterBack: () =>
          //   gsap.to(".hero-title2", { opacity: 1, duration: 0.5 }),
          // onLeave: () => gsap.to(".hero-title2", { opacity: 0, duration: 0.5 }),
        },
      });

      span3.to(".span3", { color: "white", delay: 0.1 });
    });

    return () => ctx.revert();
  }, []);

  const handleScroll = () => {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    if (st === 0) {
      setImageNumber(0); // Reset image number to 0 at the top of the page
    } else if (st > 0) {
      const newImageNumber = Math.min(62, Math.floor(st / 10)); // Adjust divisor to control speed of image change
      setImageNumber(newImageNumber);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this useEffect runs once, similar to componentDidMount

  const formattedNumber = String(imageNumber).padStart(3, "0");
  const imageSrc = `./animation1/${formattedNumber}.png`;

  return (
    <>
      <Navbar /> <img src={imageSrc} className={"hero-img"} alt="" />
      <div className="hero-text-wrap1">
        <h1 className="hero-title1">Hello</h1>
        <h1 className="hero-title2">World</h1>
      </div>
      <div className="hero-text-wrap2">
        <h2 className="hero-desc">
          Super Cool Device, One of a kind check it out
        </h2>
      </div>{" "}
      <div className="hero-desc-vid">
        <p className="hero-desc-vid-text">
          <span className="span1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </span>
          <span className="span2">
            Voluptas minus delectus eius, commodi aut quos harum adipisci, qui
            officia ut praesentium in enim,
          </span>
          <span className="span3">
            ulpa debitis repellat earum necessitatibus cupiditate obcaecati.
          </span>
        </p>
        <video autoPlay loop src="./12.mp4"></video>
      </div>
    </>
  );
}

export default App;
