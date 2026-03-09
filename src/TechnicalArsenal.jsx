import React from 'react';
import { motion } from 'framer-motion';

const SkillBar = ({ name, level }) => (
    <div className="mb-6">
        <div className="flex justify-between mb-2">
            <span className="font-medium" style={{ color: '#828A7F' }}>{name}</span>
            <span className="font-mono text-sm" style={{ color: 'rgba(130,138,127,0.65)' }}>{level}%</span>
        </div>
        <div className="h-2 rounded-full overflow-hidden" style={{ background: 'rgba(130,138,127,0.15)' }}>
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${level}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="h-full rounded-full relative"
                style={{ background: 'linear-gradient(to right, #6F7C74, rgba(130,138,127,0.5))' }}
            >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full" style={{ background: '#6F7C74', boxShadow: '0 0 8px rgba(111,124,116,0.7)' }}></div>
            </motion.div>
        </div>
    </div>
);

const TechnicalArsenal = () => {
    const skills = {
        Frontend: [
            { name: 'React.js', level: 90 },
            { name: 'Tailwind CSS', level: 95 },
            { name: 'JavaScript (ES6+)', level: 85 },
            { name: 'HTML5/CSS3', level: 95 }
        ],
        Backend: [
            { name: 'Python', level: 85 },
            { name: 'Node.js', level: 80 },
            { name: 'MySQL / MongoDB', level: 85 },
            { name: 'Firebase', level: 75 }
        ],
        "Tools & Others": [
            { name: 'Git & GitHub', level: 90 },
            { name: 'Machine Learning', level: 80 },
            { name: 'C++', level: 70 },
            { name: 'Figma', level: 85 }
        ]
    };

    return (
        <section id="skills" className="py-20">
            <div className="text-center mb-16">
                <span style={{ color: '#828A7F', fontFamily: '"Saira", sans-serif', fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', background: 'rgba(130,138,127,0.1)', padding: '4px 14px', borderRadius: '999px', border: '1px solid rgba(130,138,127,0.3)' }}>
                    Skills
                </span>
                <h2 className="text-4xl md:text-6xl font-black mt-6 mb-4 uppercase" style={{ fontFamily: '"Barlow Condensed", sans-serif', fontWeight: 900, color: '#6F7C74' }}>
                    Technical <span style={{ opacity: 0.5 }}>Skills</span>
                </h2>
                <div className="h-px w-24 mx-auto rounded-full" style={{ background: '#828A7F', opacity: 0.3 }}></div>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
                {Object.entries(skills).map(([category, items]) => (
                    <div key={category} className="p-8 rounded-3xl transition-all duration-300" style={{ background: 'rgba(130,138,127,0.05)', border: '1px solid rgba(130,138,127,0.18)' }}>
                        <h3 className="text-2xl font-bold mb-8 pl-4" style={{ color: '#6F7C74', fontFamily: '"Barlow Condensed", sans-serif', fontWeight: 700, borderLeft: '4px solid #6F7C74' }}>{category}</h3>
                        <div>
                            {items.map((skill) => (
                                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechnicalArsenal;
