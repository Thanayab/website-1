import React from "react";
import "./testimonials.css";

function Testimonials() {
    const testimonials = [
        {
            text: "I recently used TraviCabs for my trip, and it was a fantastic experience! The booking process was seamless, the cab was clean and comfortable, and the driver was professional and friendly.",
            name: "Elisa Parcel",
            position: "Étudiante INSEEC, Lyon",
            avatar: "/avatars/elisa.png",
        },
        {
            text: "I recently used TraviCabs for my trip, and it was a fantastic experience! The booking process was seamless, the cab was clean and comfortable, and the driver was professional and friendly.",
            name: "Vincent Farre",
            position: "Étudiant CFA CODIS, Paris",
            avatar: "/avatars/vincent.png",
        },
        {
            text: "I recently used TraviCabs for my trip, and it was a fantastic experience! The booking process was seamless, the cab was clean and comfortable, and the driver was professional and friendly.",
            name: "Vanessa Hufe",
            position: "Étudiante Epitech, Bordeaux",
            avatar: "/avatars/vanessa.png",
        },
        {
            text: "I recently used TraviCabs for my trip, and it was a fantastic experience! The booking process was seamless, the cab was clean and comfortable, and the driver was professional and friendly.",
            name: "Paul Novana",
            position: "Étudiant YNOV Campus, Rennes",
            avatar: "/avatars/paul.png",
        },
        {
            text: "Jaltup est mon compagnon de route tout au long de mon alternance. Super intuitif, des conseils personnalisés et une grande facilité sur tous les points administratifs.",
            name: "Claire Mazonnet",
            position: "Étudiante IAE, Grenoble",
            avatar: "/avatars/claire.png",
        },
        {
            text: "I recently used TraviCabs for my trip, and it was a fantastic experience! The booking process was seamless, the cab was clean and comfortable, and the driver was professional and friendly.",
            name: "Jules Rivoti",
            position: "Étudiant IDRAC, Toulouse",
            avatar: "/avatars/jules.png",
        },
    ];

    return (
        <div className="testimonials">
            <h2 className="testimonials-title">Let’s see what people say about us</h2>
            <div className="testimonials-grid">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-card">
                        <p className="testimonial-text">{testimonial.text}</p>
                        <div className="testimonial-author">
                            <img
                                src={testimonial.avatar}
                                alt={testimonial.name}
                                className="testimonial-avatar"
                            />
                            <div>
                                <p className="testimonial-name">{testimonial.name}</p>
                                <p className="testimonial-position">{testimonial.position}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Testimonials;
