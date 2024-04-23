import { useRef } from "react";
import Globe from "react-globe.gl";
import * as THREE from "three";
import * as topojson from "topojson-client";
import landTopology from "../../../assets/earth/land_10m.json";
import texture from "../../../assets/earth/texture.jpg";

const min = 500;
const max = 500;

const countriesData = [
  { name: "Bangladesh", lat: 23.685, lng: 90.3563 },
  { name: "Germany", lat: 51.1657, lng: 10.4515 },
  { name: "America", lat: 37.0902, lng: -95.7129 },
  { name: "Australia", lat: -25.2744, lng: 133.7751 },
  { name: "Pakistan", lat: 30.3753, lng: 69.3451 },
  { name: "Denmark", lat: 56.2639, lng: 9.5018 },
  { name: "Lithuania", lat: 55.1694, lng: 23.8813 },
  { name: "Serbia", lat: 44.0165, lng: 21.0059 },
  { name: "Italy", lat: 41.8719, lng: 12.5674 },
  { name: "Bulgaria", lat: 42.7339, lng: 25.4858 },
  { name: "Poland", lat: 51.9194, lng: 19.1451 },

  { name: "Spain", lat: 40.4637, lng: -3.7492 },

  { name: "Portugal", lat: 39.3999, lng: -8.2245 },

  { name: "Greece", lat: 39.0742, lng: 21.8243 },

  { name: "Turkey", lat: 38.9637, lng: 35.2433 },

  { name: "Russia", lat: 61.524, lng: 105.3188 },

  { name: "China", lat: 35.8617, lng: 104.1954 },

  { name: "Nepal", lat: 28.3949, lng: 84.124 },

  { name: "Bhutan", lat: 27.5142, lng: 90.4336 },

  { name: "Maldives", lat: 3.2028, lng: 73.2207 },

  { name: "Afghanistan", lat: 33.9391, lng: 67.71 },

  { name: "Jordan", lat: 30.5852, lng: 36.2384 },

  { name: "Lebanon", lat: 33.8547, lng: 35.8623 },
];

const arcsData = countriesData.map((startCountry, i) => {
  const endCountry = countriesData[(i + 1) % countriesData.length]; // This will create a loop between countries
  return {
    startLat: startCountry.lat,
    startLng: startCountry.lng,
    endLat: endCountry.lat,
    endLng: endCountry.lng,
    time: Math.random() * (max - min) + min,
    color: ["#ffffff00", "#faf7e6", "#ffffff00"],
  };
});

const EarthComponent = () => {
  const globeRef = useRef(null);

  const globeReady = () => {
    if (globeRef.current) {
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().enableZoom = false;

      globeRef.current.pointOfView({
        lat: 19.054339351561637,
        lng: -50.421161072148465,
        altitude: window.innerWidth > 1000 ? 2 : 5,
      });
    }
  };

  return (
    <div className="">
      <Globe
        ref={globeRef}
        onGlobeReady={globeReady}
        backgroundColor="rgba(0,0,0,0)"
        rendererConfig={{ antialias: true, alpha: true }}
        globeMaterial={
          new THREE.MeshPhongMaterial({
            color: "#1a2033",
            opacity: 0.95,
            transparent: true,
          })
        }
        atmosphereColor="#FFFFFF"
        atmosphereAltitude={0.1}
        arcsData={arcsData}
        arcAltitudeAutoScale={0.5}
        arcColor="color"
        arcStroke={0.5}
        arcDashGap={2}
        arcDashAnimateTime="time"
        polygonsData={
          topojson.feature(landTopology, landTopology.objects.land).features
        }
        polygonSideColor={() => "#00000000"}
        polygonCapMaterial={
          new THREE.MeshPhongMaterial({
            color: "#50C878",
            side: THREE.DoubleSide,
            map: new THREE.TextureLoader().load(texture),
          })
        }
        polygonAltitude={0.01}
        customThreeObject={(sliceData) => {
          const { size, color } = sliceData;
          return new THREE.Mesh(
            new THREE.SphereGeometry(size),
            new THREE.MeshBasicMaterial({ color })
          );
        }}
        customThreeObjectUpdate={(obj, sliceData) => {
          const { lat, lng, altitude } = sliceData;
          return Object.assign(
            obj.position,
            globeRef.current?.getCoords(lat, lng, altitude)
          );
        }}
      />
    </div>
  );
};

export default EarthComponent;
