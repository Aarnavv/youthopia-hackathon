import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Home,
  Error,
  Footer,
  Landing,
  Navbar
} from "./components";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/home" element={<><Navbar /><Home />  <Footer /> </>} >
        <Route path="" element={<>  </>} />
      </Route>
      <Route path="/" element={<Landing />} />

      <Route path="/home/announcements" element={<><Navbar />  </>} >
        <Route path="" element={<>  </>} />
      </Route>

      <Route path="/home/suggestions" element={<><Navbar /> <Footer />  </>} />
      <Route path="/home/complaints" element={<><Navbar /> <Footer />  </>} />
      <Route path="/home/reservations" element={<><Navbar /> <Footer />  </>} />

      <Route path="*" element={<><Navbar /><Error />  <Footer /></>} />
    </Routes>
  </Router >,

  document.getElementById("root")
);