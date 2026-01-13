import { useState } from 'react'
import SEO from '../components/SEO'
import { Mail, Briefcase, Search, Globe, CheckCircle, Loader } from 'lucide-react'

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    })
    const [loading, setLoading] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState('')

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError('')

        try {
            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/contacts/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    phone: Number(formData.phone) // Ensure phone is sent as a number
                }),
            })

            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.message || 'Something went wrong')
            }

            setSubmitted(true)
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' })

            // Auto hide success message after 5 seconds
            setTimeout(() => {
                setSubmitted(false)
            }, 5000)

        } catch (err) {
            console.error('Submission error:', err)
            setError(err.message || 'Failed to send message. Please try again.')
        } finally {
            setLoading(false)
        }
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
                                    <p className="text-gray-600">devlineinfotech@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="text-highlight text-2xl">
                                    <Globe className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold mb-1">Follow Us</h3>
                                    <div className="flex space-x-3 mt-2">
                                        <a href="https://www.facebook.com/profile.php?id=100081036657334" className="text-gray-600 hover:text-highlight transition-colors">Facebook</a>
                                        <a href="https://www.instagram.com/devline_infotech?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-gray-600 hover:text-highlight transition-colors">Instagram</a>
                                        <a href="https://www.linkedin.com/in/devline-infotech-a3750b20a/" className="text-gray-600 hover:text-highlight transition-colors">LinkedIn</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

                        {submitted ? (
                            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center animate-fade-in">
                                <div className="text-4xl mb-3 flex justify-center">
                                    <CheckCircle className="w-12 h-12 text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h3>
                                <p className="text-green-700">Thank you for contacting us. We'll get back to you soon.</p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="mt-4 text-sm text-green-700 underline hover:text-green-800"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {error && (
                                    <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm">
                                        {error}
                                    </div>
                                )}
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
                                    <label htmlFor="phone" className="block font-semibold mb-2">Phone *</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        pattern="[0-9]*"
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
                                        rows="5"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-highlight resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="btn-primary w-full flex justify-center items-center"
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <>
                                            <Loader className="w-5 h-5 animate-spin mr-2" />
                                            Sending...
                                        </>
                                    ) : (
                                        'Send Message'
                                    )}
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
