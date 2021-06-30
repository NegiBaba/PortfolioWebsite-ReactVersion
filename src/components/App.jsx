import React from "react";

import Header from "./Header";
import HorizontalRule from "./HorizontalRule";
import Profile from "./Profile/Profile";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";

function App() {
  return (
    <div>
      <Header />
      <Profile />
      <HorizontalRule />
      <About />
      <HorizontalRule />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
