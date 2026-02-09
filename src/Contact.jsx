import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <div className="max-w-4xl mx-auto text-center py-20">
            <span className="text-green-400 font-mono text-sm tracking-wider uppercase bg-green-400/10 px-3 py-1 rounded-full border border-green-400/20">
                Get in Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-6 mb-8" style={{ fontFamily: '"Saira Stencil One", sans-serif' }}>
                Let's <span className="text-green-400">Connect</span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-16 max-w-2xl mx-auto">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">

                <a href="mailto:nithinmt07@gmail.com" className="flex flex-col items-center group w-full md:w-auto">
                    <div className="w-16 h-16 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center group-hover:border-green-500 group-hover:bg-green-500/10 transition-all duration-300 shadow-lg group-hover:shadow-[0_0_20px_rgba(74,222,128,0.2)] mb-4">
                        <Mail className="w-8 h-8 text-gray-400 group-hover:text-green-400 transition-colors" />
                    </div>
                    <span className="text-gray-400 font-medium text-lg group-hover:text-white transition-colors">nithinmt07@gmail.com</span>
                </a>

                <a href="tel:+919400737266" className="flex flex-col items-center group w-full md:w-auto">
                    <div className="w-16 h-16 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center group-hover:border-green-500 group-hover:bg-green-500/10 transition-all duration-300 shadow-lg group-hover:shadow-[0_0_20px_rgba(74,222,128,0.2)] mb-4">
                        <Phone className="w-8 h-8 text-gray-400 group-hover:text-green-400 transition-colors" />
                    </div>
                    <span className="text-gray-400 font-medium text-lg group-hover:text-white transition-colors">+91 9400737266</span>
                </a>

                <div className="flex flex-col items-center group w-full md:w-auto">
                    <div className="w-16 h-16 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center group-hover:border-green-500 group-hover:bg-green-500/10 transition-all duration-300 shadow-lg group-hover:shadow-[0_0_20px_rgba(74,222,128,0.2)] mb-4">
                        <MapPin className="w-8 h-8 text-gray-400 group-hover:text-green-400 transition-colors" />
                    </div>
                    <span className="text-gray-400 font-medium text-lg group-hover:text-white transition-colors">Kerala, India</span>
                </div>

            </div>
        </div>
    );
};

export default Contact;
