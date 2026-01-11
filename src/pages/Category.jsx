import { useParams } from 'react-router-dom'
import SEO from '../components/SEO'
import NewsCard from '../components/NewsCard'
import { getArticlesByCategory } from '../utils/data'

const CategoryPage = () => {
    const { categorySlug } = useParams()
    const articles = getArticlesByCategory(categorySlug)

    const categoryNames = {
        'world-news': 'World News',
        'india-global-impact': 'India & Global Impact',
        'technology-ai': 'Technology & AI',
        'economy-business': 'Economy & Business',
        'explained': 'Explained',
    }

    const categoryName = categoryNames[categorySlug] || 'News'

    const categoryDescriptions = {
        'world-news': 'Stay updated with the latest global events, international politics, and world affairs.',
        'india-global-impact': 'Explore how India shapes and is shaped by global developments.',
        'technology-ai': 'Cutting-edge technology news, AI breakthroughs, and digital innovation.',
        'economy-business': 'Business trends, economic analysis, and market insights.',
        'explained': 'Complex topics broken down into easy-to-understand explanations.',
    }

    return (
        <>
            <SEO
                title={categoryName}
                description={categoryDescriptions[categorySlug]}
                keywords={`${categoryName}, news, analysis, India`}
            />

            <div className="bg-gradient-to-r from-primary to-accent text-white py-12 mb-8">
                <div className="container-custom">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{categoryName}</h1>
                    <p className="text-xl text-gray-200 max-w-3xl">
                        {categoryDescriptions[categorySlug]}
                    </p>
                </div>
            </div>

            <div className="container-custom py-8">
                {/* Ad Placeholder */}
                <div className="ad-placeholder h-24 mb-8">
                    <span>Advertisement</span>
                </div>

                {articles.length > 0 ? (
                    <div className="space-y-6">
                        {articles.map((article, index) => (
                            <div key={article.slug}>
                                <NewsCard article={article} variant="list" />
                                {(index + 1) % 3 === 0 && index !== articles.length - 1 && (
                                    <div className="ad-placeholder h-24 my-6">
                                        <span>Advertisement</span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <h2 className="text-2xl font-bold text-gray-600 mb-4">No articles found</h2>
                        <p className="text-gray-500">Check back soon for new content in this category.</p>
                    </div>
                )}

                {/* Bottom Ad */}
                <div className="ad-placeholder h-32 mt-12">
                    <span>Advertisement</span>
                </div>
            </div>
        </>
    )
}

export default CategoryPage
