import React from 'react';

const WorkExperience = () => {
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
        <div className="space-y-12">
            <div className="text-center mb-16">
                <span style={{ color: '#828A7F', fontFamily: '"Saira", sans-serif', fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', background: 'rgba(130,138,127,0.1)', padding: '4px 14px', borderRadius: '999px', border: '1px solid rgba(130,138,127,0.3)' }}>
                    Career Path
                </span>
                <h2 className="text-4xl md:text-6xl font-black mt-6 mb-4 uppercase" style={{ fontFamily: '"Barlow Condensed", sans-serif', fontWeight: 900, color: '#6F7C74' }}>
                    Work <span style={{ opacity: 0.5 }}>Experience</span>
                </h2>
                <div className="h-px w-24 mx-auto rounded-full" style={{ background: '#828A7F', opacity: 0.3 }}></div>
            </div>

            {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 md:pl-0">
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2" style={{ background: 'rgba(130,138,127,0.25)' }}></div>

                    <div className="md:flex items-center justify-between group">
                        <div className="hidden md:block w-[45%] text-right pr-12">
                            <span className="font-mono text-xl" style={{ color: '#828A7F' }}>{exp.duration}</span>
                            <div className="mt-2 font-medium" style={{ color: 'rgba(130,138,127,0.6)' }}>{exp.type}</div>
                        </div>

                        <div className="absolute left-0 md:left-1/2 top-0 md:top-1/2 w-4 h-4 rounded-full z-10 md:-translate-x-1/2 md:-translate-y-1/2 group-hover:scale-125 transition-all duration-300" style={{ background: '#ffffff', border: '2px solid #828A7F', boxShadow: '0 0 10px rgba(130,138,127,0.4)' }}></div>

                        <div className="md:w-[45%] pl-8 md:pl-12 pb-12 md:pb-0">
                            <div className="p-8 rounded-3xl transition-all duration-300 group-hover:translate-x-2" style={{ background: 'rgba(130,138,127,0.05)', border: '1px solid rgba(130,138,127,0.2)' }}>
                                <h3 className="text-2xl font-bold mb-2" style={{ color: '#6F7C74', fontFamily: '"Barlow Condensed", sans-serif', fontWeight: 700 }}>{exp.role}</h3>
                                <h4 className="text-lg mb-6 font-semibold" style={{ color: '#828A7F' }}>{exp.company}</h4>
                                <div className="md:hidden mb-4 font-mono text-sm" style={{ color: 'rgba(130,138,127,0.6)' }}>{exp.duration} • {exp.type}</div>
                                <ul className="space-y-3">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="flex items-start font-light leading-relaxed" style={{ color: '#828A7F' }}>
                                            <span className="mr-3 mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#828A7F' }}></span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default WorkExperience;
