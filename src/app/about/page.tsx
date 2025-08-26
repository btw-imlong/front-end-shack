"use client";

import React from "react";
import HeroAbout from "./hero-about";
import Story from "./story";
import Features from "./value";
import VisitUs from "./visit us";

const AboutPage: React.FC = () => {
  return (
    <>
      <HeroAbout />
      <Story />
      <Features />
      <VisitUs />
    </>
  );
};

export default AboutPage;
