import { getOrCreateIdentityAndAddress } from "./util";
import { Transfer } from "../../generated/BloomToken/ERC20";

export function handleTransfer(event: Transfer): void {
  // get parameters from event
  let fromAddressString = event.params.from.toHexString();
  let toAddressString = event.params.to.toHexString();
  let value = event.params.value;
  let randomID =
    event.transaction.hash.toHex() + "-" + event.logIndex.toString();

  // get or create Identity and Address objects for fromAddress
  let data = getOrCreateIdentityAndAddress(fromAddressString, randomID + "-0");
  let fromIdentity = data.identity;
  let fromAddress = data.address;

  // update from balances
  fromIdentity.bltBalance = fromIdentity.bltBalance.minus(value);
  fromIdentity.save();
  fromAddress.bltBalance = fromAddress.bltBalance.minus(value);
  fromAddress.save();

  // get or create Identity and Address objects for fromAddress
  data = getOrCreateIdentityAndAddress(toAddressString, randomID + "-1");
  let toIdentity = data.identity;
  let toAddress = data.address;

  // update from balances
  toIdentity.bltBalance = toIdentity.bltBalance.plus(value);
  toIdentity.save();
  toAddress.bltBalance = toAddress.bltBalance.plus(value);
  toAddress.save();
}
