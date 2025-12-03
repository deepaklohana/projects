import React from 'react'

const CTASection = () => {
  return (
    <section className="bg-slate-900 py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 text-center text-white md:flex-row md:text-left">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">
            Join thousands of developers & merchants
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            Try RomanCart free — no credit card required, cancel anytime.
          </p>
        </div>
        <div className="flex flex-col gap-3 md:flex-row">
          <button className="rounded-full bg-indigo-500 px-6 py-2.5 text-sm font-semibold text-white shadow-sm shadow-indigo-400 hover:bg-indigo-400">
            Try for free
          </button>
          <button className="rounded-full bg-transparent px-6 py-2.5 text-sm font-semibold text-slate-100 ring-1 ring-slate-600 hover:bg-slate-800">
            Book a demo
          </button>
        </div>
      </div>
    </section>
  )
}

export default CTASection

