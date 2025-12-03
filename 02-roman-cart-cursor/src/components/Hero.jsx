import React from 'react'
import heroCart from '../../assets/c__Users_ABC_AppData_Roaming_Cursor_User_workspaceStorage_87728e241eb07f4b20fad5cbe4b963f8_images_Desktop_-_3-5fbc00d2-5a2f-41c2-908e-8929530161c6.png'

const Hero = () => {
  return (
    <section
      id="product"
      className="grid gap-10 border-b border-slate-100 bg-white pb-16 pt-12 md:grid-cols-2 md:items-center md:gap-12"
    >
      <div>
        <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
          <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-indigo-600 text-[10px] font-semibold text-white">
            RC
          </span>
          Add a Shopping Cart to Any Website
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          Add a <span className="text-indigo-600">Shopping Cart</span> to Any Website
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
          Add a shopping cart, accept payments, and manage orders without rebuilding your site.
          RomanCart works with your existing website, landing pages, or blog.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <button className="rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-indigo-300 hover:bg-indigo-700">
            View Demo
          </button>
          <button className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-slate-900">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 shadow-sm">
              ▶
            </span>
            Watch 2‑minute overview
          </button>
        </div>

        <p className="mt-6 text-xs text-slate-500">
          Trusted by sellers in over <span className="font-semibold text-amber-600">100+ countries</span>.
        </p>
      </div>

      <div className="relative flex justify-center">
        <div className="pointer-events-none absolute -left-10 -top-6 h-16 w-16 rounded-full bg-indigo-100 blur-2xl" />
        <div className="pointer-events-none absolute -right-6 bottom-0 h-24 w-24 rounded-full bg-sky-100 blur-3xl" />

        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-xl max-w-full">
          <img
            src={heroCart}
            alt="RomanCart shopping cart preview"
            className="block h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero

