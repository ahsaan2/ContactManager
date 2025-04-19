import React from "react";
import ContactCard from "./ContactCard";
// accessing the props
const ContactList = (props) => {
  console.log(props);
  // Delete contact handler
  const deleteContactHanddler = (id) =>{
    props.getContactId(id)
  }

  // function rendering for contact list
  const renderContactList = props.contacts.map((contact) => {
    console.log(Array.isArray(props.contacts));
    console.log(props.contacts);
    
    
    return (
      <ContactCard contact = {contact} clickHandler={deleteContactHanddler} key = {contact.id}/>
    );
  });

  return <div className="ui called list">{renderContactList}</div>;
};
export default ContactList;
