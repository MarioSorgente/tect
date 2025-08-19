// core/graph/types.ts
export type JSONSchema = unknown;

export type Port = {
  id: string;
  name: string;
  schema: JSONSchema;
  optional?: boolean;
};

export type BlockLang = "typescript" | "python" | "wasm";

export type FnSignature = {
  inputs: Record<string, string>;
  outputs: Record<string, string>;
  description?: string;
};

export type Block = {
  id: string;
  name: string;
  language: BlockLang;
  description?: string;
  inputs: Port[];
  outputs: Port[];
  fnSignature: FnSignature;
  testCases: { name: string; inputs: Record<string, any>; expect: Record<string, any> }[];
};

export type Edge = {
  id: string;
  from: { blockId: string; portId: string };
  to: { blockId: string; portId: string };
};

export type Board = {
  id: string;
  name: string;
  version: string;
  blocks: Block[];
  edges: Edge[];
};
