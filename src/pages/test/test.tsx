import React, { useState } from "react";
import { subscription } from "../../util/subscription";
import { redemption } from "../../util/redemption";

export default function Test() {
  const [clientPrivateKey, setClientPrivateKey] = useState("");
  const [clientTokenAccount, setClientTokenAccount] = useState("");
  const [clientReceivingAccount, setClientReceivingAccount] = useState("");
  const [mintAuthority, setMintAuthority] = useState("");
  const [mint, setMint] = useState("");
  const [fund, setFund] = useState("");
  const [fundReceivingAccount, setFundReceivingAccount] = useState("");
  const [amount, setAmount] = useState(0);

  const resetUI = () => {
    setClientPrivateKey("");
    setClientTokenAccount("");
    setClientReceivingAccount("");
    setMint("");
    setFund("");
    setFundReceivingAccount("");
    setAmount(0);
  };

  const initSubcription = async() => {
    await subscription(
      clientPrivateKey,
      clientTokenAccount,
      clientReceivingAccount,
      amount,
      mintAuthority,
      mint,
      fundReceivingAccount,
    );
  };

  const initRedemption = async() => {
    await redemption(
      clientPrivateKey,
      clientReceivingAccount,
      clientTokenAccount,
      amount,
      mintAuthority,
      mint,
      fund,
      fundReceivingAccount,
    );
  };

  return (
    <>
      <p className="title">TEST UI</p>
      <div>
        <div className="mb-1">
          <label>Client Private Key</label>
          <input
            className="display-block"
            type="text"
            onChange={e => setClientPrivateKey(e.target.value)}
          />
        </div>
        <div className="mb-1">
          <label>Client Token Account</label>
          <input
            className="display-block"
            type="text"
            onChange={e => setClientTokenAccount(e.target.value)}
          />
        </div>
        <div className="mb-1">
          <label>Client Receiving Account</label>
          <input
            className="display-block"
            type="text"
            onChange={e => setClientReceivingAccount(e.target.value)}
          />
        </div>
        <div className="mb-1">
          <label>Mint Authority</label>
          <input
            className="display-block"
            type="text"
            onChange={e => setMintAuthority(e.target.value)}
          />
        </div>
        <div className="mb-1">
          <label>Mint</label>
          <input
            className="display-block"
            type="text"
            onChange={e => setMint(e.target.value)}
          />
        </div>
        <div className="mb-1">
          <label>Fund Private Key</label>
          <input
            className="display-block"
            type="text"
            onChange={e => setFund(e.target.value)}
          />
        </div>
        <div className="mb-1">
          <label>Fund Receiving Account</label>
          <input
            className="display-block"
            type="text"
            onChange={e => setFundReceivingAccount(e.target.value)}
          />
        </div>
        <div className="mb-1">
          <label>Amount</label>
          <input
            className="display-block"
            type="text"
            onChange={e => setAmount(+e.target.value)}
          />
        </div>
        <button onClick={resetUI}>Reset</button>
        <button onClick={initSubcription}>Subscribe</button>
        <button onClick={initRedemption}>Redeem</button>
      </div>
    </>
  );
}
