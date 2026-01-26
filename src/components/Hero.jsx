import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { InteractiveDotGrid } from './InteractiveDotGrid';

export function Hero() {
    return (
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-28 text-white overflow-hidden">
            {/* Interactive Dot Grid Background */}
            <InteractiveDotGrid />

            {/* Content Layer */}
            <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 px-6 items-center pointer-events-none">

                {/* Left Content */}
                <div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight"
                    >
                        Modernise operations with{' '}
                        <span className="text-nijaGreen">AI automation</span> and blockchain-grade trust.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-6 text-gray-300 text-lg max-w-xl leading-relaxed"
                    >
                        Nija helps organisations deploy secure, production-grade solutions that improve traceability,
                        reduce operational friction, and enable compliant digital transformation.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-8 flex gap-4 flex-wrap pointer-events-auto"
                    >
                        <Link to="/join">
                            <button className="bg-nijaGreen hover:bg-green-500 transition text-white px-6 py-3 rounded-lg font-medium shadow-lg shadow-nijaGreen/30 hover:shadow-nijaGreen/50 hover:scale-105 transform">
                                Join →
                            </button>
                        </Link>
                        <Link to="/case-studies">
                            <button className="border border-white/20 hover:border-white hover:bg-white/10 transition px-6 py-3 rounded-lg backdrop-blur-sm">
                                View Case Studies
                            </button>
                        </Link>
                    </motion.div>
                </div>

                {/* Right Architecture Card */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="pointer-events-auto bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-lg hover:bg-white/10 transition"
                >
                    <div className="flex justify-between text-xs text-gray-400 mb-6">
                        <span className="font-mono">SYSTEM ARCHITECTURE v2.4</span>
                        <span className="text-nijaGreen flex items-center gap-1">
                            <span className="w-2 h-2 bg-nijaGreen rounded-full animate-pulse"></span>
                            NETWORK SECURE
                        </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-gradient-to-br from-nijaPurple/20 to-nijaPurple/5 border border-nijaPurple/30 rounded-xl p-5 cursor-pointer hover:shadow-lg hover:shadow-nijaPurple/20 transition"
                        >
                            <p className="text-nijaPurple font-semibold mb-1">AI Agents</p>
                            <p className="text-xs text-gray-400">Status: Operational</p>
                            <div className="mt-2 h-1 bg-nijaPurple/30 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: '87%' }}
                                    transition={{ duration: 1.5, delay: 0.5 }}
                                    className="h-full bg-nijaPurple rounded-full"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-gradient-to-br from-nijaGreen/20 to-nijaGreen/5 border border-nijaGreen/30 rounded-xl p-5 cursor-pointer hover:shadow-lg hover:shadow-nijaGreen/20 transition"
                        >
                            <p className="text-nijaGreen font-semibold mb-1">Ledger Core</p>
                            <p className="text-xs text-gray-400">Status: Synchronised</p>
                            <div className="mt-2 h-1 bg-nijaGreen/30 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: '94%' }}
                                    transition={{ duration: 1.5, delay: 0.7 }}
                                    className="h-full bg-nijaGreen rounded-full"
                                />
                            </div>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-3 gap-3 mt-4">
                        {[
                            { label: 'Uptime', value: '99.97%', color: 'text-nijaGreen' },
                            { label: 'Latency', value: '<15ms', color: 'text-blue-400' },
                            { label: 'Throughput', value: '12.4k/s', color: 'text-purple-400' }
                        ].map((metric, idx) => (
                            <div key={idx} className="bg-white/5 rounded-lg p-3 text-center">
                                <p className="text-xs text-gray-500">{metric.label}</p>
                                <p className={`font-bold text-sm mt-1 ${metric.color}`}>{metric.value}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;
