import React from 'react';
import { motion } from 'framer-motion';

const SkillBar = ({ name, level }) => (
    <div className="mb-6">
        <div className="flex justify-between mb-2">
            <span className="text-gray-300 font-medium">{name}</span>
            <span className="text-green-400 font-mono text-sm">{level}%</span>
        </div>
        <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${level}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full relative"
            >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(74,222,128,0.8)]"></div>
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
                <span className="text-green-400 font-mono text-sm tracking-wider uppercase bg-green-400/10 px-3 py-1 rounded-full border border-green-400/20">
                    Skills
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mt-6 mb-4" style={{ fontFamily: '"Saira Stencil One", sans-serif' }}>
                    Technical <span className="text-green-400">Skills</span>
                </h2>
                <div className="h-1 w-24 bg-green-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
                {Object.entries(skills).map(([category, items]) => (
                    <div key={category} className="bg-zinc-900/30 p-8 rounded-3xl border border-white/5 hover:border-green-500/30 transition-all duration-300">
                        <h3 className="text-2xl font-bold text-white mb-8 border-l-4 border-green-500 pl-4">{category}</h3>
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
