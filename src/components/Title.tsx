import { ReactElement } from "react";

type TitleProps = {
  children: ReactElement | string;
};

export function Title({ children }: TitleProps) {
  return <h1>{children}</h1>;
}
