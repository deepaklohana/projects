import React from 'react'

const logos = ['stripe', 'Square', 'amazon pay', 'authorize.net', 'PayPal']

const LogoStrip = () => {
  return (
    <section className="border-b border-slate-100 bg-slate-50 py-10">
      <div className="flex flex-col items-center gap-6 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
          Trusted by modern payment providers
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {logos.map((logo) => (
            <div
              key={logo}
              className="rounded-xl border border-slate-200 bg-white px-5 py-2 text-sm font-semibold tracking-tight text-slate-600 shadow-sm"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LogoStrip

