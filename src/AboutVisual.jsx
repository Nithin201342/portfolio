import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const AboutVisual = () => {
    // Generate random nodes
    const nodeCount = 15;
    const [nodes, setNodes] = useState([]);

    useEffect(() => {
        const newNodes = Array.from({ length: nodeCount }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 4 + 2,
            duration: Math.random() * 3 + 2,
            delay: Math.random() * 2
        }));
        setNodes(newNodes);
    }, []);

    return (
        <div className="h-[300px] w-full flex items-center justify-center relative overflow-hidden bg-zinc-900/50 rounded-2xl border border-zinc-800/50 backdrop-blur-sm group">

            {/* Background Grid */}
            <div className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, #8A9A5B 1px, transparent 0)',
                    backgroundSize: '20px 20px'
                }}
            ></div>

            {/* Neural Network / Constellation */}
            <div className="relative w-full h-full">
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    {/* Draw lines between close nodes (simplified for visual effect) */}
                    {nodes.map((node, i) => (
                        nodes.slice(i + 1).map((otherNode, j) => {
                            const distance = Math.hypot(node.x - otherNode.x, node.y - otherNode.y);
                            // Only connect if somewhat close (in percentage)
                            if (distance < 30) {
                                return (
                                    <motion.line
                                        key={`${i}-${j}`}
                                        x1={`${node.x}%`}
                                        y1={`${node.y}%`}
                                        x2={`${otherNode.x}%`}
                                        y2={`${otherNode.y}%`}
                                        stroke="#8A9A5B"
                                        strokeWidth="0.5"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: [0.1, 0.3, 0.1] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 2 }}
                                    />
                                )
                            }
                            return null;
                        })
                    ))}
                </svg>

                {nodes.map((node) => (
                    <motion.div
                        key={node.id}
                        className="absolute rounded-full bg-[#8A9A5B] shadow-[0_0_10px_#8A9A5B]"
                        style={{
                            left: `${node.x}%`,
                            top: `${node.y}%`,
                            width: node.size,
                            height: node.size,
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            opacity: [0.4, 0.8, 0.4],
                            scale: [1, 1.2, 1],
                            y: [0, -10, 0],
                            x: [0, 5, 0]
                        }}
                        transition={{
                            duration: node.duration,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: node.delay
                        }}
                    />
                ))}

                {/* Central "Core" Node */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                    <motion.div
                        className="w-16 h-16 rounded-full border border-[#8A9A5B]/30 flex items-center justify-center bg-black/50 backdrop-blur-md z-10"
                        animate={{ boxShadow: ["0 0 0px #8A9A5B", "0 0 20px #8A9A5B", "0 0 0px #8A9A5B"] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    >
                        <span className="text-[#8A9A5B] font-bold font-mono text-xl">AI</span>
                    </motion.div>

                    {/* Orbiting Ring */}
                    <motion.div
                        className="absolute w-24 h-24 rounded-full border border-dashed border-zinc-700"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutVisual;
