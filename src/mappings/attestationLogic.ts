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
  let randomID = event.transaction.hash.toHex() + "-" + event.logIndex.toString();

  let attestationLogic = AttestationLogic.bind(event.address);
  let initializing = attestationLogic.initializing();

  let subjectAddress = getOrCreateAddress(subjectAddressString);

  let attesterAddress = getOrCreateAddress(attesterAddressString);

  let attestation = getOrCreateAttestation(randomID);
  attestation.requester = requester;
  attestation.dataHash = dataHash;
  attestation.subjectAddress = subjectAddressString;
  attestation.attesterAddress = attesterAddressString;
  // Commenting the account data because of inconsistencies and no real way to fix them
  // if (subjectAddress.account != null) {
  //   attestation.subjectAccount = subjectAddress.account;
  // }
  // if (attesterAddress.account != null) {
  //   attestation.attesterAccount = attesterAddress.account;
  // }
  attestation.createdDuringMigration = initializing;
  attestation.save();
}
