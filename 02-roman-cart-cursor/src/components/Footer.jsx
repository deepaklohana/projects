import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-900 py-8 text-xs text-slate-400">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-sky-400 text-xs font-semibold text-white">
            RC
          </div>
          <div className="text-slate-300">RomanCart</div>
          <span className="hidden text-slate-500 md:inline">·</span>
          <p className="hidden text-slate-500 md:inline">© All rights reserved, Romancart 2025</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <nav className="flex flex-wrap gap-4">
            <a href="#product" className="hover:text-slate-200">
              Home
            </a>
            <a href="#pricing" className="hover:text-slate-200">
              Pricing
            </a>
            <a href="#blog" className="hover:text-slate-200">
              Blog
            </a>
            <a href="#resources" className="hover:text-slate-200">
              Resources
            </a>
          </nav>
          <div className="flex gap-3">
            <span className="h-6 w-6 rounded-full bg-slate-800" />
            <span className="h-6 w-6 rounded-full bg-slate-800" />
            <span className="h-6 w-6 rounded-full bg-slate-800" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

