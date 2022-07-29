import React from "react";
import "./css/admin-complaints-suggestions.css";

function AdminSuggestions() {
  return (
    <div className="admin-suggestions">
      <header className="admin-suggestions-header">
        <h1 className="admin-suggestions-h1">
          Admin Suggestions Page
        </h1>
        <br />
      </header>
      <div className="admin-suggestions-body">
        <table className="admin-suggestions-table">
          <tr>
            <td><b>
              Name :
            </b></td>
            <td></td>
            <td>
              {"{NAME}"}
            </td>
          </tr>
          <tr>
            <td><b>
              Contact No. :
            </b></td>
            <td></td>
            <td>
              {"{PHONE NO.}"}
            </td>
          </tr>
          <tr>
            <td><b>
              Aadhar Id:
            </b></td>
            <td></td>
            <td>
              {"{AADHAR}"}
            </td>
          </tr>
          <tr>
            <td><b>
              Details :
            </b></td>
            <td></td>
            <td>
              {"{DETAILS}"}
            </td>
          </tr>
        </table>
        <table className="admin-suggestions-table">
          <tr>
            <td><b>
              Name :
            </b></td>
            <td></td>
            <td>
              {"{NAME}"}
            </td>
          </tr>
          <tr>
            <td><b>
              Contact No. :
            </b></td>
            <td></td>
            <td>
              {"{PHONE NO.}"}
            </td>
          </tr>
          <tr>
            <td><b>
              Aadhar Id:
            </b></td>
            <td></td>
            <td>
              {"{AADHAR}"}
            </td>
          </tr>
          <tr>
            <td><b>
              Details :
            </b></td>
            <td></td>
            <td>
              {"{DETAILS}"}
            </td>
          </tr>
        </table>
        <table className="admin-suggestions-table">
          <tr>
            <td><b>
              Name :
            </b></td>
            <td></td>
            <td>
              {"{NAME}"}
            </td>
          </tr>
          <tr>
            <td><b>
              Contact No. :
            </b></td>
            <td></td>
            <td>
              {"{PHONE NO.}"}
            </td>
          </tr>
          <tr>
            <td><b>
              Aadhar Id:
            </b></td>
            <td></td>
            <td>
              {"{AADHAR}"}
            </td>
          </tr>
          <tr>
            <td><b>
              Details :
            </b></td>
            <td></td>
            <td>
              {"{DETAILS}"}
            </td>
          </tr>
        </table>
      </div>
    </div >
  );
}

export default AdminSuggestions;
