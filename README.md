# ReadNShare News Website

## Project Structure

This is a professional React + Vite news website built with Tailwind CSS for readnshare.in.

### Folder Structure

```
readnshare/
├── public/
│   ├── favicon.ico
│   └── placeholder-images/
│       └── news-placeholder.jpg
├── src/
│   ├── assets/
│   │   └── images/  (all placeholder images)
│   ├── components/
│   │   ├── Header.jsx         # Logo + Nav + Mobile menu
│   │   ├── Footer.jsx         # Footer + Trust pages links
│   │   ├── NewsCard.jsx       # News card component for list/grid
│   │   ├── FeaturedStory.jsx  # Top story section
│   │   ├── ExplainedSection.jsx # Explained news component
│   │   ├── NewsletterCTA.jsx  # Newsletter subscription section
│   │   └── SEO.jsx            # SEO meta tags
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Category.jsx        # Dynamic for World/Tech/Economy/Explained
│   │   ├── Article.jsx         # Single article page
│   │   ├── About.jsx
│   │   ├── EditorialPolicy.jsx
│   │   ├── Contact.jsx
│   │   ├── PrivacyPolicy.jsx
│   │   └── Disclaimer.jsx
│   ├── routes/
│   │   └── AppRoutes.jsx       # React Router routes
│   ├── utils/
│   │   └── data.js             # Example placeholder articles
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css               # Tailwind base + custom CSS
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── vite.config.js
```

## Key Points for AdSense Approval

### Trust Pages
All trust pages are implemented and clearly linked in the footer:
- **About**: Mission, values, and coverage areas
- **Editorial Policy**: Journalistic standards and fact-checking
- **Contact**: Contact form and multiple contact methods
- **Privacy Policy**: Data collection, cookies, GDPR compliance
- **Disclaimer**: Legal disclaimers and liability limitations

### Article Structure
Each article follows a structured format:
- **Headline**: Clear, descriptive title
- **Summary**: Brief overview
- **Main Image**: High-quality featured image
- **Sections**:
  - What happened (factual reporting)
  - Why it happened (context and background)
  - Why it matters (significance)
  - India/Global impact (local and international implications)
  - Sources & Further Reading
  - Conclusion

### Responsive Design
- Mobile-first Tailwind layout
- Responsive navigation with hamburger menu
- Optimized for all screen sizes (mobile, tablet, desktop)
- Touch-friendly interface

### SEO & Meta Tags
- Dynamic meta tags via `SEO.jsx` component
- Unique titles and descriptions for each page
- Open Graph tags for social sharing
- Semantic HTML structure
- Keyword optimization

### Placeholder Content
- 6 sample articles with realistic content
- Human-readable dummy content
- Professional placeholder images from Unsplash
- All sections populated with example data
- Ready to replace with real news content

## Running the Project

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Technologies Used

- **React** 19.2.0
- **Vite** 7.2.4
- **React Router** 6.22.0
- **Tailwind CSS** 3.4.17
- **Lucide React** (icon library)
- **PostCSS** & **Autoprefixer**

## Features

✅ Fully responsive design
✅ SEO optimized
✅ AdSense ready with trust pages
✅ Professional icon library (no emojis)
✅ Mobile-first approach
✅ Clean, modern UI
✅ Fast loading times
✅ Accessible navigation
✅ Newsletter subscription
✅ Contact form
✅ Multiple ad placement spots

## Next Steps

1. Replace placeholder images in `src/assets/images/` and `public/placeholder-images/`
2. Update sample data in `src/utils/data.js` with real articles
3. Configure newsletter backend integration
4. Add Google Analytics tracking
5. Insert AdSense code in ad placeholder divs
6. Update contact information in Footer and Contact page
7. Add favicon.ico to public folder
8. Deploy to hosting service (Vercel, Netlify, etc.)
