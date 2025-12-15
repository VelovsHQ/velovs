
import React from "react";
import { Navbar, NavBody, NavItems, NavbarLogo } from "../components/ui/resizable-navbar";

import Hero from "../components/ui/hero";

import Features from "../components/Features";
import StatsSection from "../components/StatsSection";

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
    </>
  );
}