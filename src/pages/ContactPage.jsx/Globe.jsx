import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { useSpring } from 'react-spring';

export default function Globe() {
    const canvasRef = useRef();
    const locationToAngles = (lat, long) => {
        console.log(lat, long)
        return [Math.PI - ((long * Math.PI) / 180 - Math.PI / 2), (lat * Math.PI) / 180]
    }
    const focusRef = useRef([0, 0])

    console.log(focusRef.current)

    const pointerInteracting = useRef(null);
    console.log(pointerInteracting.current)
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
            opacity: 1,
            markers: [
                { location: [37.78, -122.412], size: 0.1 },
                { location: [52.52, 13.405], size: 0.1 },
                { location: [35.676, 139.65], size: 0.1 },
                { location: [-34.60, -58.38], size: 0.1 },
            ],

            onRender: (state) => {
                // this is dragabble and rotatable
                // This prevents rotation while dragging

                if (!pointerInteracting.current) {
                    // Called on every animation frame.
                    // `state` will be an empty object, return updated params.
                    phi += 0.005
                }
                if (focusRef.current[0] === 0) {
                    state.phi = phi + r.get()
                    state.width = width * 2
                    state.height = width * 2
                }

                // This is the focus effect on the globe to  rotate to the location
                if (focusRef.current[0] !== 0) {
                    state.phi = currentPhi
                    state.theta = currentTheta
                }
                const [focusPhi, focusTheta] = focusRef.current
                const distPositive = (focusPhi - currentPhi + doublePi) % doublePi
                const distNegative = (currentPhi - focusPhi + doublePi) % doublePi
                // Control the speed
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
    }, [])
    return <div style={{
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
            <button onClick={() => {
                focusRef.current = locationToAngles(37.78, -122.412)
            }}> San Francisco</button>
            <button onClick={() => {
                focusRef.current = locationToAngles(52.52, 13.405)
            }}> Berlin</button>
            <button onClick={() => {
                focusRef.current = locationToAngles(35.676, 139.65)
            }}>Tokyo</button>
            <button onClick={() => {
                focusRef.current = locationToAngles(-34.60, -58.38)
            }}> Buenos Aires</button>
        </div>
    </div>
}

