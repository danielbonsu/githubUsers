import React, { Fragment } from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const UserTable = () => {
  return (
    <Fragment>
      <table className="main-table">
        <TableHeader />
        <TableBody />
      </table>
    </Fragment>
  );
};

export default UserTable;
