import { ArrowRight, HomeIcon, Mail, Phone } from "lucide-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-slate-600 py-4 px-2 text-white">
      <img
        className="w-56 h-32"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxC_GSUSYxnaHu81Y1sqcAwqQvDSAzJkTsuw&s"
      />
      <div>
        <h2 className="text-xl font-bold">Important Links</h2>
        <hr className="w-24 h-1 mt-1" />
        <Link
          to="/courses"
          className="text-lg font-semibold flex gap-2 items-center hover:text-slate-300 hover:underline"
        >
          <ArrowRight /> Courses
        </Link>
        <Link
          to="aboutus"
          className="text-lg font-semibold flex gap-2 items-center hover:text-slate-300 hover:underline"
        >
          <ArrowRight /> About
        </Link>
        <Link
          to="/contact"
          className="text-lg font-semibold flex gap-2 items-center hover:text-slate-300 hover:underline"
        >
          <ArrowRight /> Contact
        </Link>
      </div>
      <div>
        <h2 className="text-xl font-bold">Contact Us</h2>
        <hr className="w-24 h-1 mt-1" />
        <div className="text-lg font-semibold flex gap-2 items-center hover:text-slate-300 hover:underline">
          <HomeIcon /> Climax Technical Institue
          <br />
          Nighoa Market, Lucknow,U.P,226301
        </div>
        <div className="text-lg font-medium flex gap-2 items-center hover:text-slate-300 hover:underline">
          <Phone /> +911234567890
        </div>
        <div className="text-lg font-medium flex gap-2 items-center text-red-500 hover:text-slate-300 hover:underline">
          <Mail /> abc@gmail.com
        </div>
      </div>
      <div className="bg-gray-500">
        <div className="text-center mt-4 py-3">
          <p>
            Copyright @ 2019 Climax Techncal Institute <br />
            Design By :<span className="text-red-500">Asd soft</span>
          </p>
          <div className="text-center mt-4">
            <Link to="/" className="border-r-2 px-2 hover:text-slate-600">
              Home
            </Link>
            <Link
              to="/aboutus"
              className="border-r-2 px-2 hover:text-slate-600"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="border-r-2 px-2 hover:text-slate-600"
            >
              Conatact
            </Link>
            <Link to="/courses" className=" px-2 hover:text-slate-600">
              Courses
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
