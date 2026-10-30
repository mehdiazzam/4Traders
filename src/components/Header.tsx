import { CATEGORIES, type Category } from '../data/news'

interface HeaderProps {
  category: Category
  onCategory: (c: Category) => void
  onHome: () => void
}

export function Header({ category, onCategory, onHome }: HeaderProps) {
  return (
    <header className="border-b border-line bg-base-200">
      <div className="navbar max-w-5xl mx-auto px-4 min-h-14 gap-3">
        <button
          type="button"
          onClick={onHome}
          className="flex items-center gap-2 shrink-0"
        >
          <span className="border border-primary w-7 h-7 flex items-center justify-center font-mono text-sm text-primary font-bold">
            4
          </span>
          <span className="font-mono text-sm font-semibold tracking-[0.14em]">
            4TRADERS
          </span>
        </button>

        <nav className="flex flex-wrap gap-1 ms-auto">
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              type="button"
              className={`btn btn-xs ${
                category === c.id
                  ? 'btn-active border-primary text-primary bg-base-300'
                  : 'btn-ghost'
              }`}
              onClick={() => {
                onHome()
                onCategory(c.id)
              }}
            >
              {c.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}
