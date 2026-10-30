import type { Article } from '../data/news'

interface ArticleCardProps {
  article: Article
  featured?: boolean
  onOpen: (id: string) => void
}

export function ArticleCard({ article, featured, onOpen }: ArticleCardProps) {
  return (
    <button
      type="button"
      onClick={() => onOpen(article.id)}
      className={`w-full text-start border border-line bg-base-200 p-4 transition-colors duration-150 hover:bg-base-300 ${
        featured ? 'md:col-span-2 md:p-6' : ''
      }`}
    >
      <div className="flex flex-wrap items-center gap-2 mb-2 text-[11px] text-muted">
        <span className="badge badge-outline badge-xs border-line">
          {article.categoryLabel}
        </span>
        {article.pair && (
          <span className="font-mono ltr-num text-primary">{article.pair}</span>
        )}
        <span
          className={`status status-xs ${
            article.impact === 'high'
              ? 'status-error'
              : article.impact === 'medium'
                ? 'status-warning'
                : 'status-success'
          }`}
        />
        <span className="ms-auto">{article.time}</span>
      </div>

      <h2
        className={`font-semibold leading-snug mb-2 ${
          featured ? 'text-xl md:text-2xl' : 'text-base'
        }`}
      >
        {article.title}
      </h2>
      <p className="text-sm text-base-content/70 leading-relaxed line-clamp-3">
        {article.summary}
      </p>
      <div className="mt-3 text-[11px] text-muted">{article.author}</div>
    </button>
  )
}
