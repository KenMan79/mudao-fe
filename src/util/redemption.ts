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
  mintPubkey: string,
  fundRedeemingAccountPubkey: string,
  fundPrivateKeyByteArray: string) => {
    const clientTokenAccount = new PublicKey(clientBurnAccountPubkey);
    const clientReceivingAccount = new PublicKey(clientReceivingAccountPubkey);
    const clientDecodedPrivateKey = clientPrivateKeyByteArray.split(',').map(s => parseInt(s));
    const clientAccount = new Account(clientDecodedPrivateKey);
    const fundDecodedPrivateKey = fundPrivateKeyByteArray.split(',').map(s => parseInt(s));
    const fundId = new Account(fundDecodedPrivateKey);
    const mint = new PublicKey(mintPubkey);
    const fundReceivingAccount = new PublicKey(fundRedeemingAccountPubkey);

    const redemptionIx = new TransactionInstruction({
      programId: fundId.publicKey,
      keys: [
        { pubkey: clientAccount.publicKey, isSigner: true, isWritable: false },
        { pubkey: clientTokenAccount, isSigner: false, isWritable: true },
        { pubkey: clientReceivingAccount, isSigner: false, isWritable: true },
        { pubkey: mint, isSigner: false, isWritable: true },
        { pubkey: fundId.publicKey, isSigner: true, isWritable: false },
        { pubkey: fundReceivingAccount, isSigner: false, isWritable: true },
        { pubkey: TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
      ],
      data: Buffer.from(Uint8Array.of(0, ...new BN(clientRedemptionAmount).toArray("le", 8))),
    });

    const tx = new Transaction().add(redemptionIx);
    await connection.sendTransaction(
      tx,
      [clientAccount, fundId],
      {skipPreflight: false, preflightCommitment: "singleGossip"},
    );
};
  
