import { useState, useContext } from "react";
import ReservationModal from "./ReservationModal";
import { PageContext } from '../../utils/js/context/PageContext';
import "./ExperienceCard.css"

function ExperienceCard({ title, days, imageUrl, experience, onReserve, children }) {
    const [isModalOpen, setModalOpen] = useState(false);
    const userId = localStorage.getItem("authUserId"); 
    const { setPage } = useContext(PageContext);

    const handleOpenModal = () => {
        if (!userId) {
            alert("Por favor, inicia sesión para hacer una reserva");
            return;
        }
        setModalOpen(true);
    };

    const handleCloseModal = () => setModalOpen(false);

    const handleViewExperience = () => {
        setPage('singleExperience');
    };

    return (
        <div className="experience-card">
            <div 
                className="experience-card__image-container"
                onClick={handleViewExperience}
                style={{ cursor: 'pointer' }}
            >
                <img src={imageUrl} alt={title} className="experience-card__image" />
            </div>
            <div className="experience-card__info">
                <h5 
                    className="experience-card__title"
                    onClick={handleViewExperience}
                    style={{ cursor: 'pointer' }}
                >
                    {title}
                </h5>
                {children}
                <p className="experience-card__days">{days} days</p>
            </div>
            <button className="experience-card__button" onClick={handleOpenModal}>
                Require now
            </button>
            <ReservationModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                experience={experience}
                onSubmit={onReserve}
                userId={userId}
            />
        </div>
    );
}

export default ExperienceCard;
