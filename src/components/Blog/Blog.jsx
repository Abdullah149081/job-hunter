import React from "react";

const Blog = () => {
  return (
    <section className="px-4 py-16  md:px-24 lg:px-28 lg:py-20">
      <h2 className="text-center text-4xl font-bold text-gray-900">Question and Answer</h2>
      <div class="grid lg:grid-cols-3 gap-6 mt-10">
        <div class="space-y-4 border-2 p-4 border-dotted rounded-lg border-indigo-500">
          <h2 class="lg:text-2xl font-bold">1. When should you use context API ?</h2>
          <p class="text-gray-700 font-medium lg:text-xl">
            The Context API is primarily used when some data needs to be accessible by many components at different nesting levels. This is the alternative to "prop drilling" or moving props from
            grandparent to child to parent.
          </p>
        </div>
        {/* Q-2 */}
        <div class="space-y-4 border-2 p-4 border-dotted rounded-lg border-indigo-500">
          <h2 class="lg:text-2xl font-bold">2. What is a custom hook ?</h2>
          <p class="text-gray-700 font-medium lg:text-xl">
            As a result of using custom hook, we can reuse the code, which increases the readability of the code, as a result, many complex problems can be solved, when the same work or same code
            needs to be written repeatedly, we can solve this problem by using custom hook. (use) should be written at the beginning.
          </p>
        </div>
        {/* Q-3 */}
        <div class="space-y-4 border-2 p-4 border-dotted rounded-lg border-indigo-500">
          <h2 class="lg:text-2xl font-bold">3. What is useRef ?</h2>
          <p class="text-gray-700 font-medium lg:text-xl">
            useRef is a React Hook that lets you reference a value that’s not needed for rendering.useRef returns an object with a single property.By using this we can access and manipulate DOM
            elements directly.Implementing a stopwatch,focus on an input.
          </p>
        </div>
        {/* Q -4 */}
        <div class="space-y-4 border-2 p-4 border-dotted rounded-lg border-indigo-500">
          <h2 class="lg:text-2xl font-bold">3. What is useMemo ?</h2>
          <p class="text-gray-700 font-medium lg:text-xl">
            useMemo is a React hook that allows you to cache the result of a calculation between re-renders. This means useMemo() to prevent unnecessary re-rendering so that one blocking doesn't
            damage another. Application performance can be enhanced when this hook is used in the right place. useMemo returns a memoized value.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
