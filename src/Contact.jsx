import { useRef } from 'react';
import { Mail, Phone, MapPin, Github } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

// LinkedIn SVG icon (not in lucide-react)
const LinkedInIcon = ({ size = 32, color = '#828A7F' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

const Contact = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start']
    });
    const sectionY = useTransform(scrollYProgress, [0, 1], [50, -50]);

    const contacts = [
        { href: 'mailto:nithinmt07@gmail.com', Icon: Mail, label: 'nithinmt07@gmail.com', isLink: true },
        { href: 'tel:+919400737266', Icon: Phone, label: '+91 9400737266', isLink: true },
        { href: null, Icon: MapPin, label: 'Kerala, India', isLink: false },
        { href: 'https://github.com/Nithin201342', Icon: Github, label: 'github.com/Nithin201342', isLink: true },
        { href: 'https://www.linkedin.com/in/nithin-mathew-thomas', Icon: LinkedInIcon, label: 'nithin-mathew-thomas', isLink: true },
    ];

    return (
        <div className="max-w-4xl mx-auto text-center py-20" ref={sectionRef}>
            <motion.div style={{ y: sectionY }}>
                {/* Heading */}
                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <span style={{ color: '#828A7F', fontFamily: '"Saira", sans-serif', fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', background: 'rgba(130,138,127,0.1)', padding: '4px 14px', borderRadius: '999px', border: '1px solid rgba(130,138,127,0.3)' }}>
                        Get in Touch
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black mt-6 mb-8 uppercase" style={{ fontFamily: '"Barlow Condensed", sans-serif', fontWeight: 900, color: '#6F7C74' }}>
                        Let's <span style={{ opacity: 0.5 }}>Connect</span>
                    </h2>
                    <p className="text-lg leading-relaxed mb-16 max-w-2xl mx-auto" style={{ color: '#828A7F' }}>
                        I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                    </p>
                </motion.div>

                {/* All contact items in a single row — equal spacing via grid */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-y-8 gap-x-6 w-full max-w-3xl mx-auto">
                    {contacts.map(({ href, Icon, label, isLink }, i) => {
                        const Wrapper = isLink ? 'a' : 'div';
                        return (
                            <motion.div
                                key={label}
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.55, ease: 'easeOut', delay: i * 0.1 }}
                                viewport={{ once: false, amount: 0.4 }}
                            >
                                <Wrapper
                                    {...(isLink ? { href, target: '_blank', rel: 'noopener noreferrer' } : {})}
                                    className="flex flex-col items-center group"
                                >
                                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 mb-3 group-hover:scale-110" style={{ background: 'rgba(130,138,127,0.08)', border: '1px solid rgba(130,138,127,0.25)' }}>
                                        <Icon size={28} className="transition-colors" style={{ color: '#828A7F' }} />
                                    </div>
                                    <span className="font-medium text-sm" style={{ color: '#828A7F' }}>{label}</span>
                                </Wrapper>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;
