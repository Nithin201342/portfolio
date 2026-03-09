import { useRef } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Contact = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start']
    });
    // Subtle upward parallax for the whole section content
    const sectionY = useTransform(scrollYProgress, [0, 1], [50, -50]);

    const contacts = [
        { href: 'mailto:nithinmt07@gmail.com', Icon: Mail, label: 'nithinmt07@gmail.com', isLink: true },
        { href: 'tel:+919400737266', Icon: Phone, label: '+91 9400737266', isLink: true },
        { href: null, Icon: MapPin, label: 'Kerala, India', isLink: false },
    ];

    return (
        <div className="max-w-4xl mx-auto text-center py-20" ref={sectionRef}>
            <motion.div style={{ y: sectionY }}>
                {/* Heading — fades and rises up */}
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

                {/* Contact items — stagger up on enter, reverse on exit */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
                    {contacts.map(({ href, Icon, label, isLink }, i) => {
                        const Wrapper = isLink ? 'a' : 'div';
                        return (
                            <motion.div
                                key={label}
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.55, ease: 'easeOut', delay: i * 0.12 }}
                                viewport={{ once: false, amount: 0.4 }}
                                className="w-full md:w-auto"
                            >
                                <Wrapper
                                    {...(isLink ? { href } : {})}
                                    className="flex flex-col items-center group"
                                >
                                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 mb-4 group-hover:scale-110" style={{ background: 'rgba(130,138,127,0.08)', border: '1px solid rgba(130,138,127,0.25)' }}>
                                        <Icon className="w-8 h-8 transition-colors" style={{ color: '#828A7F' }} />
                                    </div>
                                    <span className="font-medium text-lg" style={{ color: '#828A7F' }}>{label}</span>
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
