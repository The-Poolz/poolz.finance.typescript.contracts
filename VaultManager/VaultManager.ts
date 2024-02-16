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
  VaultManager,
  VaultManagerMethodNames,
  VaultManagerEventsContext,
  VaultManagerEvents
>;
export type VaultManagerEvents =
  | 'Deposited'
  | 'NewVaultCreated'
  | 'OwnershipTransferred'
  | 'VaultDeleted'
  | 'VaultRoyaltySet'
  | 'VaultStatusUpdate'
  | 'Withdrawn';
export interface VaultManagerEventsContext {
  Deposited(
    parameters: {
      filter?: {
        vaultId?: string | string[];
        tokenAddress?: string | string[];
      };
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  NewVaultCreated(
    parameters: {
      filter?: {
        vaultId?: string | string[];
        tokenAddress?: string | string[];
      };
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
  VaultDeleted(
    parameters: {
      filter?: {
        vaultId?: string | string[];
        tokenAddress?: string | string[];
      };
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  VaultRoyaltySet(
    parameters: {
      filter?: {
        tokenAddress?: string | string[];
        receiver?: string | string[];
        feeNumerator?: string | string[];
      };
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  VaultStatusUpdate(
    parameters: {
      filter?: {
        vaultId?: string | string[];
        depositStatus?: boolean | boolean[];
        withdrawStatus?: boolean | boolean[];
      };
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  Withdrawn(
    parameters: {
      filter?: {
        vaultId?: string | string[];
        tokenAddress?: string | string[];
        to?: string | string[];
      };
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
}
export type VaultManagerMethodNames =
  | 'createNewVault'
  | 'createNewVault'
  | 'createNewVault'
  | 'createNewVault'
  | 'depositByToken'
  | 'firewallAdmin'
  | 'getAllVaultBalanceByToken'
  | 'getCurrentVaultBalanceByToken'
  | 'getCurrentVaultIdByToken'
  | 'getTotalVaultsByToken'
  | 'getVaultBalanceByVaultId'
  | 'isDepositActiveForVaultId'
  | 'isWithdrawalActiveForVaultId'
  | 'nonces'
  | 'owner'
  | 'renounceOwnership'
  | 'royaltyInfo'
  | 'safeDeposit'
  | 'setActiveStatusForVaultId'
  | 'setFirewall'
  | 'setFirewallAdmin'
  | 'setTradeStartTime'
  | 'setTrustee'
  | 'supportsInterface'
  | 'tokenToVaultIds'
  | 'totalVaults'
  | 'transferOwnership'
  | 'trustee'
  | 'updateTrustee'
  | 'vaultIdToTokenAddress'
  | 'vaultIdToTradeStartTime'
  | 'vaultIdToVault'
  | 'withdrawByVaultId';
export interface DepositedEventEmittedResponse {
  vaultId: string;
  tokenAddress: string;
  amount: string;
}
export interface NewVaultCreatedEventEmittedResponse {
  vaultId: string;
  tokenAddress: string;
}
export interface OwnershipTransferredEventEmittedResponse {
  previousOwner: string;
  newOwner: string;
}
export interface VaultDeletedEventEmittedResponse {
  vaultId: string;
  tokenAddress: string;
}
export interface VaultRoyaltySetEventEmittedResponse {
  vaultId: string;
  tokenAddress: string;
  receiver: string;
  feeNumerator: string;
}
export interface VaultStatusUpdateEventEmittedResponse {
  vaultId: string;
  depositStatus: boolean;
  withdrawStatus: boolean;
}
export interface WithdrawnEventEmittedResponse {
  vaultId: string;
  tokenAddress: string;
  to: string;
  amount: string;
}
export interface RoyaltyInfoResponse {
  result0: string;
  result1: string;
}
export interface VaultManager {
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _tokenAddress Type: address, Indexed: false
   * @param _tradeStartTime Type: uint256, Indexed: false
   * @param _royaltyReceiver Type: address, Indexed: false
   * @param _feeNumerator Type: uint96, Indexed: false
   */
  createNewVault(
    _tokenAddress: string,
    _tradeStartTime: string,
    _royaltyReceiver: string,
    _feeNumerator: string
  ): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _tokenAddress Type: address, Indexed: false
   * @param _royaltyReceiver Type: address, Indexed: false
   * @param _feeNumerator Type: uint96, Indexed: false
   */
  createNewVault(
    _tokenAddress: string,
    _royaltyReceiver: string,
    _feeNumerator: string
  ): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _tokenAddress Type: address, Indexed: false
   * @param _tradeStartTime Type: uint256, Indexed: false
   */
  createNewVault(
    _tokenAddress: string,
    _tradeStartTime: string
  ): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _tokenAddress Type: address, Indexed: false
   */
  createNewVault(_tokenAddress: string): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _tokenAddress Type: address, Indexed: false
   * @param _amount Type: uint256, Indexed: false
   */
  depositByToken(_tokenAddress: string, _amount: string): MethodReturnContext;
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
   * @param _tokenAddress Type: address, Indexed: false
   * @param from Type: uint256, Indexed: false
   * @param count Type: uint256, Indexed: false
   */
  getAllVaultBalanceByToken(
    _tokenAddress: string,
    from: string,
    count: string
  ): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param _tokenAddress Type: address, Indexed: false
   */
  getCurrentVaultBalanceByToken(
    _tokenAddress: string
  ): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param _tokenAddress Type: address, Indexed: false
   */
  getCurrentVaultIdByToken(
    _tokenAddress: string
  ): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param _tokenAddress Type: address, Indexed: false
   */
  getTotalVaultsByToken(
    _tokenAddress: string
  ): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param _vaultId Type: uint256, Indexed: false
   */
  getVaultBalanceByVaultId(
    _vaultId: string
  ): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: uint256, Indexed: false
   */
  isDepositActiveForVaultId(
    parameter0: string
  ): MethodConstantReturnContext<boolean>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: uint256, Indexed: false
   */
  isWithdrawalActiveForVaultId(
    parameter0: string
  ): MethodConstantReturnContext<boolean>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: address, Indexed: false
   */
  nonces(parameter0: string): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  owner(): MethodConstantReturnContext<string>;
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
   * @param _tokenAddress Type: address, Indexed: false
   * @param _amount Type: uint256, Indexed: false
   * @param _from Type: address, Indexed: false
   * @param _signature Type: bytes, Indexed: false
   */
  safeDeposit(
    _tokenAddress: string,
    _amount: string,
    _from: string,
    _signature: string | number[]
  ): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _vaultId Type: uint256, Indexed: false
   * @param _depositStatus Type: bool, Indexed: false
   * @param _withdrawStatus Type: bool, Indexed: false
   */
  setActiveStatusForVaultId(
    _vaultId: string,
    _depositStatus: boolean,
    _withdrawStatus: boolean
  ): MethodReturnContext;
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
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _vaultId Type: uint256, Indexed: false
   * @param _tradeStartTime Type: uint256, Indexed: false
   */
  setTradeStartTime(
    _vaultId: string,
    _tradeStartTime: string
  ): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _address Type: address, Indexed: false
   */
  setTrustee(_address: string): MethodReturnContext;
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
   * @param parameter0 Type: address, Indexed: false
   * @param parameter1 Type: uint256, Indexed: false
   */
  tokenToVaultIds(
    parameter0: string,
    parameter1: string
  ): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  totalVaults(): MethodConstantReturnContext<string>;
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
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  trustee(): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _address Type: address, Indexed: false
   */
  updateTrustee(_address: string): MethodReturnContext;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param _vaultId Type: uint256, Indexed: false
   */
  vaultIdToTokenAddress(_vaultId: string): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: uint256, Indexed: false
   */
  vaultIdToTradeStartTime(
    parameter0: string
  ): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: uint256, Indexed: false
   */
  vaultIdToVault(parameter0: string): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _vaultId Type: uint256, Indexed: false
   * @param _to Type: address, Indexed: false
   * @param _amount Type: uint256, Indexed: false
   */
  withdrawByVaultId(
    _vaultId: string,
    _to: string,
    _amount: string
  ): MethodReturnContext;
}
