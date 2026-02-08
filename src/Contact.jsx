import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 border-b border-zinc-700 pb-4" style={{ fontFamily: '"Saira Stencil One", sans-serif' }}>
                Contact Me
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div className="space-y-8">
                    <p className="text-gray-300 text-lg leading-relaxed">
                        I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center space-x-4 text-gray-300 group">
                            <div className="bg-zinc-800 p-3 rounded-lg group-hover:bg-[#8A9A5B] transition-colors duration-300">
                                <Mail className="w-6 h-6 text-white" />
                            </div>
                            <span className="group-hover:text-white transition-colors">nithinmt07@gmail.com</span>
                        </div>

                        <div className="flex items-center space-x-4 text-gray-300 group">
                            <div className="bg-zinc-800 p-3 rounded-lg group-hover:bg-[#8A9A5B] transition-colors duration-300">
                                <Phone className="w-6 h-6 text-white" />
                            </div>
                            <span className="group-hover:text-white transition-colors">+91 9400737266</span>
                        </div>

                        <div className="flex items-center space-x-4 text-gray-300 group">
                            <div className="bg-zinc-800 p-3 rounded-lg group-hover:bg-[#8A9A5B] transition-colors duration-300">
                                <MapPin className="w-6 h-6 text-white" />
                            </div>
                            <span className="group-hover:text-white transition-colors">Kerala, India</span>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <form className="space-y-6 bg-zinc-800/50 p-8 rounded-2xl border border-zinc-700/50 backdrop-blur-sm">
                    <div>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full bg-zinc-900/50 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#8A9A5B] focus:ring-1 focus:ring-[#8A9A5B] transition-all"
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full bg-zinc-900/50 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#8A9A5B] focus:ring-1 focus:ring-[#8A9A5B] transition-all"
                        />
                    </div>
                    <div>
                        <textarea
                            rows="4"
                            placeholder="Your Message"
                            className="w-full bg-zinc-900/50 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#8A9A5B] focus:ring-1 focus:ring-[#8A9A5B] transition-all resize-none"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#8A9A5B] hover:bg-[#7a8a4b] text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
                    >
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
