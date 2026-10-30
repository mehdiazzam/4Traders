import { TICKER } from '../data/news'

export function Ticker() {
  return (
    <div className="border-b border-line bg-base-100 overflow-x-auto">
      <div className="max-w-5xl mx-auto flex items-center gap-0 px-2">
        {TICKER.map((q) => {
          const up = q.change.startsWith('+')
          return (
            <div
              key={q.pair}
              className="flex items-center gap-2 px-3 py-2 border-e border-line shrink-0 text-xs"
            >
              <span className="font-mono font-medium ltr-num">{q.pair}</span>
              <span className="font-mono ltr-num">{q.price}</span>
              <span
                className={`font-mono ltr-num ${up ? 'text-success' : 'text-error'}`}
              >
                {q.change}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
