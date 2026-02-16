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
    <main className="mx-auto max-w-xl p-6 min-h-screen texture-linen" style={{backgroundColor: '#C8BBA6'}}>
      <div className="bg-warm-white texture-ceramic rounded-xl p-8 mb-8 border-2" style={{borderColor: 'var(--color-warm-gray)'}}>
        <h1 className="text-3xl font-display font-semibold" style={{color: 'var(--color-text-primary)'}}>{type === "sample" ? "Request Sample" : "Request Quote"}</h1>
        <p className="mt-2 text-sm font-body" style={{color: 'var(--color-text-secondary)'}}>Product: {product || "—"}</p>
      </div>

      <div className="mt-6 space-y-3">
        <input className="w-full rounded-xl font-body p-3 border-2 focus:outline-none transition-all" style={{backgroundColor: 'var(--color-warm-white)', borderColor: 'var(--color-warm-gray)', color: 'var(--color-text-primary)'}} placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="w-full rounded-xl font-body p-3 border-2 focus:outline-none transition-all" style={{backgroundColor: 'var(--color-warm-white)', borderColor: 'var(--color-warm-gray)', color: 'var(--color-text-primary)'}} placeholder="Company" value={company} onChange={(e) => setCompany(e.target.value)} />
        <textarea className="w-full rounded-xl font-body p-3 border-2 focus:outline-none transition-all" style={{backgroundColor: 'var(--color-warm-white)', borderColor: 'var(--color-warm-gray)', color: 'var(--color-text-primary)'}} placeholder="Message" rows={5} value={msg} onChange={(e) => setMsg(e.target.value)} />
        <button className="w-full rounded-xl font-body p-3 font-semibold transition-all border-2 hover:shadow-lg" style={{backgroundColor: 'var(--color-sage)', color: 'var(--color-text-light)', borderColor: 'var(--color-sage)'}} onClick={submit}>Submit</button>
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
