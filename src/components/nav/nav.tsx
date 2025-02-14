import clsx from "clsx";
import React from "react";
import Title from "./title";
import Link from "./link";

interface NavProps {
  children: React.ReactNode;
}

interface NavComponent extends React.FC<NavProps> {
  Title: typeof Title;
  Link: typeof Link;
}

const Nav: NavComponent = ({ children }) => {
  return (
    <div className={clsx("w-64")}>
      <nav
        className={clsx(
          "fixed w-64 h-screen bg-default-100 border-r border-default-200 p-3"
        )}
      >
        {children}
      </nav>
    </div>
  );
};

Nav.Title = Title;
Nav.Link = Link;

export default Nav;
