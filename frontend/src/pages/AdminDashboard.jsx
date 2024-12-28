import React from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="md:max-w-5xl max-w-2xl mx-auto px-4">
      AdminDashboard
      <div>
        <div
          onClick={() => navigate("/admin/courses")}
          className="max-w-32 mx-auto p-2 bg-blue-500 my-2 cursor-pointer text-center rounded "
        >
          <h2 className="text-xl font-semibold text-white">All Courses</h2>
          <h2 className="text-xl font-semibold text-white">10</h2>
        </div>
        <div
          onClick={() => navigate("/admin/student")}
          className="max-w-32 mx-auto p-2 bg-blue-500 my-4 text-center rounded "
        >
          <h2 className="text-xl font-semibold text-white">All students</h2>
          <h2 className="text-xl font-semibold text-white">10</h2>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
