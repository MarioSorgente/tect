export default function Docs(){
  return (
    <main className="container">
      <div className="card">
        <h2 style={{marginTop:0}}>Docs (MVP intro)</h2>
        <ol>
          <li>We’ll add a canvas and palette in the next steps.</li>
          <li>Contracts (schemas + signature) define what code must do.</li>
          <li><b>Generate</b> creates files; <b>Generate with AI</b> fills the body only.</li>
          <li>All code runs in your browser in sandboxed workers.</li>
        </ol>
        <p className="hint">OpenAI key will be added only to a serverless route later; never in the browser.</p>
      </div>
    </main>
  );
}
