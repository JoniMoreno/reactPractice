import { MouseEvent } from "react";
import { ButtonProps } from "../types/ButtonProps";


const Button = ({ children, onClick, color = 'primary' }: ButtonProps) => {
  return <button className={"btn btn-" + color} onClick={onClick}>{children}</button>;
};

export default Button;
