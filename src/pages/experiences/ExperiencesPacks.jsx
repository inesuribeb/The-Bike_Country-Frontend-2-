import ExperienceCard from "./ExperienceCard";
import FavoriteButton from "../../components/button/FavoriteButton";
import "./ExperiencesPacks.css";
import "./InfoHeader.css";
import { useState, useEffect } from "react";
import { obtenerPacks } from "../../utils/js/apiCallController";
import { createReservation } from "../../utils/js/apiCallController";

//         imageUrl: "https://i.ibb.co/6m8J14q/mapa1.webp",
//         imageUrl: "https://i.ibb.co/ZHDvQtF/mapa2.webp",
//         imageUrl: "https://i.ibb.co/wB7mcxM/mapa3.webp",

function ExperiencesPacks() {
    const [experiences, setExperiences] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [favorites, setFavorites] = useState([]);

    const handleFavoriteToggle = (experience, isFavorite) => {
        let updatedFavorites;

        if (!isFavorite) {
            updatedFavorites = [...favorites, experience]; // Agregar el objeto de reserva
        } else {
            updatedFavorites = favorites.filter(
                (fav) => fav.pack_id !== experience.pack_id
            ); // Filtrar por ID
        }

        setFavorites(updatedFavorites);
        localStorage.setItem(
            "favorite-experiences",
            JSON.stringify(updatedFavorites)
        ); // Guardar en localStorage
    };

    useEffect(() => {
        const savedFavorites =
            JSON.parse(localStorage.getItem("favorite-experiences")) || [];
        setFavorites(savedFavorites);
    }, []);

    const handleReserve = async (reservationData) => {
        try {
            const response = await createReservation(reservationData);
            alert("Reservation created successfully!");
            return response;
        } catch (error) {
            if (error.message.includes("401")) {
                throw error;
            } else {
                alert("Error creating reservation: " + error.message);
            }
        }
    };

    const scrollToDetails = () => {
        const detailsSection = document.getElementById("details-section");
        if (detailsSection) {
            detailsSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        async function loadPacks() {
            try {
                const data = await obtenerPacks();
                setExperiences(data);
                setLoading(false);
            } catch (err) {
                setError("Error loading experiences");
                setLoading(false);
            }
        }

        loadPacks();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <>
            <div className="info-header">
                <div className="info-header__item">
                    <h5 className="info-header__label">When to go</h5>
                    <h4 className="info-header__value">At any season</h4>
                </div>
                <div className="info-header__item">
                    <h5 className="info-header__label">Price from</h5>
                    <h4 className="info-header__value">From 7.000€</h4>
                    <h5
                        className="info-header__included"
                        onClick={scrollToDetails}
                        style={{ cursor: "pointer" }}
                    >
                        What's included?
                    </h5>
                </div>
                <div className="info-header__item">
                    <h5 className="info-header__label">Duration</h5>
                    <h4 className="info-header__value">5 - 7 nights</h4>
                </div>
                <div className="info-header__item">
                    <h5 className="info-header__label">Private Journeys</h5>
                    <h4 className="info-header__value">Enquire now</h4>
                </div>
            </div>
            <div className="experiences-container">
                {experiences.map((experience) => (
                    <ExperienceCard
                        key={experience.pack_id}
                        imageUrl={
                            "https://preview.redd.it/6oxim3xex3q81.png?auto=webp&s=46498609e7a818865b62fbf4f5df1d2404cad225"
                        }
                        title={experience.name}
                        days={experience.duration}
                        experience={experience}
                        onReserve={handleReserve}
                    >
                        <FavoriteButton
                            isFavorite={favorites.some(
                                (fav) => fav.pack_id === experience.pack_id
                            )}
                            onFavoriteToggle={(isFavorite) =>
                                handleFavoriteToggle(experience, isFavorite)
                            }
                        />
                    </ExperienceCard>
                ))}
            </div>
        </>
    );
}

export default ExperiencesPacks;
