import { TOKEN_PROGRAM_ID } from "@solana/spl-token";

import {
  Account,
  Connection,
  PublicKey,
  Transaction,
  TransactionInstruction,
} from "@solana/web3.js";

import BN from "bn.js";
//import { targetCluster, COMMITMENT } from "./targetCluster";

const connection = new Connection("http://localhost:8899", "singleGossip");

export const subscription = async(
  clientPrivateKeyByteArray: string,
  clientTokenAccountPubkey: string,
  clientReceivingAccountPubkey: string,
  clientTransferAmount: number,
  mintAuthorityPubkey: string,
  mintPubkey: string,
  fundReceivingAccountPubkey: string) => {
    const clientDecodedPrivateKey = clientPrivateKeyByteArray.split(',').map(s => parseInt(s));
    const clientAccount = new Account(clientDecodedPrivateKey);
    const clientTokenAccount = new PublicKey(clientTokenAccountPubkey);
    const clientReceivingAccount = new PublicKey(clientReceivingAccountPubkey);
    const mintAuthority = new PublicKey(mintAuthorityPubkey);
    const mint = new PublicKey(mintPubkey);
    const fundReceivingAccount = new PublicKey(fundReceivingAccountPubkey);
    const FUND_PROGRAM_ID = new PublicKey("4rN7fSdF75xWuEhpgNFfRjLHfvF9ZkGWeKNMYVTCu1uJ");

    const subscriptionIx = new TransactionInstruction({
      programId: FUND_PROGRAM_ID,
      keys: [
        { pubkey: clientAccount.publicKey, isSigner: true, isWritable: false },
        { pubkey: clientTokenAccount, isSigner: false, isWritable: true },
        { pubkey: clientReceivingAccount, isSigner: false, isWritable: true },
        { pubkey: mintAuthority, isSigner: false, isWritable: false },
        { pubkey: mint, isSigner: false, isWritable: true },
        { pubkey: fundReceivingAccount, isSigner: false, isWritable: true },
        { pubkey: TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
      ],
      data: Buffer.from(Uint8Array.of(0, ...new BN(clientTransferAmount).toArray("le", 8))),
    });

    const tx = new Transaction().add(subscriptionIx);
    await connection.sendTransaction(
      tx,
      [clientAccount],
      {skipPreflight: false, preflightCommitment: "singleGossip"},
    );
    console.log("Success?");
};
