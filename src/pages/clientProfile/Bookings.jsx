import React, { useState, useEffect } from 'react';
import { getMyBookings } from '../../utils/js/apiCallController';
import './Bookings.css';
import { cancelBooking } from '../../utils/js/apiCallController';
import FavoriteButton from "../../components/button/FavoriteButton";


function Bookings() {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [favorites, setFavorites] = useState([]);


    const handleFavoriteToggle = (booking, isFavorite) => {
        let updatedFavorites;

        if (!isFavorite) {
            updatedFavorites = [...favorites, booking]; // Agregar el objeto de reserva
        } else {
            updatedFavorites = favorites.filter((fav) => fav.id !== booking.id); // Filtrar por ID
        }

        setFavorites(updatedFavorites);
        localStorage.setItem("favorite-bookings", JSON.stringify(updatedFavorites)); // Guardar en localStorage
    };

    useEffect(() => {
        const savedFavorites = JSON.parse(localStorage.getItem('favorite-bookings')) || [];
        setFavorites(savedFavorites);
    }, []);


    const handleCancelBooking = async (booking) => {
        try {
            await cancelBooking(booking.id, booking.user_id, booking.pack_id);
            const response = await getMyBookings();
            setBookings(response || []);
        } catch (error) {
            console.error('Error al cancelar la reserva:', error);
            setError('No se pudo cancelar la reserva');
        }
    };

    useEffect(() => {
        async function loadBookings() {
            try {
                const response = await getMyBookings();
                setBookings(response || []);
                setLoading(false);
            } catch (err) {
                console.error('Error detallado:', err);
                setError('Error loading bookings');
                setLoading(false);
            }
        }

        loadBookings();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (!bookings.length) return <div>No bookings yet.</div>;



    return (
        <div className="bookings-content">
            <div className="bookings-header">
                <div className='color'></div>
                <h3>My bookings</h3>
            </div>
            {bookings.map((booking) => (
                <div key={booking.id} className="booking-item">
                    <div className='orderRef'>
                        <h5>Order</h5>
                        <p>Ref: {booking.id}</p>
                        <p>on {booking.application_date}</p>
                        <FavoriteButton
                            bookingId={booking.id}
                            isFavorite={favorites.some((fav) => fav.id === booking.id)} // Compara objetos
                            onFavoriteToggle={(isFavorite) => handleFavoriteToggle(booking, isFavorite)}
                        />
                    </div>
                    <div className='orderDetails'>
                        <h5>Details</h5>
                        <p>{booking.pack.name}</p>
                        <p>{booking.pack.duration} days</p>
                        <p>Requested dates: {booking.requested_dates}</p>
                    </div>
                    <div className='total'>
                        <h5>Total</h5>
                        <p>EUR {booking.pack.price}</p>
                        {/* <p>Your message: {booking.message}</p> */}
                    </div>
                    <div className='status'>
                        <h5>STATUS</h5>
                        <p>{booking.status}</p>
                    </div>
                    <div className='actions'>
                        <h5>Actions</h5>
                        {booking.status !== 'cancelled' && booking.status !== 'completed' && (
                            <button
                                onClick={() => handleCancelBooking(booking)}
                                className='cancel-button'
                            >
                                CANCEL
                            </button>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Bookings;