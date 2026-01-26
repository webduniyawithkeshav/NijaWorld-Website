import { motion } from 'framer-motion';

export function Delivery() {
    return (
        <section className="py-16 md:py-28 bg-white dark:bg-gray-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* Left: Operating Model */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-block mb-6 px-8 py-3 text-2xl rounded-full bg-nijaPurple/10 text-nijaPurple font-bold tracking-wide border border-nijaPurple/20">
                            How We Deliver
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                            Delivery model built for reliability and governance
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed text-lg">
                            Our battle-tested frameworks and pre-built integrations enable rapid deployment
                            without compromising on security or scalability.
                        </p>

                        <div className="space-y-6 mb-8">
                            {[
                                { title: 'Discovery', desc: 'Requirements, risk assessment, target outcomes' },
                                { title: 'Design', desc: 'Architecture, security model, integration plan' },
                                { title: 'Build & Deploy', desc: 'Production-grade implementation with testing' },
                                { title: 'Operate', desc: 'Monitoring, updates, and continuous optimisation' },
                            ].map((step, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-start gap-4"
                                >
                                    <div className="mt-1 w-2 h-2 rounded-full bg-nijaGreen shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white text-lg leading-none mb-1">
                                            {step.title}
                                        </h4>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            {step.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <button className="px-8 py-3 rounded-full border border-nijaPurple text-nijaPurple font-medium hover:bg-nijaPurple hover:text-white transition-all shadow-lg shadow-nijaPurple/10 hover:shadow-nijaPurple/30">
                            Talk to a Solutions Architect →
                        </button>
                    </motion.div>

                    {/* Right: Synced Timeline */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-gray-50 to-white dark:from-baseDark dark:to-gray-900 border border-gray-200 dark:border-white/10 rounded-2xl p-10 shadow-2xl"
                    >
                        <h3 className="font-bold text-2xl mb-8 text-gray-900 dark:text-white">
                            Deployment Timeline
                        </h3>
                        <div className="space-y-8 relative">
                            {/* Vertical connecting line */}
                            <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gray-200 dark:bg-gray-800" />

                            {[
                                { week: 'Week 1-2', task: 'Discovery & Architecture' },
                                { week: 'Week 3-4', task: 'Design & Configuration' },
                                { week: 'Week 5-8', task: 'Build, Deploy & Testing' },
                                { week: 'Week 9+', task: 'Operate & Optimisation' }
                            ].map((phase, idx) => (
                                <motion.div
                                    key={idx}
                                    className="flex items-start gap-6 relative z-10"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + idx * 0.15 }}
                                >
                                    <div className="w-8 h-8 rounded-full bg-nijaGreen/10 border-2 border-nijaGreen flex items-center justify-center text-nijaGreen font-bold text-sm flex-shrink-0 bg-white dark:bg-baseDark">
                                        {idx + 1}
                                    </div>
                                    <div>
                                        <p className="font-bold text-lg text-nijaGreen mb-0.5">{phase.week}</p>
                                        <p className="text-gray-700 dark:text-gray-300 font-medium">{phase.task}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Delivery;
