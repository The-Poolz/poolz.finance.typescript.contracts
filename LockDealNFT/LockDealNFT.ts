import BN from 'bn.js';
import BigNumber from 'bignumber.js';
import {
  PromiEvent,
  TransactionReceipt,
  EventResponse,
  EventData,
  Web3ContractContext,
} from 'ethereum-abi-types-generator';

export interface CallOptions {
  from?: string;
  gasPrice?: string;
  gas?: number;
}

export interface SendOptions {
  from: string;
  value?: number | string | BN | BigNumber;
  gasPrice?: string;
  gas?: number;
}

export interface EstimateGasOptions {
  from?: string;
  value?: number | string | BN | BigNumber;
  gas?: number;
}

export interface MethodPayableReturnContext {
  send(options: SendOptions): PromiEvent<TransactionReceipt>;
  send(
    options: SendOptions,
    callback: (error: Error, result: any) => void
  ): PromiEvent<TransactionReceipt>;
  estimateGas(options: EstimateGasOptions): Promise<number>;
  estimateGas(
    options: EstimateGasOptions,
    callback: (error: Error, result: any) => void
  ): Promise<number>;
  encodeABI(): string;
}

export interface MethodConstantReturnContext<TCallReturn> {
  call(): Promise<TCallReturn>;
  call(options: CallOptions): Promise<TCallReturn>;
  call(
    options: CallOptions,
    callback: (error: Error, result: TCallReturn) => void
  ): Promise<TCallReturn>;
  encodeABI(): string;
}

export interface MethodReturnContext extends MethodPayableReturnContext {}

export type ContractContext = Web3ContractContext<
  LockDealNFT,
  LockDealNFTMethodNames,
  LockDealNFTEventsContext,
  LockDealNFTEvents
>;
export type LockDealNFTEvents =
  | 'Approval'
  | 'ApprovalForAll'
  | 'BaseURIChanged'
  | 'BatchMetadataUpdate'
  | 'ContractApproved'
  | 'MetadataUpdate'
  | 'OwnershipTransferred'
  | 'PoolSplit'
  | 'TokenWithdrawn'
  | 'Transfer';
export interface LockDealNFTEventsContext {
  Approval(
    parameters: {
      filter?: {
        owner?: string | string[];
        approved?: string | string[];
        tokenId?: string | string[];
      };
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  ApprovalForAll(
    parameters: {
      filter?: { owner?: string | string[]; operator?: string | string[] };
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  BaseURIChanged(
    parameters: {
      filter?: {};
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  BatchMetadataUpdate(
    parameters: {
      filter?: {};
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  ContractApproved(
    parameters: {
      filter?: { contractAddress?: string | string[] };
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  MetadataUpdate(
    parameters: {
      filter?: {};
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  OwnershipTransferred(
    parameters: {
      filter?: {
        previousOwner?: string | string[];
        newOwner?: string | string[];
      };
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  PoolSplit(
    parameters: {
      filter?: { owner?: string | string[]; newOwner?: string | string[] };
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  TokenWithdrawn(
    parameters: {
      filter?: { owner?: string | string[] };
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  Transfer(
    parameters: {
      filter?: {
        from?: string | string[];
        to?: string | string[];
        tokenId?: string | string[];
      };
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
}
export type LockDealNFTMethodNames =
  | 'new'
  | 'approve'
  | 'approvePoolTransfers'
  | 'approvedContracts'
  | 'approvedPoolUserTransfers'
  | 'balanceOf'
  | 'balanceOf'
  | 'baseURI'
  | 'cloneVaultId'
  | 'firewallAdmin'
  | 'getApproved'
  | 'getData'
  | 'getFullData'
  | 'getUserDataByTokens'
  | 'getWithdrawableAmount'
  | 'isApprovedForAll'
  | 'mintAndTransfer'
  | 'mintForProvider'
  | 'name'
  | 'onERC721Received'
  | 'owner'
  | 'ownerOf'
  | 'poolIdToProvider'
  | 'poolIdToVaultId'
  | 'renounceOwnership'
  | 'royaltyInfo'
  | 'safeMintAndTransfer'
  | 'safeTransferFrom'
  | 'safeTransferFrom'
  | 'setApprovalForAll'
  | 'setApprovedContract'
  | 'setBaseURI'
  | 'setFirewall'
  | 'setFirewallAdmin'
  | 'supportsInterface'
  | 'symbol'
  | 'tokenByIndex'
  | 'tokenOf'
  | 'tokenOfOwnerByIndex'
  | 'tokenOfOwnerByIndex'
  | 'tokenURI'
  | 'totalSupply'
  | 'transferFrom'
  | 'transferOwnership'
  | 'updateAllMetadata'
  | 'vaultManager';
export interface ApprovalEventEmittedResponse {
  owner: string;
  approved: string;
  tokenId: string;
}
export interface ApprovalForAllEventEmittedResponse {
  owner: string;
  operator: string;
  approved: boolean;
}
export interface BaseURIChangedEventEmittedResponse {
  oldBaseURI: string;
  newBaseURI: string;
}
export interface BatchMetadataUpdateEventEmittedResponse {
  _fromTokenId: string;
  _toTokenId: string;
}
export interface ContractApprovedEventEmittedResponse {
  contractAddress: string;
  status: boolean;
}
export interface MetadataUpdateEventEmittedResponse {
  _tokenId: string;
}
export interface OwnershipTransferredEventEmittedResponse {
  previousOwner: string;
  newOwner: string;
}
export interface PoolSplitEventEmittedResponse {
  poolId: string;
  owner: string;
  newPoolId: string;
  newOwner: string;
  splitLeftAmount: string;
  newSplitLeftAmount: string;
}
export interface TokenWithdrawnEventEmittedResponse {
  poolId: string;
  owner: string;
  withdrawnAmount: string;
  leftAmount: string;
}
export interface TransferEventEmittedResponse {
  from: string;
  to: string;
  tokenId: string;
}
export interface PoolInfoResponse {
  provider: string;
  name: string;
  poolId: string;
  vaultId: string;
  owner: string;
  token: string;
  params: string[];
}
export interface UserPoolInfoResponse {
  provider: string;
  name: string;
  poolId: string;
  vaultId: string;
  owner: string;
  token: string;
  params: string[];
}
export interface RoyaltyInfoResponse {
  receiver: string;
  royaltyAmount: string;
}
export interface LockDealNFT {
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: constructor
   * @param _vaultManager Type: address, Indexed: false
   * @param _baseURI Type: string, Indexed: false
   */
  'new'(_vaultManager: string, _baseURI: string): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param to Type: address, Indexed: false
   * @param tokenId Type: uint256, Indexed: false
   */
  approve(to: string, tokenId: string): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param status Type: bool, Indexed: false
   */
  approvePoolTransfers(status: boolean): MethodReturnContext;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: address, Indexed: false
   */
  approvedContracts(parameter0: string): MethodConstantReturnContext<boolean>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: address, Indexed: false
   */
  approvedPoolUserTransfers(
    parameter0: string
  ): MethodConstantReturnContext<boolean>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param owner Type: address, Indexed: false
   * @param tokens Type: address[], Indexed: false
   */
  balanceOf(
    owner: string,
    tokens: string[]
  ): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param owner Type: address, Indexed: false
   */
  balanceOf(owner: string): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  baseURI(): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param destinationPoolId Type: uint256, Indexed: false
   * @param sourcePoolId Type: uint256, Indexed: false
   */
  cloneVaultId(
    destinationPoolId: string,
    sourcePoolId: string
  ): MethodReturnContext;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  firewallAdmin(): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param tokenId Type: uint256, Indexed: false
   */
  getApproved(tokenId: string): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param poolId Type: uint256, Indexed: false
   */
  getData(poolId: string): MethodConstantReturnContext<PoolInfoResponse>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param poolId Type: uint256, Indexed: false
   */
  getFullData(poolId: string): MethodConstantReturnContext<PoolInfoResponse[]>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param user Type: address, Indexed: false
   * @param tokens Type: address[], Indexed: false
   * @param from Type: uint256, Indexed: false
   * @param to Type: uint256, Indexed: false
   */
  getUserDataByTokens(
    user: string,
    tokens: string[],
    from: string,
    to: string
  ): MethodConstantReturnContext<UserPoolInfoResponse[]>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param poolId Type: uint256, Indexed: false
   */
  getWithdrawableAmount(poolId: string): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param owner Type: address, Indexed: false
   * @param operator Type: address, Indexed: false
   */
  isApprovedForAll(
    owner: string,
    operator: string
  ): MethodConstantReturnContext<boolean>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param owner Type: address, Indexed: false
   * @param token Type: address, Indexed: false
   * @param amount Type: uint256, Indexed: false
   * @param provider Type: address, Indexed: false
   */
  mintAndTransfer(
    owner: string,
    token: string,
    amount: string,
    provider: string
  ): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param owner Type: address, Indexed: false
   * @param provider Type: address, Indexed: false
   */
  mintForProvider(owner: string, provider: string): MethodReturnContext;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  name(): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param parameter0 Type: address, Indexed: false
   * @param from Type: address, Indexed: false
   * @param poolId Type: uint256, Indexed: false
   * @param data Type: bytes, Indexed: false
   */
  onERC721Received(
    parameter0: string,
    from: string,
    poolId: string,
    data: string | number[]
  ): MethodReturnContext;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  owner(): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param tokenId Type: uint256, Indexed: false
   */
  ownerOf(tokenId: string): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: uint256, Indexed: false
   */
  poolIdToProvider(parameter0: string): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: uint256, Indexed: false
   */
  poolIdToVaultId(parameter0: string): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   */
  renounceOwnership(): MethodReturnContext;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param tokenId Type: uint256, Indexed: false
   * @param salePrice Type: uint256, Indexed: false
   */
  royaltyInfo(
    tokenId: string,
    salePrice: string
  ): MethodConstantReturnContext<RoyaltyInfoResponse>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param owner Type: address, Indexed: false
   * @param token Type: address, Indexed: false
   * @param from Type: address, Indexed: false
   * @param amount Type: uint256, Indexed: false
   * @param provider Type: address, Indexed: false
   * @param data Type: bytes, Indexed: false
   */
  safeMintAndTransfer(
    owner: string,
    token: string,
    from: string,
    amount: string,
    provider: string,
    data: string | number[]
  ): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param from Type: address, Indexed: false
   * @param to Type: address, Indexed: false
   * @param tokenId Type: uint256, Indexed: false
   */
  safeTransferFrom(
    from: string,
    to: string,
    tokenId: string
  ): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param from Type: address, Indexed: false
   * @param to Type: address, Indexed: false
   * @param tokenId Type: uint256, Indexed: false
   * @param data Type: bytes, Indexed: false
   */
  safeTransferFrom(
    from: string,
    to: string,
    tokenId: string,
    data: string | number[]
  ): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param operator Type: address, Indexed: false
   * @param approved Type: bool, Indexed: false
   */
  setApprovalForAll(operator: string, approved: boolean): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param contractAddress Type: address, Indexed: false
   * @param status Type: bool, Indexed: false
   */
  setApprovedContract(
    contractAddress: string,
    status: boolean
  ): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param newBaseURI Type: string, Indexed: false
   */
  setBaseURI(newBaseURI: string): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _firewall Type: address, Indexed: false
   */
  setFirewall(_firewall: string): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _firewallAdmin Type: address, Indexed: false
   */
  setFirewallAdmin(_firewallAdmin: string): MethodReturnContext;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param interfaceId Type: bytes4, Indexed: false
   */
  supportsInterface(
    interfaceId: string | number[]
  ): MethodConstantReturnContext<boolean>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  symbol(): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param index Type: uint256, Indexed: false
   */
  tokenByIndex(index: string): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param poolId Type: uint256, Indexed: false
   */
  tokenOf(poolId: string): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param owner Type: address, Indexed: false
   * @param index Type: uint256, Indexed: false
   */
  tokenOfOwnerByIndex(
    owner: string,
    index: string
  ): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param owner Type: address, Indexed: false
   * @param tokens Type: address[], Indexed: false
   * @param index Type: uint256, Indexed: false
   */
  tokenOfOwnerByIndex(
    owner: string,
    tokens: string[],
    index: string
  ): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param tokenId Type: uint256, Indexed: false
   */
  tokenURI(tokenId: string): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  totalSupply(): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param from Type: address, Indexed: false
   * @param to Type: address, Indexed: false
   * @param tokenId Type: uint256, Indexed: false
   */
  transferFrom(from: string, to: string, tokenId: string): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param newOwner Type: address, Indexed: false
   */
  transferOwnership(newOwner: string): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   */
  updateAllMetadata(): MethodReturnContext;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  vaultManager(): MethodConstantReturnContext<string>;
}
