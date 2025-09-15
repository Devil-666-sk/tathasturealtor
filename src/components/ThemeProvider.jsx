import React from "react";

const ThemeProvider = ({ children }) => {
  return (
    <div className="font-sans bg-white text-black">
      {children}
    </div>
  );
};

export default ThemeProvider;
