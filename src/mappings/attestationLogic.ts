import {
  AttestationLogic,
  TraitAttested
} from "../../generated/AttestationLogic/AttestationLogic";
import {
  getOrCreateAccount,
  getOrCreateAddress,
  getOrCreateAttestation
} from "./util";
import { log } from "@graphprotocol/graph-ts";

export function handleTraitAttested(event: TraitAttested): void {
  let subjectAddressString = event.params.subject.toHexString();
  let attesterAddressString = event.params.attester.toHexString();
  let requester = event.params.requester;
  let dataHash = event.params.dataHash;
  let randomID =
    event.transaction.hash.toHex() + "-" + event.logIndex.toString();

  let attestation = getOrCreateAttestation(randomID);
  attestation.requester = requester;
  attestation.dataHash = dataHash;

  // read the contract for additional state variables
  let attestationLogic = AttestationLogic.bind(event.address);
  let initializing = attestationLogic.initializing();
  attestation.createdDuringMigration = initializing;

  let subjectAddress = getOrCreateAddress(subjectAddressString);
  attestation.subjectAddress = subjectAddressString;

  if (subjectAddress.account != null) {
    attestation.subjectAccount = subjectAddress.account;
  }

  let attesterAddress = getOrCreateAddress(attesterAddressString);
  attestation.attesterAddress = attesterAddressString;

  if (attesterAddress.account != null) {
    attestation.attesterAccount = attesterAddress.account;
  }

  attestation.save();
}
