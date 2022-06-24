import React from "react";

const Spinner = () => {
  return (
    <div >
      <div class="flex justify-center items-center py-10">
      <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full bg-red-500" role="status">
  </div>
      </div>
    </div>
  );
};

export default Spinner;
