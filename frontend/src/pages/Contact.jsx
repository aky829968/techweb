import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { Clock, LocateIcon, Mail, MapIcon, MapPin, Phone } from "lucide-react";
import React, { useState } from "react";

const Contact = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
    query: "",
  });

  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleQuery = async () => {
    try {
      const res = await axios.post("http://localhost:3000/user/query", input);
      let data = res.data;
      if (data.success) {
        console.log("email send successfully");
        setInput({
          name: "",
          email: "",
          phone: "",
          query: "",
        });
      }
    } catch (error) {}
  };
  return (
    <div className="max-w-5xl mx-auto my-4 p-3">
      <div className="flex flex-col items-center w-full gap-4 mt-4">
        <div className="flex flex-col text-center items-center gap-2">
          <div className="w-14 h-14 rounded-full bg-red-600 flex justify-center items-center text-white">
            <MapPin size={30} />
          </div>
          <h2 className="font-medium">
            <b className="text-amber-900">Climax Technical Institute</b>
            <br />
            Nighoa Market,Lucknow,226301
          </h2>
        </div>
        <div className="flex flex-col text-center items-center gap-2">
          <div className="w-14 h-14 rounded-full bg-red-600 flex justify-center items-center text-white">
            <Phone size={30} />
          </div>
          <h2 className="font-medium">
            <b>+91 1234567890</b>
          </h2>
        </div>
        <div className="flex flex-col text-center items-center gap-2">
          <div className="w-14 h-14 rounded-full bg-red-600 flex justify-center items-center text-white">
            <Mail size={30} />
          </div>
          <h2 className="font-medium">
            <b>abc@gmail.com</b>
          </h2>
        </div>
        <div className="flex flex-col text-center items-center gap-2">
          <div className="w-14 h-14 rounded-full bg-red-600 flex justify-center items-center text-white">
            <Clock size={30} />
          </div>
          <h2 className="font-medium">
            <b>
              7:00 AM TO 6:00 PM <br />
              "Sunday Close"
            </b>
          </h2>
        </div>
      </div>
      <hr className="h-1 bg-slate-300" />
      <form className="border-2 rounded px-3 py-2 mt-6">
        <Label className="text-lg">Name(Required)</Label>
        <Input
          onChange={handleInput}
          name="name"
          required
          className="border-2 border-slate-600"
        />
        <Label className="text-lg">Email(Required)</Label>
        <Input
          onChange={handleInput}
          name="email"
          type="email"
          required
          className="border-2 border-slate-600"
        />
        <Label className="text-lg">Phone No.(Required)</Label>
        <Input
          onChange={handleInput}
          name="phone"
          type="number"
          required
          className="border-2 border-slate-600"
        />
        <Label className="text-lg">Questions(Required)</Label>
        <textarea
          onChange={handleInput}
          name="query"
          required
          className="border-2 block w-full border-slate-600"
        />
        <Button onClick={handleQuery} className="bg-blue-600 mt-2 px-5">
          Submit
        </Button>
      </form>
      <div>
        <iframe></iframe>
      </div>
    </div>
  );
};

export default Contact;
