// components/Canvas/Canvas.tsx
"use client";

import React from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  addEdge,
  Connection,
  useEdgesState,
  useNodesState,
  Node
} from "reactflow";
// NOTE: reactflow CSS is globally imported in app/layout.tsx

import { useBoardStore } from "../../store/useBoardStore";
import type { Block } from "../../core/graph/types";

function newBlock(id: string): Block {
  return {
    id,
    name: `Block ${id.slice(-4)}`,
    language: "typescript",
    description: "",
    inputs: [],
    outputs: [],
    fnSignature: { inputs: {}, outputs: {}, description: "" },
    testCases: []
  };
}

export default function Canvas() {
  const { board, upsertBlock, setEdges } = useBoardStore();

  const [nodes, setNodes, onNodesChange] = useNodesState<Node[]>([]);
  const [edges, rfSetEdges, onEdgesChange] = useEdgesState([]);

  const onConnect = React.useCallback((c: Connection) => {
    rfSetEdges((eds) => addEdge(c, eds));
    // Mirror into Board store (generic in/out ports for now)
    const id = Math.random().toString(36).slice(2, 10);
    setEdges([
      ...board.edges,
      {
        id,
        from: { blockId: c.source!, portId: "out" },
        to: { blockId: c.target!, portId: "in" }
      }
    ]);
  }, [board, rfSetEdges, setEdges]);

  const addBlock = React.useCallback(() => {
    const id = Math.random().toString(36).slice(2, 10);
    setNodes((nds) => [
      ...nds,
      {
        id,
        position: { x: 180 + Math.random() * 260, y: 120 + Math.random() * 180 },
        data: { label: `Block ${id.slice(-4)}` },
        type: "default"
      }
    ]);
    upsertBlock(newBlock(id));
  }, [setNodes, upsertBlock]);

  return (
    <div className="row" style={{ gap: 12 }}>
      {/* Palette */}
      <div className="card" style={{ width: 260 }}>
        <b>Palette</b>
        <div className="hint" style={{ marginTop: 6 }}>
          Click to add a generic block; we’ll expand templates later.
        </div>
        <button className="btn" style={{ marginTop: 8 }} onClick={addBlock}>
          + Block
        </button>
        <hr />
        <b>Board</b>
        <div className="hint">Blocks in store: {board.blocks.length}</div>
      </div>

      {/* Canvas */}
      <div className="card" style={{ flex: 1, height: 520 }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
        >
          <MiniMap pannable zoomable />
          <Controls />
          <Background />
        </ReactFlow>
      </div>

      {/* Inspector (very minimal for now) */}
      <div className="card" style={{ width: 280 }}>
        <b>Inspector</b>
        <div className="hint">Rename blocks and set language.</div>
        <div style={{ marginTop: 8, fontSize: 12 }}>
          {board.blocks.length === 0 && (
            <div className="hint">No blocks yet. Press <code>+ Block</code>.</div>
          )}
          {board.blocks.map((b) => (
            <div
              key={b.id}
              style={{
                border: "1px solid #1e2735",
                borderRadius: 8,
                padding: 8,
                marginBottom: 8
              }}
            >
              <div className="hint">id: {b.id}</div>
              <input
                className="btn"
                style={{ width: "100%", marginTop: 6 }}
                value={b.name}
                onChange={(e) => upsertBlock({ ...b, name: e.target.value })}
              />
              <select
                className="btn"
                style={{ width: "100%", marginTop: 6 }}
                value={b.language}
                onChange={(e) =>
                  upsertBlock({ ...b, language: e.target.value as any })
                }
              >
                <option value="typescript">TypeScript</option>
                <option value="python">Python</option>
                <option value="wasm" disabled>WASM (later)</option>
              </select>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
