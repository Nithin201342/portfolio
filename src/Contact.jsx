import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 border-b border-zinc-700 pb-4 inline-block" style={{ fontFamily: '"Saira Stencil One", sans-serif' }}>
                Contact Me
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">

                <div className="flex flex-col items-center space-y-4 group">
                    <div className="bg-zinc-800 p-6 rounded-full group-hover:bg-[#8A9A5B] transition-colors duration-300 shadow-lg">
                        <Mail className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-gray-300 font-medium text-lg group-hover:text-white transition-colors">nithinmt07@gmail.com</span>
                </div>

                <div className="flex flex-col items-center space-y-4 group">
                    <div className="bg-zinc-800 p-6 rounded-full group-hover:bg-[#8A9A5B] transition-colors duration-300 shadow-lg">
                        <Phone className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-gray-300 font-medium text-lg group-hover:text-white transition-colors">+91 9400737266</span>
                </div>

                <div className="flex flex-col items-center space-y-4 group">
                    <div className="bg-zinc-800 p-6 rounded-full group-hover:bg-[#8A9A5B] transition-colors duration-300 shadow-lg">
                        <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-gray-300 font-medium text-lg group-hover:text-white transition-colors">Kerala, India</span>
                </div>

            </div>
        </div>
    );
};

export default Contact;
