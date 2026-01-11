import SEO from '../components/SEO'

const PrivacyPolicy = () => {
    return (
        <>
            <SEO
                title="Privacy Policy"
                description="ReadNShare privacy policy - how we collect, use, and protect your personal information."
                keywords="privacy policy, data protection, user privacy, GDPR"
            />

            <div className="bg-gradient-to-r from-primary to-accent text-white py-12 mb-8">
                <div className="container-custom">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
                    <p className="text-xl text-gray-200 max-w-3xl">
                        How we protect and use your information
                    </p>
                </div>
            </div>

            <div className="container-custom max-w-4xl py-12">
                <div className="prose prose-lg max-w-none">
                    <p className="text-gray-600 mb-8">
                        <strong>Last Updated:</strong> January 11, 2026
                    </p>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-4">Introduction</h2>
                        <p className="text-gray-700 leading-relaxed">
                            ReadNShare ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
                            explains how we collect, use, disclose, and safeguard your information when you visit our website
                            readnshare.in and use our services.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-4">Information We Collect</h2>

                        <h3 className="text-xl font-bold mb-3 mt-6">Personal Information</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We may collect personal information that you voluntarily provide to us when you:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                            <li>Subscribe to our newsletter</li>
                            <li>Contact us through our contact form</li>
                            <li>Participate in surveys or feedback forms</li>
                            <li>Create an account (if applicable)</li>
                        </ul>

                        <h3 className="text-xl font-bold mb-3 mt-6">Automatically Collected Information</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            When you visit our website, we automatically collect certain information, including:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                            <li>IP address and browser type</li>
                            <li>Device information and operating system</li>
                            <li>Pages visited and time spent on pages</li>
                            <li>Referring website addresses</li>
                            <li>Cookies and similar tracking technologies</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-4">How We Use Your Information</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We use the information we collect to:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                            <li>Provide, maintain, and improve our services</li>
                            <li>Send you newsletters and updates (with your consent)</li>
                            <li>Respond to your inquiries and provide customer support</li>
                            <li>Analyze website usage and improve user experience</li>
                            <li>Detect, prevent, and address technical issues and security threats</li>
                            <li>Comply with legal obligations</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-4">Cookies and Tracking Technologies</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We use cookies and similar tracking technologies to track activity on our website and store
                            certain information. You can instruct your browser to refuse all cookies or to indicate when
                            a cookie is being sent. However, if you do not accept cookies, you may not be able to use some
                            portions of our website.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-4">Third-Party Services</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We may use third-party services for analytics and advertising, including:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                            <li><strong>Google Analytics:</strong> To analyze website traffic and usage patterns</li>
                            <li><strong>Google AdSense:</strong> To display advertisements on our website</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            These third parties have their own privacy policies governing the use of your information.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-4">Data Security</h2>
                        <p className="text-gray-700 leading-relaxed">
                            We implement appropriate technical and organizational security measures to protect your personal
                            information. However, no method of transmission over the Internet or electronic storage is 100%
                            secure, and we cannot guarantee absolute security.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-4">Your Rights</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            You have the right to:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                            <li>Access the personal information we hold about you</li>
                            <li>Request correction of inaccurate information</li>
                            <li>Request deletion of your personal information</li>
                            <li>Opt-out of marketing communications</li>
                            <li>Object to processing of your personal information</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-4">Children's Privacy</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Our website is not intended for children under 13 years of age. We do not knowingly collect
                            personal information from children under 13. If you become aware that a child has provided us
                            with personal information, please contact us.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-4">Changes to This Privacy Policy</h2>
                        <p className="text-gray-700 leading-relaxed">
                            We may update our Privacy Policy from time to time. We will notify you of any changes by posting
                            the new Privacy Policy on this page and updating the "Last Updated" date.
                        </p>
                    </section>

                    <section className="bg-blue-50 p-8 rounded-lg">
                        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                        <p className="text-gray-700 leading-relaxed">
                            If you have questions about this Privacy Policy or our data practices, please contact us at:
                        </p>
                        <p className="text-gray-700 mt-4">
                            <strong>Email:</strong> privacy@readnshare.in<br />
                            <strong>Website:</strong> <a href="/contact" className="text-highlight hover:underline">Contact Page</a>
                        </p>
                    </section>
                </div>
            </div>
        </>
    )
}

export default PrivacyPolicy
