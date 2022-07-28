import React from 'react';
import ReactDOM from 'react-dom';
import "./components/css/index.css";
import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Home,
  Error,
  Footer,
} from "./components";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/home" element={<Home />} >
        <Route path="" element={<>  </>} />
      </Route>
      <Route path="/" element={<Home />} >
        <Route path="" element={<>  </>} />
      </Route>


      <Route path="*" element={<Error />} />
    </Routes>
    <Footer />
  </Router>,

  // <div className="text">
  //   <p>17041e9f83690d6cf896b9d686512d491c1181c0</p>
  // </div>,

  document.getElementById("root")
);