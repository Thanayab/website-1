import React from "react";
import "./gallery.css";

const Gallery = () => {
    const cabs = [
        {
            id: 1,
            image: "/images/cab1.jpg",
            name: "Sedan",
            details: "4+1 Seater • Diesel • 5 Star Rating",
        },
        {
            id: 2,
            image: "/images/cab2.jpg",
            name: "SUV",
            details: "7+1 Seater • Diesel • 4.8 Star Rating",
        },
        {
            id: 3,
            image: "/images/cab3.jpg",
            name: "Hatchback",
            details: "4+1 Seater • Petrol • 4.5 Star Rating",
        },
        {
            id: 4,
            image: "/images/cab4.jpg",
            name: "Luxury",
            details: "4+1 Seater • Petrol • 5 Star Rating",
        },
        {
            id: 5,
            image: "/images/cab5.jpg",
            name: "Minivan",
            details: "6+1 Seater • Diesel • 4.7 Star Rating",
        },
        {
            id: 6,
            image: "/images/cab6.jpg",
            name: "Electric",
            details: "4+1 Seater • Electric • 5 Star Rating",
        },
    ];

    return (
        <div className="gallery">
            <h2 className="gallery-title">Our Fleet</h2>
            <div className="gallery-grid">
                {cabs.map((cab) => (
                    <div className="gallery-item" key={cab.id}>
                        <img src={cab.image} alt={cab.name} className="gallery-image" />
                        <div className="gallery-details">
                            <h3 className="gallery-name">{cab.name}</h3>
                            <p className="gallery-info">{cab.details}</p>
                            <button className="book-now-button">Book Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
