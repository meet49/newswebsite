import { Link } from 'react-router-dom'

const FeaturedStory = ({ article }) => {
    const {
        slug,
        title,
        summary,
        image,
        category,
        date,
        readTime,
    } = article

    return (
        <Link to={`/article/${slug}`} className="card group lg:flex">
            <div className="lg:w-3/5 h-64 lg:h-auto overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </div>
            <div className="lg:w-2/5 p-8 flex flex-col justify-center">
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                    <span className="bg-highlight text-white px-3 py-1 rounded-full font-semibold text-xs">FEATURED</span>
                    <span className="text-highlight font-semibold">{category}</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 group-hover:text-highlight transition-colors leading-tight">
                    {title}
                </h2>
                <p className="text-gray-600 text-lg mb-6 line-clamp-4">{summary}</p>
                <div className="flex items-center space-x-3 text-sm text-gray-500">
                    <span>{date}</span>
                    <span>•</span>
                    <span>{readTime} min read</span>
                </div>
            </div>
        </Link>
    )
}

export default FeaturedStory
