import {
  HelpIcon,
  PeopleIcon,
  PieChartIcon,
  SettingsIcon,
} from "@/components/icons";
import Nav from "@/components/nav/nav";
import { ThemeSwitch } from "@/components/theme-switch";
import clsx from "clsx";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export default function DefaultLayout(props: DefaultLayoutProps) {
  const { children } = props;

  return (
    <div className="relative flex w-full pb-12">
      <Nav>
        <Nav.Title />

        <ul className="mt-12 flex flex-col gap-1">
          <li>
            <Nav.Link to="/">
              <PieChartIcon size={20} /> Dashboard
            </Nav.Link>
          </li>

          <li>
            <Nav.Link to="/employees">
              <PeopleIcon size={20} /> Employees
            </Nav.Link>
          </li>

          <li>
            <Nav.Link to="/settings">
              <SettingsIcon size={20} /> Settings
            </Nav.Link>
          </li>

          <li>
            <Nav.Link to="/help">
              <HelpIcon size={20} /> Help
            </Nav.Link>
          </li>
        </ul>
      </Nav>

      <div className={clsx("flex flex-col px-8 flex-1")}>
        <ThemeSwitch className="absolute top-7 right-5" />
        {children}
      </div>
    </div>
  );
}
