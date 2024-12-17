import Button from "../button/Button";
import { PageContext } from "../../utils/js/context/PageContext.js";
import { useContext } from "react";
function MoreExperiences() {
    const { setPage } = useContext(PageContext);
    const handleChangePage = (pageName) => {
        setPage(pageName);
    };
    return (
        <div className="more-experience-section">
            <div className="top-div">
                <h5>· Experiences. Pedal. Eat. Sleep. Repeat</h5>
            </div>
            <div id="first-div">
                <div className="more-experiences-container">
                    <div className="experience">
                        <img
                            src="https://images-ext-1.discordapp.net/external/KPiscyF_oWdK5XauacdA2RcXr68bEGWCQ7xvrNnFgms/https/www.rawcyclingmag.com/wp-content/uploads/2022/06/Traka360_Training-Ride-12.jpg?format=webp&width=1410&height=940"
                            alt=""
                            id="lumbalgia"
                        />
                        <h6>Pedal</h6>
                        <p>
                            We provide top of the range bikes as standard now if
                            needed. Quality and comfort are our basis.
                        </p>
                    </div>
                    <div className="experience">
                        <img
                            src="https://www.liligo.es/magazine-viajes/wp-content/uploads/sites/43/2019/02/iStock-1144534910.jpg"
                            alt=""
                        />
                        <h6>Eat</h6>
                        <p>
                            The Basque Country is known for having one of the
                            best gastronomic culture in the world. We have a
                            responsibility to be a beneficial influence in the
                            environment, and are committed to respecting local
                            tradition and enjoying it in the best res- taurants.
                        </p>
                    </div>
                    <div className="experience">
                        <img
                            src="https://hoteltheartist.com/wp-content/uploads/2024/06/H4A9894-min.jpg"
                            alt=""
                        />
                        <h6>Sleep</h6>
                        <p>
                            We ensure your money goes into local hands. Rest is
                            essential, which is why you will stay in the best
                            hotels in the area, with great views and
                            accomodations.
                        </p>
                    </div>
                </div>
                <div className="button-container">
                    <Button
                        onClick={() => {
                            handleChangePage("experiences");
                        }}
                        children={"ALL EXPERIENCES"}
                    ></Button>
                </div>
            </div>
        </div>
    );
}

export default MoreExperiences;
