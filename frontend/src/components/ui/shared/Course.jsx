import React from "react";

const Course = ({ ele }) => {
  return (
    <div className="my-4">
      <h2 className="text-2xl font-semibold">{ele.title}</h2>
      <img src="http://www.ramatech.in/wp-content/uploads/2019/04/electrical-aplianca.jpg" />
      <h2 className="text-slate-600 font-semibold">
        Duration : {ele.duration}
      </h2>
      <h2 className="text-slate-600 font-semibold">Price : {ele.price}</h2>
      <p>{ele.description}</p>
    </div>
  );
};

export default Course;
