import { ReactElement } from "react";

type TitleProps = {
  children: ReactElement | string;
};

export function Title({ children }: TitleProps) {
  return (
    <h1 className="text-3xl font-bold p-4 bg-slate-500 dark:bg-slate-700 text-slate-100">
      {children}
    </h1>
  );
}
