import { useState, useEffect } from 'react';
import './ReservationModal.css';
import { getAllSources } from '../../utils/js/apiCallController';

const ReservationModal = ({ isOpen, onClose, experience, onSubmit, userId }) => {
    const [sources, setSources] = useState([]);
    const [selectedSource, setSelectedSource] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [authError, setAuthError] = useState('');

    useEffect(() => {
        const loadSources = async () => {
            try {
                const sourcesData = await getAllSources();
                setSources(sourcesData);
                setLoading(false);
            } catch (err) {
                if (err.message.includes('401')) {
                    setAuthError('You must login or register first');
                } else {
                    setError('Error loading sources');
                }
                setLoading(false);
            }
        };

        if (isOpen) {
            loadSources();
            setAuthError('');
            setError(null);
            setMessage('');
            setSelectedSource('');
        }
    }, [isOpen]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const reservationData = {
                user_id: userId,
                pack_id: experience.pack_id,
                source_id: parseInt(selectedSource),
                message: message,
                requested_dates: e.target.requested_dates.value.split(','),
            };
            await onSubmit(reservationData);
            onClose(); 
        } catch (err) {
            if (err.message.includes('401') || err.message.includes('Unauthorized')) {
                setAuthError('You must login or register first');
            } else {
                throw err; 
            }
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>X</button>
                <h2 className="modal-title">Book {experience.name}</h2>

                {loading ? (
                    <div className="modal-loading">Loading sources...</div>
                ) : error ? (
                    <div className="modal-error">{error}</div>
                ) : (
                    <form onSubmit={handleSubmit} className="modal-form">
                        {authError && (
                            <div className="auth-error">
                                {authError}
                            </div>
                        )}
                        <label className="form-label">
                            How did you find us?
                            <select
                                value={selectedSource}
                                onChange={(e) => setSelectedSource(e.target.value)}
                                required
                                className="form-select"
                            >
                                <option key="default" value="">Select a source</option>
                                {sources.map((source) => (
                                    <option key={source.source_id} value={source.source_id}>
                                        {source.name}
                                    </option>
                                ))}
                            </select>
                        </label>

                        <label className="form-label">
                            Message
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="form-textarea"
                            />
                        </label>

                        <label className="form-label">
                            Requested Dates
                            <input
                                type="text"
                                name="requested_dates"
                                placeholder="2024-12-20"
                                required
                                className="form-input"
                            />
                        </label>

                        <button
                            type="submit"
                            disabled={!selectedSource}
                            className="form-submit"
                        >
                            Confirm Reservation
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default ReservationModal;