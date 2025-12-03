import React from 'react'

const items = [
  {
    number: '01',
    title: 'Shopping Cart',
    description: 'Embed “Add to cart” buttons or full carts directly on any page.',
  },
  {
    number: '02',
    title: 'Button Widgets',
    description: 'Drop-in product and subscription widgets for landing pages and blogs.',
  },
  {
    number: '03',
    title: 'Full Storefront',
    description: 'Launch a complete hosted storefront powered by your RomanCart products.',
  },
]

const WorksSection = () => {
  return (
    <section
      id="features"
      className="border-b border-slate-100 bg-slate-50 py-16"
    >
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
          The <span className="text-indigo-600">Shopping Cart</span> That Works Anywhere You Do
        </h2>
        <p className="mt-3 text-sm text-slate-600">
          Whether you need simple “Buy Now” buttons, customizable product widgets, or a full
          storefront, RomanCart flexes to match how you sell on your site, store, or blog.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.number}
            className="flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm"
          >
            <div className="h-40 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200" />
            <div className="flex flex-1 flex-col gap-2 px-5 py-4 text-left">
              <span className="text-xs font-semibold text-slate-400">{item.number}</span>
              <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
              <p className="text-xs leading-relaxed text-slate-600">{item.description}</p>
              <button className="mt-2 inline-flex w-max text-xs font-semibold text-indigo-600 hover:text-indigo-700">
                Learn more →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WorksSection

