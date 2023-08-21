import React from "react";
import logo from "./logo.svg";
import "./scss/style.scss";
import "./App.css";

import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import About from "./About";

const Home = () => {
  const myfetch = () => {
    const msg = {
      id: "434a5f5e-2f5f-11ed-a261-0242ac120002",
      datetime: "24/Jan/2023:14:12:15 +0000",
      host: "153.10.110.81",
      "user-identifier": "Mozilla/5.0 Gecko/20100101 Firefox/64.0",
      method: "PUT",
      status: 500,
      referrer: "http://www.google.com/",
    };
    const dataToSend = JSON.stringify(msg);
    fetch("http://localhost:8200/api/v1/ingest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-P-META-meta1": "value1",
        "X-P-TAG-tag1": "value1",
        "X-P-Stream": "demo",
        Authorization: "Basic YWRtaW46YWRtaW4=",
      },
      body: dataToSend,
    }).then((response) => {
      console.log("response", response);
    });
  };

  const handleClick = () => {
    myfetch();
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
