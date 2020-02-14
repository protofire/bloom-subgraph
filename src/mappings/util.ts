import {
  Attestation,
  Address as BloomAddress,
  Account,
  LinkHistoryItem
} from "../../generated/schema";
import { BigInt, Address } from "@graphprotocol/graph-ts";

function getOrCreateAddress(
  addressString: string,
  persist: boolean = true
): BloomAddress {
  let address = BloomAddress.load(addressString);

  if (address == null) {
    address = new BloomAddress(addressString);

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
  block: BigInt,
  persist: boolean = true
): LinkHistoryItem {
  let linkHistoryItemId =
    addressString + "-" + account + "-" + block.toString();
  let linkHistoryItem = LinkHistoryItem.load(linkHistoryItemId);

  if (linkHistoryItem == null) {
    linkHistoryItem = new LinkHistoryItem(linkHistoryItemId);
    linkHistoryItem.account = account;
    linkHistoryItem.address = addressString;
    linkHistoryItem.creationBlock = block;

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

function transferAttestations(
  fromAddress: BloomAddress,
  toAccount: Account
): void {
  let subjectOfAttestations = fromAddress.subjectOf || [];
  for (let i = 0; i < subjectOfAttestations.length; i++) {
    let attestation = Attestation.load(subjectOfAttestations[i]);
    if (attestation == null) continue;
    attestation.subjectAccount = toAccount.id;
    attestation.save();
  }
  let attesterOfAttestations = fromAddress.attesterOf || [];
  for (let i = 0; i < attesterOfAttestations.length; i++) {
    let attestation = Attestation.load(attesterOfAttestations[i]);
    if (attestation == null) continue;
    attestation.attesterAccount = toAccount.id;
    attestation.save();
  }
}

function removeAttestations(
  fromAddress: BloomAddress,
  toAccount: Account
): void {
  let subjectOfAttestations = fromAddress.subjectOf || [];
  for (let i = 0; i < subjectOfAttestations.length; i++) {
    let attestation = Attestation.load(subjectOfAttestations[i]);
    if (attestation == null) continue;
    attestation.subjectAccount = null;
    attestation.save();
  }
  let attesterOfAttestations = fromAddress.attesterOf || [];
  for (let i = 0; i < attesterOfAttestations.length; i++) {
    let attestation = Attestation.load(attesterOfAttestations[i]);
    if (attestation == null) continue;
    attestation.attesterAccount = null;
    attestation.save();
  }
}

export {
  getOrCreateAddress,
  getOrCreateAccount,
  getOrCreateLinkHistoryItem,
  getOrCreateAttestation,
  transferAttestations,
  removeAttestations
};
