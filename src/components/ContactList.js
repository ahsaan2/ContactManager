import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";
// accessing the props
const ContactList = (props) => {
  console.log(props);
  // Delete contact handler
  const deleteContactHanddler = (id) => {
    props.getContactId(id);
  };

  // function rendering for contact list
  
  const renderContactList = props.contacts.map((contact) => {
    console.log(Array.isArray(props.contacts));
    console.log(props.contacts);

    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHanddler}
        key={contact.id}
      />
    );
  });

  return (
    <div className="main">
      <div>
        <h2>Contact List</h2>
      </div>

      <Link to={"/add"}>
        <button className="ui button blue right">Add Contact</button>
      </Link>

      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
};
export default ContactList;
