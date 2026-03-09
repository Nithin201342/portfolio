import { useRef, useEffect, useState } from 'react';

const frameCount = 82;
const imgPath = (index) => `/cube_animation/${index.toString().padStart(5, '0')}.png`;

const HeroScrollAnimation = () => {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const [images, setImages] = useState([]);
    const [framesLoaded, setFramesLoaded] = useState(0);

    // Preload images
    useEffect(() => {
        let loadedCount = 0;
        const imgs = [];

        for (let i = 1; i <= frameCount; i++) {
            const img = new Image();
            img.src = imgPath(i);
            img.onload = () => {
                loadedCount++;
                setFramesLoaded(loadedCount);
            };
            imgs.push(img);
        }
        setImages(imgs);
    }, []);

    // Scroll and Render Logic
    useEffect(() => {
        if (framesLoaded < frameCount || !canvasRef.current || !containerRef.current) return;

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const container = containerRef.current;

        // Set canvas dimensions
        const updateCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            renderFrame(getCurrentFrameIndex());
        };

        const getCurrentFrameIndex = () => {
            const scrollTop = window.scrollY;
            const maxScroll = container.offsetHeight - window.innerHeight;
            const scrollFraction = Math.max(0, Math.min(1, scrollTop / maxScroll));
            return Math.min(frameCount - 1, Math.floor(scrollFraction * frameCount));
        };

        const renderFrame = (index) => {
            const img = images[index];
            if (!img) return;

            // Image scaling logic (cover)
            // We want the globe to be large. Let's keep the cover-like scale, or slightly larger.
            const scale = Math.max(canvas.width / img.width, canvas.height / img.height) * 0.75; // Reduced size by 25%

            // Calculate Position
            // Mobile: Center
            // Desktop (> 768px): Align right
            const isDesktop = window.innerWidth > 768;

            let x;
            if (isDesktop) {
                // Push to right side. Center of image is at 75% of screen width?
                // Or just align right edge?
                // Let's center it in the right half: 75% of width.
                x = (canvas.width * 0.75) - (img.width * scale * 0.5);
            } else {
                x = (canvas.width / 2) - (img.width / 2) * scale;
            }

            const y = canvas.height * 0.08; // Top of cube at 8% from top (matches text paddingTop: 8vh)

            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(img, x, y, img.width * scale, img.height * scale);
        };

        // Initial render
        updateCanvasSize();

        const handleScroll = () => {
            const frameIndex = getCurrentFrameIndex();
            requestAnimationFrame(() => renderFrame(frameIndex));
        };

        window.addEventListener('resize', updateCanvasSize);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', updateCanvasSize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [framesLoaded, images]);

    // Calculate opacity/translation for text based on scroll
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleTextScroll = () => {
            if (!containerRef.current) return;
            const scrollTop = window.scrollY;
            const maxScroll = containerRef.current.offsetHeight - window.innerHeight;
            const progress = Math.max(0, Math.min(1, scrollTop / maxScroll));
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleTextScroll);
        return () => window.removeEventListener('scroll', handleTextScroll);
    }, []);

    // Text transforms
    const textOpacity = scrollProgress > 0.8 ? 1 - (scrollProgress - 0.8) * 5 : 1; // Fade out near end
    const textTranslateY = scrollProgress * -100; // Move up as we scroll

    return (
        <div ref={containerRef} className="relative h-[300vh] bg-[#6F7C74]">
            <canvas ref={canvasRef} className="sticky top-0 left-0 w-full h-screen object-cover z-0" style={{ filter: 'brightness(1.03)', mixBlendMode: 'lighten' }} />
            {/* Gradient fade from hero olive to white at the bottom of the hero scroll area */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '35vh', background: 'linear-gradient(to bottom, transparent, #ffffff)', zIndex: 5, pointerEvents: 'none' }} />
            <div
                className="fixed top-0 left-0 w-full h-screen z-10 pointer-events-none"
                style={{
                    opacity: textOpacity,
                    transform: `translateY(${textTranslateY}px)`
                }}
            >
                <div className="w-full md:w-1/2 h-full flex flex-col justify-start px-6 md:pl-20 items-center md:items-start text-center md:text-left" style={{ paddingTop: '16vh' }}>
                    {/* "Hi I am," greeting */}
                    <p
                        style={{
                            fontFamily: '"Saira", sans-serif',
                            fontWeight: 500,
                            fontStyle: 'italic',
                            fontSize: 'clamp(0.85rem, 1.6vw, 1.2rem)',
                            color: '#e8ddb5',
                            margin: 0,
                            padding: 0,
                            lineHeight: 1,
                            letterSpacing: '0.02em',
                        }}
                    >
                        Hi I am,
                    </p>

                    {/* Name — each word on its own line, huge block letters */}
                    <h1
                        style={{
                            fontFamily: '"Barlow Condensed", sans-serif',
                            fontWeight: 900,
                            fontSize: 'clamp(4.5rem, 14vw, 11rem)',
                            lineHeight: 0.92,
                            letterSpacing: '-0.01em',
                            textTransform: 'uppercase',
                            color: '#e8ddb5',
                            margin: 0,
                        }}
                    >
                        <span style={{ display: 'block' }}>Nithin</span>
                        <span style={{ display: 'block' }}>Mathew</span>
                        <span style={{ display: 'block' }}>Thomas</span>
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default HeroScrollAnimation;
