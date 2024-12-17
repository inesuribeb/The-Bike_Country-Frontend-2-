import PlusButton from "../../components/button/PlusButton";
import "./ContactDetails.css";
import DropDown from "../../components/button/DropDown";

function ContactDetails() {
    const includedItemsPricingAndFinancial = [
        {
            id: 1,
            text: "Competitive and flexible pricing for all services.",
            description: "Our pricing models are designed to provide maximum value. Whether you choose a subscription-based plan or one-time payments, we ensure clarity and fairness in all transactions. Custom pricing is also available for large-scale or enterprise clients."
        },
        {
            id: 2,
            text: "Flexible payment plans and financing solutions",
            description: "We offer a range of financial options, including installment plans and financing through trusted partners, to make it easier to access the services you need. Contact our team for personalized advice on payment options."
        },
        {
            id: 3,
            text: "Take advantage of special offers and seasonal deals",
            description: "We regularly introduce exclusive promotions, discounts, and bundled packages to make our services even more accessible. Sign up for our newsletter to stay updated on the latest offers!"
        },
        {
            id: 4,
            text: "Clear and upfront billing with no hidden costs.",
            description: "Our billing process is fully transparent, providing detailed invoices and cost breakdowns. You’ll always know exactly what you’re paying for, with no surprises. Have questions? Our support team is ready to assist."
        }];

    const includedItemsJourneys = [
        {
            id: 5,
            text: "Transform your journey into a story worth sharing.",
            description: "We curate unique experiences tailored to your preferences, from cultural adventures to relaxing getaways. Discover activities that turn every journey into an unforgettable adventure."
        },
        {
            id: 6,
            text: "Travel with ease from start to finish.",
            description: "Our services ensure seamless coordination of transportation, accommodations, and activities, so you can focus on enjoying your journey without stress."
        }];

    const includedItemsWhileTraveling = [
        {
            id: 7,
            text: "Support anytime, anywhere during your trip.",
            description: " Our 24/7 travel assistance ensures you're never alone during your journey. From rebooking flights to navigating local services, our team is here to help with any unexpected challenges."
        },
        {
            id: 8,
            text: "Make the most of your destination with expert recommendations.",
            description: "Get insider tips on the best restaurants, attractions, and hidden gems. We provide tailored advice to help you experience your destination like a local."
        }];

    /*function HandleDescription () {

    }*/

    return (
        <>
            <div>
                <h1 className="contact-title-h1">FAQS</h1>
            </div>
        
        <div className="contact-details-container">
            <div className="contact-details-section">
                <h2 className="contact-details-title">Pricing & Financial</h2>
                <div className="contact-details-list">
                    {includedItemsPricingAndFinancial.map((item) => (
                        <div key={item.id} className="contact-details-item">
                            <DropDown text={item.text}>
                                <div className="contact-details-item__description">
                                    <p>{item.description}</p>
                                </div>
                            </DropDown>
                        </div>
                    ))}
                </div>
            </div>

            <div className="contact-details-section">
                <h2 className="contact-details-title">Journeys</h2>
                <div className="contact-details-list">
                    {includedItemsPricingAndFinancial.map((item) => (
                        <div key={item.id} className="contact-details-item">
                            <div className="contact-details-item__header">
                                <DropDown
                                    className="drowpdown-contact"
                                    text={item.text}
                                >
                                    <div className="contact-details-item__description">
                                        <p>{item.description}</p>
                                    </div>

                                </DropDown>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="contact-details-section">
                <h2 className="contact-details-title">While travelling</h2>
                <div className="contact-details-list">
                    {includedItemsWhileTraveling.map((item) => (
                        <div key={item.id} className="contact-details-item">
                            <div className="contact-details-item__header">
                                <DropDown
                                    className="drowpdown-contact"
                                    text={item.text}
                                >
                                    <div className="contact-details-item__description">
                                        <p>{item.description}</p>
                                    </div>

                                </DropDown>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    );
}

export default ContactDetails;



