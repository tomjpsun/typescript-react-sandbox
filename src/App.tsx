import React from "react";
import logo from "./logo.svg";
import "./scss/style.scss";
import "./App.css";
import myLogger from "./loggers/Logger";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import About from "./About";

const Home = () => {
  const handleClick = () => {
    myLogger();
  };
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        <button onClick={handleClick}> Click </button>{" "}
      </p>
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
        <Link to="/about">About</Link>
      </p>
    </header>
  );
};

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

// add Home component to the following array, with path as 'home'
const router = createBrowserRouter([
  {
    path: "about",
    element: <About></About>,
  },
  {
    path: "/",
    element: <Home></Home>,
  },
]);
export default App;
