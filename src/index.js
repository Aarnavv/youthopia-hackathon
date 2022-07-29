import React from 'react';
import ReactDOM from 'react-dom/client';
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
  AdminAnnouncements,
  HomeReservations,
  RestaurantReservations,
  TheatreReservations
} from "./components";

const root = ReactDOM.createRoot(document.getElementById("root"));

const page = (
  <Router>
    <Routes>
      <Route path="/" element={<Landing />} />

      <Route path="/home" element={<><Navbar /><Home />  <Footer /> </>} />

      <Route path="/home/announcements" element={<><Navbar /><Announcements />  <Footer />  </>} />

      <Route path="/home/suggestions" element={<><Navbar /> <Suggestions /> <Footer /> </>} />
      <Route path="/home/complaints" element={<><Navbar /> <Complaints /><Footer />  </>} />
      <Route path="/home/home-reservations" element={<><Navbar /> <HomeReservations />  <Footer />  </>} />
      <Route path="/home/restaurant-reservations" element={<><Navbar /> <RestaurantReservations />  <Footer />  </>} />
      <Route path="/home/theatre-reservations" element={<><Navbar /> <TheatreReservations />  <Footer />  </>} />

      <Route path="/home/admin/make-announcements" element={<><Navbar /> <AdminAnnouncements /> <Footer />  </>} />
      <Route path="/home/admin/view-complaints" element={<><Navbar /> <AdminComplaints /> <Footer />  </>} />
      <Route path="/home/admin/view-suggestions" element={<><Navbar /><AdminSuggestions />  <Footer />  </>} />

      <Route path="*" element={<><Navbar /><Error />  <Footer /></>} />
    </Routes>
  </Router >
);

root.render(page);