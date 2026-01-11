import { useParams, Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { getArticleBySlug } from '../utils/data'
import { Newspaper, Search, Lightbulb, Globe, BookOpen } from 'lucide-react'

const ArticlePage = () => {
    const { articleSlug } = useParams()
    const article = getArticleBySlug(articleSlug)

    if (!article) {
        return (
            <div className="container-custom py-16 text-center">
                <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
                <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
                <Link to="/" className="btn-primary">
                    Return to Homepage
                </Link>
            </div>
        )
    }

    return (
        <>
            <SEO
                title={article.title}
                description={article.summary}
                keywords={`${article.category}, news, analysis, India`}
                ogImage={article.image}
            />

            {/* JSON-LD Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "NewsArticle",
                    "headline": article.title,
                    "image": [article.image],
                    "datePublished": article.date,
                    "author": {
                        "@type": "Organization",
                        "name": "ReadNShare Editorial Team"
                    },
                    "publisher": {
                        "@type": "Organization",
                        "name": "ReadNShare",
                        "logo": {
                            "@type": "ImageObject",
                            "url": "https://readnshare.in/logo.png"
                        }
                    },
                    "description": article.summary
                })}
            </script>

            <article className="bg-white">
                {/* Breadcrumbs */}
                <div className="container-custom max-w-4xl py-4 text-sm text-gray-500">
                    <Link to="/" className="hover:underline">Home</Link> /
                    <Link to={`/category/${article.categorySlug}`} className="hover:underline">{article.category}</Link> /
                    <span>{article.title}</span>
                </div>

                {/* Article Header */}
                <div className="bg-gray-50 py-8 border-b">
                    <div className="container-custom max-w-4xl">
                        <div className="flex items-center space-x-3 text-sm text-gray-600 mb-4">
                            <Link
                                to={`/category/${article.categorySlug}`}
                                className="text-highlight font-semibold hover:underline"
                            >
                                {article.category}
                            </Link>
                            <span>•</span>
                            <span>{article.date}</span>
                            <span>•</span>
                            <span>{article.readTime} min read</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            {article.title}
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            {article.summary}
                        </p>
                    </div>
                </div>

                {/* Featured Image */}
                <div className="container-custom max-w-4xl py-8">
                    <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-auto rounded-lg shadow-lg"
                        loading="lazy"
                    />
                </div>

                {/* Top Ad Placeholder */}
                <div className="container-custom max-w-4xl">
                    <div className="ad-placeholder h-24 mb-8">
                        <span>Advertisement</span>
                    </div>
                </div>

                {/* Article Content */}
                <div className="container-custom max-w-4xl pb-12">
                    <div className="prose prose-lg max-w-none">
                        {/* What Happened */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                <Newspaper className="w-7 h-7 text-highlight" />
                                What Happened
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                {article.content.whatHappened}
                            </p>
                            {/* Dynamic Related Articles */}
                            {article.relatedArticles && article.relatedArticles.length > 0 && (
                                <section className="mt-6">
                                    <h4 className="font-semibold text-gray-800 mb-2">Read Also:</h4>
                                    <ul className="list-disc list-inside text-blue-600 space-y-1">
                                        {article.relatedArticles.map((rel, idx) => (
                                            <li key={idx}>
                                                <Link to={`/article/${rel.slug}`} className="text-highlight hover:underline">
                                                    {rel.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            )}

                        </section>

                        {/* Why It Happened */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                <Search className="w-7 h-7 text-highlight" />
                                Why It Happened
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                {article.content.whyItHappened}
                            </p>
                            <p className="mt-2">
                                Related updates: <Link to={`/category/${article.categorySlug}`} className="text-highlight hover:underline">{article.category}</Link>
                            </p>
                        </section>

                        {/* Mid-Article Ad */}
                        <div className="ad-placeholder h-32 my-8">
                            <span>Advertisement</span>
                        </div>

                        {/* Why It Matters */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                <Lightbulb className="w-7 h-7 text-highlight" />
                                Why It Matters
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                {article.content.whyItMatters}
                            </p>
                        </section>

                        {/* India & Global Impact */}
                        <section className="mb-8 bg-blue-50 p-6 rounded-lg border-l-4 border-highlight">
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                <Globe className="w-7 h-7 text-highlight" />
                                India & Global Impact
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                {article.content.impact}
                            </p>
                        </section>

                        {/* Sources */}
                        <section className="mb-8 bg-gray-50 p-6 rounded-lg">
                            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                                <BookOpen className="w-6 h-6 text-highlight" />
                                Sources & Further Reading
                            </h3>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li>Official government press releases and statements</li>
                                <li>Verified news agency reports (Reuters, AP, PTI)</li>
                                <li>Expert analysis from leading think tanks</li>
                                <li>Academic research and peer-reviewed studies</li>
                            </ul>
                        </section>

                        {/* Author Notes */}
                        {article.content.authorNotes && (
                            <section className="bg-gray-50 p-6 rounded-lg mb-8">
                                <h3 className="text-xl font-bold mb-2">Author Notes</h3>
                                <p className="text-gray-700 leading-relaxed">{article.content.authorNotes}</p>
                            </section>
                        )}

                        {/* Conclusion */}
                        <section className="border-t pt-6">
                            <p className="text-gray-600 italic">
                                This article provides analysis based on available information as of {article.date}.
                                ReadNShare is committed to factual reporting and in-depth analysis. For corrections or
                                additional context, please <Link to="/contact" className="text-highlight hover:underline">contact us</Link>.
                            </p>
                        </section>
                    </div>
                </div>

                {/* Bottom Ad Placeholder */}
                <div className="container-custom max-w-4xl pb-8">
                    <div className="ad-placeholder h-32">
                        <span>Advertisement</span>
                    </div>
                </div>
            </article>
        </>
    )
}

export default ArticlePage
