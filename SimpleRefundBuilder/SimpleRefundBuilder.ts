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
  SimpleRefundBuilder,
  SimpleRefundBuilderMethodNames,
  SimpleRefundBuilderEventsContext,
  SimpleRefundBuilderEvents
>;
export type SimpleRefundBuilderEvents =
  | 'FirewallAdminUpdated'
  | 'FirewallUpdated'
  | 'MassPoolsCreated'
  | 'MassPoolsRebuilded';
export interface SimpleRefundBuilderEventsContext {
  FirewallAdminUpdated(
    parameters: {
      filter?: {};
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  FirewallUpdated(
    parameters: {
      filter?: {};
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  MassPoolsCreated(
    parameters: {
      filter?: { token?: string | string[]; provider?: string | string[] };
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  MassPoolsRebuilded(
    parameters: {
      filter?: { token?: string | string[]; provider?: string | string[] };
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
}
export type SimpleRefundBuilderMethodNames =
  | 'new'
  | 'acceptFirewallAdmin'
  | 'buildMassPools'
  | 'collateralProvider'
  | 'firewallAdmin'
  | 'lockDealNFT'
  | 'onERC721Received'
  | 'refundProvider'
  | 'safeFunctionCall'
  | 'setApprovedTarget'
  | 'setFirewall'
  | 'setFirewallAdmin';
export interface FirewallAdminUpdatedEventEmittedResponse {
  newAdmin: string;
}
export interface FirewallUpdatedEventEmittedResponse {
  newFirewall: string;
}
export interface MassPoolsCreatedEventEmittedResponse {
  token: string;
  provider: string;
  firstPoolId: string;
  userLength: string;
}
export interface MassPoolsRebuildedEventEmittedResponse {
  token: string;
  provider: string;
  collateralPoolId: string;
  firstPoolId: string;
  userLength: string;
}
export interface UserPoolsRequest {
  user: string;
  amount: string;
}
export interface UserDataRequest {
  userPools: UserPoolsRequest[];
  totalAmount: string;
}
export interface SimpleRefundBuilder {
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: constructor
   * @param _lockDealNFT Type: address, Indexed: false
   * @param _refund Type: address, Indexed: false
   * @param _collateral Type: address, Indexed: false
   */
  'new'(
    _lockDealNFT: string,
    _refund: string,
    _collateral: string
  ): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   */
  acceptFirewallAdmin(): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param addressParams Type: address[], Indexed: false
   * @param userData Type: tuple, Indexed: false
   * @param params Type: uint256[][], Indexed: false
   * @param tokenSignature Type: bytes, Indexed: false
   * @param mainCoinSignature Type: bytes, Indexed: false
   */
  buildMassPools(
    addressParams: string[],
    userData: UserDataRequest,
    params: string[][],
    tokenSignature: string | number[],
    mainCoinSignature: string | number[]
  ): MethodReturnContext;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  collateralProvider(): MethodConstantReturnContext<string>;
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
   */
  lockDealNFT(): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param operator Type: address, Indexed: false
   * @param user Type: address, Indexed: false
   * @param collateralPoolId Type: uint256, Indexed: false
   * @param data Type: bytes, Indexed: false
   */
  onERC721Received(
    operator: string,
    user: string,
    collateralPoolId: string,
    data: string | number[]
  ): MethodReturnContext;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  refundProvider(): MethodConstantReturnContext<string>;
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param target Type: address, Indexed: false
   * @param targetPayload Type: bytes, Indexed: false
   * @param data Type: bytes, Indexed: false
   */
  safeFunctionCall(
    target: string,
    targetPayload: string | number[],
    data: string | number[]
  ): MethodPayableReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param target Type: address, Indexed: false
   * @param status Type: bool, Indexed: false
   */
  setApprovedTarget(target: string, status: boolean): MethodReturnContext;
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
}
