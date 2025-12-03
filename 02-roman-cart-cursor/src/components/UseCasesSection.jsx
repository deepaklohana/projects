import React from 'react'

const useCases = [
  {
    title: 'Retail Stores',
    description: 'Connect your physical and online stores with shared inventory and orders.',
  },
  {
    title: 'Digital Products',
    description: 'Sell downloads, memberships, and recurring subscriptions with ease.',
  },
  {
    title: 'Event Tickets',
    description: 'Create ticketed events with seat limits, discount codes, and more.',
  },
  {
    title: 'Sub Services',
    description: 'Bill clients automatically for retainers, care plans, and services.',
  },
  {
    title: 'Donations',
    description: 'Accept one-time or recurring donations for charities and organizations.',
  },
]

const UseCasesSection = () => {
  return (
    <section className="border-b border-slate-100 bg-slate-50 py-16">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
          How Businesses Use <span className="text-indigo-600">RomanCart</span>
        </h2>
        <p className="mt-3 text-sm text-slate-600">
          Discover how RomanCart empowers different types of businesses to sell more efficiently —
          online and beyond.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2 md:grid-cols-3">
        {useCases.map((item) => (
          <div
            key={item.title}
            className="flex flex-col rounded-2xl border border-slate-100 bg-white p-4 text-left shadow-sm"
          >
            <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-600">{item.description}</p>
            <button className="mt-3 inline-flex w-max text-xs font-semibold text-indigo-600 hover:text-indigo-700">
              Learn more →
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default UseCasesSection

