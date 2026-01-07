'use client'

import { useState, useMemo } from 'react'
import WatchCard from './WatchCard'
import { Watch } from '../types/watch'

type SortOption = 'none' | 'price-asc' | 'price-desc'

const WatchGrid = ({ watches }: { watches: Watch[] }) => {
  const [sort, setSort] = useState<SortOption>('none')
  const [search, setSearch] = useState('')

  const filteredAndSortedWatches = useMemo(() => {
    let filtered = watches.filter((watch) =>
      watch.name.toLowerCase().includes(search.toLowerCase())
      // Optional: search brand too
      // || watch.brand?.toLowerCase().includes(search.toLowerCase())
    )

    if (sort === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price)
    }

    if (sort === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price)
    }

    return filtered
  }, [watches, search, sort])

  return (
    <>
      {/* Search & Sort */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-6">
        {/* Search */}
        <input
          type="text"
          placeholder="Search for a watch..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-xl px-4 py-2 w-full md:w-1/3 focus:outline-none"
        />

        {/* Sort */}
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as SortOption)}
          className="border rounded px-3 py-2 text-sm focus:outline-none"
        >
          <option value="none">Sort by</option>
          <option value="price-asc">Price: Low → High</option>
          <option value="price-desc">Price: High → Low</option>
        </select>
      </div>

      {/* Results */}
      {filteredAndSortedWatches.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">
          No watches found.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {filteredAndSortedWatches.map((watch) => (
            <WatchCard key={watch.id} watch={watch} />
          ))}
        </div>
      )}
    </>
  )
}

export default WatchGrid
