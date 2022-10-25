import { Title } from "./Title";

type HeaderProps = {
  title: string;
};

export function Header({ title }) {
  return (
    <header className="text-3xl font-bold p-4 bg-slate-500 dark:bg-slate-700 text-slate-100">
      <div className="max-w-6xl m-auto">
        <Title>{title}</Title>
      </div>
    </header>
  );
}
