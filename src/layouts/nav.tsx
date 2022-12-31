import React from "react";
import NavLink from '../components/links/NavLink';
import HomeLink from '../components/links/HomeLink'; 
import Button from "../ui/Button";

function Nav() {
  return (
    <nav className="nav">
      <HomeLink text='text-[38px]' />
      <div className="nav-display">
        <NavLink href="/vote" name="vote" />
        <NavLink href="/livescore" name="livescore" />
        <NavLink href="/about" name="about" />
        <Button className="connect" name="connect" />
      </div>
    </nav>
  );
}

export default Nav;
