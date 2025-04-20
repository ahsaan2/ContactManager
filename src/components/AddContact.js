// creating add contact form
import React from "react";

import withNavigation from "./withNavigation";

/**
 * Class component
 */
class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };
  /**
   preventDefault() called on an event object to prevent the default behavior of that event,When we submit a form in the browser
 * When we submit a form in the browser, by default it reloads tha page.
   But in react, we do not want that- we usually want to handle the form ourselves,
 */
  add = (e) => {
    e.preventDefault();
    // console.log("Not reading anything here!");

    if (this.state.name === "" || this.state.email === "") {
      alert("All the fields are mandatory!");
      return;
    }
    // console.log(this.state);
    // now handle the handler that we passed from the App component
    this.props.addContactHandler(this.state);
    // Once we press tha add button, all the stuff present should be removed, so we need to clear the state
    // thus, we need to update the state(use setState)
    this.setState({ name: "", email: "" });
    // after adding contact, and clearing the fields, navigate back to the home page to show contacts
    //this.props.history.push("/")  // old way
    // new way in react
    this.props.navigate("/") // added Nvigation file 
    
  };
 
  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
            
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            ></input>
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="Email"
              placeholder="Enter your Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            ></input>
          </div>

          <button className="ui button blue" type="submit">
            Add
          </button>
        </form>
      </div>
    );
  }
}
export default withNavigation(AddContact);

