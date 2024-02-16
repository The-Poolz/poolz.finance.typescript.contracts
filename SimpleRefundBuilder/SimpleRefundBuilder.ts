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
export type SimpleRefundBuilderEvents = undefined;
export interface SimpleRefundBuilderEventsContext {}
export type SimpleRefundBuilderMethodNames =
  | 'new'
  | 'buildMassPools'
  | 'collateralProvider'
  | 'firewallAdmin'
  | 'lockDealNFT'
  | 'onERC721Received'
  | 'refundProvider'
  | 'setFirewall'
  | 'setFirewallAdmin';
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
   * @param _nft Type: address, Indexed: false
   * @param _refund Type: address, Indexed: false
   * @param _collateral Type: address, Indexed: false
   */
  'new'(
    _nft: string,
    _refund: string,
    _collateral: string
  ): MethodReturnContext;
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
   * @param parameter0 Type: address, Indexed: false
   * @param parameter1 Type: address, Indexed: false
   * @param parameter2 Type: uint256, Indexed: false
   * @param parameter3 Type: bytes, Indexed: false
   */
  onERC721Received(
    parameter0: string,
    parameter1: string,
    parameter2: string,
    parameter3: string | number[]
  ): MethodReturnContext;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  refundProvider(): MethodConstantReturnContext<string>;
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
