export type Hash = Uint8Array
export type Address = Uint8Array

export interface Block {
  hash: Hash
  parentHash: Hash
  unclesHash: Hash
  author: Address
  stateRoot: Hash
  transactionsRoot: Hash
  receiptsRoot: Hash
  number: bigint
  gasUsed: bigint
  gasLimit: bigint
  timestamp: bigint
  difficulty: bigint
  totalDifficulty: bigint
  size: bigint | null
}

export interface Transaction {
  hash: Hash
  index: bigint
  from: Address
  to: Address | null
  value: bigint
  gasUsed: bigint
  gasPrice: bigint
  input: Uint8Array
}

export enum ValueKind {
  Address = 0,
  FixedBytes = 1,
  Bytes = 2,
  Int = 3,
  Uint = 4,
  Bool = 5,
  String = 6,
  FixedArray = 7,
  Array = 8,
  Tuple = 9,
}

export type Value =
  | {
      kind: ValueKind.Address
      data: Address
    }
  | {
      kind: ValueKind.FixedBytes
      data: Uint8Array
    }
  | {
      kind: ValueKind.Bytes
      data: Uint8Array
    }
  | {
      kind: ValueKind.Int
      data: bigint
    }
  | {
      kind: ValueKind.Uint
      data: bigint
    }
  | {
      kind: ValueKind.Bool
      data: boolean
    }
  | {
      kind: ValueKind.String
      data: string
    }
  | {
      kind: ValueKind.FixedArray
      data: Value[]
    }
  | {
      kind: ValueKind.Array
      data: Value[]
    }
  | {
      kind: ValueKind.Tuple
      data: Value[]
    }

export interface EventParam {
  name: string
  value: Value
}

export interface Event {
  address: Address
  logIndex: bigint
  transactionLogIndex: bigint
  logType: string | null
  block: Block
  transaction: Transaction
  parameters: EventParam[]
}

export interface Call {
  contractName: string
  contractAddress: Address
  functionName: string
  functionSignature: string
  functionParams: Value[]
}
