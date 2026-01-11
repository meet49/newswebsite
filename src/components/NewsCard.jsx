import { Link } from 'react-router-dom'

const NewsCard = ({ article, variant = 'grid' }) => {
    const {
        slug,
        title,
        summary,
        image,
        category,
        date,
        readTime,
    } = article

    if (variant === 'list') {
        return (
            <Link to={`/article/${slug}`} className="card flex flex-col sm:flex-row group">
                <div className="sm:w-1/3 h-48 sm:h-auto overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                </div>
                <div className="p-6 sm:w-2/3 flex flex-col justify-between">
                    <div>
                        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                            <span className="text-highlight font-semibold">{category}</span>
                            <span>•</span>
                            <span>{date}</span>
                            <span>•</span>
                            <span>{readTime} min read</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 group-hover:text-highlight transition-colors line-clamp-2">
                            {title}
                        </h3>
                        <p className="text-gray-600 line-clamp-3">{summary}</p>
                    </div>
                </div>
            </Link>
        )
    }

    return (
        <Link to={`/article/${slug}`} className="card group">
            <div className="h-48 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </div>
            <div className="p-6">
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                    <span className="text-highlight font-semibold">{category}</span>
                    <span>•</span>
                    <span>{date}</span>
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-highlight transition-colors line-clamp-2">
                    {title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3">{summary}</p>
                <div className="mt-4 text-sm text-gray-500">
                    {readTime} min read
                </div>
            </div>
        </Link>
    )
}

export default NewsCard
