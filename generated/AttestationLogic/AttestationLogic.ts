// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  EthereumCall,
  EthereumEvent,
  SmartContract,
  EthereumValue,
  JSONValue,
  TypedMap,
  Entity,
  EthereumTuple,
  Bytes,
  Address,
  BigInt,
  CallResult
} from "@graphprotocol/graph-ts";

export class TraitAttested extends EthereumEvent {
  get params(): TraitAttested__Params {
    return new TraitAttested__Params(this);
  }
}

export class TraitAttested__Params {
  _event: TraitAttested;

  constructor(event: TraitAttested) {
    this._event = event;
  }

  get subject(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get attester(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get requester(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get dataHash(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }
}

export class AttestationRejected extends EthereumEvent {
  get params(): AttestationRejected__Params {
    return new AttestationRejected__Params(this);
  }
}

export class AttestationRejected__Params {
  _event: AttestationRejected;

  constructor(event: AttestationRejected) {
    this._event = event;
  }

  get attester(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get requester(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class AttestationRevoked extends EthereumEvent {
  get params(): AttestationRevoked__Params {
    return new AttestationRevoked__Params(this);
  }
}

export class AttestationRevoked__Params {
  _event: AttestationRevoked;

  constructor(event: AttestationRevoked) {
    this._event = event;
  }

  get link(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get attester(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class TokenEscrowMarketplaceChanged extends EthereumEvent {
  get params(): TokenEscrowMarketplaceChanged__Params {
    return new TokenEscrowMarketplaceChanged__Params(this);
  }
}

export class TokenEscrowMarketplaceChanged__Params {
  _event: TokenEscrowMarketplaceChanged;

  constructor(event: TokenEscrowMarketplaceChanged) {
    this._event = event;
  }

  get oldTokenEscrowMarketplace(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newTokenEscrowMarketplace(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class InitializationEnded extends EthereumEvent {
  get params(): InitializationEnded__Params {
    return new InitializationEnded__Params(this);
  }
}

export class InitializationEnded__Params {
  _event: InitializationEnded;

  constructor(event: InitializationEnded) {
    this._event = event;
  }
}

export class AttestationLogic extends SmartContract {
  static bind(address: Address): AttestationLogic {
    return new AttestationLogic("AttestationLogic", address);
  }

  initializing(): boolean {
    let result = super.call("initializing", []);

    return result[0].toBoolean();
  }

  try_initializing(): CallResult<boolean> {
    let result = super.tryCall("initializing", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  tokenEscrowMarketplace(): Address {
    let result = super.call("tokenEscrowMarketplace", []);

    return result[0].toAddress();
  }

  try_tokenEscrowMarketplace(): CallResult<Address> {
    let result = super.tryCall("tokenEscrowMarketplace", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  initializer(): Address {
    let result = super.call("initializer", []);

    return result[0].toAddress();
  }

  try_initializer(): CallResult<Address> {
    let result = super.tryCall("initializer", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  usedSignatures(param0: Bytes): boolean {
    let result = super.call("usedSignatures", [
      EthereumValue.fromFixedBytes(param0)
    ]);

    return result[0].toBoolean();
  }

  try_usedSignatures(param0: Bytes): CallResult<boolean> {
    let result = super.tryCall("usedSignatures", [
      EthereumValue.fromFixedBytes(param0)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }
}

export class ContestForCall extends EthereumCall {
  get inputs(): ContestForCall__Inputs {
    return new ContestForCall__Inputs(this);
  }

  get outputs(): ContestForCall__Outputs {
    return new ContestForCall__Outputs(this);
  }
}

export class ContestForCall__Inputs {
  _call: ContestForCall;

  constructor(call: ContestForCall) {
    this._call = call;
  }

  get _attester(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _requester(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _reward(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _requestNonce(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }

  get _requesterSig(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }

  get _delegationSig(): Bytes {
    return this._call.inputValues[5].value.toBytes();
  }
}

export class ContestForCall__Outputs {
  _call: ContestForCall;

  constructor(call: ContestForCall) {
    this._call = call;
  }
}

export class AttestCall extends EthereumCall {
  get inputs(): AttestCall__Inputs {
    return new AttestCall__Inputs(this);
  }

  get outputs(): AttestCall__Outputs {
    return new AttestCall__Outputs(this);
  }
}

export class AttestCall__Inputs {
  _call: AttestCall;

  constructor(call: AttestCall) {
    this._call = call;
  }

  get _subject(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _requester(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _reward(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _requesterSig(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }

  get _dataHash(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }

  get _requestNonce(): Bytes {
    return this._call.inputValues[5].value.toBytes();
  }

  get _subjectSig(): Bytes {
    return this._call.inputValues[6].value.toBytes();
  }
}

export class AttestCall__Outputs {
  _call: AttestCall;

  constructor(call: AttestCall) {
    this._call = call;
  }
}

export class SetTokenEscrowMarketplaceCall extends EthereumCall {
  get inputs(): SetTokenEscrowMarketplaceCall__Inputs {
    return new SetTokenEscrowMarketplaceCall__Inputs(this);
  }

  get outputs(): SetTokenEscrowMarketplaceCall__Outputs {
    return new SetTokenEscrowMarketplaceCall__Outputs(this);
  }
}

export class SetTokenEscrowMarketplaceCall__Inputs {
  _call: SetTokenEscrowMarketplaceCall;

  constructor(call: SetTokenEscrowMarketplaceCall) {
    this._call = call;
  }

  get _newTokenEscrowMarketplace(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetTokenEscrowMarketplaceCall__Outputs {
  _call: SetTokenEscrowMarketplaceCall;

  constructor(call: SetTokenEscrowMarketplaceCall) {
    this._call = call;
  }
}

export class ContestCall extends EthereumCall {
  get inputs(): ContestCall__Inputs {
    return new ContestCall__Inputs(this);
  }

  get outputs(): ContestCall__Outputs {
    return new ContestCall__Outputs(this);
  }
}

export class ContestCall__Inputs {
  _call: ContestCall;

  constructor(call: ContestCall) {
    this._call = call;
  }

  get _requester(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _reward(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _requestNonce(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }

  get _requesterSig(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class ContestCall__Outputs {
  _call: ContestCall;

  constructor(call: ContestCall) {
    this._call = call;
  }
}

export class RevokeAttestationCall extends EthereumCall {
  get inputs(): RevokeAttestationCall__Inputs {
    return new RevokeAttestationCall__Inputs(this);
  }

  get outputs(): RevokeAttestationCall__Outputs {
    return new RevokeAttestationCall__Outputs(this);
  }
}

export class RevokeAttestationCall__Inputs {
  _call: RevokeAttestationCall;

  constructor(call: RevokeAttestationCall) {
    this._call = call;
  }

  get _link(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class RevokeAttestationCall__Outputs {
  _call: RevokeAttestationCall;

  constructor(call: RevokeAttestationCall) {
    this._call = call;
  }
}

export class MigrateAttestationCall extends EthereumCall {
  get inputs(): MigrateAttestationCall__Inputs {
    return new MigrateAttestationCall__Inputs(this);
  }

  get outputs(): MigrateAttestationCall__Outputs {
    return new MigrateAttestationCall__Outputs(this);
  }
}

export class MigrateAttestationCall__Inputs {
  _call: MigrateAttestationCall;

  constructor(call: MigrateAttestationCall) {
    this._call = call;
  }

  get _requester(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _attester(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _subject(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _dataHash(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class MigrateAttestationCall__Outputs {
  _call: MigrateAttestationCall;

  constructor(call: MigrateAttestationCall) {
    this._call = call;
  }
}

export class AttestForCall extends EthereumCall {
  get inputs(): AttestForCall__Inputs {
    return new AttestForCall__Inputs(this);
  }

  get outputs(): AttestForCall__Outputs {
    return new AttestForCall__Outputs(this);
  }
}

export class AttestForCall__Inputs {
  _call: AttestForCall;

  constructor(call: AttestForCall) {
    this._call = call;
  }

  get _subject(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _attester(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _requester(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _reward(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _requesterSig(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }

  get _dataHash(): Bytes {
    return this._call.inputValues[5].value.toBytes();
  }

  get _requestNonce(): Bytes {
    return this._call.inputValues[6].value.toBytes();
  }

  get _subjectSig(): Bytes {
    return this._call.inputValues[7].value.toBytes();
  }

  get _delegationSig(): Bytes {
    return this._call.inputValues[8].value.toBytes();
  }
}

export class AttestForCall__Outputs {
  _call: AttestForCall;

  constructor(call: AttestForCall) {
    this._call = call;
  }
}

export class EndInitializationCall extends EthereumCall {
  get inputs(): EndInitializationCall__Inputs {
    return new EndInitializationCall__Inputs(this);
  }

  get outputs(): EndInitializationCall__Outputs {
    return new EndInitializationCall__Outputs(this);
  }
}

export class EndInitializationCall__Inputs {
  _call: EndInitializationCall;

  constructor(call: EndInitializationCall) {
    this._call = call;
  }
}

export class EndInitializationCall__Outputs {
  _call: EndInitializationCall;

  constructor(call: EndInitializationCall) {
    this._call = call;
  }
}

export class RevokeAttestationForCall extends EthereumCall {
  get inputs(): RevokeAttestationForCall__Inputs {
    return new RevokeAttestationForCall__Inputs(this);
  }

  get outputs(): RevokeAttestationForCall__Outputs {
    return new RevokeAttestationForCall__Outputs(this);
  }
}

export class RevokeAttestationForCall__Inputs {
  _call: RevokeAttestationForCall;

  constructor(call: RevokeAttestationForCall) {
    this._call = call;
  }

  get _sender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _link(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get _nonce(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }

  get _delegationSig(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class RevokeAttestationForCall__Outputs {
  _call: RevokeAttestationForCall;

  constructor(call: RevokeAttestationForCall) {
    this._call = call;
  }
}

export class ConstructorCall extends EthereumCall {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _initializer(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenEscrowMarketplace(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}
