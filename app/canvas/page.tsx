// app/canvas/page.tsx
"use client";
import dynamic from "next/dynamic";
import Link from "next/link";

// Load Canvas only in the browser; show a friendly fallback while it loads
const Canvas = dynamic(() => import("../../components/Canvas/Canvas"), {
  ssr: false,
  loading: () => <div className="card">Loading canvas…</div>
});

export default function CanvasPage() {
  return (
    <main className="container">
      <div className="row" style={{ marginBottom: 8 }}>
        <span className="badge">Tect — Canvas</span>
        <Link className="btn" href="/">← Back</Link>
      </div>
      <Canvas />
    </main>
  );
}
