import React from "react";
import clsx from "clsx";

const Typography = ({ variant = "body", className, children }) => {
  const baseStyles = {
    h1: "text-h1 font-heading text-black animate-fade-in",
    h2: "text-h2 font-heading text-black animate-fade-in",
    h3: "text-h3 font-heading text-black animate-fade-in",
    body: "text-body text-black animate-fade-in",
    small: "text-small text-gray-700 animate-fade-in",
  };

  return (
    <p className={clsx(baseStyles[variant], className)}>
      {children}
    </p>
  );
};

export default Typography;
