import SEO from '../components/SEO'

const Disclaimer = () => {
    return (
        <>
            <SEO
                title="Disclaimer"
                description="ReadNShare disclaimer - terms of use and limitations of liability for our news content."
                keywords="disclaimer, terms of use, liability, news website"
            />

            <div className="bg-gradient-to-r from-primary to-accent text-white py-12 mb-8">
                <div className="container-custom">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Disclaimer</h1>
                    <p className="text-xl text-gray-200 max-w-3xl">
                        Important information about using our website
                    </p>
                </div>
            </div>

            <div className="container-custom max-w-4xl py-12">
                <div className="prose prose-lg max-w-none">
                    <p className="text-gray-600 mb-8">
                        <strong>Last Updated:</strong> January 11, 2026
                    </p>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-4">General Information</h2>
                        <p className="text-gray-700 leading-relaxed">
                            The information provided on ReadNShare (readnshare.in) is for general informational and
                            educational purposes only. While we strive for accuracy and reliability, we make no
                            representations or warranties of any kind, express or implied, about the completeness,
                            accuracy, reliability, suitability, or availability of the information, products, services,
                            or related graphics contained on the website.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-4">No Professional Advice</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The content on ReadNShare is not intended to be a substitute for professional advice.
                            Specifically:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                            <li>Financial or investment advice - Consult a qualified financial advisor</li>
                            <li>Legal advice - Consult a qualified attorney</li>
                            <li>Medical advice - Consult a qualified healthcare professional</li>
                            <li>Technical advice - Consult appropriate technical experts</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            Any reliance you place on information from ReadNShare is strictly at your own risk.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-4">Accuracy and Updates</h2>
                        <p className="text-gray-700 leading-relaxed">
                            News and information change rapidly. While we make every effort to keep our content current
                            and accurate, we cannot guarantee that all information is up-to-date at all times. Articles
                            reflect information available at the time of publication. We may update articles to reflect
                            new developments, but we are not obligated to do so.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-4">External Links</h2>
                        <p className="text-gray-700 leading-relaxed">
                            ReadNShare may contain links to external websites that are not provided or maintained by us.
                            We have no control over the nature, content, and availability of those sites. The inclusion
                            of any links does not necessarily imply a recommendation or endorsement of the views expressed
                            within them.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-4">Opinions and Analysis</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Articles on ReadNShare may contain analysis, interpretation, and opinion. These represent the
                            views of our editorial team based on available information and do not necessarily reflect
                            absolute truth or predict future events. Readers should form their own opinions based on
                            multiple sources of information.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-4">Limitation of Liability</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            To the fullest extent permitted by law, ReadNShare shall not be liable for:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                            <li>Any loss or damage arising from the use of our website or reliance on our content</li>
                            <li>Any errors, omissions, or inaccuracies in our content</li>
                            <li>Any decisions made based on information from our website</li>
                            <li>Any interruption or cessation of our services</li>
                            <li>Any viruses or malicious code that may be transmitted through our website</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-4">User-Generated Content</h2>
                        <p className="text-gray-700 leading-relaxed">
                            If our website allows user comments or submissions, the views expressed by users are their
                            own and do not represent the views of ReadNShare. We reserve the right to remove any
                            user-generated content that violates our policies.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-4">Advertising</h2>
                        <p className="text-gray-700 leading-relaxed">
                            ReadNShare may display advertisements from third-party advertisers. We do not endorse or
                            take responsibility for the content of advertisements or the products/services advertised.
                            Any transactions between you and advertisers are solely between you and the advertiser.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-4">Changes to Content</h2>
                        <p className="text-gray-700 leading-relaxed">
                            We reserve the right to modify, update, or remove any content on our website at any time
                            without prior notice. We also reserve the right to modify this disclaimer at any time.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-4">Jurisdiction</h2>
                        <p className="text-gray-700 leading-relaxed">
                            This disclaimer is governed by the laws of India. Any disputes arising from the use of
                            ReadNShare shall be subject to the exclusive jurisdiction of the courts in India.
                        </p>
                    </section>

                    <section className="bg-blue-50 p-8 rounded-lg">
                        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                        <p className="text-gray-700 leading-relaxed">
                            If you have questions about this disclaimer, please contact us at:
                        </p>
                        <p className="text-gray-700 mt-4">
                            <strong>Email:</strong> legal@readnshare.in<br />
                            <strong>Website:</strong> <a href="/contact" className="text-highlight hover:underline">Contact Page</a>
                        </p>
                    </section>

                    <section className="mt-8 p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                        <p className="text-gray-700 font-semibold">
                            By using ReadNShare, you acknowledge that you have read, understood, and agree to be bound
                            by this disclaimer.
                        </p>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Disclaimer
