import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AdminContext from "@/context/AdminContext";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

const AdminCourses = () => {
  const [input, setInput] = useState({
    title: "",
    price: "",
    duration: "",
    price: "",
    file: "",
  });
  // const [courses, setCourses] = useState([]);
  const { courses, setCourses } = useContext(AdminContext);
  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3000/course/create-course",
        input,
        { withCredentials: true }
      );
      const data = res.data;
      if (data.success) {
        console.log(data);
        getAllCourse();
      }
    } catch (error) {
      console.log(error);
    }
  };
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
  const deleteCourse = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:3000/course/delete-course/${id}`,

        { withCredentials: true }
      );
      const data = res.data;
      if (data.success) {
        console.log(data);
        // setCourses(data.courses);
        getAllCourse();
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllCourse();
  }, []);
  return (
    <div className="md:max-5xl  max-w-2xl px-3 my-4  mx-auto">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">All Courses</h2>

        <Dialog>
          <DialogTrigger>
            <Button>Add Course</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Course</DialogTitle>
              <DialogDescription>
                <div className="flex flex-col gap-4 mt-4">
                  <Input
                    onChange={handleInput}
                    name="title"
                    placeholder="Title"
                    required
                    type="text"
                  />
                  <Input
                    name="duration"
                    onChange={handleInput}
                    placeholder="Duration"
                    required
                    type="text"
                  />
                  <Input
                    name="price"
                    onChange={handleInput}
                    placeholder="Price"
                    required
                    type="number"
                  />
                  <textarea
                    name="description"
                    onChange={handleInput}
                    className="border-2 rounded px-2 text-lg"
                    placeholder="Description "
                    required
                    type="text"
                  />
                  <Input type="file" />
                </div>
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button onClick={handleSubmit}>Add Course</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <Table>
        <TableCaption>A list of all Courses</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {courses?.map((ele, idx) => {
            return (
              <TableRow key={idx}>
                <TableCell className="">{ele.title}</TableCell>
                <TableCell>{ele.duration}</TableCell>
                <TableCell>{ele.description}</TableCell>
                <TableCell className="text-right">
                  <Button
                    onClick={() => deleteCourse(ele._id)}
                    className="px-2"
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminCourses;
