import SEO from '../components/SEO'

const EditorialPolicy = () => {
    return (
        <>
            <SEO
                title="Editorial Policy"
                description="ReadNShare's editorial policy and journalistic standards for accurate, unbiased news reporting."
                keywords="editorial policy, journalism standards, news ethics, fact-checking"
            />

            <div className="bg-gradient-to-r from-primary to-accent text-white py-12 mb-8">
                <div className="container-custom">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Editorial Policy</h1>
                    <p className="text-xl text-gray-200 max-w-3xl">
                        Our commitment to journalistic integrity and excellence
                    </p>
                </div>
            </div>

            <div className="container-custom max-w-4xl py-12">
                <div className="prose prose-lg max-w-none">
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-4">Our Editorial Standards</h2>
                        <p className="text-gray-700 leading-relaxed">
                            ReadNShare is committed to the highest standards of journalism. This editorial policy outlines
                            the principles that guide our reporting, editing, and publication processes.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-4">Accuracy & Fact-Checking</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Accuracy is the foundation of credible journalism. We take the following steps to ensure accuracy:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                            <li>Verify information from at least two independent, reliable sources</li>
                            <li>Consult primary sources and official documents whenever possible</li>
                            <li>Clearly distinguish between facts, analysis, and opinion</li>
                            <li>Acknowledge uncertainty when complete information is unavailable</li>
                            <li>Promptly correct errors and publish corrections transparently</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-4">Independence & Impartiality</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Our editorial independence is non-negotiable:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                            <li>Editorial decisions are made solely by our editorial team</li>
                            <li>We maintain a clear separation between editorial content and advertising</li>
                            <li>We disclose any potential conflicts of interest</li>
                            <li>We present multiple perspectives on controversial issues</li>
                            <li>We do not allow political or commercial interests to influence our coverage</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-4">Source Attribution</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Transparency about our sources builds trust:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                            <li>We clearly attribute information to its sources</li>
                            <li>We identify sources by name whenever possible</li>
                            <li>Anonymous sources are used only when necessary and with editorial approval</li>
                            <li>We provide links to primary sources and supporting documentation</li>
                            <li>We distinguish between our original reporting and information from other outlets</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-4">Corrections Policy</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We acknowledge and correct errors promptly:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                            <li>Corrections are published as soon as errors are identified</li>
                            <li>Significant corrections are noted at the top of articles</li>
                            <li>We maintain transparency about what was changed and why</li>
                            <li>Readers can report errors through our contact page</li>
                            <li>We review and respond to all correction requests</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-4">Privacy & Sensitivity</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We respect privacy while serving the public interest:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                            <li>We protect the privacy of individuals not in the public eye</li>
                            <li>We handle sensitive topics with appropriate care and context</li>
                            <li>We avoid sensationalism and respect human dignity</li>
                            <li>We consider the potential impact of our reporting on individuals and communities</li>
                        </ul>
                    </section>

                    <section className="mb-12 bg-blue-50 p-8 rounded-lg">
                        <h2 className="text-3xl font-bold mb-4">Advertising & Sponsored Content</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We maintain strict separation between editorial and commercial content:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                            <li>Advertisements are clearly labeled and visually distinct from editorial content</li>
                            <li>Advertisers have no influence over editorial decisions or content</li>
                            <li>Sponsored content, if published, is clearly labeled as such</li>
                            <li>We do not accept advertising that conflicts with our editorial values</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold mb-4">Contact Our Editorial Team</h2>
                        <p className="text-gray-700 leading-relaxed">
                            If you have questions about our editorial policy, wish to report an error, or have concerns
                            about our coverage, please contact us through our <a href="/contact" className="text-highlight hover:underline font-semibold">Contact Page</a>.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4 italic">
                            Last updated: January 2026
                        </p>
                    </section>
                </div>
            </div>
        </>
    )
}

export default EditorialPolicy
