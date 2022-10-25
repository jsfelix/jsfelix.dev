import { Title } from "./Title";

type HeaderProps = {
  title: string;
};

export function Header({ title }) {
  return (
    <header>
      <Title>{title}</Title>
    </header>
  );
}
