import React from "react";
import user from "../images/Img.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const ContactDetails = (props) => {
  const location = useLocation()
  console.log(location.state)
  const { name, email,id } = location.state?.contact || {};

  // const {id, name, email} = props.contact;
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header"> {name}</div>
          <div className="Description">{email}</div>
          <div className="Id">{id}</div>

        </div>
      </div>
      <div className="center-div">
        <Link to="/">
          <button className="ui button blue center">
            Back to contact list
          </button>
        </Link>
      </div>
    </div>
  );
};
export default ContactDetails;
