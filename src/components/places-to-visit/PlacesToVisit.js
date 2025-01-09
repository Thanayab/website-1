import React, { useState } from "react";
import "./PlacesToVisit.css";

const PlacesToVisit = () => {
    const allPlaces = [
        {
            id: 1,
            image: "https://travel2karnataka.com/images/kukke/kukke_temple.jpg",
            name: "Kukke Subramanya",
            description: "A sacred pilgrimage site, renowned for its temple dedicated to Lord Subramanya and nestled amidst the Western Ghats.",
            category: "Temple",
            mapLink: "https://maps.app.goo.gl/c2R2FsmabeRdrHg89",
            readMoreLink: "https://en.wikipedia.org/wiki/Kukke_Subramanya_Temple",
        },
        {
            id: 2,
            image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/63/ae/20/raja-s-seat.jpg?w=500&h=-1&s=1",
            name: "Madikeri",
            description: "A charming hill station in Coorg, famous for its lush greenery, coffee plantations, and stunning viewpoints.",
            category: "Nature",
            mapLink: "https://maps.app.goo.gl/yfFAinDUSiY6dXkA8",
            readMoreLink: "https://en.wikipedia.org/wiki/Madikeri",
        },
        {
            id: 3,
            image: "https://media1.thrillophilia.com/filestore/1a1fsgfu14ecjsq5q693568i8sl0_1573730079_cover.jpg.jpg?w=400&dpr=2",
            name: "Manglore",
            description: "A bustling coastal city known for its beaches, temples, and unique blend of traditions and modernity.",
            category: "Beaches",
            mapLink: "https://maps.app.goo.gl/brcq5QxniWDA1Lbo9",
            readMoreLink: "https://en.wikipedia.org/wiki/Mangalore",
        },
        {
            id: 4,
            image: "https://miro.medium.com/v2/resize:fit:1140/0*Ne_Aph3V-clCgzu7.jpg",
            name: "Dharmastala",
            description: "A spiritual hub celebrated for the Dharmasthala Temple, dedicated to Lord Manjunatha, and its charitable services.",
            category: "Temple",
            mapLink: "https://maps.app.goo.gl/E3wd9dpx9cLGNw7Q6",
            readMoreLink: "https://en.wikipedia.org/wiki/Dharmasthala",
        },
        {
            id: 5,
            image: "https://t4.ftcdn.net/jpg/03/41/40/71/360_F_341407103_ycPF1c11FnIsi5d6xL09xrECMdZ0DFs1.jpg",
            name: "Udupi",
            description: "A temple town famous for the Sri Krishna Matha, pristine beaches, and delicious Udupi cuisine.",
            category: ["Temple","Beaches"],
            mapLink: "https://maps.app.goo.gl/qvzhQ9Z9ofvTHRkK9",
            readMoreLink: "https://en.wikipedia.org/wiki/Udupi",
        },
        {
            id: 6,
            image: "https://media.istockphoto.com/id/1160692967/photo/india-the-state-of-karnataka-the-city-of-murdeshwar-the-statue-of-shiva.jpg?s=612x612&w=0&k=20&c=PoehZl83OxpTCAdOt1ZdeM310TaJZY9fb9baQ9ZW5E0=",
            name: "Murudeshwara",
            description: "Home to the iconic Lord Shiva statue and a serene beachside temple offering breathtaking ocean views.",
            category: ["Temple","Beaches"],
            mapLink: "https://maps.app.goo.gl/vDSe7s5ejhoqnbfE7",
            readMoreLink: "https://en.wikipedia.org/wiki/Murdeshwar",
        },
        {
            id: 7,
            image: "https://media.istockphoto.com/id/172124032/photo/mysore-palace-at-dusk.jpg?s=612x612&w=0&k=20&c=paO74C_dVsY14IbK0RNqs0TD-lSteQy-AW5CnQFEb_4=",
            name: "Mysore",
            description: "The cultural capital of Karnataka, known for its royal heritage, palaces, and vibrant Dasara festival.",
            category: "Historical",
            mapLink: "https://maps.app.goo.gl/h223f1z5T5JfQvLi9",
            readMoreLink: "https://en.wikipedia.org/wiki/Mysore",
        },
        {
            id: 8,
            image: "https://www.pilgrimagetour.in/blog/wp-content/uploads/2023/09/How-to-Reach-Tirupati-Balaji-Temple.jpg",
            name: "Tirupati",
            description: "A world-famous pilgrimage destination housing the sacred Tirumala Venkateswara Temple in Andhra Pradesh.",
            category: "Temple",
            mapLink: "https://maps.app.goo.gl/3U9nhuQauNjaFefj6",
            readMoreLink: "https://en.wikipedia.org/wiki/Tirupati",
        },
        {
            id: 9,
            image: "https://subramanyacabservice.in/images/places/shringeri.jpg",
            name: "Sringeri",
            description: "A serene town revered for the Sharada Peetham and its rich spiritual and cultural heritage.",
            category: "Temple",
            mapLink: "https://maps.app.goo.gl/f71ADTtFoSyeeUg8A",
            readMoreLink: "https://en.wikipedia.org/wiki/Sringeri",
        },
    ];

    const [filteredPlaces, setFilteredPlaces] = useState(allPlaces);

    const filterPlaces = (category) => {
        if (category === "All") {
            setFilteredPlaces(allPlaces);
        } else {
            setFilteredPlaces(allPlaces.filter((place) => 
                Array.isArray(place.category) 
                    ? place.category.includes(category) 
                    : place.category === category
            ));
        }
    };

    return (
        <div className="places-container">
            <h2 className="places-title">Top places to visit</h2>
            <div className="places-filters">
                {["All", "Temple", "Historical", "Beaches"].map((category) => (
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
