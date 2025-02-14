import React from "react";

interface DescriptionProps {
  children: React.ReactNode;
}

const Description: React.FC<DescriptionProps> = ({ children }) => {
  return <p className="text-default-500 text-sm mt-1">{children}</p>;
};

export default Description;
