import "./Contact.css";
import NavBar from "../../components/navbar/NavBar";
import ContactForm from "../../components/formulario/Formulario";
import ContactDetails from "./ContactDetails";
import { useState } from "react";

function Contact() {

    const [client, setClient] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        experience: "",
        hearAboutUs: ""

    })

    return (
        <>
            <header>
                <NavBar></NavBar>
            </header>
            <main ClassName ="background-contact">
                <div>
                    <h1 className="contact-title">CONTACT US</h1>
                    <div className="contact-container">
                        <div className="contact-page">
                        </div>
                        <div className="form">
                            <ContactForm
                                initialClient={client}
                                onSubmit={setClient}
                            />
                        </div>

                    </div>
                    <ContactDetails />
                </div>

            </main>

        </>
    )


}

export default Contact;