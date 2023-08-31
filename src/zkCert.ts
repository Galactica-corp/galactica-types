import { ZkCertStandard } from './zkCertStandard';


/// Data required for ZK ownership proofs
export interface OwnershipProofInput {
    holderCommitment: string;
    // public key
    Ax: string;
    Ay: string;
    // signature
    S: string;
    R8x: string;
    R8y: string;
}

/// Data required for ZK authorization proofs
export interface AuthorizationProofInput {
    userAddress: string;
    // public key
    Ax: string;
    Ay: string;
    // signature
    S: string;
    R8x: string;
    R8y: string;
}

/// Data required for ZK fraud proofs
export interface ProviderData {
    // public eddsa key of provider
    Ax: string;
    Ay: string;
    // signature of the zkCert content hash by the provider
    S: string;
    R8x: string;
    R8y: string;
}

/// Data required for ZK fraud proofs
export interface FraudInvestigationDataEncryptionProofInput {
    userPrivKey: string;
    userPubKey: string[];

    investigationInstitutionPubkey: string[];
    encryptedData: string[];
}

/// Data required for a ZK proof of someone's DApp specific HumanID
export interface HumanIDProofInput {
    passportID: string;
    dAppAddress: string;
    humanID: string;
}

/// Data contained in a ZK certificate
export interface ZkCertData {
    holderCommitment: string;
    zkCertStandard: ZkCertStandard;
    randomSalt: number;
    fields: Record<string, any>;
    providerData: ProviderData;
    contentHash: string;
    leafHash: string;
    did: string;
}
