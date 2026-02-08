import HeroScrollAnimation from './HeroScrollAnimation'
import Navbar from './Navbar'
import Contact from './Contact'
import SectionWrapper from './SectionWrapper'

function App() {

    return (
        <div className="bg-black min-h-screen">
            <Navbar />
            <HeroScrollAnimation />

            <main className="content-section relative z-10 bg-zinc-900 shadow-xl -mt-20 pt-24 px-6 md:px-20 max-w-7xl mx-auto rounded-t-3xl min-h-screen">

                {/* About Section */}
                <SectionWrapper id="about" className="mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 border-b border-zinc-700 pb-4" style={{ fontFamily: '"Saira Stencil One", sans-serif' }}>
                        About Me
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-2 space-y-6 text-lg text-gray-300 font-light leading-relaxed">
                            <p>
                                I’m an MCA student with a strong passion for Machine Learning and Full-Stack Development. I enjoy building intelligent, data-driven applications that solve real-world problems using modern technologies and thoughtful design.
                            </p>
                            <p>
                                My work focuses on combining AI, data analysis, and web development to create practical and impactful solutions. I love transforming complex technical challenges into simple, user-friendly experiences.
                            </p>
                            <p>
                                Alongside technical expertise, I bring strong communication, adaptability, and analytical thinking skills developed through academic projects and professional experience. I’m constantly learning and exploring new technologies to grow as a developer and problem solver.
                            </p>

                        </div>
                        {/* You could add a profile image or visual element here in the 3rd column if desired */}
                        <div className="hidden md:flex items-center justify-center bg-zinc-800/50 rounded-2xl p-8 border border-zinc-700/50">
                            <span className="text-zinc-600 text-6xl font-black opacity-20">DEV</span>
                        </div>
                    </div>
                </SectionWrapper>

                {/* Projects Section */}
                <SectionWrapper id="projects" className="mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 border-b border-zinc-700 pb-4" style={{ fontFamily: '"Saira Stencil One", sans-serif' }}>
                        Projects
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">

                        {/* Project 1 */}
                        <div className="group bg-zinc-800 rounded-2xl overflow-hidden hover:bg-zinc-750 transition-all duration-300 border border-zinc-700 hover:border-zinc-500 shadow-lg hover:shadow-2xl">
                            <div className="p-8 h-full flex flex-col">
                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">Helio – Smart Diet Planner</h3>
                                <p className="text-sm text-cyan-500/80 mb-4 font-mono">Python • ML • MongoDB</p>
                                <p className="text-gray-400 mb-6 flex-grow">
                                    A full-stack machine learning web application that generates personalized diet and exercise plans based on user health data. It processes inputs such as physical metrics and health conditions, then applies predictive models to recommend optimized plans.
                                </p>
                                <a href="#" className="text-white font-semibold inline-flex items-center group-hover:underline">
                                    View Project <span className="ml-2">→</span>
                                </a>
                            </div>
                        </div>

                        {/* Project 2 */}
                        <div className="group bg-zinc-800 rounded-2xl overflow-hidden hover:bg-zinc-750 transition-all duration-300 border border-zinc-700 hover:border-zinc-500 shadow-lg hover:shadow-2xl">
                            <div className="p-8 h-full flex flex-col">
                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">Smart Audio Validator</h3>
                                <p className="text-sm text-purple-500/80 mb-4 font-mono">Python • ML • Digital Signal Processing</p>
                                <p className="text-gray-400 mb-6 flex-grow">
                                    An AI-based system designed to evaluate the technical and perceptual quality of uploaded audio files using digital signal processing and machine learning. The project extracts advanced audio features like MFCCs to assess clarity and detect noise issues.
                                </p>
                                <a href="#" className="text-white font-semibold inline-flex items-center group-hover:underline">
                                    View Project <span className="ml-2">→</span>
                                </a>
                            </div>
                        </div>

                    </div>
                </SectionWrapper>

                {/* Contact Section */}
                <SectionWrapper id="contact" className="mb-20">
                    <Contact />
                </SectionWrapper>

                <div className="h-[20vh] border-t border-zinc-800 flex items-center justify-center text-zinc-600">
                    <p>© {new Date().getFullYear()} Nithin Mathew Thomas. All rights reserved.</p>
                </div>
            </main>
        </div>
    )
}

export default App
