'use client'

export function TagFilter({
  topics,
  selected,
  onToggle,
}: {
  topics: string[]
  selected: string | null
  onToggle: (topic: string | null) => void
}) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onToggle(null)}
        className={`rounded-full border px-4 py-1.5 text-xs font-medium uppercase tracking-wider transition-colors ${
          selected === null
            ? 'border-accent bg-accent text-black'
            : 'border-card-border bg-card text-muted hover:border-accent/50 hover:text-foreground'
        }`}
      >
        All
      </button>
      {topics.map((topic) => (
        <button
          key={topic}
          onClick={() => onToggle(topic === selected ? null : topic)}
          className={`rounded-full border px-4 py-1.5 text-xs font-medium uppercase tracking-wider transition-colors ${
            topic === selected
              ? 'border-accent bg-accent text-black'
              : 'border-card-border bg-card text-muted hover:border-accent/50 hover:text-foreground'
          }`}
        >
          {topic}
        </button>
      ))}
    </div>
  )
}
