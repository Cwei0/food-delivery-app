import { ReactNode, MouseEvent } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

export const Button = ({ children, onClick }: ButtonProps) => {
  return <button className="custom-button" onClick={onClick}>{children}</button>;
};
