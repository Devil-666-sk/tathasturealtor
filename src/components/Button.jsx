import React from "react";
import clsx from "clsx";

const Button = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={clsx(
        "bg-gold text-black px-5 py-2 rounded-lg font-semibold shadow-md hover:bg-black hover:text-gold transition-colors duration-300 animate-fade-in",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
