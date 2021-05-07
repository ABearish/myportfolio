import React from "react";

const Loading = () => {
  return (
    <section className="bg-green-100 min-h-screen p-12">
    <div className="relative flex justify-center">
      <button className="animate-ping inline-block py-4 px-8 bg-blue-500 text-blue-100 rounded-lg">
        Loading
      </button>
    </div>
    </section>
  );
};

export default Loading;
