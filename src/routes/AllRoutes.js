import React from "react";
import { Routes, Route } from "react-router-dom";
import AddUserInfo from "../component/AddUserInfo";
import DempApi from "../component/DempApi";
import EditData from "../component/EditData";

function AllRoutes() {
  return (
    <div>
      <>
        <Routes>
          <Route path="/" element={<AddUserInfo />}></Route>

          <Route path="/ShowInfo" element={<DempApi />}></Route>

          <Route path="/EditData/:id" element={<EditData />}></Route>
        </Routes>
      </>
    </div>
  );
}

export default AllRoutes;
