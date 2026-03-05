import topRightBars from '../../assets/top-right-bars.png'

/**
 * DecorativeBackground
 * Replicates the geometric background pattern visible in the Capacite UI mockups.
 * Features:
 * - Diamond/rhombus grid pattern (thin white strokes)
 * - Blue→Purple vertical gradient bars on the right (from mockup assets)
 * - Dot grid overlay
 * - Pink arc decorative element (from 8.svg)
 */
export function DecorativeBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
            {/* Diamond grid pattern */}
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="diamond-grid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                        <rect width="80" height="80" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
                    </pattern>
                    <pattern id="dot-grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="1" cy="1" r="0.5" fill="rgba(255,255,255,0.06)" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#diamond-grid)" />
                <rect width="100%" height="60%" fill="url(#dot-grid)" opacity="0.6" />
            </svg>

            {/* Blue-to-purple vertical bars — top-right corner (using provided image) */}
            <img
                src={topRightBars}
                alt=""
                className="absolute top-0 right-0 w-[25vw] max-w-[300px] h-auto object-contain object-right-top opacity-70 mix-blend-screen pointer-events-none select-none"
            />

            {/* Larger diamond accents in the center-right */}
            <svg className="absolute top-[15%] right-[15%] w-[300px] h-[300px] opacity-[0.06]" viewBox="0 0 200 200">
                <g transform="rotate(45 100 100)">
                    <rect x="30" y="30" width="140" height="140" fill="none" stroke="white" strokeWidth="0.8" />
                    <rect x="50" y="50" width="100" height="100" fill="none" stroke="white" strokeWidth="0.6" />
                    <rect x="70" y="70" width="60" height="60" fill="none" stroke="white" strokeWidth="0.4" />
                </g>
            </svg>

            {/* Another diamond cluster further down */}
            <svg className="absolute top-[45%] right-[25%] w-[200px] h-[200px] opacity-[0.04]" viewBox="0 0 200 200">
                <g transform="rotate(45 100 100)">
                    <rect x="40" y="40" width="120" height="120" fill="none" stroke="white" strokeWidth="0.6" />
                    <rect x="65" y="65" width="70" height="70" fill="none" stroke="white" strokeWidth="0.4" />
                </g>
            </svg>



            {/* Bottom-left subtle blue glow */}
            <div
                className="absolute bottom-[10%] left-[5%] w-[25%] h-[25%] rounded-full"
                style={{
                    background: 'radial-gradient(ellipse, rgba(23, 61, 237, 0.06) 0%, transparent 70%)',
                }}
            />
        </div>
    )
}
