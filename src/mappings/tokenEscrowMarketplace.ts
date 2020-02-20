import {
  TokenMarketplaceWithdrawal,
  TokenMarketplaceDeposit,
  TokenMarketplaceEscrowPayment
} from "../../generated/TokenEscrowMarketplace/TokenEscrowMarketplace";
import {
  getOrCreateTokenEscrowWithdrawal,
  getOrCreateTokenEscrowDeposit,
  getOrCreateTokenEscrowPayment,
  getOrCreateAddress
} from "./util";


export function handleTokenMarketplaceWithdrawal(event: TokenMarketplaceWithdrawal): void {
  let amount = event.params.amount
  let address = getOrCreateAddress(event.params.escrowPayer.toHexString())
  getOrCreateTokenEscrowWithdrawal(event)

  address.escrowBalance = address.escrowBalance.minus(amount)

  address.save()
}

export function handleTokenMarketplaceEscrowPayment(event: TokenMarketplaceEscrowPayment): void {
  let amount = event.params.amount
  let address = getOrCreateAddress(event.params.escrowPayer.toHexString())
  getOrCreateTokenEscrowPayment(event)

  address.escrowBalance = address.escrowBalance.minus(amount)

  address.save()
}

export function handleTokenMarketplaceDeposit(event: TokenMarketplaceDeposit): void {
  let amount = event.params.amount
  let address = getOrCreateAddress(event.params.escrowPayer.toHexString())
  getOrCreateTokenEscrowDeposit(event)

  address.escrowBalance = address.escrowBalance.plus(amount)

  address.save()
}
