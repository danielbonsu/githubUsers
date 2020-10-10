import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { toggleModal } from "../../../redux/actions/uiActions";
import Spinner from "../Spinner";

const TableHeader = ({ toggleModal, loading }) => {
  const displayModal = () => {
    toggleModal();
  };

  return (
    <Fragment>
      <div className="addUser" onClick={displayModal}>
        <span>Add User</span>
        <i className="fas fa-plus" />
      </div>
      <tr className="table-header">
        <td>{loading ? <Spinner /> : "Login"}</td>
        <td>UserName</td>
        <td>Site Admin</td>
        <td>Image</td>
        <td>Remove</td>
      </tr>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  loading: state.allUsers.loading,
});

export default connect(mapStateToProps, { toggleModal })(
  TableHeader
);
