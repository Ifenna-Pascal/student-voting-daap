import React from "react";

type Props = {
    name: string;
    className: string;
    onClick?: () => void;
}

function Button({ name, className, onClick }: Props) {
  return <button className={`default ${className}`} onClick= {onClick}>{name}</button>;
}

export default Button;
