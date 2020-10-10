import React from "react";
import { removeUser } from "../../../redux/actions/getUsersAction";
import { connect } from "react-redux";

const TableRow = ({
  user: { id, login, site_admin, avatar_url },
  removeUser,
}) => {
  const RemoveUser = () => {
    removeUser(id);
  };
  return (
    <tr className="user-row">
      <td>{id}</td>
      <td>{login}</td>
      <td>{!site_admin && "Not a manager"}</td>
      <td>
        <img src={avatar_url} alt="user img" />
      </td>
      <td>
        <i
          className="fas fa-trash-alt"
          onClick={RemoveUser}
        ></i>
      </td>
    </tr>
  );
};

export default connect(null, { removeUser })(TableRow);
