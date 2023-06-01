import React from "react";
import { MovieList } from "./MovieList";
import { Navbar } from "./Navbar";
export default function App() {

  return (
    <>

{/* <img className="logo" src="https://static.wikia.nocookie.net/logopedia/images/6/68/Marvel_Studios_2008.svg" alt="mcu" /> */}

    <Navbar />
      <MovieList />
    </>
  );
}
