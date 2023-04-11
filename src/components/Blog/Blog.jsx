import React from "react";

const Blog = () => {
  return (
    <div className="px-4 py-16  md:px-24 lg:px-28 lg:py-20">
      <h2 className="text-center text-4xl font-bold text-gray-900">Question and Answer</h2>
      <div class="grid lg:grid-cols-3 gap-6 mt-10">
        <div class="space-y-4 border-2 p-4 border-dotted rounded-lg border-indigo-500">
          <h2 class="lg:text-2xl font-bold">1. When should you use context API?</h2>
          <p class="text-gray-700 font-medium lg:text-xl">
            The Context API is primarily used when some data needs to be accessible by many components at different nesting levels. This is the alternative to "prop drilling" or moving props from
            grandparent to child to parent.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
