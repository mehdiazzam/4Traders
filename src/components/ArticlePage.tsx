import { ArrowRight } from 'lucide-react'
import type { Article } from '../data/news'

interface ArticlePageProps {
  article: Article
  onBack: () => void
}

export function ArticlePage({ article, onBack }: ArticlePageProps) {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <button
        type="button"
        className="btn btn-ghost btn-sm gap-1 mb-6 text-muted"
        onClick={onBack}
      >
        <ArrowRight size={14} />
        العودة للأخبار
      </button>

      <div className="flex flex-wrap items-center gap-2 mb-3 text-xs text-muted">
        <span className="badge badge-outline badge-sm border-line">
          {article.categoryLabel}
        </span>
        {article.pair && (
          <span className="font-mono ltr-num text-primary">{article.pair}</span>
        )}
        <span>{article.time}</span>
        <span>·</span>
        <span>{article.author}</span>
      </div>

      <h1 className="text-2xl md:text-3xl font-bold leading-snug mb-4">
        {article.title}
      </h1>
      <p className="text-base text-base-content/75 leading-relaxed mb-8 border-s-2 border-primary ps-4">
        {article.summary}
      </p>

      <div className="space-y-5 text-[15px] leading-8 text-base-content/90">
        {article.body.map((p) => (
          <p key={p.slice(0, 24)}>{p}</p>
        ))}
      </div>
    </article>
  )
}
