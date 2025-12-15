
import React from "react";
import { Navbar, NavBody, NavItems, NavbarLogo } from "../components/ui/resizable-navbar";

import Hero from "../components/ui/hero";

import Features from "../components/Features";

import StatsSection from "../components/StatsSection";
import StickyProjects from "../components/StickyProjects";
import Featured_works from "../components/Featured_works";
import Services from "../components/Services";
import FAQ from "../components/FAQ";
import CommunityMarquee from "../components/CommunityMarquee";

export default function Page() {
  return (
    <>
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems
            items={[
              { name: "Home", link: "#" },
              { name: "What we do", link: "#what-we-do" },
              { name: "Services", link: "#services" },
              { name: "Process", link: "#how-we-work" },
              { name: "Contact", link: "#contact" },
            ]}
          />
        </NavBody>
      </Navbar>
      <Hero />
      <Features />
      <StatsSection />
      <Featured_works />
      {/* <StickyProjects /> */}
      <Services />
      <FAQ />
      <CommunityMarquee />
    </>
  );
}