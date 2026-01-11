import { useEffect } from 'react'

const SEO = ({ title, description, keywords, ogImage }) => {
    useEffect(() => {
        // Update title
        document.title = title ? `${title} | ReadNShare` : 'ReadNShare - In-Depth News Analysis & Global Insights'

        // Update meta description
        const metaDescription = document.querySelector('meta[name="description"]')
        if (metaDescription) {
            metaDescription.setAttribute('content', description || 'Your trusted source for in-depth news analysis, covering world events, India\'s global impact, technology, AI, and economy.')
        }

        // Update meta keywords
        const metaKeywords = document.querySelector('meta[name="keywords"]')
        if (metaKeywords) {
            metaKeywords.setAttribute('content', keywords || 'news, world news, India news, technology, AI, economy, business, explained news')
        }

        // Update OG tags
        let ogTitle = document.querySelector('meta[property="og:title"]')
        if (!ogTitle) {
            ogTitle = document.createElement('meta')
            ogTitle.setAttribute('property', 'og:title')
            document.head.appendChild(ogTitle)
        }
        ogTitle.setAttribute('content', title || 'ReadNShare')

        let ogDescription = document.querySelector('meta[property="og:description"]')
        if (!ogDescription) {
            ogDescription = document.createElement('meta')
            ogDescription.setAttribute('property', 'og:description')
            document.head.appendChild(ogDescription)
        }
        ogDescription.setAttribute('content', description || 'Your trusted source for in-depth news analysis')

        if (ogImage) {
            let ogImageTag = document.querySelector('meta[property="og:image"]')
            if (!ogImageTag) {
                ogImageTag = document.createElement('meta')
                ogImageTag.setAttribute('property', 'og:image')
                document.head.appendChild(ogImageTag)
            }
            ogImageTag.setAttribute('content', ogImage)
        }
    }, [title, description, keywords, ogImage])

    return null
}

export default SEO
