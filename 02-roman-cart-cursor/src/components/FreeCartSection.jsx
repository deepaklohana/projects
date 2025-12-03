import React from 'react'

const FreeCartSection = () => {
  return (
    <section className="grid gap-10 border-b border-slate-100 bg-white py-16 md:grid-cols-2 md:items-center md:gap-14">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
          Free <span className="text-indigo-600">Shopping Cart</span>
        </h2>
        <p className="text-sm leading-relaxed text-slate-600">
          Create your RomanCart store and start taking orders online in just minutes. Easily add a
          shopping cart to a WordPress website or any other website builder, bespoke sites, hand
          built sites, or any other site that needs a shopping cart.
        </p>
        <button className="rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-indigo-300 hover:bg-indigo-700">
          View Demo
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-3 rounded-2xl border border-slate-100 bg-slate-50 p-4 shadow-sm">
          <div className="flex items-center justify-between text-xs font-medium text-slate-500">
            <span>Simple product widgets</span>
            <span className="rounded-full bg-white px-2 py-0.5 text-[10px] text-indigo-600">
              No code
            </span>
          </div>
          <div className="mt-2 h-28 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200" />
        </div>

        <div className="space-y-3 rounded-2xl border border-slate-100 bg-slate-50 p-4 shadow-sm">
          <div className="flex items-center justify-between text-xs font-medium text-slate-500">
            <span>WordPress & builders</span>
            <span className="rounded-full bg-white px-2 py-0.5 text-[10px] text-emerald-600">
              Plugins
            </span>
          </div>
          <div className="mt-2 h-28 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200" />
        </div>
      </div>
    </section>
  )
}

export default FreeCartSection

