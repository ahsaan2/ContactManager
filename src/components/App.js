import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { v4 as uuid } from "uuid"; // Universally unique identifier
import ContactDetails from "./ContactDetails";
function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  // rendering a list
  const [contacts, setContacts] = useState([]); // initiall value of the contacts is the empty array
  const addContactHandler = (contact) => {
    console.log(contact);
    /**
     * Update the contacts-state, once we have added them,.
     * Here, we are adding all the existing contacts, plus the new one's are added to the list
     */
    const newContact = { id: uuid(), ...contact }; // if the contact has, {name, email}-> now new contact will have {id:, name:, email:}
    setContacts([...contacts, newContact]); // update the state
  };

  // DELETE THE USER ON THE ID
  const removeContactHandler = (id) => {
    // pass this handler to the contact list
    // copy the contacts
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };
  // Retrieve the data back from local-storage
  useEffect(() => {
    const retrieveContacts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    console.log("Contacts are logged");

    // if (retrieveContacts) {
    //   console.log("contacts are retrieved", retrieveContacts);

    //   setContacts(retrieveContacts);
    // }
    if (retrieveContacts && Array.isArray(retrieveContacts)) {
      console.log("contacts are retrieved", retrieveContacts);

      setContacts(retrieveContacts);
    }
  }, []);
  useEffect(() => {
    // we are adding contacts in local-storage
    // save data to the browser's localStorage
    // JSON.stringify(contacts)->> converts the contacts to a string(required for local-storage)
    if (contacts.length > 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }
  }, [contacts]); // this will save the contacts into the local storage

  return (
    <div className="ui container">
      {/* setting the router, add the components */}
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <ContactList
                contacts={contacts}
                getContactId={removeContactHandler}
              />
            }
          />
          <Route
            path="/add"
            element={<AddContact addContactHandler={addContactHandler} />}
          />
         <Route path="/contact/:id" element={<ContactDetails />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
