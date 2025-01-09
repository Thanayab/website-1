import React from "react";
import "./gallery.css";

const Gallery = () => {
    const cabs = [
        {
            id: 1,
            image: "https://subramanyacabservice.in/images/cars/swift.png",
            name: "Swift Dzire",
            details: "4+1 Seater • Diesel • 5 Star Rating",
        },
        {
            id: 2,
            image: "https://subramanyacabservice.in/images/cars/etios.png",
            name: "Toyota Etios",
            details: "4+1 Seater • Diesel • 4.8 Star Rating",
        },
        {
            id: 3,
            image: "https://subramanyacabservice.in/images/cars/innova.png",
            name: "Toyota Innova",
            details: "5+1 Seater • Diesel • 4.5 Star Rating",
        },
        {
            id: 4,
            image: "https://subramanyacabservice.in/images/cars/innova2.png",
            name: "Toyota Innova V2",
            details: "7+1 Seater • Petrol • 5 Star Rating",
        },
        {
            id: 5,
            image: "https://subramanyacabservice.in/images/cars/trevera.png",
            name: "Trevera",
            details: "9+1 Seater • Diesel • 4.7 Star Rating",
        },
        {
            id: 6,
            image: "https://subramanyacabservice.in/images/cars/tempo.png",
            name: "Tempo Traveller",
            details: "12+1 Seater • Electric • 5 Star Rating",
        },
        {
            id: 7,
            image: "https://subramanyacabservice.in/images/cars/van.png",
            name: "Mini Van",
            details: "16+1 Seater • Electric • 5 Star Rating",
        },
        {
            id: 8,
            image: "https://subramanyacabservice.in/images/cars/minibus.png",
            name: "Mini Bus",
            details: "23+1 Seater • Electric • 5 Star Rating",
        },
        {
            id: 9,
            image: "https://subramanyacabservice.in/images/cars/bus.png",
            name: "Bus",
            details: "49+1 Seater • Electric • 5 Star Rating",
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
