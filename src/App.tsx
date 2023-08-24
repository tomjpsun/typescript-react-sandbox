import React from "react";
import logo from "./logo.svg";
import "./scss/style.scss";
import "./App.css";
import myLogger from "./loggers/Logger";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import About from "./About";
import Sidebar from "./frames/Sidebar";

const Home = () => {
  const handleClick = () => {
    myLogger("App started");
  };
  return (
    <header className="App-header">
      <p>
        <Sidebar></Sidebar>
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
