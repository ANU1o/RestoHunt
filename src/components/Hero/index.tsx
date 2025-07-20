import React from "react";
import "@/styles/Hero.css";
import { Image } from "react-bootstrap";
import { HeroContentProps } from "./types";

const Hero = () => {
  const heroContentProps: HeroContentProps = {
    hero: {
      id: "hero-container",
      className:
        "d-flex flex-column flex-md-column flex-lg-row align-items-center justify-content-center gap-3 overflow-hidden shadow py-5",
    },
    heroContentContainer: {
      className: "bg-body p-3 p-lg-5 shadow-sm mt-5",
    },
    heroHeading: {
      className: "mb-4 text-center text-body text-lg-start",
    },
    heroContent: {
      className: "fs-5 fs-md-4 fs-lg-4 text-center text-lg-start",
    },
    logo: {
      className: "fw-bold",
    },
    heroImage: {
      src: "/images/hero.svg",
      alt: "Hero Image",
      id: "hero-img",
    },
  };
  return (
    <div {...heroContentProps.hero}>
      <div {...heroContentProps.heroContentContainer}>
        <h1 {...heroContentProps.heroHeading}>
          Discover Taste That Speaks Your Language
        </h1>
        <p {...heroContentProps.heroContent}>
          <span {...heroContentProps.logo}>RESTOHUNT</span> helps you explore
          restaurants that match your mood, style, and cravings. From hidden
          gems to trending spots, find places that feel like they were made just
          for you — curated, categorized, and easy to reach.
        </p>
      </div>
      <Image {...heroContentProps.heroImage} />
    </div>
  );
};
export default Hero;
