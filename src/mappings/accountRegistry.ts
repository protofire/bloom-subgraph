import {
  AccountRegistryLogic,
  AddressLinked,
  AddressUnlinked
} from "../../generated/AccountRegistryLogic/AccountRegistryLogic";
import { BigInt, log } from "@graphprotocol/graph-ts";
import {
  getOrCreateAccount,
  getOrCreateAddress,
  getOrCreateLinkHistoryItem
} from "./util";

export function handleAddressLinked(event: AddressLinked): void {
  let currentAddressString = event.params.currentAddress.toHexString();
  let newAddressString = event.params.newAddress.toHexString();
  let linkId = event.params.linkId.toString();

  let currentAccount = getOrCreateAccount(linkId);
  let currentAddress = getOrCreateAddress(currentAddressString);
  let newAddress = getOrCreateAddress(newAddressString);

  currentAddress.account = linkId;
  if (currentAddress.latestLinkBlock == null) {
    currentAddress.latestLinkBlock = event.block.number;
  }

  newAddress.account = linkId;
  newAddress.latestLinkBlock = event.block.number;

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
    address.latestLinkBlock as BigInt,
    event.block.number
  );

  address.account = null;
  //removeAttestations(address, account);
  address.save();
}
