import "./Intro.css";

function Intro({ title, content, imageUrl, className, withFilter}) {
    return (
        <div
            className={`intro-section ${className || ""}`} // Combina clases dinámicamente
            style={{ backgroundImage: `url(${imageUrl})` }}
        >
          
            <h1 className="intro-title">{title}</h1>
                {withFilter && <div className="intro-overlay"></div>}
            <h2>{content}</h2>
           
            </div>

    );
}

export default Intro;
