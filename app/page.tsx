export default function Home() {
  return (
    <main className="container">
      <div className="row" style={{marginBottom:8}}>
        <span className="badge">Tect</span>
        <span className="hint">Foundation is live. Next: canvas + codegen + OpenAI route.</span>
      </div>
      <div className="card">
        <h2 style={{marginTop:0}}>Welcome to Tect</h2>
        <p className="hint">You’ll design the architecture as blocks and typed edges; Tect will generate files and (optionally) ask OpenAI to fill the function body only.</p>
        <ul>
          <li>Go to <code>/docs</code> for a quick guide</li>
          <li>Go to <code>/tests</code> for smoke checks</li>
        </ul>
      </div>
    </main>
  );
}
