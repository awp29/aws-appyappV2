import React from "react";

interface TitleProps {
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <h1 className={"text-4xl font-semibold text-default-900"}>{children}</h1>
  );
};

export default Title;
