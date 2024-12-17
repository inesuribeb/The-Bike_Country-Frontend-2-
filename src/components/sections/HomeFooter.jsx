import Button from "../button/Button";
import { PageContext } from "../../utils/js/context/PageContext.js";
import { useContext } from "react";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
function HomeFooter() {
    const { setPage } = useContext(PageContext);
    const handleChangePage = (pageName) => {
        setPage(pageName);
    };
    return (
        <footer className="home-footer">
            <div className="create-contact">
                <div className="become-member">
                    <h3 id="become">BECOME</h3>
                    <h3 id="member">A MEMBER</h3>
                    <Button
                        onClick={() => {
                            handleChangePage("clientProfile");
                        }}
                        children={"CREATE ACOUNT --->"}
                    >
                        CREATE ACOUNT
                        <TrendingFlatIcon />
                    </Button>
                </div>
                <div className="how-help">
                    <h3 id="how-can">HOW CAN</h3>
                    <h3 id="help">WE HELP ?</h3>
                    <Button
                        onClick={() => {
                            handleChangePage("contact");
                        }}
                        children={"CONTACT US --->"}
                    >
                        CONTACT US
                        <TrendingFlatIcon />
                    </Button>
                </div>
            </div>
            <div className="join-us">
                <h6>JOIN US ONLINE</h6>
                <div className="social-box">
                    <img src="images/instagram.png" alt="" />
                    <img src="images/facebook.png" alt="" />
                    <img src="images/gorjeo.png" alt="" />
                    <img src="images/youtube.png" alt="" />
                </div>
            </div>
            <div className="rights-reserved">
                <p>&copy; 2024 The Bike Country. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default HomeFooter;
