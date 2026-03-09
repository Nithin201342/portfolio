import { useEffect, useRef } from 'react';

const CELL = 38;          // px per grid square — matches the old CSS backgroundSize
const LIT_COLOR = [111, 124, 116];  // #6F7C74 in RGB

const FlickerGrid = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        let animId;
        let flickerId;
        let cells = [];   // { opacity, target }
        let cols = 0, rows = 0;

        // ── Build / rebuild cell array when canvas resizes ──────────────────
        const init = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            cols = Math.ceil(canvas.width / CELL);
            rows = Math.ceil(canvas.height / CELL);
            cells = Array.from({ length: cols * rows }, () => ({ opacity: 0, target: 0 }));
        };

        init();

        const ro = new ResizeObserver(init);
        ro.observe(canvas);

        // ── Randomly light up 1–3 cells every 300ms ─────────────────────────
        const flicker = () => {
            const count = Math.floor(Math.random() * 3) + 1;
            for (let i = 0; i < count; i++) {
                const idx = Math.floor(Math.random() * cells.length);
                if (cells[idx].target === 0) {
                    cells[idx].target = 0.28 + Math.random() * 0.2; // glow intensity
                    // fade the cell back out after 600–2000 ms
                    setTimeout(() => {
                        if (cells[idx]) cells[idx].target = 0;
                    }, 600 + Math.random() * 1400);
                }
            }
        };

        flickerId = setInterval(flicker, 300);

        // ── Draw loop ────────────────────────────────────────────────────────
        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Grid lines
            ctx.strokeStyle = 'rgba(0,0,0,0.07)';
            ctx.lineWidth = 1;
            for (let c = 0; c <= cols; c++) {
                ctx.beginPath();
                ctx.moveTo(c * CELL, 0);
                ctx.lineTo(c * CELL, canvas.height);
                ctx.stroke();
            }
            for (let r = 0; r <= rows; r++) {
                ctx.beginPath();
                ctx.moveTo(0, r * CELL);
                ctx.lineTo(canvas.width, r * CELL);
                ctx.stroke();
            }

            // Lit cells — smooth fade in / out
            cells.forEach((cell, idx) => {
                const diff = cell.target - cell.opacity;
                cell.opacity += diff * 0.06; // lerp speed

                if (Math.abs(cell.opacity) < 0.001) return;

                const col = idx % cols;
                const row = Math.floor(idx / cols);
                const [r, g, b] = LIT_COLOR;
                ctx.fillStyle = `rgba(${r},${g},${b},${cell.opacity})`;
                ctx.fillRect(col * CELL + 1, row * CELL + 1, CELL - 2, CELL - 2);
            });

            animId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            cancelAnimationFrame(animId);
            clearInterval(flickerId);
            ro.disconnect();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute', inset: 0,
                width: '100%', height: '100%',
                maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
                pointerEvents: 'none',
                zIndex: 0,
            }}
        />
    );
};

export default FlickerGrid;
