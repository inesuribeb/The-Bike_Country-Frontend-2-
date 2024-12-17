import DropDown from "../../components/button/DropDown";

function DetailsDropDown({ text, description }) {
    return (
        <DropDown 
            text={
                <div className="details-item__header">
                    <p className="details-item__text">{text}</p>
                </div>
            }
        >
            <div className="details-item__description">
                <p>{description}</p>
            </div>
        </DropDown>
    );
}

export default DetailsDropDown;