// app/page.tsx
export default function Home() {
  return (
    <main className="container">
      <div className="row" style={{ marginBottom: 8 }}>
        <span className="badge">Tect</span>
        <span className="hint">If you can read this, the app is rendering correctly.</span>
      </div>
      <div className="card">
        <h2 style={{marginTop:0}}>Hello 👋</h2>
        <p>This is a static page to confirm rendering.</p>
        <p><a className="btn" href="/canvas">Go to /canvas to open the whiteboard</a></p>
        <p className="hint">If /canvas shows an error, our error boundary will display it instead of a blank page.</p>
      </div>
    </main>
  );
}
