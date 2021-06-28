import React from "react";

import Header from "./Header";
import HorizontalRule from "./HorizontalRule";
import Profile from "./Profile/Profile";
import About from "./About/About";

function App() {
  return (
    <div>
      <Header />
      <Profile />
      <HorizontalRule />
      <About />
      <HorizontalRule />
    </div>
  );
}

export default App;
