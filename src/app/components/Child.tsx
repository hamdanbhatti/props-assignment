import React from "react";

interface ChildProps {
  name: string;
  age: number;
  gender: string;
}

const Child = ({ name, age, gender }: ChildProps) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4">
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center ${
            gender === "Female"
              ? "bg-pink-100 text-pink-600"
              : "bg-blue-100 text-blue-600"
          }`}
        >
          {name.charAt(0)}
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
          <div className="flex gap-4 text-gray-600">
            <span>{age} years old</span>
            <span>•</span>
            <span>{gender}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Child;
