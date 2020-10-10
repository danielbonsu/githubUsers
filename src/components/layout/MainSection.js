import React from "react";
import UserTable from "./MainTable/UserTable";
import Modal from "./Modal";
const MainSection = () => {
  return (
    <div className="main-section">
      <Modal />
      <UserTable />
    </div>
  );
};

export default MainSection;
