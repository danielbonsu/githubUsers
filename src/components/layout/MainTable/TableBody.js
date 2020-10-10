import React, { useEffect } from "react";
import { connect } from "react-redux";
import TableRow from "./TableRow";
import { getUsers } from "../../../redux/actions/getUsersAction";

const TableBody = ({ users, getUsers }) => {
  useEffect(() => {
    getUsers();

    //eslint-disable-next-line
  }, []);
  return (
    <tbody>
      {users &&
        users
          .filter((user) => user.id < 11)
          .map((user) => (
            <TableRow key={user.id} user={user} />
          ))}
    </tbody>
  );
};

const mapStateToProps = (state) => ({
  users: state.allUsers.users,
});
export default connect(mapStateToProps, { getUsers })(
  TableBody
);
