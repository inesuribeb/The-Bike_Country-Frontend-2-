import DetailsDropDown from './DetailsDropDown'
import './Details.css';


function Details() {
    const includedItems = [
        {
            id: 1,
            text: "Top of the range bikes hiring",
            description: "We provide high-end bikes suitable for all terrains and rider levels"
        },
        {
            id: 2,
            text: "Roadside assistance & nutrition supplies",
            description: "24/7 support and regular nutrition checkpoints throughout your journey"
        },
        {
            id: 3,
            text: "Luggage transportation",
            description: "Daily transport of your luggage between accommodations"
        },
        {
            id: 4,
            text: "4 to 5* Hotels",
            description: "Relax in premium accommodations, carefully selected to provide luxury and comfort after an adventurous day."
        },
        {
            id: 5,
            text: "Sport nutrition",
            description: "Boost your performance with expertly chosen sports nutrition tailored to meet your energy needs."
        },
        {
            id: 6,
            text: "Dinner at the best BQ restaurants",
            description: "Savor delicious meals at top-rated restaurants specializing in authentic cuisine and local flavors."
        },
        {
            id: 7,
            text: "Airport pickup and delivery",
            description: "Start and end your journey stress-free with seamless airport transfers for you and your equipment."
        },
        {
            id: 8,
            text: "Intern transport",
            description: "Convenient transportation between tour stops, ensuring a smooth and enjoyable experience."
        },
        {
            id: 9,
            text: "Professional guides",
            description: "Enhance your adventure with experienced guides who provide insights, safety, and local expertise."
        },
        {
            id: 10,
            text: "Professional photographic gallery",
            description: "Take home stunning professional photos that capture the essence of your cycling adventure."
        },
        {
            id: 11,
            text: "Mecanical assistance and maintenance",
            description: "Ride worry-free with expert mechanical support to ensure your bike is always in top condition."
        },
        {
            id: 12,
            text: "Flights",
            description: "Simplify your travel planning with optional flight bookings tailored to your itinerary."
        }
    ];

    const extrasItems = [
        {
            id: 13,
            text: "Professional video with Dron",
            description: "Capture your adventure with breathtaking aerial footage, edited into a professional-grade video."
        },
        {
            id: 14,
            text: "Cultural tours",
            description: "Explore the rich heritage of the region with guided cultural tours, including historic landmarks and local traditions."
        },
        {
            id: 15,
            text: "Bike technical clothing",
            description: "Upgrade your gear with high-quality technical clothing designed for comfort and performance during your rides."
        }
    ];

    return (
        <div id="details-section" className="details-container">
            <div className="details-section-included">
                <h2 className="details-title">
                    <span>WHAT'S</span>
                    <span>INCLUDED?</span>
                </h2>
                <div className="details-list">
                    {includedItems.map((item) => (
                        <div key={item.id} className="details-item">
                            <DetailsDropDown
                                text={item.text}
                                description={item.description}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="details-section-extras">
                <h2 className="details-title">
                    <span>ADDITIONAL</span>
                    <span>SERVICES</span>
                </h2>
                <div className="details-list">
                    {extrasItems.map((item) => (
                        <div key={item.id} className="details-item">
                            <DetailsDropDown
                                text={item.text}
                                description={item.description}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Details;