import { useState, useEffect } from "react";
import { obtenerPacks } from "../../utils/js/apiCallController";
import { getAllSources } from '../../utils/js/apiCallController';
import "./Formulario.css";
function ContactForm({ initialClient, onSubmit }) {
    const [client, setClient] = useState(initialClient);
    const [showModal, setShowModal] = useState(false);

    /* function handleChange(e) {
        const { name, value } = e.target;
        setClient(oldClient => ({ ...oldClient, [name]: value }));
    }*/

    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        async function loadPacks() {
            try {
                const data = await obtenerPacks();
                setExperiences(data);

            } catch (err) {
                setError('Error loading experiences');

            }
        }

        loadPacks();
    }, []);

    const [sources, setSources] = useState([]);
    const [selectedSource, setSelectedSource] = useState('');

    useEffect(() => {
        const loadSources = async () => {
            try {
                const sourcesData = await getAllSources();
                setSources(sourcesData);
            } catch (err) {

                setError("Error loading sources");
            }
        }

        loadSources();
    }, []);




    function handleFirstName(e) {
        const newFirstName = e.target.value;

        setClient(oldClient => {

            const newClient = { ...oldClient };
            newClient.firstName = newFirstName;
            return newClient;
        })

    }

    function handleLastName(e) {
        const newLastName = e.target.value;

        setClient(oldClient => {

            const newClient = { ...oldClient };
            newClient.lastName = newLastName;
            return newClient;
        })

    }

    function handleEmail(e) {
        const newEmail = e.target.value;

        setClient(oldClient => {
            const newClient = { ...oldClient };
            newClient.email = newEmail;
            return newClient;
        })
    }

    function handlePhone(e) {
        const newPhone = e.target.value;

        setClient(oldClient => {
            const newClient = { ...oldClient };
            newClient.phone = newPhone;
            return newClient;
        })
    }

    function handleExperience(e) {
        const newExperience = e.target.value;

        setClient(oldClient => {
            const newClient = { ...oldClient };
            newClient.experience = newExperience;
            return newClient;
        })
    }

    function handleMessage(e) {
        const newMessage = e.target.value;

        setClient(oldClient => {
            const newClient = { ...oldClient };
            newClient.message = newMessage;
            return newClient;
        })
    }

    function handleHearAboutUs(e) {
        const newHearAboutUs = e.target.value;

        setClient(oldClient => {
            const newClient = { ...oldClient };
            newClient.message = newMessage;
            return newClient;
        })
    }



    /*function handleExperience(e) {
        const newExperience = e.target.value;
        setClient(oldClient => ({ ...oldClient, experience: newExperience }));
    } */


    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(client);
        setShowModal(true); // Muestra el modal
        setClient({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
            experience: "",
            hearAboutUs: "",
        });

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="input-section">
                    <div className="FirstName">
                        <label htmlFor="FirstName">First Name <required>*</required></label>
                        <input
                            type="text"
                            name="FirstName"
                            value={client.firstName}
                            onChange={handleFirstName}
                            required
                        />
                    </div>
                    <div className="LastName">
                        <label htmlFor="LastName">Last Name <required>*</required></label>
                        <input
                            type="text"
                            name="LastName"
                            value={client.lastName}
                            onChange={handleLastName}
                            required
                        />
                    </div>
                </div>
                <div className="input-section">
                    <div className="Email">
                        <label htmlFor="email">Email <required>*</required></label>
                        <input
                            type="email"
                            name="email"
                            value={client.email}
                            onChange={handleEmail}
                            required
                        />
                    </div>
                    <div className="Phone">
                        <label htmlFor="phone">Phone <required>*</required></label>
                        <input
                            type="text"
                            name="phone"
                            value={client.phone}
                            onChange={handlePhone}
                            required
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label >Which experience are you interested in? <required>*</required></label>
                    <div className="radio-group" >
                        {experiences.map((experience) => (
                            <div class="radio-option" key={experience.id}>
                                <input
                                    type="radio"
                                    id={`experience-${experience.id}`}
                                    name="experience"
                                    value={experience.id}
                                    checked={experience.id}
                                    onChange={handleExperience}
                                />
                                <label htmlFor={`experience-${experience.id}`}>{experience.name}</label>
                            </div>
                        ))}

                    </div>

                    <div className="input-select-option">
                        <label htmlFor="hearAboutUs">How did you find us? <required>*</required></label>
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

                    </div>

                    <div className="input-message">
                        <div className="message">
                            <label htmlFor="message">Message:</label>
                            <textarea
                                type="text"
                                name="message"
                                value={client.message}
                                onChange={handleMessage}
                            />
                        </div>
                    </div>

                    <div>
                        <button className="send-button">Send</button>
                    </div>
                </div>
            </form>

            {/* Aquí va el modal */}
            {showModal && (
                <div className="contact-modal">
                    <div className="contact-modal-content">
                        <h2>Formulario enviado correctamente</h2>
                        <p>¡Gracias por contactarnos! Nos comunicaremos contigo pronto.</p>
                        <button onClick={() => setShowModal(false)}>Cerrar</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default ContactForm; 
