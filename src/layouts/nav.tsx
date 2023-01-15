import React, { useState } from "react";
import NavLink from '../components/links/NavLink';
import HomeLink from '../components/links/HomeLink'; 
import Button from "../ui/Button";
import { useContractHook } from "../context/contract.context";
import { shortner } from "../utility/account-shortner";
import WalletConnectModal from "../modals/walletConnectModal";

function Nav() {
  const contractHook = useContractHook();
  const [displayModal, setDisplayModal] = useState<Boolean>(false);
  const toggleDisplay = () => {
    setDisplayModal(!displayModal);
  }
  return (
    <nav className="nav">
      <HomeLink text='text-[38px]' />
      <div className="nav-display">
        <NavLink href="/dashboard" name="vote" />
        <NavLink href="/livescore" name="livescore" />
        <NavLink href="/about" name="about" />
        <div className="flex flex-col relative">
        <Button className="connect" name={contractHook?.account ? shortner(contractHook?.account) : "connect"} onClick={contractHook?.account ? toggleDisplay : contractHook?.walletConnect } />
        {displayModal && <WalletConnectModal />}
        </div>
      </div>
    </nav>
  );
}

export default Nav;


