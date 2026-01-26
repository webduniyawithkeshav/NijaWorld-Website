import { motion } from 'framer-motion';
import { LampContainer } from './ui/lamp';
import { useState } from 'react';

export function Pillars() {
    const pillars = [
        {
            title: 'Artificial Intelligence',
            subtitle: 'AI Agents & Orchestration',
            description: 'Designed for production environments, our AI capabilities digitise processes, automate decision making, strengthen infrastructure reliability, and enhance cybersecurity across enterprise systems.',
            features: [
                { name: 'AI for Digitisation ', image: '/ai-digitisation.png' },
                { name: 'AI for Automation ', image: '/ai-automation.png' },
                { name: 'AI for Infrastructure ', image: '/ai-infrastructure.png' }
            ],
            color: 'nijaPurple',
            gradient: 'from-nijaPurple/10 to-nijaPurple/5',
            icon: '/ai-brain-icon.png',
            isImage: true,
            hasInteractive: true
        },
        {
            title: 'Blockchain',
            subtitle: 'Blockchain Infrastructure',
            description: 'Our blockchain infrastructure ensures immutable provenance, automated trust enforcement, and secure identity forming a robust foundation for compliant, auditable digital operations.',
            features: [
                { name: 'Tokenisation frameworks ', image: '/blockchain-tokenisation.png' },
                { name: 'Provenance & audit trails ', image: '/blockchain-provenance.png' },
                { name: 'Smart contracts & settlement ', image: '/blockchain-contracts.png' },
                { name: 'Identity primitives ', image: '/blockchain-identity.png' }
            ],
            color: 'nijaGreen',
            gradient: 'from-nijaGreen/10 to-nijaGreen/5',
            icon: '/blockchain-shield-icon.png',
            isImage: true,
            hasInteractive: true
        },
        {
            title: 'Cybersecurity',
            subtitle: 'Risk & Governance',
            description: 'Designed to protect modern enterprises, our cybersecurity capabilities embed governance, threat intelligence, and response readiness directly into digital operations.',
            features: [
                { name: 'Threat Detection & Triage', image: '/cyber-threat.png' },
                { name: 'Identity Security', image: '/cyber-identity.png' },
                { name: 'Policy & Compliance Controls', image: '/cyber-policy.png' },
                { name: 'Incident Response Enablement', image: '/cyber-incident.png' }
            ],
            color: 'nijaPurple',
            gradient: 'from-nijaPurple/10 to-nijaPurple/5',
            icon: '/cyber-identity.png',
            isImage: true,
            hasInteractive: true
        }
    ];

    return (
        <>
            {/* Lamp Section Header */}
            <LampContainer className="min-h-[60vh]">
                <motion.div
                    initial={{ opacity: 0.5, y: 300 }}
                    whileInView={{ opacity: 1, y: 150 }}
                    viewport={{ once: true }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut"
                    }}
                    className="text-center"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.6, ease: "easeInOut" }}
                        className="inline-block mb-10 px-6 py-3 text-2xl rounded-full bg-nijaGreen/20 text-white font-bold border-2 border-white"
                    >
                        THREE ENTERPRISE PILLARS
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0.5, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.4,
                            duration: 0.8,
                            ease: "easeInOut"
                        }}
                        className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                    >
                        The Foundation of Modern Enterprise
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.6,
                            duration: 0.8,
                            ease: "easeInOut"
                        }}
                        className="text-slate-300 max-w-2xl mx-auto text-lg"
                    >
                        A unified approach combining practical AI with trusted blockchain infrastructure.
                    </motion.p>
                </motion.div>
            </LampContainer>

            {/* Pillar Cards Section */}
            <section className="bg-gradient-to-b from-gray-50 to-white dark:from-baseDark dark:to-gray-900">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Pillar Cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {pillars.map((pillar, index) => {
                            // Interactive AI Card Component
                            const AIInteractiveCard = () => {
                                const [activeFeature, setActiveFeature] = useState(0);

                                return (
                                    <motion.div
                                        initial={{ opacity: 0, y: 140 }}
                                        whileInView={{ opacity: 1, y: -100 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.8,
                                            delay: 0.2,
                                            ease: "easeInOut"
                                        }}
                                        className={`bg-gradient-to-br ${pillar.gradient} dark:bg-gradient-to-br dark:${pillar.gradient} border border-${pillar.color}/20 dark:border-${pillar.color}/30 rounded-2xl p-6 hover:shadow-2xl hover:shadow-${pillar.color}/20 transition-all duration-300 h-full flex flex-col justify-between`}
                                    >
                                        {/* Icon & Title */}
                                        <div className="mb-4">
                                            <div className="text-5xl mb-2">
                                                <img
                                                    src={pillar.icon}
                                                    alt={pillar.title}
                                                    className="w-16 h-16 object-contain"
                                                />
                                            </div>
                                            <h3 className={`text-2xl font-bold mb-1 text-${pillar.color}`}>
                                                {pillar.title}
                                            </h3>
                                            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                                                {pillar.subtitle}
                                            </p>
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-700 dark:text-gray-300 mb-2 text-left text-[15px] leading-relaxed">
                                            {pillar.description}
                                        </p>

                                        {/* Split Layout: Features Left, Image Right */}
                                        <div className="grid grid-cols-[1.8fr_1fr] gap-2 items-center">
                                            {/* Left: Features List */}
                                            <div className="space-y-1">
                                                {pillar.features.map((feature, idx) => (
                                                    <motion.div
                                                        key={idx}
                                                        initial={{ opacity: 0, x: -30 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        viewport={{ once: true }}
                                                        transition={{
                                                            duration: 0.6,
                                                            delay: 1.0 + idx * 0.15,
                                                            ease: "easeInOut"
                                                        }}
                                                        onMouseEnter={() => setActiveFeature(idx)}
                                                        onClick={() => setActiveFeature(idx)}
                                                        className={`flex items-center gap-3 cursor-pointer transition-all duration-300 p-2 rounded-lg ${activeFeature === idx
                                                            ? `bg-${pillar.color}/10 scale-105`
                                                            : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                                                            }`}
                                                    >
                                                        <div className={`w-2 h-2 rounded-full transition-all duration-300 ${activeFeature === idx
                                                            ? `bg-${pillar.color} scale-150 shadow-lg shadow-${pillar.color}/50`
                                                            : `bg-${pillar.color}/50`
                                                            }`} />
                                                        <span className={`text-sm font-medium transition-colors duration-300 ${activeFeature === idx
                                                            ? `text-${pillar.color}`
                                                            : 'text-gray-600 dark:text-gray-400'
                                                            }`}>
                                                            {feature.name}
                                                        </span>
                                                    </motion.div>
                                                ))}
                                            </div>

                                            {/* Right: Dynamic Image Display */}
                                            <motion.div
                                                className="relative h-28 flex items-center justify-end pr-2"
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.8, delay: 0.5 }}
                                            >
                                                {/* Background glow */}
                                                <div className={`absolute inset-0 bg-${pillar.color}/20 blur-3xl rounded-full scale-75`} />

                                                {/* Feature Images */}
                                                {pillar.features.map((feature, idx) => (
                                                    <motion.img
                                                        key={idx}
                                                        src={feature.image}
                                                        alt={feature.name}
                                                        className="absolute w-20 h-20 object-contain right-0"
                                                        initial={{ opacity: idx === 0 ? 1 : 0, scale: idx === 0 ? 1 : 0.8 }}
                                                        animate={{
                                                            opacity: activeFeature === idx ? 1 : 0,
                                                            scale: activeFeature === idx ? 1 : 0.8,
                                                            y: activeFeature === idx ? 0 : 20
                                                        }}
                                                        transition={{
                                                            duration: 0.5,
                                                            ease: "easeInOut"
                                                        }}
                                                    />
                                                ))}
                                            </motion.div>
                                        </div>

                                        {/* CTA */}
                                        <motion.button
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 1.5 }}
                                            className={`mt-8 w-full px-6 py-3 rounded-lg font-medium transition-all bg-${pillar.color}/10 hover:bg-${pillar.color} text-${pillar.color} hover:text-white border border-${pillar.color}/30 hover:shadow-lg hover:shadow-${pillar.color}/50`}
                                        >
                                            Explore {pillar.title} →
                                        </motion.button>
                                    </motion.div>
                                );
                            };

                            // Standard Card Component (for Blockchain)
                            const StandardCard = () => (
                                <motion.div
                                    initial={{ opacity: 0, y: 140 }}
                                    whileInView={{ opacity: 1, y: -100 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.8,
                                        delay: 0.2,
                                        ease: "easeInOut"
                                    }}
                                    whileHover={{ scale: 1.02 }}
                                    className={`bg-gradient-to-br ${pillar.gradient} dark:bg-gradient-to-br dark:${pillar.gradient} border border-${pillar.color}/20 dark:border-${pillar.color}/30 rounded-2xl p-8 hover:shadow-2xl hover:shadow-${pillar.color}/20 transition-all duration-300 cursor-pointer group`}
                                >
                                    {/* Icon & Title */}
                                    <div className="mb-6">
                                        <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                            <img
                                                src={pillar.icon}
                                                alt={pillar.title}
                                                className="w-16 h-16 object-contain"
                                            />
                                        </div>
                                        <h3 className={`text-2xl font-bold mb-1 text-${pillar.color}`}>
                                            {pillar.title}
                                        </h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                                            {pillar.subtitle}
                                        </p>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                                        {pillar.description}
                                    </p>

                                    {/* Features */}
                                    <div className="space-y-3">
                                        {pillar.features.map((feature, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, x: -30 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{
                                                    duration: 0.6,
                                                    delay: 1.0 + index * 0.3 + idx * 0.15,
                                                    ease: "easeInOut"
                                                }}
                                                className="flex items-center gap-3"
                                            >
                                                <div className={`w-1.5 h-1.5 rounded-full bg-${pillar.color} group-hover:animate-pulse`} />
                                                <span className="text-gray-600 dark:text-gray-400 text-sm">
                                                    {feature.name}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* CTA */}
                                    <motion.button
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 1.5 }}
                                        className={`mt-8 w-full px-6 py-3 rounded-lg font-medium transition-all bg-${pillar.color}/10 hover:bg-${pillar.color} text-${pillar.color} hover:text-white border border-${pillar.color}/30 hover:shadow-lg hover:shadow-${pillar.color}/50`}
                                    >
                                        Explore {pillar.title} →
                                    </motion.button>
                                </motion.div>
                            );

                            // Render appropriate card based on pillar type
                            return (
                                <div key={index}>
                                    {pillar.hasInteractive ? <AIInteractiveCard /> : <StandardCard />}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Pillars;

