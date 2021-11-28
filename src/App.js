import React from 'react'
import { Navbar } from "./components/Navbar/Navbar";
import { Introduction } from './components/Introduction/Introduction'
import { MyWorks } from './components/MyWorks/MyWorks'

const App = () => {
  return (
    <>
      <Navbar />
      <Introduction />
      <MyWorks />
    </>
  );
}

export default App;
