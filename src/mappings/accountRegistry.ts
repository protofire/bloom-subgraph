import {
  AddressLinked,
  AddressUnlinked
} from "../../generated/AccountRegistryLogic/AccountRegistryLogic";
import {
  getOrCreateAccount,
  getOrCreateAddress,
  getOrCreateLinkHistoryItem,
  transferAttestations,
  removeAttestations
} from "./util";
import { BigInt, log } from "@graphprotocol/graph-ts";

export function handleAddressLinked(event: AddressLinked): void {
  let currentAddressString = event.params.currentAddress.toHexString();
  let newAddressString = event.params.newAddress.toHexString();
  let linkId = event.params.linkId;

  let currentAccount = getOrCreateAccount(linkId.toString());
  let currentAddress = getOrCreateAddress(currentAddressString);
  let newAddress = getOrCreateAddress(newAddressString);

  currentAddress.account = currentAccount.id;
  if (currentAddress.latestLinkBlock == null) {
    currentAddress.latestLinkBlock = event.block.number;
    //transferAttestations(currentAddress, currentAccount);
  }
  newAddress.account = currentAccount.id;
  newAddress.latestLinkBlock = event.block.number;
  //transferAttestations(newAddress, currentAccount);

  currentAddress.save();
  newAddress.save();
}

export function handleAddressUnlinked(event: AddressUnlinked): void {
  let addressString = event.params.addressToRemove.toHexString();
  let address = getOrCreateAddress(addressString);
  //let account = getOrCreateAccount(address.account);

  let newLinkHistoryItem = getOrCreateLinkHistoryItem(
    address.account,
    addressString,
    address.latestLinkBlock as BigInt
  );

  address.account = null;
  //removeAttestations(address, account);
  address.save();
}
