import React, { useState } from "react";
import { connect } from "react-redux";
import { toggleModal } from "../../redux/actions/uiActions";
import { addUser } from "../../redux/actions/getUsersAction";

const Modal = ({ displayModal, toggleModal, addUser }) => {
  const [data, setData] = useState({
    id: "",
    userName: "",
    siteAdmin: "",
  });

  const { id, siteAdmin, userName } = data;

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.vaue });
    console.log(data);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (id === "" || userName === "" || siteAdmin === "") {
      alert("please enter values for every field");
    } else {
      addUser(data);
    }
  };
  return (
    <div
      className={
        displayModal
          ? "modal-overall display"
          : "modal-overall"
      }
    >
      <div className="modal-overlay"></div>
      <div className="modal-container">
        <div className="modal-content">
          <form onSubmit={onSubmit} className="userForm">
            <div className="form-group">
              <label htmlFor="id">ENTER ID</label>
              <input
                type="text"
                name="id"
                onChange={onChange}
                id=""
                value={id}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="username">
                ENTER USERNAME
              </label>
              <input
                type="text"
                name="userName"
                onChange={onChange}
                value={userName}
                id=""
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="siteAdmin">Site Admin</label>
              <input
                type="text"
                name="siteAdmin"
                onChange={onChange}
                value={siteAdmin}
                id=""
                className="form-control"
              />
            </div>
            <input
              type="submit"
              value="Submit"
              className="submitBTN"
            />
          </form>

          <div className="modal-footer">
            <div
              className="close-btn"
              onClick={toggleModal}
            >
              Close
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  displayModal: state.uiActions.showModal,
});

export default connect(mapStateToProps, {
  toggleModal,
  addUser,
})(Modal);
