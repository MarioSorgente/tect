"use client";
export default function Tests(){
  const serializable = (() => { try { JSON.stringify({a:1}); return true; } catch { return false; } })();
  const nonSerializable = (() => { try { JSON.stringify({x: BigInt(5) as any}); return true; } catch { return false; } })();
  return (
    <main className="container">
      <div className="card">
        <h2 style={{marginTop:0}}>Smoke tests</h2>
        <div>Serializable JSON → {serializable ? "PASS ✅" : "FAIL ❌"}</div>
        <div>Non-serializable (BigInt) should fail → {nonSerializable ? "FAIL ❌" : "PASS ✅"}</div>
      </div>
    </main>
  );
}
