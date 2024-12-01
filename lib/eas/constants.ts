import { SchemaItem } from "@ethereum-attestation-service/eas-sdk";

const ETHEREUM_CHAIN_ID = 1;
const ETHEREUM_SEPOLIA_CHAIN_ID = 11155111;
const BASE_CHAIN_ID = 8453;
const BASE_SEPOLIA_CHAIN_ID = 84532;

export const GRAPHQL_ENDPOINTS = {
  [ETHEREUM_CHAIN_ID]: "https://easscan.org/graphql",
  [ETHEREUM_SEPOLIA_CHAIN_ID]: "https://sepolia.easscan.org/graphql",
  [BASE_CHAIN_ID]: "https://base.easscan.org/graphql",
  [BASE_SEPOLIA_CHAIN_ID]: "https://base-sepolia.easscan.org/graphql",
};

export const SCHEMA_REGISTRY_CONTRACT_ADDRESSES = {
  [ETHEREUM_CHAIN_ID]:
    "0xA7b39296258348C78294F95B872b282326A97BDF" as `0x${string}`,
  [ETHEREUM_SEPOLIA_CHAIN_ID]:
    "0x0a7E2Ff54e76B8E6659aedc9103FB21c038050D0" as `0x${string}`,
  [BASE_CHAIN_ID]:
    "0x4200000000000000000000000000000000000020" as `0x${string}`,
  [BASE_SEPOLIA_CHAIN_ID]:
    " 0x4200000000000000000000000000000000000020" as `0x${string}`,
};

export const EAS_CONTRACT_ADDRESSES = {
  [ETHEREUM_CHAIN_ID]:
    "0xA1207F3BBa224E2c9c3c6D5aF63D0eb1582Ce587" as `0x${string}`,
  [ETHEREUM_SEPOLIA_CHAIN_ID]:
    "0xC2679fBD37d54388Ce493F1DB75320D236e1815e" as `0x${string}`,
  [BASE_CHAIN_ID]:
    "0x4200000000000000000000000000000000000021" as `0x${string}`,
  [BASE_SEPOLIA_CHAIN_ID]:
    "0x4200000000000000000000000000000000000021" as `0x${string}`,
};

export const EAS_NAME_SCHEMA_UID =
  "0x44d562ac1d7cd77e232978687fea027ace48f719cf1d58c7888e509663bb87fc" as `0x${string}`;
