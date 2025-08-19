// store/useBoardStore.ts
"use client";
import { create } from "zustand";
import type { Board, Block, Edge } from "../core/graph/types";

type State = {
  board: Board;
  setBoard: (b: Board) => void;
  upsertBlock: (b: Block) => void;
  removeBlock: (id: string) => void;
  addEdge: (e: Edge) => void;
  setEdges: (e: Edge[]) => void;
};

const initial: Board = {
  id: "board-1",
  name: "Untitled",
  version: "0.1.0",
  blocks: [],
  edges: []
};

export const useBoardStore = create<State>((set, get) => ({
  board: initial,
  setBoard: (b) => set({ board: b }),
  upsertBlock: (b) => {
    const curr = get().board;
    const i = curr.blocks.findIndex(x => x.id === b.id);
    const blocks = i >= 0 ? curr.blocks.map(x => x.id === b.id ? b : x) : [...curr.blocks, b];
    set({ board: { ...curr, blocks }});
  },
  removeBlock: (id) => {
    const curr = get().board;
    set({
      board: {
        ...curr,
        blocks: curr.blocks.filter(b => b.id !== id),
        edges: curr.edges.filter(e => e.from.blockId !== id && e.to.blockId !== id)
      }
    });
  },
  addEdge: (e) => {
    const curr = get().board;
    set({ board: { ...curr, edges: [...curr.edges, e] }});
  },
  setEdges: (edges) => set({ board: { ...get().board, edges }})
}));
