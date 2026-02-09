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
                <span className="text-green-400 font-mono text-sm tracking-wider uppercase bg-green-400/10 px-3 py-1 rounded-full border border-green-400/20">
                    Career Path
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mt-6 mb-4" style={{ fontFamily: '"Saira Stencil One", sans-serif' }}>
                    Work <span className="text-green-400">Experience</span>
                </h2>
                <div className="h-1 w-24 bg-green-500 mx-auto rounded-full"></div>
            </div>

            {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 md:pl-0">
                    {/* Timeline Line (Desktop) */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-zinc-800 -translate-x-1/2"></div>

                    <div className="md:flex items-center justify-between group">
                        {/* Left Side (Date) */}
                        <div className="hidden md:block w-[45%] text-right pr-12">
                            <span className="text-green-400 font-mono text-xl">{exp.duration}</span>
                            <div className="mt-2 text-gray-500 font-medium">{exp.type}</div>
                        </div>

                        {/* Center Dot */}
                        <div className="absolute left-0 md:left-1/2 top-0 md:top-1/2 w-4 h-4 bg-black border-2 border-green-500 rounded-full z-10 md:-translate-x-1/2 md:-translate-y-1/2 group-hover:bg-green-500 group-hover:scale-125 transition-all duration-300 shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>

                        {/* Right Side (Content) */}
                        <div className="md:w-[45%] pl-8 md:pl-12 pb-12 md:pb-0">
                            <div className="bg-zinc-900/50 p-8 rounded-3xl border border-green-500/10 hover:border-green-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,222,128,0.05)] group-hover:translate-x-2">
                                <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                                <h4 className="text-lg text-green-400 mb-6 font-semibold">{exp.company}</h4>
                                <div className="md:hidden mb-4 text-gray-500 font-mono text-sm">{exp.duration} • {exp.type}</div>
                                <ul className="space-y-3">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="flex items-start text-gray-400 font-light leading-relaxed">
                                            <span className="mr-3 mt-2 w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></span>
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
