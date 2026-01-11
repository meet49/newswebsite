import { useState } from 'react'
import SEO from '../components/SEO'
import { Mail, Briefcase, Search, Globe, CheckCircle } from 'lucide-react'

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // In a real application, this would send to a backend
        setSubmitted(true)
        setTimeout(() => {
            setFormData({ name: '', email: '', subject: '', message: '' })
            setSubmitted(false)
        }, 3000)
    }

    return (
        <>
            <SEO
                title="Contact Us"
                description="Get in touch with ReadNShare editorial team. Send us your feedback, questions, or news tips."
                keywords="contact ReadNShare, feedback, news tips, editorial team"
            />

            <div className="bg-gradient-to-r from-primary to-accent text-white py-12 mb-8">
                <div className="container-custom">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
                    <p className="text-xl text-gray-200 max-w-3xl">
                        We'd love to hear from you
                    </p>
                </div>
            </div>

            <div className="container-custom max-w-4xl py-12">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div>
                        <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                        <p className="text-gray-700 mb-8 leading-relaxed">
                            Whether you have a question, feedback, a news tip, or just want to say hello,
                            we're here to listen. Your input helps us improve and serve you better.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="text-highlight text-2xl">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold mb-1">Email</h3>
                                    <p className="text-gray-600">editorial@readnshare.in</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="text-highlight text-2xl">
                                    <Briefcase className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold mb-1">Business Inquiries</h3>
                                    <p className="text-gray-600">business@readnshare.in</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="text-highlight text-2xl">
                                    <Search className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold mb-1">News Tips</h3>
                                    <p className="text-gray-600">tips@readnshare.in</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="text-highlight text-2xl">
                                    <Globe className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold mb-1">Follow Us</h3>
                                    <div className="flex space-x-3 mt-2">
                                        <a href="#" className="text-gray-600 hover:text-highlight transition-colors">Facebook</a>
                                        <a href="#" className="text-gray-600 hover:text-highlight transition-colors">Twitter</a>
                                        <a href="#" className="text-gray-600 hover:text-highlight transition-colors">LinkedIn</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

                        {submitted ? (
                            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                                <div className="text-4xl mb-3 flex justify-center">
                                    <CheckCircle className="w-12 h-12 text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h3>
                                <p className="text-green-700">Thank you for contacting us. We'll get back to you soon.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block font-semibold mb-2">Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-highlight"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block font-semibold mb-2">Email *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-highlight"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block font-semibold mb-2">Subject *</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-highlight"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block font-semibold mb-2">Message *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-highlight resize-none"
                                    ></textarea>
                                </div>

                                <button type="submit" className="btn-primary w-full">
                                    Send Message
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs
