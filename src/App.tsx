import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Grid from "@mui/material/Grid";

import ErrorPage from "./error-page";
import reportWebVitals from "./reportWebVitals";
import Root from "./routes/root";
import Contactexample from "./routes/contactexample";

import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Work from "./components/Work";
import About from "./components/About";
import Home from "./components/Home";
import Social from "./components/Social";
import Archieve from "./components/Archieve";

import SmithChart from "./projectPages/SmithChart";
import CameraCalibration from "./projectPages/CameraCalibration";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <div style={{ paddingLeft: 45, paddingRight: 45 }}>
          <Home />
          <About />
          {/* <Education /> */}
          <Experience />
          <Work />
          <Contact />
        </div>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "contacts/:contactId",
      element: <Contactexample />,
    },
    {
      path: "/archieve",
      element: <Archieve />,
    },
    // projects
    {
      path: "/smithchart",
      element: <SmithChart />,
    },
    {
      path: "/cameracalibration",
      element: <CameraCalibration />,
    },
  ],
  { basename: process.env.PUBLIC_URL }
);

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <NavBar />
      <Grid container spacing={12}>
        <Grid item xs={1}>
          <Social />
        </Grid>
        <Grid item xs={10}>
          <RouterProvider router={router} />
          <Footer />
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </div>
  );
}

export default App;
