"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

function RequestContent() {
  const sp = useSearchParams();
  const type = sp.get("type") || "quote";
  const product = sp.get("product") || "";

  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [msg, setMsg] = useState("");
  const [ok, setOk] = useState<string | null>(null);

  async function submit() {
    setOk(null);
    const res = await fetch("/api/request", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ type, product, email, company, msg }),
    });
    setOk(res.ok ? "Submitted" : "Failed");
  }

  return (
    <main className="mx-auto max-w-xl p-6">
      <h1 className="text-3xl font-semibold">{type === "sample" ? "Request Sample" : "Request Quote"}</h1>
      <p className="mt-2 text-sm opacity-80">Product: {product || "—"}</p>

      <div className="mt-6 space-y-3">
        <input className="w-full rounded-xl border p-3" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="w-full rounded-xl border p-3" placeholder="Company" value={company} onChange={(e) => setCompany(e.target.value)} />
        <textarea className="w-full rounded-xl border p-3" placeholder="Message" rows={5} value={msg} onChange={(e) => setMsg(e.target.value)} />
        <button className="w-full rounded-xl bg-black p-3 text-white" onClick={submit}>Submit</button>
        {ok && <div className="text-sm opacity-80">{ok}</div>}
      </div>
    </main>
  );
}

// Loading fallback component
function RequestLoading() {
  return (
    <main className="mx-auto max-w-xl p-6">
      <h1 className="text-3xl font-semibold">Request</h1>
      <p className="mt-2 text-sm opacity-80">Loading...</p>
    </main>
  );
}

// Main page component with Suspense boundary
export default function RequestPage() {
  return (
    <Suspense fallback={<RequestLoading />}>
      <RequestContent />
    </Suspense>
  );
}
