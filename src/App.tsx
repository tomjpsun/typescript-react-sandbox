import React from "react";
import logo from "./logo.svg";
import "./App.css";

import {
  useNavigate,
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";

const Home = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
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
const About = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/");
  };
  return (
    <div>
      <button onClick={onClick}>BACK</button>
    </div>
  );
};

// add Home component to the following array, with path as 'home'
const router = createBrowserRouter([
  // show <h1> hello </h1> and a link to /about
  {
    path: "/",
    element: (
      <div>
        <h1>hello</h1>
        <Link to="/about">About</Link>
      </div>
    ),
  },

  {
    path: "about",
    element: <About></About>,
  },
  {
    path: "home",
    element: <Home></Home>,
  },
]);
export default App;
