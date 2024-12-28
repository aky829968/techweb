import React, { useState } from "react";
import AdminContext from "./AdminContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminState = (props) => {
  //   const navigate = useNavigate();
  const isAdmin = JSON.parse(localStorage.getItem("admin"));
  const [admin, setAdmin] = useState({
    login: isAdmin ? true : false,
  });
  console.log(admin);

  const [courses, setCourses] = useState([]);

  const login = async (input) => {
    try {
      const res = await axios.post("http://localhost:3000/admin/login", input, {
        withCredentials: true,
      });
      let data = res.data;
      if (data.success) {
        // console.log(data.user);
        localStorage.setItem("admin", JSON.stringify({ login: true }));
        setAdmin({ login: true });
        // navigate("/admin-dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const logout = async () => {
    try {
      const res = await axios.get("http://localhost:3000/admin/logout", {
        withCredentials: true,
      });
      const data = res.data;
      if (data.success) {
        console.log("logout");
        localStorage.removeItem("admin");
        setAdmin({ login: false });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AdminContext.Provider
      value={{ admin, setAdmin, login, courses, setCourses, logout }}
    >
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminState;
