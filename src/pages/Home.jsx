import SEO from '../components/SEO'
import FeaturedStory from '../components/FeaturedStory'
import NewsCard from '../components/NewsCard'
import ExplainedSection from '../components/ExplainedSection'
import NewsletterCTA from '../components/NewsletterCTA'
import { getFeaturedArticle, getLatestArticles, getExplainedArticles } from '../utils/data'

const Homepage = () => {
    const featuredArticle = getFeaturedArticle()
    const latestArticles = getLatestArticles(6)
    const explainedArticles = getExplainedArticles(3)

    return (
        <>
            <SEO
                title="Home"
                description="Your trusted source for in-depth news analysis, covering world events, India's global impact, technology, AI, and economy."
                keywords="news, world news, India news, technology, AI, economy, business, explained news"
            />

            <div className="container-custom py-8">
                {/* Featured Story */}
                <section className="mb-12">
                    <FeaturedStory article={featuredArticle} />
                </section>

                {/* Ad Placeholder */}
                <div className="ad-placeholder h-24 mb-12">
                    <span>Advertisement</span>
                </div>

                {/* Latest News */}
                <section className="mb-12">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-3xl font-bold">Latest News</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {latestArticles.map((article) => (
                            <NewsCard key={article.slug} article={article} variant="grid" />
                        ))}
                    </div>
                </section>

                {/* Ad Placeholder */}
                <div className="ad-placeholder h-32 mb-12">
                    <span>Advertisement</span>
                </div>

                {/* Explained Section */}
                <section className="mb-12">
                    <ExplainedSection articles={explainedArticles} />
                </section>

                {/* Newsletter CTA */}
                <section className="mb-12">
                    <NewsletterCTA />
                </section>

                {/* Ad Placeholder */}
                <div className="ad-placeholder h-24">
                    <span>Advertisement</span>
                </div>
            </div>
        </>
    )
}

export default Homepage
