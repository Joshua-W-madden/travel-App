import React, { useState } from "react";
import {
    GoogleMap,
    LoadScript,
    DirectionsService,
    DirectionsRenderer,
    Marker,
} from "@react-google-maps/api";
// import Routes from "./components/Routes";
import AccommodationPosting from "./components/SocialPosting";
import accommodationData from "./data/posting-data";
import { Routes, Route } from "react-router-dom";
import PageAccommodation from "./pages/PageAccommodation";

const containerStyle = {
    width: "800px",
    height: "500px",
};

const center = {
    lat: 37.7749,
    lng: -122.4194, // San Francisco as default center
};

const App = () => {
    const [directions, setDirections] = useState(null);
    const [waypoints, setWaypoints] = useState([]);
    const [catalogResult, setCatalogResult] = useState("");
    const [selectedRoute, setSelectedRoute] = useState(null);
    const [pins, setPins] = useState([]);

    const handleMapClick = (event) => {
        const newWaypoint = {
            location: { lat: event.latLng.lat(), lng: event.latLng.lng() },
            stopover: true,
        };
        setWaypoints([...waypoints, newWaypoint]);
    };

    const addPin = (event) => {
        const newPin = {
            lat: event.latLng.lat(),
            lng: event.latLng.lng(),
        };
        setPins([...pins, newPin]);
    };

    const calculateRoute = () => {
        if (waypoints.length < 2) return;
        const origin = waypoints[0].location;
        const destination = waypoints[waypoints.length - 1].location;
        const intermediateWaypoints = waypoints.slice(1, -1);

        const directionsService = new google.maps.DirectionsService();
        directionsService.route(
            {
                origin,
                destination,
                waypoints: intermediateWaypoints,
                travelMode: google.maps.TravelMode.DRIVING,
                provideRouteAlternatives: true,
            },
            (result, status) => {
                if (status === google.maps.DirectionsStatus.OK) {
                    setDirections(result);
                    setSelectedRoute(result.routes[0]); // Default to first route
                } else {
                    console.error("Error fetching directions", result);
                }
            }
        );
    };

    const resetRoute = () => {
        setWaypoints([]);
        setDirections(null);
        setSelectedRoute(null);
        setPins([]);
    };

    const displayAccommodation = () => {
        setCatalogResult(
            accommodationData.map((accommodation) => (
                <AccommodationPosting
                    key={accommodation.id}
                    accommodationObj={accommodation}
                />
            ))
        );
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "700px",
                width: "900px",
                margin: "auto",
            }}
        >
            <LoadScript googleMapsApiKey="###################">
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                    onClick={addPin}
                >
                    {selectedRoute && (
                        <DirectionsRenderer
                            directions={{ routes: [selectedRoute] }}
                        />
                    )}
                    {pins.map((pin, index) => (
                        <Marker key={index} position={pin} />
                    ))}
                </GoogleMap>
            </LoadScript>
            <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
                <button onClick={calculateRoute}>Calculate Route</button>
                <button onClick={resetRoute}>Reset</button>
            </div>
            {directions && (
                <div style={{ marginTop: "20px" }}>
                    <h3>Select a Route:</h3>
                    {directions.routes.map((route, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedRoute(route)}
                            style={{ margin: "5px" }}
                        >
                            Route {index + 1}
                        </button>
                    ))}
                </div>
            )}
            <div style={{ marginTop: "20px", textAlign: "center" }}>
                <h2>Catalog</h2>
                <div
                    style={{
                        display: "flex",
                        gap: "10px",
                        justifyContent: "center",
                    }}
                >
                    <button
                        onClick={() => setCatalogResult(displayAccommodation)}
                    >
                        Accommodations
                    </button>
                    <button onClick={() => setCatalogResult("Result 2")}>
                        Events{" "}
                    </button>
                    <button onClick={() => setCatalogResult("Result 3")}>
                        Popular sites{" "}
                    </button>
                </div>
                <div
                    style={{
                        marginTop: "10px",
                        border: "none",
                        padding: "10px",
                        width: "300px",
                        minHeight: "50px",
                        backgroundColor: "#d3d3d3",
                        borderRadius: "12px",
                    }}
                >
                    {catalogResult}
                </div>
            </div>

            <Routes>
                <Route path="/" element={<div></div>} />
                <Route
                    path="/accommodation:id"
                    element={<PageAccommodation />}
                />
                <Route path="*" element={<h1>Page Not Found</h1>} />
            </Routes>
        </div>
    );
};

export default App;
