import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <div className="max-w-4xl mx-auto text-center py-20">
            <span style={{ color: '#828A7F', fontFamily: '"Saira", sans-serif', fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', background: 'rgba(130,138,127,0.1)', padding: '4px 14px', borderRadius: '999px', border: '1px solid rgba(130,138,127,0.3)' }}>
                Get in Touch
            </span>
            <h2 className="text-4xl md:text-6xl font-black mt-6 mb-8 uppercase" style={{ fontFamily: '"Barlow Condensed", sans-serif', fontWeight: 900, color: '#6F7C74' }}>
                Let's <span style={{ opacity: 0.5 }}>Connect</span>
            </h2>

            <p className="text-lg leading-relaxed mb-16 max-w-2xl mx-auto" style={{ color: '#828A7F' }}>
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">

                <a href="mailto:nithinmt07@gmail.com" className="flex flex-col items-center group w-full md:w-auto">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 mb-4" style={{ background: 'rgba(130,138,127,0.08)', border: '1px solid rgba(130,138,127,0.25)' }}>
                        <Mail className="w-8 h-8 transition-colors" style={{ color: '#828A7F' }} />
                    </div>
                    <span className="font-medium text-lg" style={{ color: '#828A7F' }}>nithinmt07@gmail.com</span>
                </a>

                <a href="tel:+919400737266" className="flex flex-col items-center group w-full md:w-auto">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 mb-4" style={{ background: 'rgba(130,138,127,0.08)', border: '1px solid rgba(130,138,127,0.25)' }}>
                        <Phone className="w-8 h-8 transition-colors" style={{ color: '#828A7F' }} />
                    </div>
                    <span className="font-medium text-lg" style={{ color: '#828A7F' }}>+91 9400737266</span>
                </a>

                <div className="flex flex-col items-center group w-full md:w-auto">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 mb-4" style={{ background: 'rgba(130,138,127,0.08)', border: '1px solid rgba(130,138,127,0.25)' }}>
                        <MapPin className="w-8 h-8 transition-colors" style={{ color: '#828A7F' }} />
                    </div>
                    <span className="font-medium text-lg" style={{ color: '#828A7F' }}>Kerala, India</span>
                </div>

            </div>
        </div>
    );
};

export default Contact;
