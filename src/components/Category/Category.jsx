import React from "react";

const Category = ({ list }) => {
  const { category_logo, category_name, jobs_available } = list;

  return (
    <div className="border-1 rounded-lg py-10 lg:pl-10 bg-indigo-600 bg-opacity-5 space-y-4  text-center lg:text-left">
      <img className="w-20 h-20 rounded-lg mx-auto lg:mx-0" src={category_logo} alt="" />
      <h2 className="font-bold text-lg text-zinc-700">{category_name}</h2>
      <p className="text-zinc-500 font-medium">{jobs_available} Jobs Available</p>
    </div>
  );
};

export default Category;
