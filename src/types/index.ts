import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

// AP-TODO: Can I derive this type from the backend schema? somehow?
export type Employee = {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  team: string;
  notes?: string | null;
  readonly id: string;
  readonly createdAt: string;
  readonly updatedAt: string;
};
