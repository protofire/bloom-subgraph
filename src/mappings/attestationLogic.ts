import {
  AttestationLogic,
  TraitAttested
} from "../../generated/AttestationLogic/AttestationLogic";
import { log } from "@graphprotocol/graph-ts";
import {
  getOrCreateAccount,
  getOrCreateAddress,
  getOrCreateAttestation
} from "./util";

export function handleTraitAttested(event: TraitAttested): void {
  let subjectAddressString = event.params.subject.toHexString();
  let attesterAddressString = event.params.attester.toHexString();
  let requester = event.params.requester;
  let dataHash = event.params.dataHash;
  let randomID = event.transaction.hash.toHex() + "-" + event.logIndex.toString();

  let subjectAddress = getOrCreateAddress(subjectAddressString);

  let attesterAddress = getOrCreateAddress(attesterAddressString);

  let attestation = getOrCreateAttestation(randomID);
  attestation.requester = requester;
  attestation.dataHash = dataHash;
  attestation.subjectAddress = subjectAddressString;
  attestation.attesterAddress = attesterAddressString;
  attestation.save();
}
