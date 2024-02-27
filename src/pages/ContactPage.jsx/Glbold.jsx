import createGlobe from "cobe";
import { useEffect, useRef, useState } from "react";
import { useSpring } from 'react-spring';
import { FiMapPin } from "react-icons/fi";

export default function Globe() {
    const canvasRef = useRef();
    const locationToAngles = (lat, long) => {
        return [Math.PI - ((long * Math.PI) / 180 - Math.PI / 2), (lat * Math.PI) / 180]
    }
    const focusRef = useRef([0, 0])
    const [markers, setMarkers] = useState([
        { location: [37.78, -122.412], size: 0.1, label: "San Francisco" },
        { location: [52.52, 13.405], size: 0.1, label: "Berlin" },
        { location: [35.676, 139.65], size: 0.1, label: "Tokyo" },
        { location: [-34.60, -58.38], size: 0.1, label: "Buenos Aires" },
    ]);

    const pointerInteracting = useRef(null);
    const pointerInteractionMovement = useRef(0);

    const [{ r }, api] = useSpring(() => ({
        r: 0,
        config: {
            mass: 1,
            tension: 280,
            friction: 40,
            precision: 0.001,
        },
    }));

    useEffect(() => {
        let phi = 0;
        let width = 0;
        let currentPhi = 0;
        let currentTheta = 0;
        const doublePi = Math.PI * 2;

        const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth)
        window.addEventListener('resize', onResize)
        onResize()
        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: width * 2,
            height: width * 2,
            phi: 0,
            theta: 0.3,
            dark: 0,
            diffuse: 0.4,
            mapSamples: 16000,
            mapBrightness: 12.0,
            mapBaseBrightness: 0,
            baseColor: [1, 1, 1],
            markerColor: [251 / 255, 100 / 255, 21 / 255],
            glowColor: [4/5, 4/5, 4/5],
            opacity: 0.9,
            markers: markers.map(marker => ({
                ...marker,
                onRender: (ctx, state) => {
                    const [x, y] = state.project(marker.location[1], marker.location[0]);
                    ctx.fillStyle = 'black';
                    ctx.font = '12px Arial';
                    ctx.fillText(marker.label, x + 5, y + 5); // Adjust as needed
                }
            })),
            onRender: (state) => {
                    phi += 0.005

                if (focusRef.current[0] === 0 && pointerInteractionMovement.current !== 0) {
                    state.phi = phi + r.get()
                    state.width = width * 2
                    state.height = width * 2
                }

                if (focusRef.current[0] !== 0) {
                    state.phi = currentPhi
                    state.theta = currentTheta
                }
                const [focusPhi, focusTheta] = focusRef.current
                const distPositive = (focusPhi - currentPhi + doublePi) % doublePi
                const distNegative = (currentPhi - focusPhi + doublePi) % doublePi

                if (distPositive < distNegative) {
                    currentPhi += distPositive * 0.08
                } else {
                    currentPhi -= distNegative * 0.08
                }
                currentTheta = currentTheta * 0.92 + focusTheta * 0.08
                state.width = width * 2
                state.height = width * 2
            }
        })
        setTimeout(() => canvasRef.current.style.opacity = '1')
        return () => {
            globe.destroy();
            window.removeEventListener('resize', onResize);
        }
    }, [markers, r])

    return (
        <div style={{
            width: '100%',
            maxWidth: 600,
            aspectRatio: 1,
            margin: 'auto',
            position: 'relative',
        }}>
            <canvas
                ref={canvasRef}
                onPointerDown={(e) => {
                    pointerInteracting.current =
                        e.clientX - pointerInteractionMovement.current;
                    canvasRef.current.style.cursor = 'grabbing';
                }}
                onPointerUp={() => {
                    pointerInteracting.current = null;
                    canvasRef.current.style.cursor = 'grab';
                }}
                onPointerOut={() => {
                    pointerInteracting.current = null;
                    canvasRef.current.style.cursor = 'grab';
                }}
                onMouseMove={(e) => {
                    if (pointerInteracting.current !== null) {
                        const delta = e.clientX - pointerInteracting.current;
                        pointerInteractionMovement.current = delta;
                        api.start({
                            r: delta / 200,
                        });
                    }
                }}
                onTouchMove={(e) => {
                    if (pointerInteracting.current !== null && e.touches[0]) {
                        const delta = e.touches[0].clientX - pointerInteracting.current;
                        pointerInteractionMovement.current = delta;
                        api.start({
                            r: delta / 100,
                        });
                    }
                }}
                style={{
                    width: '100%',
                    height: '100%',
                    cursor: 'grab',
                    contain: 'layout paint size',
                    opacity: 0,
                    transition: 'opacity 1s ease',
                }}
            />

            <div className="flex flex-col md:flex-row justify-center items-center control-buttons" style={{ gap: '.5rem' }}>
                Clients
                {markers.map((marker, index) => (
                    <button key={index} 
                    onClick={() => {
                        focusRef.current = locationToAngles(marker.location[0], marker.location[1])
                    }}
                    className="flex items-center gap-1"
                    ><FiMapPin/> <span>{marker.label}</span></button>
                ))}
            </div>
        </div>
    );
}
