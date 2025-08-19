"use client";

export default function GlobalError({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <main className="container">
          <div className="card">
            <h2 style={{marginTop:0}}>Global error</h2>
            <pre style={{whiteSpace:"pre-wrap"}}>{String(error?.message || error)}</pre>
            {!!error?.digest && <div className="hint">digest: {error.digest}</div>}
            <button className="btn" onClick={() => reset()}>Try again</button>
          </div>
        </main>
      </body>
    </html>
  );
}
