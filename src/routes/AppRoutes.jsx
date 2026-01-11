import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Category from '../pages/Category'
import Article from '../pages/Article'
import About from '../pages/About'
import EditorialPolicy from '../pages/EditorialPolicy'
import Contact from '../pages/Contact'
import PrivacyPolicy from '../pages/PrivacyPolicy'
import Disclaimer from '../pages/Disclaimer'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:categorySlug" element={<Category />} />
            <Route path="/article/:articleSlug" element={<Article />} />
            <Route path="/about" element={<About />} />
            <Route path="/editorial-policy" element={<EditorialPolicy />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
        </Routes>
    )
}

export default AppRoutes
