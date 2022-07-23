import {  Stack } from "@chakra-ui/react";
import React from "react";
import { Routes, Route } from "react-router-dom";
import SideBar from "../Components/SideBar";
import HOC from "./HOC";

import Homepage from "./Homepage";
import Login from "./Login";
import SignUp from "./SignUp";
const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <HOC>
              <Stack direction="row">
                <SideBar />
                <Homepage />
              </Stack>
            </HOC>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
