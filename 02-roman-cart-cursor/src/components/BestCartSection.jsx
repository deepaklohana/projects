import React from 'react'

const bullets = [
  'Boost conversions with frictionless checkout',
  'Works with your existing website',
  'Keep customers coming back with abandoned cart emails',
]

const BestCartSection = () => {
  return (
    <section className="border-b border-slate-100 bg-white py-16">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
          Best <span className="text-indigo-600">Shopping Cart</span> for Your Website
        </h2>
        <p className="mt-3 text-sm text-slate-600">
          RomanCart works anywhere you can paste a link — from popular website builders to content
          management systems and custom HTML sites.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-5xl gap-8 md:grid-cols-[1.4fr,1fr] md:items-center">
        <div className="grid grid-cols-3 gap-4">
          {['Shopify', 'WordPress', 'Squarespace', 'Webflow', 'Wix', 'Custom'].map((name) => (
            <div
              key={name}
              className="flex h-20 items-center justify-center rounded-xl border border-slate-100 bg-slate-50 text-xs font-semibold text-slate-700 shadow-sm"
            >
              {name}
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 text-left shadow-sm">
          <h3 className="text-sm font-semibold text-slate-900">Why merchants choose RomanCart</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            {bullets.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-4 w-4 rounded-full bg-emerald-100 text-[10px] font-semibold text-emerald-700 flex items-center justify-center">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <button className="mt-5 rounded-full bg-indigo-600 px-5 py-2 text-xs font-semibold text-white shadow-sm shadow-indigo-300 hover:bg-indigo-700">
            Browse integrations
          </button>
        </div>
      </div>
    </section>
  )
}

export default BestCartSection

