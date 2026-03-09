import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// ─── Flip Calendar Card ──────────────────────────────────────────────────────
const CalendarCard = ({ month, year, delay }) => (
    <motion.div
        initial={{ rotateX: -90, opacity: 0, y: -10 }}
        whileInView={{ rotateX: 0, opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: [0.34, 1.05, 0.64, 1], delay }}
        viewport={{ once: false, amount: 0.5 }}
        style={{ perspective: '600px', display: 'inline-block' }}
    >
        <div style={{
            display: 'inline-flex', flexDirection: 'column', alignItems: 'center',
            minWidth: '64px', borderRadius: '10px', overflow: 'hidden',
            boxShadow: '0 6px 24px rgba(130,138,127,0.18)',
            border: '1px solid rgba(130,138,127,0.25)',
            transformStyle: 'preserve-3d',
            transformOrigin: 'top center',
        }}>
            {/* Calendar header strip */}
            <div style={{
                width: '100%', textAlign: 'center', padding: '4px 10px',
                background: '#6F7C74',
            }}>
                <span style={{
                    color: '#e8ddb5', fontSize: '0.6rem',
                    fontFamily: '"Saira", sans-serif',
                    letterSpacing: '0.12em', textTransform: 'uppercase',
                }}>
                    {month}
                </span>
            </div>
            {/* Year body */}
            <div style={{
                width: '100%', textAlign: 'center', padding: '6px 10px',
                background: '#ffffff',
            }}>
                <span style={{
                    color: '#6F7C74', fontSize: '1.1rem',
                    fontFamily: '"Barlow Condensed", sans-serif', fontWeight: 700,
                }}>
                    {year}
                </span>
            </div>
        </div>
    </motion.div>
);

// ─── Flip Date Range ─────────────────────────────────────────────────────────
// Parses "Oct 2023 – Aug 2024" into two calendar cards with separator
const FlipDateRange = ({ date }) => {
    // Expected format: "MMM YYYY – MMM YYYY"
    const parts = date.split(' – ');
    const [start, end] = parts.map(p => {
        const [month, year] = p.trim().split(' ');
        return { month, year };
    });

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <CalendarCard month={start.month} year={start.year} delay={0} />
            <motion.span
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: false, amount: 0.5 }}
                style={{ color: 'rgba(130,138,127,0.5)', fontSize: '1.2rem', display: 'inline-block' }}
            >
                –
            </motion.span>
            <CalendarCard month={end.month} year={end.year} delay={0.6} />
        </div>
    );
};

// ─── Work Experience ─────────────────────────────────────────────────────────
const WorkExperience = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start']
    });
    const dateY = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const cardY = useTransform(scrollYProgress, [0, 1], [30, -30]);

    const experiences = [
        {
            role: 'Customer Service Associate',
            company: 'Sutherland Global Services',
            duration: 'Oct 2023 – Aug 2024',
            description: [
                'Delivered efficient customer support in a high-volume, fast-paced environment',
                'Resolved technical and service-related issues with strong problem-solving skills',
                'Collaborated with cross-functional teams to ensure timely issue resolution',
                'Developed communication, adaptability, and analytical thinking skills'
            ],
            type: 'Full-time'
        }
    ];

    return (
        <div className="space-y-12" ref={sectionRef}>
            {/* Section heading */}
            <motion.div
                className="text-center mb-16"
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: false, amount: 0.3 }}
            >
                <span style={{ color: '#828A7F', fontFamily: '"Saira", sans-serif', fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', background: 'rgba(130,138,127,0.1)', padding: '4px 14px', borderRadius: '999px', border: '1px solid rgba(130,138,127,0.3)' }}>
                    Career Path
                </span>
                <h2 className="text-4xl md:text-6xl font-black mt-6 mb-4 uppercase" style={{ fontFamily: '"Barlow Condensed", sans-serif', fontWeight: 900, color: '#6F7C74' }}>
                    Work <span style={{ opacity: 0.5 }}>Experience</span>
                </h2>
                <div className="h-px w-24 mx-auto rounded-full" style={{ background: '#828A7F', opacity: 0.3 }}></div>
            </motion.div>

            {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 md:pl-0">
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2" style={{ background: 'rgba(130,138,127,0.25)' }}></div>

                    <div className="md:flex items-center justify-between group">
                        {/* Left: Flip calendar date — slides in from LEFT with parallax */}
                        <motion.div
                            className="hidden md:flex w-[45%] justify-end pr-12"
                            style={{ y: dateY }}
                            initial={{ x: -70, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.65, ease: 'easeOut' }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <div>
                                <FlipDateRange date={exp.duration} />
                                <div className="mt-3 text-right font-medium" style={{ color: 'rgba(130,138,127,0.6)', fontSize: '0.85rem' }}>
                                    {exp.type}
                                </div>
                            </div>
                        </motion.div>

                        {/* Timeline dot */}
                        <div
                            className="absolute left-0 md:left-1/2 top-0 md:top-1/2 w-4 h-4 rounded-full z-10 md:-translate-x-1/2 md:-translate-y-1/2 group-hover:scale-125 transition-all duration-300"
                            style={{ background: '#ffffff', border: '2px solid #828A7F', boxShadow: '0 0 10px rgba(130,138,127,0.4)' }}
                        ></div>

                        {/* Right: Card — slides in from RIGHT with parallax */}
                        <motion.div
                            className="md:w-[45%] pl-8 md:pl-12 pb-12 md:pb-0"
                            style={{ y: cardY }}
                            initial={{ x: 70, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.1 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            {/* Mobile: show plain date */}
                            <div className="md:hidden mb-4">
                                <FlipDateRange date={exp.duration} />
                            </div>

                            <div className="p-8 rounded-3xl transition-all duration-300 group-hover:translate-x-2" style={{ background: 'rgba(130,138,127,0.05)', border: '1px solid rgba(130,138,127,0.2)' }}>
                                <h3 className="text-2xl font-bold mb-2" style={{ color: '#6F7C74', fontFamily: '"Barlow Condensed", sans-serif', fontWeight: 700 }}>{exp.role}</h3>
                                <h4 className="text-lg mb-6 font-semibold" style={{ color: '#828A7F' }}>{exp.company}</h4>
                                <ul className="space-y-3">
                                    {exp.description.map((item, i) => (
                                        <motion.li
                                            key={i}
                                            className="flex items-start font-light leading-relaxed"
                                            style={{ color: '#828A7F' }}
                                            initial={{ x: 30, opacity: 0 }}
                                            whileInView={{ x: 0, opacity: 1 }}
                                            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.15 + i * 0.08 }}
                                            viewport={{ once: false, amount: 0.5 }}
                                        >
                                            <span className="mr-3 mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#828A7F' }}></span>
                                            <span>{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default WorkExperience;
