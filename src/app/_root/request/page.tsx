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
    <main className="mx-auto max-w-xl p-6 min-h-screen bg-natural-light texture-linen">
      <div className="bg-natural-medium texture-ceramic rounded-xl p-8 mb-8 border border-stone-200">
        <h1 className="text-3xl font-semibold text-gray-900">{type === "sample" ? "Request Sample" : "Request Quote"}</h1>
        <p className="mt-2 text-sm text-gray-700 opacity-90">Product: {product || "—"}</p>
      </div>

      <div className="mt-6 space-y-3">
        <input className="w-full rounded-xl bg-natural-light border border-stone-300 p-3 focus:outline-none focus:ring-2 focus:ring-stone-400" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="w-full rounded-xl bg-natural-light border border-stone-300 p-3 focus:outline-none focus:ring-2 focus:ring-stone-400" placeholder="Company" value={company} onChange={(e) => setCompany(e.target.value)} />
        <textarea className="w-full rounded-xl bg-natural-light border border-stone-300 p-3 focus:outline-none focus:ring-2 focus:ring-stone-400" placeholder="Message" rows={5} value={msg} onChange={(e) => setMsg(e.target.value)} />
        <button className="w-full rounded-xl bg-natural-taupe hover:bg-natural-stone p-3 text-gray-900 font-semibold transition-colors border border-stone-300" onClick={submit}>Submit</button>
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
