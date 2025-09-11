import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch';

export default function BookDetail() {

  let { id } = useParams();
  let { data : book, loading, error } = useFetch(`http://localhost:3000/books/${id}`);

  return (
    <div>
      {loading && <p>loading..</p>}
      {!!book && (
        <div class="max-w-5xl mx-auto p-6 md:p-10">
          <div class="bg-white/80 dark:bg-slate-900/70 backdrop-blur-md rounded-2xl shadow-sm overflow-hidden border border-slate-200 dark:border-slate-800 md:flex">
            <div class="md:w-1/3 flex-shrink-0">
              <img src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1400&auto=format&fit=crop"
                alt="Book cover"
                class="w-full h-56 md:h-full object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
              />
            </div>

            <div class="p-6 md:p-8 md:w-2/3">
              <h1 class="text-2xl md:text-3xl font-semibold leading-tight text-slate-900 dark:text-slate-100">
                {book.title}
              </h1>
              <p class="mt-1 text-sm text-slate-600 dark:text-slate-400">
                by <span class="font-medium"> {book.author} </span> · 220 pages · 6 hr read
              </p>

              <div class="mt-4 flex flex-wrap gap-2">
                <span class="text-xs font-medium px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                  {book.categories[0]}
                </span>
                <span class="text-xs font-medium px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                  {book.categories[1]}
                </span>
              </div>

              <div class="mt-6 text-slate-700 dark:text-slate-300">
                <p class="leading-relaxed text-sm md:text-base">
                  {book.description}
                </p>
                <button class="mt-4 inline-block text-sm font-medium underline underline-offset-4 text-sky-600 dark:text-sky-400">
                  Read more
                </button>
              </div>

              <div class="mt-6 border-t border-slate-100 dark:border-slate-800 pt-4 flex items-center justify-between">
                <div class="text-sm text-slate-600 dark:text-slate-400">
                  Published: <span class="font-medium">2024</span>
                </div>
                <div class="text-sm text-slate-600 dark:text-slate-400">
                  Tags: Category 1, Category 2
                </div>
              </div>
            </div>
          </div>

          <section class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="md:col-span-2">
              <div class="p-4 rounded-xl bg-white/60 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                <h3 class="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  About this book
                </h3>
                <p class="mt-2 text-sm text-slate-700 dark:text-slate-300">
                  Longer description goes here. It provides more details, insights, and
                  context about the book.
                </p>
              </div>
            </div>

            <aside class="p-4 rounded-xl bg-white/60 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
              <h4 class="text-sm font-semibold text-slate-900 dark:text-slate-100">
                Quick info
              </h4>
              <ul class="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>Categories: Programming, Design</li>
                <li>Pages: 220</li>
                <li>Estimated reading: 6 hr</li>
              </ul>
            </aside>
          </section>
        </div>
      )}
    </div>
  )
}
