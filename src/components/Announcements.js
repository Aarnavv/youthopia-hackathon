import React from "react";
import "./css/announcements.css";

function Announcements() {
  return (
    <div className="announcements">
      <div className="announcements-heading">
        <h1 className="announcements-title">Announcements</h1>
      </div>
      <div className="one-announcement">
        <div className="bold"> {"{By Aryan}"}, </div>
        <div className="bold"> {"{DD/MM/YYYY}"} </div>
        <br /><br />
        <div className="message">
          {"{ANNOUNCEMENT: This is to notify that the electricity supply will be cut off from 12:00 hours to 16:00 hours, on 31st July, 2022, due to renovation work.}"}
        </div>
        <br />
      </div>

      <div className="one-announcement">
        <div className="bold"> {"{BY WHO}"}, </div>
        <div className="bold"> {"{DD/MM/YYYY}"} </div>
        <br /><br />
        <div className="message">
          {"{ANNOUNCEMENT: The total number of COVID-19 cases have increased to 24,462. Everyone is advised to wear a mask whenever they are leaving their houses. Failure to do so will lead to a Rs 5000/- fine. Stay safe!}"}
        </div>
        <br />
      </div>

      <div className="one-announcement">
        <div className="bold"> {"{BY WHO}"}, </div>
        <div className="bold"> {"{DD/MM/YYYY}"} </div>
        <br /><br />
        <div className="message">
          {"{ANNOUNCEMENT: The total number of COVID-19 cases have increased to 24,462. Everyone is advised to wear a mask whenever they are leaving their houses. Failure to do so will lead to a Rs 5000/- fine. Stay safe!}"}
        </div>
        <br />
      </div>
    </div>
  );
}

export default Announcements;
