import "./FavoritesPage.css";
import FavoriteButton from "../../components/button/FavoriteButton";
import React, { useState, useEffect } from "react";
import NavBar from "../../components/navbar/NavBar";

const FavoritesPage = () => {
    const [favorites, setFavorites] = useState({bookings: [], experiences: []}); // Estado para los favoritos

    useEffect(() => {
        // Cargar favoritos desde localStorage al montar el componente
        const savedFavoritesExperiences = JSON.parse(localStorage.getItem("favorite-experiences")) || [];
        const savedFavoritesBookings = JSON.parse(localStorage.getItem("favorite-bookings")) || [];
        setFavorites({
            experiences: savedFavoritesExperiences,
            bookings: savedFavoritesBookings
        });
        
    }, []);

    const handleDeleteBooking = (booking) => {
    const updatedFavoritesBookings = favorites.bookings.filter((fav) => fav.id !== booking.id);
    
    // Filtrar por ID
        setFavorites({
            ...favorites,
            bookings: updatedFavoritesBookings
        });
        localStorage.setItem("favorite-bookings", JSON.stringify(updatedFavoritesBookings)); // Guardar en localStorage
    };
    
    const handleDeleteExperience = (experience) => {
        const updatedFavoritesExperiences = favorites.experiences.filter((fav) => fav.pack_id !== experience.pack_id);
        
        // Filtrar por ID
            setFavorites({
                ...favorites,
                experiences: updatedFavoritesExperiences
            });
            localStorage.setItem("favorite-experiences", JSON.stringify(updatedFavoritesExperiences)); // Guardar en localStorage
        };


    return (
        <>
            <header>
                <NavBar></NavBar>
            </header>
            <main className="favorites-page">
                <div className="my-favorites">
                    <h1 className="my-favorites-title"> MY FAVORITES</h1>
                </div>
                <div className= "favorites-container">
                    <div className="favorites-booking-container">
                        <h2 className="my-favorites-booking"> My Favorite Bookings</h2>
                        {favorites.bookings.length === 0 ? (
                            <p className="no-bookings">No favorites bookings yet.</p>
                        ) : (
                            favorites.bookings.map((booking) => (
                                <div className="booking-favs" key={booking.id}>
                                    <h2>{booking.pack.name}</h2>
                                    <FavoriteButton
                                        isFavorite={favorites.bookings.some(fav => fav.id === booking.id)}
                                        onFavoriteToggle={( isFavorite) => handleDeleteBooking(booking)}
                                    />
                                    <p>Duration: {booking.pack.duration} days</p>
                                    <p>Price: EUR {booking.pack.price}</p>
                                </div>
                            ))
                    
                        )}
                      
                    </div>
                    <div className="favorites-experiences-container">
                        <h2 className="my-favorites-experiences"> My Favorite Experiences</h2>
                        {favorites.experiences.length === 0 ? (
                            <p className="no-experiences">No favorites experiences yet.</p>
                        ) : (
                            favorites.experiences.map((experience) => (
                                <div className="experiences-favs" key={experience.pack_id}>
                                    <h2>{experience.name}</h2>
                                    <FavoriteButton
                                        isFavorite={favorites.experiences.some(fav => fav.pack_id === experience.pack_id)}
                                        onFavoriteToggle={( isFavorite) => handleDeleteExperience(experience)}
                                    />
                                    <p>Duration: {experience.duration} days</p>
                                    <p>Price: EUR {experience.price}</p>
                                </div>
                            ))
                    
                        )}
                    </div>

                </div>
            </main>
        </>
    );
};

export default FavoritesPage;