import Button from "../button/Button";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
function MoreAboutUs() {
    return (
        <div className="more-about-us-section">
            <div className="top-div">
                <h5>· About Us</h5>
            </div>
            <div id="first-div">
                <div id="third-div">
                    <h3 id="travel">TRAVEL</h3>
                    <h3 id="consciously">CONSCIOUSLY</h3>
                    <p>
                        We believe travel is worth taking time over; that a
                        great holiday means getting under the skin of a place,
                        meeting its people, indulging in its culture and
                        understanding its history and customs.
                    </p>

                    <Button
                        onClick={() => {}}
                        children={"Know more about us --->"}
                    >
                        Know more about us
                        <TrendingFlatIcon />
                    </Button>
                </div>
                <div id="second-div">
                    <img
                        src="https://cdn.sanity.io/images/k15yl91v/production/e5f2c3dfe0ee59e1293bfcb2de12ed753841a06f-1024x1024.jpg?w=1440&q=75&fit=max&auto=format"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
}

export default MoreAboutUs;
