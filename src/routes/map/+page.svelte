<script lang="ts">
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

let mapContainer: HTMLDivElement | undefined;
const defaultLocation: [number, number] = [8.5417, 47.3769];

let map: maplibregl.Map;
let userMarker: maplibregl.Marker | null = null;

function createUserBeaconElement(): HTMLElement {
    const el = document.createElement("div");
    // Bigger size and solid visible styles
    el.className =
        "relative w-6 h-6 bg-blue-600 rounded-full shadow-[0_0_12px_4px_rgba(0,122,255,0.7)] border-white border-4";

    return el;
}

function addFriendMarker(map: maplibregl.Map, lngLat: [number, number]) {
    const offset = 0.005;
    const newPos: [number, number] = [lngLat[0] + offset, lngLat[1] + offset];
    new maplibregl.Marker({
        color: "green"
    }).setLngLat(newPos).addTo(map);
}

$effect(() => {
    if (!mapContainer) return;

    map = new maplibregl.Map({
        container: mapContainer,
        style: "https://api.maptiler.com/maps/01989a5a-8da2-77fc-aba1-376ad8faff1d/style.json?key=sLc4ldOHYBX3Rjawy99L",
        center: defaultLocation,
        zoom: 16,
        pitch: 60,
        bearing: -17
    });

    // For debugging: add friend marker at Zurich initially
    addFriendMarker(map, defaultLocation);

    map.once("load", () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    const coords: [number, number] = [pos.coords.longitude, pos.coords.latitude];
                    console.log("User position:", coords);

                    map.setCenter(coords);
                    map.setZoom(16);

                    const el = createUserBeaconElement();
                    userMarker = new maplibregl.Marker({
                        element: el
                    }).setLngLat(coords).addTo(map);

                    addFriendMarker(map, coords);
                },
                (error) => {
                    console.warn("Geolocation failed or permission denied:", error);
                    // Show user at default location
                    const el = createUserBeaconElement();
                    userMarker = new maplibregl.Marker({
                        element: el
                    }).setLngLat(defaultLocation).addTo(map);
                }
            );

            navigator.geolocation.watchPosition((pos) => {
                const coords: [number, number] = [pos.coords.longitude, pos.coords.latitude];
                console.log("Position updated:", coords);

                map.setCenter(coords);
                if (userMarker) userMarker.setLngLat(coords);
            });
        } else {
            console.warn("Geolocation not supported");
            const el = createUserBeaconElement();
            userMarker = new maplibregl.Marker({
                element: el
            }).setLngLat(defaultLocation).addTo(map);
        }
    });
});
</script>

<div bind:this={mapContainer} class="h-screen w-screen"></div>
