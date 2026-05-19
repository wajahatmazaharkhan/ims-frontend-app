import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div className="min-h-screen dark:bg-slate-950">{children}</div>
  );
};

export default Wrapper;
