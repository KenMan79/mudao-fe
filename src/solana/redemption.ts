import { TOKEN_PROGRAM_ID } from "@solana/spl-token";

import {
  Account,
  Connection,
  PublicKey,
  Transaction,
  TransactionInstruction,
} from "@solana/web3.js";

import BN from "bn.js";

const connection = new Connection("http://localhost:8899", "singleGossip");

export const redemption = async(
  clientPrivateKeyByteArray: string,
  clientBurnAccountPubkey: string,
  clientReceivingAccountPubkey: string,
  clientRedemptionAmount: number,
  mintAuthorityPubkey: string,
  mintPubkey: string,
  fundAuthorityPubkey: string,
  fundRedeemingAccountPubkey: string) => {
    const clientTokenAccount = new PublicKey(clientBurnAccountPubkey);
    const clientReceivingAccount = new PublicKey(clientReceivingAccountPubkey);
    const clientDecodedPrivateKey = clientPrivateKeyByteArray.split(',').map(s => parseInt(s));
    const clientAccount = new Account(clientDecodedPrivateKey);
    const mintAuthority = new PublicKey(mintAuthorityPubkey);
    const mint = new PublicKey(mintPubkey);
    const fundAuthority = new PublicKey(fundAuthorityPubkey);
    const fundReceivingAccount = new PublicKey(fundRedeemingAccountPubkey);
    const FUND_PROGRAM_ID = new PublicKey("4rN7fSdF75xWuEhpgNFfRjLHfvF9ZkGWeKNMYVTCu1uJ");

    const redemptionIx = new TransactionInstruction({
      programId: FUND_PROGRAM_ID,
      keys: [
        { pubkey: clientAccount.publicKey, isSigner: true, isWritable: false },
        { pubkey: clientTokenAccount, isSigner: false, isWritable: true },
        { pubkey: clientReceivingAccount, isSigner: false, isWritable: true },
        { pubkey: mintAuthority, isSigner: false, isWritable: false },
        { pubkey: mint, isSigner: false, isWritable: true },
        { pubkey: fundAuthority, isSigner: false, isWritable: false },
        { pubkey: fundReceivingAccount, isSigner: false, isWritable: true },
        { pubkey: TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
      ],
      data: Buffer.from(Uint8Array.of(1, ...new BN(clientRedemptionAmount).toArray("le", 8))),
    });

    const tx = new Transaction().add(redemptionIx);
    await connection.sendTransaction(
      tx,
      [clientAccount],
      {skipPreflight: false, preflightCommitment: "singleGossip"},
    );
};
