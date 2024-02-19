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
  LockedDeal,
  LockedDealMethodNames,
  LockedDealEventsContext,
  LockedDealEvents
>;
export type LockedDealEvents =
  | 'MassPoolsCreated'
  | 'NewFeeAmount'
  | 'NewFeeToken'
  | 'NewPoolCreated'
  | 'OwnershipTransferred'
  | 'PoolApproval'
  | 'PoolSplit'
  | 'TokenWithdrawn'
  | 'TransferIn'
  | 'TransferInETH'
  | 'TransferOut';
export interface LockedDealEventsContext {
  MassPoolsCreated(
    parameters: {
      filter?: {};
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  NewFeeAmount(
    parameters: {
      filter?: {};
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  NewFeeToken(
    parameters: {
      filter?: {};
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  NewPoolCreated(
    parameters: {
      filter?: { Token?: string | string[]; Owner?: string | string[] };
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
  PoolApproval(
    parameters: {
      filter?: { Spender?: string | string[] };
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  PoolSplit(
    parameters: {
      filter?: { OldOwner?: string | string[]; NewOwner?: string | string[] };
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  TokenWithdrawn(
    parameters: {
      filter?: { Recipient?: string | string[] };
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  TransferIn(
    parameters: {
      filter?: {};
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  TransferInETH(
    parameters: {
      filter?: {};
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  TransferOut(
    parameters: {
      filter?: {};
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
}
export type LockedDealMethodNames =
  | 'AllPoolz'
  | 'Allowance'
  | 'ApproveAllowance'
  | 'CreateMassPools'
  | 'CreateNewPool'
  | 'CreatePoolsWrtTime'
  | 'Fee'
  | 'FeeToken'
  | 'GetAllMyPoolsData'
  | 'GetAllMyPoolsId'
  | 'GetMyPoolDataByToken'
  | 'GetMyPoolsData'
  | 'GetMyPoolsId'
  | 'GetMyPoolsIdByToken'
  | 'GetPoolsData'
  | 'GovernerContract'
  | 'Index'
  | 'MyPoolz'
  | 'PayFee'
  | 'Reserve'
  | 'SetFeeAmount'
  | 'SetFeeToken'
  | 'SplitPoolAmount'
  | 'SplitPoolAmountFrom'
  | 'TokenFeeWhiteListId'
  | 'TokenFilterWhiteListId'
  | 'TransferPoolOwnership'
  | 'UserWhiteListId'
  | 'WhiteList_Address'
  | 'WithdrawFee'
  | 'isTokenFilterOn'
  | 'isTokenWhiteListed'
  | 'isTokenWithFee'
  | 'isUserPaysFee'
  | 'maxTransactionLimit'
  | 'owner'
  | 'renounceOwnership'
  | 'setGovernerContract'
  | 'setMaxTransactionLimit'
  | 'setTokenFeeWhiteListId'
  | 'setTokenFilterWhiteListId'
  | 'setUserWhiteListId'
  | 'setWhiteListAddress'
  | 'swapTokenFilter'
  | 'transferOwnership'
  | 'getWithdrawableAmount'
  | 'WithdrawToken';
export interface MassPoolsCreatedEventEmittedResponse {
  FirstPoolId: string;
  LastPoolId: string;
}
export interface NewFeeAmountEventEmittedResponse {
  NewFeeAmount: string;
  OldFeeAmount: string;
}
export interface NewFeeTokenEventEmittedResponse {
  NewFeeToken: string;
  OldFeeToken: string;
}
export interface NewPoolCreatedEventEmittedResponse {
  PoolId: string;
  Token: string;
  StartTime: string;
  CliffTime: string;
  FinishTime: string;
  StartAmount: string;
  DebitedAmount: string;
  Owner: string;
}
export interface OwnershipTransferredEventEmittedResponse {
  previousOwner: string;
  newOwner: string;
}
export interface PoolApprovalEventEmittedResponse {
  PoolId: string;
  Spender: string;
  Amount: string;
}
export interface PoolSplitEventEmittedResponse {
  OldPoolId: string;
  NewPoolId: string;
  OriginalLeftAmount: string;
  NewAmount: string;
  OldOwner: string;
  NewOwner: string;
}
export interface TokenWithdrawnEventEmittedResponse {
  PoolId: string;
  Recipient: string;
  Amount: string;
  LeftAmount: string;
}
export interface TransferInEventEmittedResponse {
  Amount: string;
  From: string;
  Token: string;
}
export interface TransferInETHEventEmittedResponse {
  Amount: string;
  From: string;
}
export interface TransferOutEventEmittedResponse {
  Amount: string;
  To: string;
  Token: string;
}
export interface AllPoolzResponse {
  StartTime: string;
  CliffTime: string;
  FinishTime: string;
  StartAmount: string;
  DebitedAmount: string;
  Owner: string;
  Token: string;
}
export interface DataResponse {
  StartTime: string;
  CliffTime: string;
  FinishTime: string;
  StartAmount: string;
  DebitedAmount: string;
  Owner: string;
  Token: string;
}
export interface PoolsResponse {
  StartTime: string;
  CliffTime: string;
  FinishTime: string;
  StartAmount: string;
  DebitedAmount: string;
  Owner: string;
  Token: string;
}
export interface GetMyPoolDataByTokenResponse {
  pools: PoolsResponse[];
  poolIds: string[];
}
export interface LockedDeal {
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: uint256, Indexed: false
   */
  AllPoolz(parameter0: string): MethodConstantReturnContext<AllPoolzResponse>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: uint256, Indexed: false
   * @param parameter1 Type: address, Indexed: false
   */
  Allowance(
    parameter0: string,
    parameter1: string
  ): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _PoolId Type: uint256, Indexed: false
   * @param _Amount Type: uint256, Indexed: false
   * @param _Spender Type: address, Indexed: false
   */
  ApproveAllowance(
    _PoolId: string,
    _Amount: string,
    _Spender: string
  ): MethodReturnContext;
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param _Token Type: address, Indexed: false
   * @param _StartTime Type: uint256[], Indexed: false
   * @param _CliffTime Type: uint256[], Indexed: false
   * @param _FinishTime Type: uint256[], Indexed: false
   * @param _StartAmount Type: uint256[], Indexed: false
   * @param _Owner Type: address[], Indexed: false
   */
  CreateMassPools(
    _Token: string,
    _StartTime: string[],
    _CliffTime: string[],
    _FinishTime: string[],
    _StartAmount: string[],
    _Owner: string[]
  ): MethodPayableReturnContext;
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param _Token Type: address, Indexed: false
   * @param _StartTime Type: uint256, Indexed: false
   * @param _CliffTime Type: uint256, Indexed: false
   * @param _FinishTime Type: uint256, Indexed: false
   * @param _StartAmount Type: uint256, Indexed: false
   * @param _Owner Type: address, Indexed: false
   */
  CreateNewPool(
    _Token: string,
    _StartTime: string,
    _CliffTime: string,
    _FinishTime: string,
    _StartAmount: string,
    _Owner: string
  ): MethodPayableReturnContext;
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param _Token Type: address, Indexed: false
   * @param _StartTime Type: uint256[], Indexed: false
   * @param _CliffTime Type: uint256[], Indexed: false
   * @param _FinishTime Type: uint256[], Indexed: false
   * @param _StartAmount Type: uint256[], Indexed: false
   * @param _Owner Type: address[], Indexed: false
   */
  CreatePoolsWrtTime(
    _Token: string,
    _StartTime: string[],
    _CliffTime: string[],
    _FinishTime: string[],
    _StartAmount: string[],
    _Owner: string[]
  ): MethodPayableReturnContext;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  Fee(): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  FeeToken(): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param _UserAddress Type: address, Indexed: false
   */
  GetAllMyPoolsData(
    _UserAddress: string
  ): MethodConstantReturnContext<DataResponse[]>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param _UserAddress Type: address, Indexed: false
   */
  GetAllMyPoolsId(_UserAddress: string): MethodConstantReturnContext<string[]>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param _UserAddress Type: address, Indexed: false
   * @param _Tokens Type: address[], Indexed: false
   */
  GetMyPoolDataByToken(
    _UserAddress: string,
    _Tokens: string[]
  ): MethodConstantReturnContext<GetMyPoolDataByTokenResponse>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param _UserAddress Type: address, Indexed: false
   */
  GetMyPoolsData(
    _UserAddress: string
  ): MethodConstantReturnContext<DataResponse[]>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param _UserAddress Type: address, Indexed: false
   */
  GetMyPoolsId(_UserAddress: string): MethodConstantReturnContext<string[]>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param _UserAddress Type: address, Indexed: false
   * @param _Tokens Type: address[], Indexed: false
   */
  GetMyPoolsIdByToken(
    _UserAddress: string,
    _Tokens: string[]
  ): MethodConstantReturnContext<string[]>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param _ids Type: uint256[], Indexed: false
   */
  GetPoolsData(_ids: string[]): MethodConstantReturnContext<DataResponse[]>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  GovernerContract(): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  Index(): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: address, Indexed: false
   * @param parameter1 Type: uint256, Indexed: false
   */
  MyPoolz(
    parameter0: string,
    parameter1: string
  ): MethodConstantReturnContext<string>;
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param _fee Type: uint256, Indexed: false
   */
  PayFee(_fee: string): MethodPayableReturnContext;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: address, Indexed: false
   */
  Reserve(parameter0: string): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _amount Type: uint256, Indexed: false
   */
  SetFeeAmount(_amount: string): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _token Type: address, Indexed: false
   */
  SetFeeToken(_token: string): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _PoolId Type: uint256, Indexed: false
   * @param _NewAmount Type: uint256, Indexed: false
   * @param _NewOwner Type: address, Indexed: false
   */
  SplitPoolAmount(
    _PoolId: string,
    _NewAmount: string,
    _NewOwner: string
  ): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _PoolId Type: uint256, Indexed: false
   * @param _Amount Type: uint256, Indexed: false
   * @param _Address Type: address, Indexed: false
   */
  SplitPoolAmountFrom(
    _PoolId: string,
    _Amount: string,
    _Address: string
  ): MethodReturnContext;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  TokenFeeWhiteListId(): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  TokenFilterWhiteListId(): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _PoolId Type: uint256, Indexed: false
   * @param _NewOwner Type: address, Indexed: false
   */
  TransferPoolOwnership(
    _PoolId: string,
    _NewOwner: string
  ): MethodReturnContext;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  UserWhiteListId(): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  WhiteList_Address(): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _token Type: address, Indexed: false
   * @param _to Type: address, Indexed: false
   */
  WithdrawFee(_token: string, _to: string): MethodReturnContext;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  isTokenFilterOn(): MethodConstantReturnContext<boolean>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param _tokenAddress Type: address, Indexed: false
   */
  isTokenWhiteListed(
    _tokenAddress: string
  ): MethodConstantReturnContext<boolean>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param _tokenAddress Type: address, Indexed: false
   */
  isTokenWithFee(_tokenAddress: string): MethodConstantReturnContext<boolean>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param _UserAddress Type: address, Indexed: false
   */
  isUserPaysFee(_UserAddress: string): MethodConstantReturnContext<boolean>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  maxTransactionLimit(): MethodConstantReturnContext<string>;
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
   * @param _address Type: address, Indexed: false
   */
  setGovernerContract(_address: string): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _newLimit Type: uint256, Indexed: false
   */
  setMaxTransactionLimit(_newLimit: string): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _id Type: uint256, Indexed: false
   */
  setTokenFeeWhiteListId(_id: string): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _id Type: uint256, Indexed: false
   */
  setTokenFilterWhiteListId(_id: string): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _id Type: uint256, Indexed: false
   */
  setUserWhiteListId(_id: string): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _address Type: address, Indexed: false
   */
  setWhiteListAddress(_address: string): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   */
  swapTokenFilter(): MethodReturnContext;
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
   * @param _PoolId Type: uint256, Indexed: false
   */
  getWithdrawableAmount(_PoolId: string): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _PoolId Type: uint256, Indexed: false
   */
  WithdrawToken(_PoolId: string): MethodReturnContext;
}
