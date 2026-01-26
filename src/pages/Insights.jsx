import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export function Insights() {
    return (
        <div className='min-h-screen bg-white dark:bg-baseDark dark:text-white'>
            <Navbar />
            <div className="pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        Insights & Research
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
                        Expert insights, research papers, and thought leadership on AI and blockchain innovation.
                    </p>

                    <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Placeholder for insight articles */}
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                                <div className="text-sm text-nijaGreen mb-2">Research</div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                    Industry Insight #{i}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    Explore the latest trends and innovations in enterprise AI and blockchain.
                                </p>
                                <a href="#" className="text-nijaGreen font-medium hover:underline">
                                    Read more →
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Insights;
