import React from "react";
import PropTypes from "prop-types";
import "./Body.css";

const Body = ({
  contactData,
  handleInputEvent,
  editContact,
  deleteContact,
  saveNewContact,
  saveContact,
  handleInputEventNew,
  messageStatus,
  newContactData,
  addNewContact
}) => {
  const showContact = contactData.map((el, index) => {
    let display =
      el.updateMode === true
        ? { display: "inline-block" }
        : { display: "none" };
    let labelDisplay =
      el.updateMode === true
        ? { display: "none" }
        : { display: "inline-block" };
    let backgroundStyle =
      (index + 1) % 2 === 0
        ? { backgroundColor: "rgba(0,0,0,.05)" }
        : { backgroundColor: "white" };
    return (
      <tbody key={index}>
        <tr style={backgroundStyle}>
          <th scope="row"> {index + 1} </th>
          <td>
            <label style={labelDisplay}> {el.firstName} </label>
            <input
              type="text"
              style={display}
              className="form-control"
              name="firstName"
              value={el.firstName}
              onChange={handleInputEvent}
              id={el.id}
              placeholder="First Name"
            />
          </td>
          <td>
            <label style={labelDisplay}> {el.lastName} </label>
            <input
              type="text"
              style={display}
              className="form-control"
              name="lastName"
              value={el.lastName}
              onChange={handleInputEvent}
              id={el.id}
              placeholder="Last Name"
            />
          </td>
          <td>
            <label style={labelDisplay}> {el.age} </label>
            <input
              type="text"
              style={display}
              className="form-control"
              name="age"
              value={el.age}
              onChange={handleInputEvent}
              id={el.id}
              placeholder="Age"
            />
          </td>
          <td>
            <i
              className="fa fa-edit"
              style={labelDisplay}
              onClick={() => editContact(el.id)}
            ></i>
            <i
              className="fa fa-trash"
              style={labelDisplay}
              onClick={() => deleteContact(el.id)}
            ></i>
            <button
              type="button"
              id="save-button"
              style={display}
              onClick={() => saveContact(el.id)}
              className="btn btn-primary"
            >
              Save
            </button>
          </td>
        </tr>
      </tbody>
    );
  });

  const newContact = newContactData.map((el, index) => {
    let backgroundStyle =
      (index + 1) % 2 === 0
        ? { backgroundColor: "rgba(0,0,0,.05)" }
        : { backgroundColor: "white" };
    return (
      <tbody key={index}>
        <tr style={backgroundStyle}>
          <th scope="row"> </th>
          <td>
            <input
              type="text"
              className="form-control"
              name="firstName"
              value={el.firstName}
              onChange={handleInputEventNew}
              id={el.id}
              placeholder="First Name"
            />
          </td>
          <td>
            <input
              type="text"
              className="form-control"
              name="lastName"
              value={el.lastName}
              onChange={handleInputEventNew}
              id={el.id}
              placeholder="Last Name"
            />
          </td>
          <td>
            <input
              type="text"
              className="form-control"
              name="age"
              value={el.age}
              onChange={handleInputEventNew}
              id={el.id}
              placeholder="Age"
            />
          </td>
          <td>
            <button
              type="button"
              id="add-button"
              onClick={() => saveNewContact(el.id)}
              className="btn btn-primary"
            >
              Add
            </button>
          </td>
        </tr>
      </tbody>
    );
  });

  const tableHeadStyle =
    contactData.length > 0 || newContactData.length
      ? { display: "table-header-group" }
      : { display: "none" };

  const feedbackMessage = messageStatus.map((el, index) => {
    const classname =
      el.type === 0 ? "alert alert-danger" : "alert alert-primary";
    const display =
      el.display === true ? { display: "block" } : { display: "none" };
    return (
      <div className={classname} key={index} style={display} role="alert">
        <i className="fas fa-info-circle"></i> {el.message}
      </div>
    );
  });

  return (
    <div>
      <div className="container">
        {feedbackMessage}
        <table className="table table-striped table-bordered">
          <thead style={tableHeadStyle}>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Age</th>
              <th scope="col"></th>
            </tr>
          </thead>
          {showContact}
          {newContact}
        </table>
        <div className="add-new-contact">
          <a href="/#" onClick={addNewContact}>
            <span className="plus">+</span> Add new contact
          </a>
        </div>
      </div>
    </div>
  );
};

Body.protoType = {
  contactData: PropTypes.object.isRequired,
  handleInputEvent: PropTypes.func.isRequired,
  editContact: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
  saveNewContact: PropTypes.func.isRequired,
  saveContact: PropTypes.func.isRequired,
  handleInputEventNew: PropTypes.func.isRequired,
  messageStatus: PropTypes.string.isRequired,
  newContactData: PropTypes.object.isRequired,
  addNewContact: PropTypes.func.isRequired
};

export default Body;
