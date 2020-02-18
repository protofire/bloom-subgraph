import { Transfer } from "../../generated/BloomToken/ERC20";
import { getOrCreateAddress } from "./util";

export function handleTransfer(event: Transfer): void {
  let fromAddressString = event.params.from.toHexString();
  let toAddressString = event.params.to.toHexString();
  let value = event.params.value;

  let fromAddress = getOrCreateAddress(fromAddressString);
  let toAddress = getOrCreateAddress(toAddressString);

  fromAddress.bltBalance = fromAddress.bltBalance.minus(value);
  toAddress.bltBalance = toAddress.bltBalance.plus(value);

  fromAddress.save();
  toAddress.save();
}
