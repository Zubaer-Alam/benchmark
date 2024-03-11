import { cn } from "../../lib/utils";
import createGlobe from "cobe";
import { useCallback, useEffect, useRef } from "react";
import { useSpring } from "react-spring";

const GLOBE_CONFIG = {
    width: 800,
    height: 800,
    onRender: () => { },
    devicePixelRatio: 2,
    phi: 0,
    theta: 0.3,
    dark: 0,
    diffuse: 0.4,
    mapSamples: 16000,
    mapBrightness: 1.2,
    baseColor: [1, 1, 1],
    markerColor: [251 / 255, 100 / 255, 21 / 255],
    glowColor: [1, 1, 1],
    markers: [
        { location: [14.5995, 120.9842], size: 0.03 },
        { location: [19.076, 72.8777], size: 0.1 },
        { location: [23.8103, 90.4125], size: 0.05 },
        { location: [30.0444, 31.2357], size: 0.07 },
        { location: [39.9042, 116.4074], size: 0.08 },
        { location: [-23.5505, -46.6333], size: 0.1 },
        { location: [19.4326, -99.1332], size: 0.1 },
        { location: [40.7128, -74.006], size: 0.1 },
        { location: [34.6937, 135.5022], size: 0.05 },
        { location: [41.0082, 28.9784], size: 0.06 },
    ],
};
export default function Globe({
    className,
    config = GLOBE_CONFIG,
}) {
    let phi = 0;
    let theta = 0;
    let width = 0;
    const canvasRef = useRef(null);
    const pointerInteracting = useRef(null);
    const pointerInteractionMovement = useRef({ x: 0, y: 0 });
    const [{ r, s }, api] = useSpring(() => ({
        r: 0,
        s: 0,
        config: {
            mass: 1,
            tension: 280,
            friction: 40,
            precision: 0.001,
        },
    }));

    const updatePointerInteraction = (clientX, clientY) => {
        pointerInteracting.current = clientX !== null && clientY !== null ? { x: clientX, y: clientY } : null;
        canvasRef.current.style.cursor = pointerInteracting.current ? "grabbing" : "grab";
    };

    const updateMovement = (clientX, clientY) => {
        if (pointerInteracting.current !== null) {
            const deltaX = clientX - pointerInteracting.current.x;
            const deltaY = clientY - pointerInteracting.current.y;
            pointerInteractionMovement.current = { x: deltaX, y: deltaY };
            api.start({ r: deltaX / 2000, s: deltaY / 2000 });
        }
    };

    const onRender = useCallback(
        (state) => {
            if (pointerInteracting.current) {
                phi += r.get();
                theta += s.get();
            }
            state.phi = phi;
            state.theta = theta;
            state.width = width * 2;
            state.height = width * 2;
        },
        [pointerInteracting, phi, theta, r, s]
    );

    const onResize = () => {
        if (canvasRef.current) {
            width = canvasRef.current.offsetWidth;
        }
    };

    useEffect(() => {
        window.addEventListener("resize", onResize);
        onResize();

        const globe = createGlobe(canvasRef.current, {
            ...config,
            width: width * 2,
            height: width * 2,
            onRender,
        });

        setTimeout(() => (canvasRef.current.style.opacity = "1"));
        return () => globe.destroy();
    }, []);

    return (
        <div
            className={cn(
                "aspect-[1/1] w-full max-w-[600px]",
                className
            )}
        >
            <canvas
                className={cn(
                    "h-full w-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
                )}
                ref={canvasRef}
                onPointerDown={(e) =>
                    updatePointerInteraction(e.clientX, e.clientY)
                }
                onPointerUp={() => updatePointerInteraction(null, null)}
                onPointerOut={() => updatePointerInteraction(null, null)}
                onMouseMove={(e) => {
                    if (pointerInteracting.current) {
                        updateMovement(e.clientX, e.clientY);
                    }
                }}
                onTouchMove={(e) => {
                    if (e.touches[0] && pointerInteracting.current) {
                        updateMovement(e.touches[0].clientX, e.touches[0].clientY);
                    }
                }}
            />
        </div>
    );
}