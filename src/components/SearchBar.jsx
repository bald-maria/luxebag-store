export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative max-w-md">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500"
        fill="none" viewBox="0 0 24 24" stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Rechercher un sac..."
        className="w-full bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-600 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-neutral-600 transition-colors"
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white transition-colors"
        >
          ✕
        </button>
      )}
    </div>
  )
}
