import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

const Contact = () => {
  return (
    <div>
      <nav className="contacts-header">
        <div>
          <NavLink to="/" className="custom-btn">
            <i className="material-icons">arrow_back_ios_new</i>{" "}
            <span style={{ fontSize: "2rem" }}>Go back</span>
          </NavLink>
        </div>
      </nav>
      <main>
        <h1>this is contact page</h1>
      </main>
    </div>
  );
};

export default Contact;
