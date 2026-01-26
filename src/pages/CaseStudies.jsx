import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export default function CaseStudies() {
    const caseStudies = [
        {
            industry: "FinTech",
            problem: "Scaling secure transaction processing",
            implementation: "Designed and deployed a high-throughput, fault-tolerant payment API",
            metrics: [
                { value: "3×", label: "throughput increase" },
                { value: "99.99%", label: "uptime under peak load" }
            ]
        },
        {
            industry: "Healthcare",
            problem: "Patient data compliance and interoperability",
            implementation: "Built HIPAA-compliant blockchain-based medical record system with cross-platform integration",
            metrics: [
                { value: "100%", label: "audit compliance" },
                { value: "250K+", label: "patient records secured" }
            ]
        },
        {
            industry: "Supply Chain",
            problem: "End-to-end shipment tracking and verification",
            implementation: "Deployed distributed ledger for real-time tracking and automated smart contract verification",
            metrics: [
                { value: "87%", label: "reduction in disputes" },
                { value: "48hrs", label: "faster settlement time" }
            ]
        }
    ];

    return (
        <div className='min-h-screen bg-white dark:bg-baseDark dark:text-white'>
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-4"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Proven delivery in real environments
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Featured Case Studies Grid */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8">
                        {caseStudies.map((study, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-8 hover:border-nijaGreen dark:hover:border-nijaGreen transition-all duration-300 group"
                            >
                                {/* Industry + Problem */}
                                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                                    <span className="text-nijaGreen">{study.industry}</span> — {study.problem}
                                </h3>

                                {/* What We Implemented */}
                                <div className="mb-6">
                                    <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                                        What We Implemented
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                        {study.implementation}
                                    </p>
                                </div>

                                {/* Result Metrics */}
                                <div className="mb-6 space-y-3">
                                    <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                                        Results
                                    </p>
                                    {study.metrics.map((metric, idx) => (
                                        <div key={idx} className="flex items-baseline gap-2">
                                            <span className="text-3xl font-bold text-nijaGreen">
                                                {metric.value}
                                            </span>
                                            <span className="text-sm text-gray-600 dark:text-gray-400">
                                                {metric.label}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* CTA */}
                                <button className="w-full bg-nijaGreen hover:bg-green-500 text-white px-6 py-3 rounded-lg font-medium transition shadow-lg shadow-nijaGreen/30 hover:shadow-nijaGreen/50 group-hover:scale-105 transform">
                                    Read Case Study
                                </button>
                            </motion.div>
                        ))}
                    </div>

                    {/* Section CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-center mt-16"
                    >
                        <button className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-lg font-medium transition hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-nijaGreen dark:hover:border-nijaGreen">
                            Browse All Case Studies
                        </button>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
