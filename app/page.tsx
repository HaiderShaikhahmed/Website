import Hero from "./hero";
// import Navbar from "./navbar";
import Marketing from "./marketing";
import Product from "./product";
import Comment from "./comment";
import Contact from "./contact";
import React from "react";

// If you want to use Firebase, move the initialization to a separate file (e.g., firebase.js) and import it here.
// Do NOT put initialization code inside the component or return statement.

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <div className="bg-gray-800 h-2 flex items-center justify-center"></div>
      <Marketing />
      <Product />
      <Comment />
      {/* <Contact /> */}
    </div>
  );
}
