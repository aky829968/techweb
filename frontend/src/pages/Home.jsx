import { Button } from "@/components/ui/button";
import Crousel from "@/components/ui/shared/Crousel";
import Services from "@/components/ui/shared/Services";
import Topper from "@/components/ui/shared/Topper";
import { ArrowBigRight, Check, TicketCheck, TicketXIcon } from "lucide-react";
import React from "react";

const Home = () => {
  return (
    <div>
      <Crousel />
      <div className="w-full my-2">
        <h2 className="text-xl  my-3 font-semibold">
          Welcome to Climax Technical Institute
        </h2>
        <img
          className=" rounded border-4 border-red-500"
          src="http://www.ramatech.in/wp-content/uploads/2019/01/home1.jpg"
        />
        <p className="font-medium text-slate-600">
          Climax Technical Institute operates hardware and networking training
          institutes in India. Its courses primarily include basic electronics
          and computer hardware; advanced courses, which comprise Pentium
          computers, notebook, modems, email/Internet, and networking; Linux;
          and masters in network administration course that includes various
          topics, such as wireless network administration, Cisco secure PIX
          firewall, and checkpoint firewall. The company offers courses for
          undergraduates, graduates, engineers, and diploma holders, as well as
          for working professionals. It provides computer-based training,
          audio-visual learning techniques, personality development,
          communication skills, yoga, and stress management.
        </p>
        <Button className="bg-blue-600 my-4 rounded text-white font-semibold">
          Read More
        </Button>
      </div>
      <Services />
      <div className="pl-10">
        <h2 className="text-3xl border-b-2 border-green-400 font-semibold text-slate-700">
          Our Courses
        </h2>
        <h2 className="text-slate-900 text-lg font-semibold">
          Climax Technical Institute
        </h2>
        <div>
          <div className="flex gap-4 mt-2 text-2xl items-center ">
            <div className="bg-yellow-400 p-2 ">
              <ArrowBigRight className="text-white " size="3rem" />
            </div>
            <h2>NEILET Courses</h2>
          </div>
          <div className="flex gap-4 mt-2 text-2xl items-center ">
            <div className="bg-yellow-400 p-2 ">
              <ArrowBigRight className="text-white " size="3rem" />
            </div>
            <h2>Professionals Courses</h2>
          </div>
          <div className="flex gap-4 mt-2 text-2xl items-center ">
            <div className="bg-yellow-400 p-2 ">
              <ArrowBigRight className="text-white " size="3rem" />
            </div>
            <h2>EntrepernurShip Courses</h2>
          </div>
        </div>
      </div>
      <Topper />
    </div>
  );
};

export default Home;
