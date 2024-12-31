import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import NavigateBeforeOutlinedIcon from "@mui/icons-material/NavigateBeforeOutlined";

import "./ExperiencesPreview.css";
function ExperiencesPreview({ onNavigate, onClose }) {
    return (
        <>
            <div className="top-part">
                <button className="arrow-button" onClick={() => onClose()}>
                    <NavigateBeforeOutlinedIcon />
                </button>
            </div>
            <div className="container">
                <button
                    className="route-title"
                    onClick={() => onNavigate("experiences")}
                >
                    <h4>Experiences</h4>
                    <NavigateNextOutlinedIcon className="arrow-button" />
                </button>
                <div className="preview">
                    <div className="experience-card-preview">
                        <img
                            src="https://images.pexels.com/photos/163407/cyclists-trail-bike-clouds-163407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="Starter Pack"
                        />
                        <div className="experience-data">
                            <h4>Starter Pack</h4>
                            <p>30 days</p>
                            <p>
                                Get everything you need to start your travels. A
                                small hotel, a few meals, and a good experience.
                            </p>
                            <button
                                onClick={() => onNavigate("singleExperience")}
                            >
                                View experience
                            </button>
                        </div>
                    </div>
                    <div className="experience-card-preview">
                        <img
                            src="https://images.pexels.com/photos/19423676/pexels-photo-19423676/free-photo-of-carretera-hombre-vehiculo-movimiento.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="Premium Pack"
                        />
                        <div className="experience-data">
                            <h4>Premium Pack</h4>
                            <p>60 days</p>
                            <p>
                                Get everything you need to start your travels. A
                                small hotel, a few meals, and a good experience.
                            </p>
                            <button
                                onClick={() => onNavigate("singleExperience")}
                            >
                                View experience
                            </button>
                        </div>
                    </div>
                    <div className="experience-card-preview">
                        <img
                            src="https://images.pexels.com/photos/5807613/pexels-photo-5807613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="Family Pack"
                        />
                        <div className="experience-data">
                            <h4>Family Pack</h4>
                            <p>180</p>
                            <p>
                                Get everything you need to start your travels. A
                                small hotel, a few meals, and a good experience.
                            </p>
                            <button
                                onClick={() => onNavigate("singleExperience")}
                            >
                                View experience
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ExperiencesPreview;
