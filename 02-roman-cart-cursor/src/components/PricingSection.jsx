import React from 'react'

const plans = [
  {
    name: 'Free Plan',
    price: '£0',
    tagline: 'For hobbyists',
    features: ['Up to 10 products', 'Basic checkout', 'Email support'],
  },
  {
    name: 'Starter Plan',
    price: '£19.99',
    tagline: 'Perfect for small shops',
    features: ['Up to 100 products', 'Discount codes', 'Abandoned cart emails'],
    highlighted: true,
  },
  {
    name: 'Growth Plan',
    price: '£39.99',
    tagline: 'Scale your business',
    features: ['Unlimited products', 'Subscriptions', 'Priority support'],
  },
  {
    name: 'Pro Plan',
    price: '£59.99',
    tagline: 'For serious sellers',
    features: ['Advanced APIs', 'Multi-user', 'Dedicated onboarding'],
  },
]

const PricingSection = () => {
  return (
    <section id="pricing" className="border-b border-slate-100 bg-white py-16">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
          We offer <span className="text-indigo-600">Scalable Plans</span> designed to fit your needs
        </h2>
        <p className="mt-3 text-sm text-slate-600">
          RomanCart grows with your business — upgrade or downgrade at any time.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-4">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`flex flex-col rounded-2xl border bg-slate-50 p-4 text-left text-sm shadow-sm ${
              plan.highlighted ? 'border-indigo-200 bg-indigo-50' : 'border-slate-100'
            }`}
          >
            <div className="mb-3">
              <h3 className="text-sm font-semibold text-slate-900">{plan.name}</h3>
              <p className="mt-1 text-xs text-slate-500">{plan.tagline}</p>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-semibold text-slate-900">{plan.price}</span>
              <span className="text-xs text-slate-500">/month</span>
            </div>
            <ul className="mt-4 flex-1 space-y-1 text-xs text-slate-600">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span className="mt-[2px] h-3 w-3 rounded-full bg-emerald-100 text-[8px] font-semibold text-emerald-700 flex items-center justify-center">
                    ✓
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              className={`mt-4 w-full rounded-full px-4 py-2 text-xs font-semibold ${
                plan.highlighted
                  ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-300 hover:bg-indigo-700'
                  : 'bg-white text-slate-900 hover:bg-slate-100'
              }`}
            >
              {plan.highlighted ? 'Get Started' : 'Get this plan'}
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PricingSection

