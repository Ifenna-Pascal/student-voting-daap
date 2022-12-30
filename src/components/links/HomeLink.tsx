import Link from "next/link";
import React from "react";

function HomeLink() {
  return (
    <Link href={"/"}>
      <p className="home-link">
        Decen<span className="colored">tralized</span> Voting
      </p>
    </Link>
  );
}

export default HomeLink;
