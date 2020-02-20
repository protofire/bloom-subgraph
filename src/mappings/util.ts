import {
  Attestation,
  Address as BloomAddress,
  Account,
  LinkHistoryItem,
  TokenEscrowDeposit,
  TokenEscrowPayment,
  TokenEscrowWithdrawal
} from "../../generated/schema";
import {
  TokenMarketplaceWithdrawal,
  TokenMarketplaceDeposit,
  TokenMarketplaceEscrowPayment
} from "../../generated/TokenEscrowMarketplace/TokenEscrowMarketplace";
import { BigInt, Address } from "@graphprotocol/graph-ts";

let ZERO = BigInt.fromI32(0);

function getOrCreateAddress(
  addressString: string,
  persist: boolean = true
): BloomAddress {
  let address = BloomAddress.load(addressString);

  if (address == null) {
    address = new BloomAddress(addressString);
    address.bltBalance = ZERO;
    address.escrowBalance = ZERO;

    if (persist) {
      address.save();
    }
  }

  return address as BloomAddress;
}

function getOrCreateAccount(linkId: string, persist: boolean = true): Account {
  let account = Account.load(linkId);

  if (account == null) {
    account = new Account(linkId);

    if (persist) {
      account.save();
    }
  }

  return account as Account;
}

function getOrCreateLinkHistoryItem(
  account: string,
  addressString: string,
  startBlock: BigInt,
  endBlock: BigInt,
  persist: boolean = true
): LinkHistoryItem {
  let linkHistoryItemId =
    addressString + "-" + account + "-" + startBlock.toString();
  let linkHistoryItem = LinkHistoryItem.load(linkHistoryItemId);

  if (linkHistoryItem == null) {
    linkHistoryItem = new LinkHistoryItem(linkHistoryItemId);
    linkHistoryItem.account = account;
    linkHistoryItem.address = addressString;
    linkHistoryItem.creationBlock = startBlock;
    linkHistoryItem.deletionBlock = endBlock;

    if (persist) {
      linkHistoryItem.save();
    }
  }

  return linkHistoryItem as LinkHistoryItem;
}

function getOrCreateAttestation(attestationId: string): Attestation {
  let attestation = Attestation.load(attestationId);

  if (attestation == null) {
    attestation = new Attestation(attestationId);
  }

  return attestation as Attestation;
}

function getOrCreateTokenEscrowWithdrawal(
  event: TokenMarketplaceWithdrawal,
  persist: boolean = true
): TokenEscrowWithdrawal {
  let transactionId =
    event.transaction.hash.toHex() + "-" + event.logIndex.toString();
  let transaction = TokenEscrowWithdrawal.load(transactionId);

  if (transaction == null) {
    transaction = new TokenEscrowWithdrawal(transactionId);
    transaction.timestamp = event.block.timestamp;
    transaction.block = event.block.number;
    transaction.transaction = event.transaction.hash;

    transaction.escrowPayer = event.params.escrowPayer.toHexString();
    transaction.amount = event.params.amount;

    if (persist) {
      transaction.save();
    }
  }

  return transaction as TokenEscrowWithdrawal;
}

function getOrCreateTokenEscrowDeposit(
  event: TokenMarketplaceDeposit,
  persist: boolean = true
): TokenEscrowDeposit {
  let transactionId =
    event.transaction.hash.toHex() + "-" + event.logIndex.toString();
  let transaction = TokenEscrowDeposit.load(transactionId);

  if (transaction == null) {
    transaction = new TokenEscrowDeposit(transactionId);
    transaction.timestamp = event.block.timestamp;
    transaction.block = event.block.number;
    transaction.transaction = event.transaction.hash;

    transaction.escrowPayer = event.params.escrowPayer.toHexString();
    transaction.amount = event.params.amount;

    if (persist) {
      transaction.save();
    }
  }

  return transaction as TokenEscrowDeposit;
}

function getOrCreateTokenEscrowPayment(
  event: TokenMarketplaceEscrowPayment,
  persist: boolean = true
): TokenEscrowPayment {
  let transactionId =
    event.transaction.hash.toHex() + "-" + event.logIndex.toString();
  let transaction = TokenEscrowPayment.load(transactionId);

  if (transaction == null) {
    transaction = new TokenEscrowPayment(transactionId);
    transaction.timestamp = event.block.timestamp;
    transaction.block = event.block.number;
    transaction.transaction = event.transaction.hash;

    transaction.escrowPayer = event.params.escrowPayer.toHexString();
    transaction.escrowPayee = event.params.escrowPayee.toHexString();
    transaction.amount = event.params.amount;

    if (persist) {
      transaction.save();
    }
  }

  return transaction as TokenEscrowPayment;
}

export {
  getOrCreateAddress,
  getOrCreateAccount,
  getOrCreateLinkHistoryItem,
  getOrCreateAttestation,
  getOrCreateTokenEscrowWithdrawal,
  getOrCreateTokenEscrowDeposit,
  getOrCreateTokenEscrowPayment
};
