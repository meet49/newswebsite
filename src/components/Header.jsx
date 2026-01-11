import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Calendar } from 'lucide-react'

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [worldNewsOpen, setWorldNewsOpen] = useState(false)

    const categories = [
        { name: 'World News', slug: 'world-news', hasDropdown: true },
        { name: 'India & Global Impact', slug: 'india-global-impact' },
        { name: 'Technology & AI', slug: 'technology-ai' },
        { name: 'Economy & Business', slug: 'economy-business' },
        { name: 'Explained', slug: 'explained' },
    ]

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            {/* Top Bar */}
            <div className="bg-primary text-white py-2">
                <div className="container-custom flex justify-between items-center text-sm">
                    <div className="flex items-center space-x-4">
                        <span className="hidden sm:inline flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                        </span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link to="/about" className="hover:text-highlight transition-colors">About</Link>
                        <Link to="/contact" className="hover:text-highlight transition-colors">Contact</Link>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className="container-custom py-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <div className="text-3xl font-bold font-serif">
                            <span className="text-primary">Read</span>
                            <span className="text-highlight">N</span>
                            <span className="text-primary">Share</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-6">
                        {categories.map((category) => (
                            <div key={category.slug} className="relative group">
                                <Link
                                    to={`/category/${category.slug}`}
                                    className="text-gray-700 hover:text-highlight font-medium transition-colors py-2"
                                >
                                    {category.name}
                                </Link>
                            </div>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden p-2 rounded-md hover:bg-gray-100"
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {mobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden bg-white border-t border-gray-200">
                    <nav className="container-custom py-4 space-y-2">
                        {categories.map((category) => (
                            <Link
                                key={category.slug}
                                to={`/category/${category.slug}`}
                                className="block py-2 text-gray-700 hover:text-highlight hover:bg-gray-50 px-4 rounded transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {category.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    )
}

export default Header
