import React from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

interface LinkProps {
  to: string;
  children: React.ReactNode;
}

const Link: React.FC<LinkProps> = (props) => {
  const { to, children } = props;

  return (
    <NavLink to={to} className="group">
      <div
        className={clsx(
          "flex items-center h-8 w-full px-3 rounded-lg hover:bg-default-200 group-[.active]:bg-default-200"
        )}
      >
        <span
          className={clsx(
            "text-default-600 text-sm flex gap-1 items-center font-medium",
            "group-[.active]:text-default-900 group-[.active]:font-semibold"
          )}
        >
          {children}
        </span>
      </div>
    </NavLink>
  );
};

export default Link;
