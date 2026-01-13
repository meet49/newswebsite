import SEO from '../components/SEO'
import { Globe, MapPin, Cpu, Briefcase } from 'lucide-react'

const AboutUs = () => {
    return (
        <>
            <SEO
                title="About Us"
                description="Learn about ReadNShare - your trusted source for in-depth news analysis and global insights."
                keywords="about ReadNShare, news website, journalism, editorial team"
            />

            <div className="bg-gradient-to-r from-primary to-accent text-white py-12 mb-8">
                <div className="container-custom">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">About ReadNShare</h1>
                    <p className="text-xl text-gray-200 max-w-3xl">
                        Your trusted source for in-depth news analysis and global insights
                    </p>
                </div>
            </div>

            <div className="container-custom max-w-4xl py-12">
                <div className="prose prose-lg max-w-none">
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            ReadNShare was founded with a simple yet powerful mission: to provide readers with comprehensive,
                            unbiased news analysis that goes beyond headlines. In an era of information overload and clickbait
                            journalism, we believe in the power of thoughtful, well researched reporting.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            We don't just tell you what happened we explain why it happened why it matters and how it impacts
                            India and the world. Our commitment is to informed citizenship through quality journalism.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-4">What We Cover</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="text-xl font-bold mb-3 text-highlight flex items-center gap-2">
                                    <Globe className="w-6 h-6" />
                                    World News
                                </h3>
                                <p className="text-gray-700">
                                    Global events, international politics, and developments that shape our interconnected world.
                                </p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="text-xl font-bold mb-3 text-highlight flex items-center gap-2">
                                    <MapPin className="w-6 h-6" />
                                    India & Global Impact
                                </h3>
                                <p className="text-gray-700">
                                    How India influences and is influenced by global developments, with unique perspectives on India's role.
                                </p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="text-xl font-bold mb-3 text-highlight flex items-center gap-2">
                                    <Cpu className="w-6 h-6" />
                                    Technology & AI
                                </h3>
                                <p className="text-gray-700">
                                    Cutting-edge technology news, artificial intelligence breakthroughs, and digital innovation.
                                </p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="text-xl font-bold mb-3 text-highlight flex items-center gap-2">
                                    <Briefcase className="w-6 h-6" />
                                    Economy & Business
                                </h3>
                                <p className="text-gray-700">
                                    Business trends, economic analysis, market insights, and their real-world implications.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Every article on ReadNShare follows a structured approach designed to give you complete understanding:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-3 ml-4">
                            <li><strong>What Happened:</strong> Clear, factual reporting of events</li>
                            <li><strong>Why It Happened:</strong> Context and background that led to the development</li>
                            <li><strong>Why It Matters:</strong> Significance and broader implications</li>
                            <li><strong>India & Global Impact:</strong> How it affects India and the international community</li>
                        </ul>
                    </section>

                    <section className="mb-12 bg-blue-50 p-8 rounded-lg">
                        <h2 className="text-3xl font-bold mb-4">Our Values</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-xl font-bold mb-2">✓ Accuracy</h3>
                                <p className="text-gray-700">
                                    We verify information from multiple reliable sources before publication.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">✓ Transparency</h3>
                                <p className="text-gray-700">
                                    We clearly cite our sources and acknowledge when information is uncertain.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">✓ Independence</h3>
                                <p className="text-gray-700">
                                    Our editorial decisions are made independently, free from political or commercial influence.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">✓ Accessibility</h3>
                                <p className="text-gray-700">
                                    We explain complex topics in clear language accessible to all readers.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                        <p className="text-gray-700 leading-relaxed">
                            We value your feedback, questions, and story suggestions. Whether you've spotted an error,
                            have a news tip, or simply want to share your thoughts, we'd love to hear from you.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            Visit our <a href="/contact" className="text-highlight hover:underline font-semibold">Contact Page</a> to
                            get in touch with our editorial team.
                        </p>
                    </section>
                </div>
            </div>
        </>
    )
}

export default AboutUs
