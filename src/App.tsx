import { useMemo, useState } from 'react'
import { ArticleCard } from './components/ArticleCard'
import { ArticlePage } from './components/ArticlePage'
import { Header } from './components/Header'
import { Ticker } from './components/Ticker'
import { ARTICLES, type Category } from './data/news'

export default function App() {
  const [category, setCategory] = useState<Category>('all')
  const [openId, setOpenId] = useState<string | null>(null)

  const articles = useMemo(
    () =>
      category === 'all'
        ? ARTICLES
        : ARTICLES.filter((a) => a.category === category),
    [category],
  )

  const openArticle = ARTICLES.find((a) => a.id === openId) ?? null

  return (
    <div className="min-h-dvh flex flex-col bg-base-100">
      <Header
        category={category}
        onCategory={setCategory}
        onHome={() => setOpenId(null)}
      />
      <Ticker />

      <main className="flex-1">
        {openArticle ? (
          <ArticlePage article={openArticle} onBack={() => setOpenId(null)} />
        ) : (
          <div className="max-w-5xl mx-auto px-4 py-6">
            <div className="mb-5">
              <h1 className="text-lg font-semibold">أخبار الفوركس</h1>
              <p className="text-sm text-muted mt-1">
                تغطية عربية موجزة للعملات والبنوك المركزية والتحليلات
              </p>
            </div>

            {articles.length === 0 ? (
              <p className="text-sm text-muted py-12 text-center">
                لا توجد أخبار في هذا القسم حالياً.
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {articles.map((article, i) => (
                  <ArticleCard
                    key={article.id}
                    article={article}
                    featured={i === 0 && category === 'all'}
                    onOpen={setOpenId}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </main>

      <footer className="border-t border-line py-4 text-center text-[11px] text-muted">
        4TRADERS · أخبار الفوركس · لقطة سوق توضيحية وليست تغذية مباشرة
      </footer>
    </div>
  )
}
