import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import NavigateBeforeOutlinedIcon from "@mui/icons-material/NavigateBeforeOutlined";

import "./StoriesPreview.css";
function StoriesPreview({ onNavigate, onClose }) {
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
                    onClick={() => onNavigate("stories")}
                >
                    <h4>Stories</h4>
                    <NavigateNextOutlinedIcon className="arrow-button" />
                </button>
                <div className="preview">
                    <div className="experience-card-preview">
                        <img
                            src="https://content.rapha.cc/_next/image?url=https%3A%2F%2Fmedia.rapha.cc%2Fimage%2Fupload%2Fw_1600%2Cf_auto%2Cq_auto%2Cc_fill%2Car_16%3A9%2Cdpr_2.0%2Cr_0%2Ff_auto%2Fq_auto%3Abest%2Fv1728914199%2Flocation%2Fh224_location_PRO-TEAM-newzealand_04.jpg&w=3840&q=100"
                            alt="From France to Navarra"
                        />
                        <div className="experience-data">
                            <h4>From France to Navarra</h4>
                            <button onClick={() => onNavigate("stories")}>
                                View Storie
                            </button>
                        </div>
                    </div>
                    <div className="experience-card-preview">
                        <img
                            src="https://media.rapha.cc/rapha-cc/image/upload/c_fill,f_auto,q_auto,dpr_2.0,w_2000,ar_3:2/archive/amplience-image/ta_rapha_ellen_007"
                            alt="Cantabrian Mountain Trail"
                        />
                        <div className="experience-data">
                            <h4>Cantabrian Mountain Trail</h4>
                            <button onClick={() => onNavigate("stories")}>
                                View Storie
                            </button>
                        </div>
                    </div>
                    <div className="experience-card-preview">
                        <img
                            src="https://media.rapha.cc/image/upload/c_scale,h_2000/v1673029005/location/h123_location_PARK-CITY_prestige_19.jpg"
                            alt="Oiartzun Valley Mountain Bike Expedition"
                        />
                        <div className="experience-data">
                            <h4>Oiartzun Valley Mountain Bike Expedition</h4>
                            <button onClick={() => onNavigate("stories")}>
                                View Storie
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default StoriesPreview;
