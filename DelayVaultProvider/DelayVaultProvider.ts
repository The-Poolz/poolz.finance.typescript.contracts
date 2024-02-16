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
  DelayVaultProvider,
  DelayVaultProviderMethodNames,
  DelayVaultProviderEventsContext,
  DelayVaultProviderEvents
>;
export type DelayVaultProviderEvents = 'UpdateParams' | 'VaultValueChanged';
export interface DelayVaultProviderEventsContext {
  UpdateParams(
    parameters: {
      filter?: { poolId?: string | string[] };
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  VaultValueChanged(
    parameters: {
      filter?: { token?: string | string[]; owner?: string | string[] };
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
}
export type DelayVaultProviderMethodNames =
  | 'new'
  | 'balanceOf'
  | 'beforeTransfer'
  | 'createNewDelayVault'
  | 'createNewDelayVaultWithSignature'
  | 'currentParamsTargetLength'
  | 'firewallAdmin'
  | 'getParams'
  | 'getSubProvidersPoolIds'
  | 'getTotalAmount'
  | 'getTypeToProviderData'
  | 'getWithdrawPoolParams'
  | 'getWithdrawableAmount'
  | 'lockDealNFT'
  | 'migrator'
  | 'name'
  | 'poolIdToAmount'
  | 'registerPool'
  | 'setFirewall'
  | 'setFirewallAdmin'
  | 'split'
  | 'supportsInterface'
  | 'theTypeOf'
  | 'token'
  | 'tokenOfOwnerByIndex'
  | 'typeToProviderData'
  | 'typesCount'
  | 'upgradeType'
  | 'userToAmount'
  | 'userToType'
  | 'withdraw';
export interface _providersDataRequest {
  provider: string;
  params: string[];
  limit: string;
}
export interface UpdateParamsEventEmittedResponse {
  poolId: string;
  params: string[];
}
export interface VaultValueChangedEventEmittedResponse {
  token: string;
  owner: string;
  amount: string;
}
export interface ProviderDataResponse {
  provider: string;
  params: string[];
  limit: string;
}
export interface TypeToProviderDataResponse {
  provider: string;
  limit: string;
}
export interface DelayVaultProvider {
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: constructor
   * @param _token Type: address, Indexed: false
   * @param _migrator Type: address, Indexed: false
   * @param _providersData Type: tuple[], Indexed: false
   */
  'new'(
    _token: string,
    _migrator: string,
    _providersData: _providersDataRequest[]
  ): MethodReturnContext;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param user Type: address, Indexed: false
   */
  balanceOf(user: string): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param from Type: address, Indexed: false
   * @param to Type: address, Indexed: false
   * @param poolId Type: uint256, Indexed: false
   */
  beforeTransfer(from: string, to: string, poolId: string): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param owner Type: address, Indexed: false
   * @param params Type: uint256[], Indexed: false
   */
  createNewDelayVault(owner: string, params: string[]): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param owner Type: address, Indexed: false
   * @param params Type: uint256[], Indexed: false
   * @param signature Type: bytes, Indexed: false
   */
  createNewDelayVaultWithSignature(
    owner: string,
    params: string[],
    signature: string | number[]
  ): MethodReturnContext;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  currentParamsTargetLength(): MethodConstantReturnContext<string>;
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
   * @param poolId Type: uint256, Indexed: false
   */
  getParams(poolId: string): MethodConstantReturnContext<string[]>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: uint256, Indexed: false
   */
  getSubProvidersPoolIds(
    parameter0: string
  ): MethodConstantReturnContext<string[]>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param user Type: address, Indexed: false
   */
  getTotalAmount(user: string): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param theType Type: uint8, Indexed: false
   */
  getTypeToProviderData(
    theType: string | number
  ): MethodConstantReturnContext<ProviderDataResponse>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param amount Type: uint256, Indexed: false
   * @param theType Type: uint8, Indexed: false
   */
  getWithdrawPoolParams(
    amount: string,
    theType: string | number
  ): MethodConstantReturnContext<string[]>;
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
   */
  lockDealNFT(): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  migrator(): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  name(): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: uint256, Indexed: false
   */
  poolIdToAmount(parameter0: string): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param poolId Type: uint256, Indexed: false
   * @param params Type: uint256[], Indexed: false
   */
  registerPool(poolId: string, params: string[]): MethodReturnContext;
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
   * @param oldPoolId Type: uint256, Indexed: false
   * @param newPoolId Type: uint256, Indexed: false
   * @param ratio Type: uint256, Indexed: false
   */
  split(
    oldPoolId: string,
    newPoolId: string,
    ratio: string
  ): MethodReturnContext;
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
   * @param amount Type: uint256, Indexed: false
   */
  theTypeOf(amount: string): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  token(): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param user Type: address, Indexed: false
   * @param index Type: uint256, Indexed: false
   */
  tokenOfOwnerByIndex(
    user: string,
    index: string
  ): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: uint8, Indexed: false
   */
  typeToProviderData(
    parameter0: string | number
  ): MethodConstantReturnContext<TypeToProviderDataResponse>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  typesCount(): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param newType Type: uint8, Indexed: false
   */
  upgradeType(newType: string | number): MethodReturnContext;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: address, Indexed: false
   */
  userToAmount(parameter0: string): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: address, Indexed: false
   */
  userToType(parameter0: string): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param tokenId Type: uint256, Indexed: false
   */
  withdraw(tokenId: string): MethodReturnContext;
}
