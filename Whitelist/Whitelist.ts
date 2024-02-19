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
  Whitelist,
  WhitelistMethodNames,
  WhitelistEventsContext,
  WhitelistEvents
>;
export type WhitelistEvents = 'NewWhiteList' | 'OwnershipTransferred';
export interface WhitelistEventsContext {
  NewWhiteList(
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
}
export type WhitelistMethodNames =
  | 'new'
  | 'Check'
  | 'MaxUsersLimit'
  | 'WhiteListCost'
  | 'WhiteListCount'
  | 'WhitelistDB'
  | 'WhitelistSettings'
  | 'isWhiteListReady'
  | 'owner'
  | 'renounceOwnership'
  | 'transferOwnership'
  | 'setMaxUsersLimit'
  | 'WithdrawETHFee'
  | 'setWhiteListCost'
  | 'CreateManualWhiteList'
  | 'ChangeCreator'
  | 'ChangeContract'
  | 'AddAddress'
  | 'RemoveAddress'
  | 'Register'
  | 'LastRoundRegister';
export interface NewWhiteListEventEmittedResponse {
  _WhiteListCount: string;
  _creator: string;
  _contract: string;
  _changeUntil: string;
}
export interface OwnershipTransferredEventEmittedResponse {
  previousOwner: string;
  newOwner: string;
}
export interface WhitelistSettingsResponse {
  Creator: string;
  ChangeUntil: string;
  Contract: string;
  isReady: boolean;
}
export interface Whitelist {
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: constructor
   */
  'new'(): MethodReturnContext;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param _user Type: address, Indexed: false
   * @param _id Type: uint256, Indexed: false
   */
  Check(_user: string, _id: string): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  MaxUsersLimit(): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  WhiteListCost(): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  WhiteListCount(): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: uint256, Indexed: false
   * @param parameter1 Type: address, Indexed: false
   */
  WhitelistDB(
    parameter0: string,
    parameter1: string
  ): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: uint256, Indexed: false
   */
  WhitelistSettings(
    parameter0: string
  ): MethodConstantReturnContext<WhitelistSettingsResponse>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param _Id Type: uint256, Indexed: false
   */
  isWhiteListReady(_Id: string): MethodConstantReturnContext<boolean>;
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
   * @param _limit Type: uint256, Indexed: false
   */
  setMaxUsersLimit(_limit: string): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _to Type: address, Indexed: false
   */
  WithdrawETHFee(_to: string): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _newCost Type: uint256, Indexed: false
   */
  setWhiteListCost(_newCost: string): MethodReturnContext;
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param _ChangeUntil Type: uint256, Indexed: false
   * @param _Contract Type: address, Indexed: false
   */
  CreateManualWhiteList(
    _ChangeUntil: string,
    _Contract: string
  ): MethodPayableReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _Id Type: uint256, Indexed: false
   * @param _NewCreator Type: address, Indexed: false
   */
  ChangeCreator(_Id: string, _NewCreator: string): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _Id Type: uint256, Indexed: false
   * @param _NewContract Type: address, Indexed: false
   */
  ChangeContract(_Id: string, _NewContract: string): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _Id Type: uint256, Indexed: false
   * @param _Users Type: address[], Indexed: false
   * @param _Amount Type: uint256[], Indexed: false
   */
  AddAddress(
    _Id: string,
    _Users: string[],
    _Amount: string[]
  ): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _Id Type: uint256, Indexed: false
   * @param _Users Type: address[], Indexed: false
   */
  RemoveAddress(_Id: string, _Users: string[]): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _Subject Type: address, Indexed: false
   * @param _Id Type: uint256, Indexed: false
   * @param _Amount Type: uint256, Indexed: false
   */
  Register(_Subject: string, _Id: string, _Amount: string): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _Subject Type: address, Indexed: false
   * @param _Id Type: uint256, Indexed: false
   */
  LastRoundRegister(_Subject: string, _Id: string): MethodReturnContext;
}
