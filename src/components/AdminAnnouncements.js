import React from "react";
import "./css/admin-announcements.css";

function AdminAnnouncements() {
  return (
    <div className="admin-announcements">
      <section className="header">
        <div className="container">
          <h1 className="admin-announcement-h1">Announcements</h1>
          <form className="announcement-form">
            <table>
              <tr>
                <td>
                  Subject:
                </td>
                <td>
                  <input type="text" placeholder="Heading"></input>
                </td>
              </tr>
              <tr>
                <td>
                  Name:
                </td>
                <td>
                  <input type="text" placeholder="Enter Full Name"></input>
                </td>
              </tr>
              <tr>
                <td>
                  Date:
                </td>
                <td>
                  <input type="date" placeholder="DD/MM/YY" required></input>
                </td>
              </tr>
              <tr>
                <td>
                  Announcement:
                </td>
                <td>
                  <textarea name="Message" placeholder="Write here..." required></textarea>
                </td>
              </tr>
              <tr>
                <td>
                  <button className="button-announcement" type="SUBMIT">Send</button>
                </td>
              </tr>
            </table>
          </form>
        </div>
      </section>
    </div >
  );
}

export default AdminAnnouncements;
