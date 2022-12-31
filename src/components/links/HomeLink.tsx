import Link from "next/link";
import React from "react";

type Props = {
  text: string;
}

function HomeLink({text}:Props) {
  return (
    <Link href={"/"}>
      <p className={`home-link ${text}`}>
        Decen<span className="colored">tralized</span> Voting
      </p>
    </Link>
  );
}

export default HomeLink;
