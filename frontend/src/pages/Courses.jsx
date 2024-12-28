import Course from "@/components/ui/shared/Course";
import AdminContext from "@/context/AdminContext";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

const Courses = () => {
  // const { courses } = useContext(AdminContext);
  const [courses, setCourses] = useState([]);
  const getAllCourse = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/course/getallcourse",

        { withCredentials: true }
      );
      const data = res.data;
      if (data.success) {
        console.log(data.courses);
        setCourses(data.courses);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllCourse();
  }, []);
  return (
    <div className="px-6">
      {courses?.map((ele, idx) => {
        return <Course ele={ele} />;
      })}
    </div>
  );
};

export default Courses;
