import React from "react";
import Child from "./Child";

const Parent = () => {
  return (
    <div className="min-h-screen bg-gradient-radial from-blue-100 to-purple-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Team Members</h1>
        <div className="space-y-4">
          <Child name="Carry" age={19} gender="Female" />
          <Child name="Hamdan Bhatti" age={21} gender="Male" />
          <Child name="Amily" age={22} gender="Female" />
        </div>
      </div>
    </div>
  );
};

export default Parent;
