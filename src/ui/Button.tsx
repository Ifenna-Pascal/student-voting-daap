import React from "react";

type Props = {
    name: string;
    className: string;
}

function Button({ name, className }: Props) {
  return <button className={`default ${className}`}>{name}</button>;
}

export default Button;
