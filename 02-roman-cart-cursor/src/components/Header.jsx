import React from 'react'

const Header = () => {
  return (
    <header className="border-b border-slate-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-sky-400 text-white font-semibold">
            RC
          </div>
          <div className="leading-tight">
            <div className="flex items-center gap-2">
              <span className="text-base font-semibold tracking-tight text-slate-900">
                RomanCart
              </span>
              <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700 border border-emerald-100">
                stripe Verified Partner
              </span>
            </div>
            <p className="text-xs text-slate-500">Add a shopping cart to any site</p>
          </div>
        </div>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          <a href="#product" className="hover:text-slate-900">
            Product
          </a>
          <a href="#features" className="hover:text-slate-900">
            Features
          </a>
          <a href="#pricing" className="hover:text-slate-900">
            Pricing
          </a>
          <a href="#blog" className="hover:text-slate-900">
            Blog
          </a>
          <a href="#resources" className="hover:text-slate-900">
            Resources
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden text-sm font-medium text-slate-600 hover:text-slate-900 md:inline-flex">
            Sign in
          </button>
          <button className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-indigo-300 hover:bg-indigo-700">
            Try for free
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

