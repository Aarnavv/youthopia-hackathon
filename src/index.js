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
  Navbar,
  Announcements,
  Complaints,
  Suggestions,
  AdminComplaints,
  AdminSuggestions,
} from "./components";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/home" element={<><Navbar /><Home />  <Footer /> </>} />
      <Route path="/" element={<Landing />} />

      <Route path="/home/announcements" element={<><Navbar /><Announcements />  <Footer />  </>} />

      <Route path="/home/suggestions" element={<><Navbar /> <Suggestions /> <Footer /> </>} />
      <Route path="/home/complaints" element={<><Navbar /> <Complaints /><Footer />  </>} />
      <Route path="/home/reservations" element={<><Navbar /> <Footer />  </>} />

      <Route path="/home/admin/make-announcements" element={<><Navbar /> <Footer />  </>} />
      <Route path="/home/admin/view-complaints" element={<><Navbar /> <AdminComplaints/> <Footer />  </>} />
      <Route path="/home/admin/view-suggestions" element={<><Navbar /><AdminSuggestions />  <Footer />  </>} />

      <Route path="*" element={<><Navbar /><Error />  <Footer /></>} />
    </Routes>
  </Router >,

  document.getElementById("root")
);