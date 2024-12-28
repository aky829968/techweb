import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AdminContext from "@/context/AdminContext";
import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();
  const { login, admin } = useContext(AdminContext);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    login(input);

    navigate("/admin-dashboard");
  };

  return (
    <div className="max-w-2xl mx-auto my-4 px-4">
      <div className="flex flex-col gap-4">
        <h2>Admin Login</h2>
        <Input
          onChange={handleInput}
          name="email"
          type="email"
          placeholder="Email"
        />
        <Input
          onChange={handleInput}
          name="password"
          type="password"
          placeholder="password"
        />
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
    </div>
  );
};

export default AdminLogin;
