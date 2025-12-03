import React from 'react'

const posts = [
  {
    title: 'How Cart Upgrades Can Boost Your Sales Overnight',
    date: 'May 12, 2023',
  },
  {
    title: 'What Successful Sellers Are Doing Differently',
    date: 'June 4, 2023',
  },
  {
    title: "A Beginner's Guide to Using Romancart's Powerful Add‑ons",
    date: 'July 18, 2023',
  },
]

const BlogSection = () => {
  return (
    <section id="blog" className="border-b border-slate-100 bg-slate-50 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              Explore Our <span className="text-indigo-600">Blog</span>
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Stay updated with the latest tools, features, and best practices to grow your online
              sales.
            </p>
          </div>
          <button className="hidden rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-900 shadow-sm hover:bg-slate-100 md:inline-flex">
            View all
          </button>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="flex flex-col rounded-2xl border border-slate-100 bg-white p-4 text-left shadow-sm"
            >
              <div className="mb-3 h-28 rounded-xl bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200" />
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
                {post.date}
              </p>
              <h3 className="mt-2 text-sm font-semibold text-slate-900">{post.title}</h3>
              <button className="mt-4 inline-flex w-max rounded-full bg-indigo-600 px-4 py-1.5 text-[11px] font-semibold text-white hover:bg-indigo-700">
                Read article
              </button>
            </article>
          ))}
        </div>

        <div className="mt-6 flex gap-3 md:hidden">
          <button className="flex-1 rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-900 shadow-sm hover:bg-slate-100">
            View all
          </button>
        </div>
      </div>
    </section>
  )
}

export default BlogSection

