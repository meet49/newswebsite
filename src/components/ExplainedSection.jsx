import { Link } from 'react-router-dom'
import { BookOpen, Lightbulb } from 'lucide-react'

const ExplainedSection = ({ articles }) => {
    return (
        <section className="bg-gradient-to-br from-accent to-primary text-white py-12 rounded-2xl">
            <div className="container-custom">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="text-3xl font-bold mb-2 flex items-center gap-2">
                            <BookOpen className="w-8 h-8" />
                            Explained
                        </h2>
                        <p className="text-gray-300">Complex topics, simplified for you</p>
                    </div>
                    <Link
                        to="/category/explained"
                        className="hidden sm:inline-block bg-white text-primary px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                        View All
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {articles.map((article) => (
                        <Link
                            key={article.slug}
                            to={`/article/${article.slug}`}
                            className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 group"
                        >
                            <div className="flex items-start space-x-3 mb-3">
                                <Lightbulb className="w-6 h-6 flex-shrink-0 mt-1" />
                                <div className="flex-1">
                                    <h3 className="font-bold text-lg mb-2 group-hover:text-highlight transition-colors">
                                        {article.title}
                                    </h3>
                                    <p className="text-gray-200 text-sm line-clamp-3">{article.summary}</p>
                                </div>
                            </div>
                            <div className="text-sm text-gray-300 mt-4">
                                {article.readTime} min read
                            </div>
                        </Link>
                    ))}
                </div>

                <Link
                    to="/category/explained"
                    className="sm:hidden mt-6 block text-center bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                    View All Explained Articles
                </Link>
            </div>
        </section>
    )
}

export default ExplainedSection
