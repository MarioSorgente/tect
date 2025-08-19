// app/page.tsx
"use client";
import Canvas from "@/components/Canvas/Canvas";

export default function Home() {
  return (
    <main className="container">
      <div className="row" style={{ marginBottom: 8 }}>
        <span className="badge">Tect</span>
        <span className="hint">Add blocks on the canvas, connect them with arrows.</span>
      </div>
      <Canvas />
    </main>
  );
}
