// app/page.tsx
import dynamic from "next/dynamic";

// Load Canvas only in the browser to avoid SSR/hydration issues
const Canvas = dynamic(() => import("@/components/Canvas/Canvas"), { ssr: false });

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
