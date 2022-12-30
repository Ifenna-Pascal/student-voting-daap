import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  name: string;
}

function NavLink({ href, name }: Props) {
  return (
    <Link href={href}>
      <p className="nav-link">{name}</p>
    </Link>
  );
}

export default NavLink;
