"use client";

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="container">
      <div className="card">
        <h2 style={{marginTop:0}}>Something went wrong in this route.</h2>
        <pre style={{whiteSpace:"pre-wrap"}}>{String(error?.message || error)}</pre>
        {!!error?.digest && <div className="hint">digest: {error.digest}</div>}
        <button className="btn" onClick={() => reset()}>Try again</button>
      </div>
    </main>
  );
}
