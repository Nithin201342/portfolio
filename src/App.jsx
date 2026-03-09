import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import HeroScrollAnimation from './HeroScrollAnimation'
import Navbar from './Navbar'
import Contact from './Contact'
import TechnicalArsenal from './TechnicalArsenal'
import SectionWrapper from './SectionWrapper'
import WorkExperience from './WorkExperience'
import FlickerGrid from './FlickerGrid'
import { Rocket, Trophy, Code, Award } from 'lucide-react'

function App() {

    // About section parallax refs
    const aboutRef = useRef(null);
    const { scrollYProgress: aboutProgress } = useScroll({
        target: aboutRef,
        offset: ['start end', 'end start']
    });
    const aboutTextY = useTransform(aboutProgress, [0, 1], [60, -60]);
    const aboutCardsY = useTransform(aboutProgress, [0, 1], [40, -40]);

    // Projects section parallax
    const projectsRef = useRef(null);
    const { scrollYProgress: projectsProgress } = useScroll({
        target: projectsRef,
        offset: ['start end', 'end start']
    });
    const proj1Y = useTransform(projectsProgress, [0, 1], [70, -70]);
    const proj2Y = useTransform(projectsProgress, [0, 1], [50, -50]);
    const proj3Y = useTransform(projectsProgress, [0, 1], [30, -30]);

    // Projects hover expand state
    const [hoveredProject, setHoveredProject] = useState(null);

    return (
        <div className="min-h-screen" style={{ backgroundColor: '#ffffff', color: '#828A7F' }}>
            <Navbar />
            <HeroScrollAnimation />

            {/* Main Content Container without Glass Wrappers */}
            <main className="relative z-10 -mt-20 pb-32 px-6 md:px-20 max-w-7xl mx-auto space-y-24" style={{ color: '#828A7F' }}>

                {/* About Section - "Crafting Digital Experiences" */}
                <SectionWrapper id="about" className="pt-20">
                    {/* Grid background with fade edges */}
                    <div style={{ position: 'relative', padding: '3rem', borderRadius: '1.5rem', overflow: 'hidden' }}>
                        <FlickerGrid />
                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <div ref={aboutRef} className="grid md:grid-cols-2 gap-16 items-start">
                                {/* Left: Text Content — slides in from left, out to left */}
                                <motion.div
                                    className="space-y-6 text-lg font-light leading-relaxed"
                                    style={{ color: '#828A7F', y: aboutTextY }}
                                    initial={{ x: -80, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.65, ease: 'easeOut' }}
                                    viewport={{ once: false, amount: 0.25 }}
                                >
                                    <p>
                                        I'm an MCA student with a strong passion for <span style={{ color: '#6F7C74', fontWeight: 600 }}>Machine Learning</span> and <span style={{ color: '#6F7C74', fontWeight: 600 }}>Full-Stack Development</span>.
                                        I enjoy building intelligent, data-driven applications that solve real-world problems using modern technologies and thoughtful design.
                                    </p>
                                    <p>
                                        My work focuses on combining AI, data analysis, and web development to create practical and impactful solutions. I love transforming complex technical challenges into simple, user-friendly experiences.
                                    </p>
                                    <div className="pt-8">
                                        <div className="p-6 rounded-2xl" style={{ background: 'rgba(130,138,127,0.06)', borderLeft: '4px solid #828A7F' }}>
                                            <p className="italic" style={{ color: '#828A7F' }}>
                                                "Constantly learning and exploring new technologies to grow as a developer and problem solver."
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Right: Stats Grid — slides in from right, out to right */}
                                <motion.div
                                    className="grid grid-cols-2 gap-6"
                                    style={{ y: aboutCardsY }}
                                    initial={{ x: 80, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.65, ease: 'easeOut', delay: 0.1 }}
                                    viewport={{ once: false, amount: 0.25 }}
                                >
                                    <div className="p-6 rounded-2xl transition-all duration-300 group" style={{ background: '#ffffff', border: '1px solid rgba(130,138,127,0.25)', boxShadow: '0 2px 12px rgba(130,138,127,0.1)' }}>
                                        <Rocket className="w-8 h-8 mb-4 group-hover:scale-110 transition-transform" style={{ color: '#828A7F' }} />
                                        <h3 className="text-3xl font-bold mb-1" style={{ color: '#6F7C74' }}>1</h3>
                                        <p className="text-sm font-medium uppercase tracking-wide" style={{ color: 'rgba(130,138,127,0.7)' }}>Years Experience</p>
                                    </div>
                                    <div className="p-6 rounded-2xl transition-all duration-300 group" style={{ background: '#ffffff', border: '1px solid rgba(130,138,127,0.25)', boxShadow: '0 2px 12px rgba(130,138,127,0.1)' }}>
                                        <Code className="w-8 h-8 mb-4 group-hover:scale-110 transition-transform" style={{ color: '#828A7F' }} />
                                        <h3 className="text-3xl font-bold mb-1" style={{ color: '#6F7C74' }}>5+</h3>
                                        <p className="text-sm font-medium uppercase tracking-wide" style={{ color: 'rgba(130,138,127,0.7)' }}>Projects Built</p>
                                    </div>
                                    <div className="p-6 rounded-2xl transition-all duration-300 group" style={{ background: '#ffffff', border: '1px solid rgba(130,138,127,0.25)', boxShadow: '0 2px 12px rgba(130,138,127,0.1)' }}>
                                        <Trophy className="w-8 h-8 mb-4 group-hover:scale-110 transition-transform" style={{ color: '#828A7F' }} />
                                        <h3 className="text-3xl font-bold mb-1" style={{ color: '#6F7C74' }}>3+</h3>
                                        <p className="text-sm font-medium uppercase tracking-wide" style={{ color: 'rgba(130,138,127,0.7)' }}>Achievements</p>
                                    </div>
                                    <div className="p-6 rounded-2xl transition-all duration-300 group" style={{ background: '#ffffff', border: '1px solid rgba(130,138,127,0.25)', boxShadow: '0 2px 12px rgba(130,138,127,0.1)' }}>
                                        <Award className="w-8 h-8 mb-4 group-hover:scale-110 transition-transform" style={{ color: '#828A7F' }} />
                                        <h3 className="text-3xl font-bold mb-1" style={{ color: '#6F7C74' }}>2</h3>
                                        <p className="text-sm font-medium uppercase tracking-wide" style={{ color: 'rgba(130,138,127,0.7)' }}>Certifications</p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </SectionWrapper>

                {/* Work Experience Section */}
                <SectionWrapper id="work">

                    <WorkExperience />
                </SectionWrapper>

                {/* Projects Section */}
                <SectionWrapper id="projects">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <span style={{ color: '#828A7F', fontFamily: '"Saira", sans-serif', fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', background: 'rgba(130,138,127,0.1)', padding: '4px 14px', borderRadius: '999px', border: '1px solid rgba(130,138,127,0.3)' }}>
                            Portfolio
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black mt-6 mb-4 uppercase" style={{ fontFamily: '"Barlow Condensed", sans-serif', fontWeight: 900, color: '#6F7C74' }}>
                            Featured <span style={{ opacity: 0.5 }}>Projects</span>
                        </h2>
                        <div className="h-px w-24 mx-auto rounded-full" style={{ background: '#828A7F', opacity: 0.3 }}></div>
                    </motion.div>

                    <div ref={projectsRef} className="flex flex-col md:flex-row gap-4 items-stretch">

                        {/* Project 1 */}
                        <motion.div
                            style={{
                                y: proj1Y,
                                flex: hoveredProject === 0 ? '1.8' : hoveredProject !== null ? '0.7' : '1',
                                transition: 'flex 0.45s cubic-bezier(0.4,0,0.2,1)',
                                minWidth: 0, overflow: 'hidden'
                            }}
                            initial={{ y: 60, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                            viewport={{ once: false, amount: 0.2 }}
                            onMouseEnter={() => setHoveredProject(0)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            <div className="group rounded-3xl overflow-hidden relative transition-all duration-500 h-full" style={{ background: 'rgba(130,138,127,0.05)', border: '1px solid rgba(130,138,127,0.2)' }}>
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(to top, rgba(130,138,127,0.07), transparent)' }}></div>
                                <div className="p-8 h-full flex flex-col relative z-10">
                                    <div className="mb-6 flex justify-between items-start">
                                        <h3 className="text-2xl font-bold transition-colors" style={{ color: '#6F7C74', fontFamily: '"Barlow Condensed", sans-serif', fontWeight: 700 }}>Helio: Smart Diet Planner</h3>
                                        <span className="text-xs px-3 py-1 rounded-full" style={{ color: '#828A7F', background: 'rgba(130,138,127,0.1)', border: '1px solid rgba(130,138,127,0.3)' }}>ML/AI</span>
                                    </div>
                                    <p className="mb-6 flex-grow leading-relaxed text-sm" style={{ color: '#828A7F' }}>
                                        Smart Diet Planner generating personalized diet and exercise plans based on user health data using predictive models.
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        <span className="text-xs px-2 py-1 rounded" style={{ color: '#828A7F', background: 'rgba(130,138,127,0.08)' }}>Python</span>
                                        <span className="text-xs px-2 py-1 rounded" style={{ color: '#828A7F', background: 'rgba(130,138,127,0.08)' }}>MongoDB</span>
                                    </div>
                                    <a href="https://github.com/Nithin201342/SmartDiet_Planner" target="_blank" rel="noopener noreferrer" className="w-full py-3 rounded-xl font-medium text-center transition-all duration-300" style={{ background: 'rgba(130,138,127,0.1)', color: '#6F7C74', border: '1px solid rgba(130,138,127,0.3)' }}>
                                        View Project
                                    </a>
                                </div>
                            </div></motion.div>

                        {/* Project 2 */}
                        <motion.div
                            style={{
                                y: proj2Y,
                                flex: hoveredProject === 1 ? '1.8' : hoveredProject !== null ? '0.7' : '1',
                                transition: 'flex 0.45s cubic-bezier(0.4,0,0.2,1)',
                                minWidth: 0, overflow: 'hidden'
                            }}
                            initial={{ y: 60, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
                            viewport={{ once: false, amount: 0.2 }}
                            onMouseEnter={() => setHoveredProject(1)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            <div className="group rounded-3xl overflow-hidden relative transition-all duration-500 h-full" style={{ background: 'rgba(130,138,127,0.05)', border: '1px solid rgba(130,138,127,0.2)' }}>
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(to top, rgba(130,138,127,0.07), transparent)' }}></div>
                                <div className="p-8 h-full flex flex-col relative z-10">
                                    <div className="mb-6 flex justify-between items-start">
                                        <h3 className="text-2xl font-bold transition-colors" style={{ color: '#6F7C74', fontFamily: '"Barlow Condensed", sans-serif', fontWeight: 700 }}>Smart Audio Validator</h3>
                                        <span className="text-xs px-3 py-1 rounded-full" style={{ color: '#828A7F', background: 'rgba(130,138,127,0.1)', border: '1px solid rgba(130,138,127,0.3)' }}>AI/DSP</span>
                                    </div>
                                    <p className="mb-6 flex-grow leading-relaxed text-sm" style={{ color: '#828A7F' }}>
                                        AI-based system evaluating audio quality using digital signal processing and machine learning to extract advanced features.
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        <span className="text-xs px-2 py-1 rounded" style={{ color: '#828A7F', background: 'rgba(130,138,127,0.08)' }}>Python</span>
                                        <span className="text-xs px-2 py-1 rounded" style={{ color: '#828A7F', background: 'rgba(130,138,127,0.08)' }}>Librosa</span>
                                    </div>
                                    <a href="https://github.com/Nithin201342/smart_audio_validator" target="_blank" rel="noopener noreferrer" className="w-full py-3 rounded-xl font-medium text-center transition-all duration-300" style={{ background: 'rgba(130,138,127,0.1)', color: '#6F7C74', border: '1px solid rgba(130,138,127,0.3)' }}>
                                        View Project
                                    </a>
                                </div>
                            </div></motion.div>

                        {/* Project 3 */}
                        <motion.div
                            style={{
                                y: proj3Y,
                                flex: hoveredProject === 2 ? '1.8' : hoveredProject !== null ? '0.7' : '1',
                                transition: 'flex 0.45s cubic-bezier(0.4,0,0.2,1)',
                                minWidth: 0, overflow: 'hidden'
                            }}
                            initial={{ y: 60, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                            viewport={{ once: false, amount: 0.2 }}
                            onMouseEnter={() => setHoveredProject(2)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            <div className="group rounded-3xl overflow-hidden relative transition-all duration-500 h-full" style={{ background: 'rgba(130,138,127,0.05)', border: '1px solid rgba(130,138,127,0.2)' }}>
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(to top, rgba(130,138,127,0.07), transparent)' }}></div>
                                <div className="p-8 h-full flex flex-col relative z-10">
                                    <div className="mb-6 flex justify-between items-start">
                                        <h3 className="text-2xl font-bold transition-colors" style={{ color: '#6F7C74', fontFamily: '"Barlow Condensed", sans-serif', fontWeight: 700 }}>Online Used Phones Store</h3>
                                        <span className="text-xs px-3 py-1 rounded-full" style={{ color: '#828A7F', background: 'rgba(130,138,127,0.1)', border: '1px solid rgba(130,138,127,0.3)' }}>Web</span>
                                    </div>
                                    <p className="mb-6 flex-grow leading-relaxed text-sm" style={{ color: '#828A7F' }}>
                                        Full-stack e-commerce platform where users can browse, list, and purchase second-hand smartphones with product listings, filters, and a checkout flow.
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        <span className="text-xs px-2 py-1 rounded" style={{ color: '#828A7F', background: 'rgba(130,138,127,0.08)' }}>PHP</span>
                                        <span className="text-xs px-2 py-1 rounded" style={{ color: '#828A7F', background: 'rgba(130,138,127,0.08)' }}>MySQL</span>
                                        <span className="text-xs px-2 py-1 rounded" style={{ color: '#828A7F', background: 'rgba(130,138,127,0.08)' }}>JS</span>
                                    </div>
                                    <a href="https://github.com/Nithin201342/used_phones_store" target="_blank" rel="noopener noreferrer" className="w-full py-3 rounded-xl font-medium text-center transition-all duration-300" style={{ background: 'rgba(130,138,127,0.1)', color: '#6F7C74', border: '1px solid rgba(130,138,127,0.3)' }}>
                                        View Project
                                    </a>
                                </div>
                            </div></motion.div>

                    </div>
                </SectionWrapper>

                {/* Skills Section - Technical Arsenal */}
                <SectionWrapper
                    id="skills"
                    className="w-full"
                    variants={{
                        hidden: { opacity: 0, scale: 0.95 },
                        visible: { opacity: 1, scale: 1 }
                    }}
                >
                    <TechnicalArsenal />
                </SectionWrapper>

                {/* Contact Section */}
                <SectionWrapper id="contact" className="w-full">
                    <Contact />
                </SectionWrapper>
                <div className="h-[10vh] flex items-center justify-center mt-12 pb-8" style={{ borderTop: '1px solid rgba(130,138,127,0.2)', color: 'rgba(130,138,127,0.5)' }}>
                    <p>&copy; {new Date().getFullYear()} Nithin Mathew Thomas. All rights reserved.</p>
                </div>
            </main>
        </div>
    )
}

export default App
