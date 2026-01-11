import { useState } from 'react'
import { Mail, CheckCircle } from 'lucide-react'

const NewsletterCTA = () => {
    const [email, setEmail] = useState('')
    const [subscribed, setSubscribed] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        // In a real application, this would send to a backend
        setSubscribed(true)
        setTimeout(() => {
            setEmail('')
            setSubscribed(false)
        }, 3000)
    }

    return (
        <section className="bg-gradient-to-r from-highlight to-red-600 text-white py-12 rounded-2xl">
            <div className="container-custom text-center">
                <h2 className="text-3xl font-bold mb-3 flex items-center justify-center gap-2">
                    <Mail className="w-8 h-8" />
                    Stay Informed
                </h2>
                <p className="text-lg mb-6 max-w-2xl mx-auto">
                    Get the latest news and in-depth analysis delivered straight to your inbox. Join thousands of informed readers.
                </p>

                {subscribed ? (
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 max-w-md mx-auto">
                        <p className="text-lg font-semibold flex items-center justify-center gap-2">
                            <CheckCircle className="w-6 h-6" />
                            Thank you for subscribing!
                        </p>
                        <p className="text-sm mt-2">Check your inbox for confirmation.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                        <div className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                                className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                            />
                            <button
                                type="submit"
                                className="bg-white text-highlight px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap"
                            >
                                Subscribe
                            </button>
                        </div>
                        <p className="text-sm mt-3 text-white/80">
                            We respect your privacy. Unsubscribe at any time.
                        </p>
                    </form>
                )}
            </div>
        </section>
    )
}

export default NewsletterCTA
