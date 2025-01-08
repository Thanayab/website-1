import React, { useState } from "react";
import "./PlacesToVisit.css";

const PlacesToVisit = () => {
    const allPlaces = [
        {
            id: 1,
            image: "/images/place1.jpg",
            name: "Eiffel Tower",
            description: "The iconic landmark of Paris, offering stunning views and a rich history.",
            category: "Historical",
            mapLink: "https://goo.gl/maps/EiffelTower",
            readMoreLink: "/places/eiffel-tower",
        },
        {
            id: 2,
            image: "/images/place2.jpg",
            name: "Grand Canyon",
            description: "A breathtaking natural wonder showcasing millions of years of geological history.",
            category: "Nature",
            mapLink: "https://goo.gl/maps/GrandCanyon",
            readMoreLink: "/places/grand-canyon",
        },
        {
            id: 3,
            image: "/images/place3.jpg",
            name: "Santorini",
            description: "Famous for its whitewashed buildings and stunning sunsets over the Aegean Sea.",
            category: "Modern",
            mapLink: "https://goo.gl/maps/Santorini",
            readMoreLink: "/places/santorini",
        },
        {
            id: 4,
            image: "/images/place4.jpg",
            name: "Great Wall of China",
            description: "An ancient marvel stretching across mountains and valleys, rich in history.",
            category: "Historical",
            mapLink: "https://goo.gl/maps/GreatWall",
            readMoreLink: "/places/great-wall",
        },
        {
            id: 5,
            image: "/images/place5.jpg",
            name: "Machu Picchu",
            description: "A mystical Incan city nestled high in the Andes Mountains of Peru.",
            category: "Historical",
            mapLink: "https://goo.gl/maps/MachuPicchu",
            readMoreLink: "/places/machu-picchu",
        },
        {
            id: 6,
            image: "/images/place6.jpg",
            name: "Dubai",
            description: "A modern city with architectural marvels, luxury shopping, and vibrant nightlife.",
            category: "Modern",
            mapLink: "https://goo.gl/maps/Dubai",
            readMoreLink: "/places/dubai",
        },
    ];

    const [filteredPlaces, setFilteredPlaces] = useState(allPlaces);

    const filterPlaces = (category) => {
        if (category === "All") {
            setFilteredPlaces(allPlaces);
        } else {
            setFilteredPlaces(allPlaces.filter((place) => place.category === category));
        }
    };

    return (
        <div className="places-container">
            <h2 className="places-title">Top places to visit</h2>
            <div className="places-filters">
                {["All", "Nature", "Historical", "Modern"].map((category) => (
                    <button
                        key={category}
                        onClick={() => filterPlaces(category)}
                        className="places-filter-button"
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="places-grid">
                {filteredPlaces.map((place) => (
                    <div className="place-card" key={place.id}>
                        <img src={place.image} alt={place.name} className="place-image" />
                        <div className="place-info">
                            <h3 className="place-name">{place.name}</h3>
                            <p className="place-description">{place.description}</p>
                            <div className="place-actions">
                                <a href={place.readMoreLink} className="place-read-more">
                                    Read More
                                </a>
                                <a
                                    href={place.mapLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="place-map-link"
                                >
                                    View on Map
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PlacesToVisit;
