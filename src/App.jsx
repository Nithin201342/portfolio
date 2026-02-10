import HeroScrollAnimation from './HeroScrollAnimation'
import Navbar from './Navbar'
import Contact from './Contact'
import TechnicalArsenal from './TechnicalArsenal'
import SectionWrapper from './SectionWrapper'
import WorkExperience from './WorkExperience'
import { Rocket, Trophy, Code, Award } from 'lucide-react'

function App() {

    return (
        <div className="bg-black min-h-screen selection:bg-green-500/30 selection:text-green-200">
            <Navbar />
            <HeroScrollAnimation />

            {/* Main Content Container without Glass Wrappers */}
            <main className="relative z-10 -mt-20 pb-32 px-6 md:px-20 max-w-7xl mx-auto space-y-24">

                {/* About Section - "Crafting Digital Experiences" */}
                <SectionWrapper id="about" className="pt-20">
                    <div className="text-center mb-16 mt-15">
                        <span className="text-green-400 font-mono text-sm tracking-wider uppercase bg-green-400/10 px-3 py-1 rounded-full border border-green-400/20">
                            About Me
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mt-6 mb-4 leading-tight" style={{ fontFamily: '"Saira Stencil One", sans-serif' }}>
                            Crafting Digital <br /> <span className="text-green-400">Experiences</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        {/* Left: Text Content */}
                        <div className="space-y-6 text-lg text-gray-400 font-light leading-relaxed">
                            <p>
                                I’m an MCA student with a strong passion for <span className="text-white font-medium">Machine Learning</span> and <span className="text-white font-medium">Full-Stack Development</span>.
                                I enjoy building intelligent, data-driven applications that solve real-world problems using modern technologies and thoughtful design.
                            </p>
                            <p>
                                My work focuses on combining AI, data analysis, and web development to create practical and impactful solutions. I love transforming complex technical challenges into simple, user-friendly experiences.
                            </p>
                            <div className="pt-8">
                                <div className="p-6 bg-zinc-900/50 rounded-2xl border-l-4 border-green-500">
                                    <p className="italic text-gray-300">
                                        "Constantly learning and exploring new technologies to grow as a developer and problem solver."
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right: Stats Grid */}
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800 hover:border-green-500/50 transition-all duration-300 group">
                                <Rocket className="w-8 h-8 text-green-400 mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="text-3xl font-bold text-white mb-1">1</h3>
                                <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Years Experience</p>
                            </div>
                            <div className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800 hover:border-green-500/50 transition-all duration-300 group">
                                <Code className="w-8 h-8 text-green-400 mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="text-3xl font-bold text-white mb-1">5+</h3>
                                <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Projects Built</p>
                            </div>
                            <div className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800 hover:border-green-500/50 transition-all duration-300 group">
                                <Trophy className="w-8 h-8 text-green-400 mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="text-3xl font-bold text-white mb-1">3+</h3>
                                <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Achivements</p>
                            </div>
                            <div className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800 hover:border-green-500/50 transition-all duration-300 group">
                                <Award className="w-8 h-8 text-green-400 mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="text-3xl font-bold text-white mb-1">2</h3>
                                <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Certifications</p>
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
                    <div className="text-center mb-16">
                        <span className="text-green-400 font-mono text-sm tracking-wider uppercase bg-green-400/10 px-3 py-1 rounded-full border border-green-400/20">
                            Portfolio
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mt-6 mb-4" style={{ fontFamily: '"Saira Stencil One", sans-serif' }}>
                            Featured <span className="text-green-400">Projects</span>
                        </h2>
                        <div className="h-1 w-24 bg-green-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {/* Project 1 */}
                        <div className="group bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:border-green-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(74,222,128,0.1)] relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-green-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="p-8 h-full flex flex-col relative z-10">
                                <div className="mb-6 flex justify-between items-start">
                                    <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors">Helio: Smart Diet Planner</h3>
                                    <span className="bg-zinc-800 text-xs text-green-400 px-3 py-1 rounded-full border border-zinc-700">ML/AI</span>
                                </div>
                                <p className="text-gray-400 mb-6 flex-grow leading-relaxed text-sm">
                                    Smart Diet Planner generating personalized diet and exercise plans based on user health data using predictive models.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span className="text-xs text-gray-500 bg-zinc-950 px-2 py-1 rounded">Python</span>
                                    <span className="text-xs text-gray-500 bg-zinc-950 px-2 py-1 rounded">MongoDB</span>
                                </div>
                                <a href="#" className="w-full py-3 rounded-xl bg-zinc-800 text-white font-medium text-center group-hover:bg-green-500 group-hover:text-black transition-all duration-300">
                                    View Project
                                </a>
                            </div>
                        </div>

                        {/* Project 2 */}
                        <div className="group bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:border-green-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(74,222,128,0.1)] relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-green-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="p-8 h-full flex flex-col relative z-10">
                                <div className="mb-6 flex justify-between items-start">
                                    <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors">Smart Audio Validator</h3>
                                    <span className="bg-zinc-800 text-xs text-green-400 px-3 py-1 rounded-full border border-zinc-700">AI/DSP</span>
                                </div>
                                <p className="text-gray-400 mb-6 flex-grow leading-relaxed text-sm">
                                    AI-based system evaluating audio quality using digital signal processing and machine learning to extract advanced features.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span className="text-xs text-gray-500 bg-zinc-950 px-2 py-1 rounded">Python</span>
                                    <span className="text-xs text-gray-500 bg-zinc-950 px-2 py-1 rounded">Librosa</span>
                                </div>
                                <a href="#" className="w-full py-3 rounded-xl bg-zinc-800 text-white font-medium text-center group-hover:bg-green-500 group-hover:text-black transition-all duration-300">
                                    View Project
                                </a>
                            </div>
                        </div>

                        {/* Project 3 */}
                        <div className="group bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:border-green-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(74,222,128,0.1)] relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-green-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="p-8 h-full flex flex-col relative z-10">
                                <div className="mb-6 flex justify-between items-start">
                                    <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors">Fitness Equipments Shop</h3>
                                    <span className="bg-zinc-800 text-xs text-green-400 px-3 py-1 rounded-full border border-zinc-700">Web</span>
                                </div>
                                <p className="text-gray-400 mb-6 flex-grow leading-relaxed text-sm">
                                    Full-stack e-commerce web application for fitness equipment with cart, checkout, and admin panel functionality.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span className="text-xs text-gray-500 bg-zinc-950 px-2 py-1 rounded">PHP</span>
                                    <span className="text-xs text-gray-500 bg-zinc-950 px-2 py-1 rounded">MySQL</span>
                                    <span className="text-xs text-gray-500 bg-zinc-950 px-2 py-1 rounded">JS</span>
                                </div>
                                <a href="#" className="w-full py-3 rounded-xl bg-zinc-800 text-white font-medium text-center group-hover:bg-green-500 group-hover:text-black transition-all duration-300">
                                    View Project
                                </a>
                            </div>
                        </div>

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
                <div className="h-[10vh] border-t border-zinc-800 flex items-center justify-center text-zinc-600 mt-12 pb-8">
                    <p>© {new Date().getFullYear()} Nithin Mathew Thomas. All rights reserved.</p>
                </div>
            </main>
        </div>
    )
}

export default App
