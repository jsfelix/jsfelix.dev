import { ReactElement } from "react";

type SubtitleProps = {
  children: ReactElement | string;
};

export function Subtitle({ children }) {
  return <h2 className="text-xl font-bold mt-6 ml-4 ">{children}</h2>;
}
