import React from "react";
import Welcome from "./welcome";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Reviews from "./Reviews";

function Main() {
  return (
    <>
        <Welcome/>
        <About/>
        <Services/>
        <Reviews/>
        {/* <Contact/> */}
    </>
  );
}

export default Main;
