import { FaPython, FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiTailwindcss, SiCplusplus, SiMysql, SiFirebase } from 'react-icons/si';

const Languages = () => {
    const skills = [
        { name: 'Python', icon: FaPython, color: '#3776AB' },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
        { name: 'React', icon: FaReact, color: '#61DAFB' },
        { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
        { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
        { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
        { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'Git', icon: FaGitAlt, color: '#F05032' },
        { name: 'C++', icon: SiCplusplus, color: '#00599C' },
        { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
        { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
    ];

    return (
        <section id="skills">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 border-b border-zinc-700 pb-4" style={{ fontFamily: '"Saira Stencil One", sans-serif' }}>
                Languages & Tools
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {skills.map((skill) => (
                    <div
                        key={skill.name}
                        className="group bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700/50 hover:border-zinc-600 rounded-xl p-6 transition-all duration-300 flex flex-col items-center justify-center space-y-4 hover:-translate-y-1 hover:shadow-lg"
                    >
                        <div className="text-4xl transition-transform duration-300 group-hover:scale-110" style={{ color: skill.color }}>
                            <skill.icon />
                        </div>
                        <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Languages;
