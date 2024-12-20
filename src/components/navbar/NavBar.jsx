import "./NavBar.css";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import Button from "../button/Button";
import React, { useState, useEffect, useContext } from "react";
import { PageContext } from "../../utils/js/context/PageContext.js";
import { obtenerPacks } from "../../utils/js/apiCallController.js";
function NavBar({ changeBackgroundColor = false }) {
    const maxHeight = 200;
    const minHeight = 100;
    const disableDelay = 300; // milliseconds

    const [navbarStyle, setNavbarStyle] = useState({
        height: maxHeight,
        background: `rgba(0, 0, 0, 0.5)`,
        "border-bottom": "2px solid rgba(255, 255, 255, 1)",
    });
    const [navbarClass, setNavbarClass] = useState(""); // Clase inicial

    const [isExperiencesVisible, setIsExperiencesVisible] = useState(false);
    const { setPage } = useContext(PageContext);

    const handleScroll = () => {
        const viewportHeight = window.innerHeight;
        const threshold = viewportHeight * 0.9;
        const position = window.scrollY;
        const newHeight = Math.max(minHeight, maxHeight - position);
        const heightDifference = maxHeight - minHeight;

        const newOpacity =
            1 - ((newHeight - minHeight) / heightDifference) * (1 - 0.5);

        let newBackgroundColor = `rgba(0, 0, 0, ${newOpacity})`;
        let fontColor = "rgba(255, 255, 255)";
        if (changeBackgroundColor) {
            if (position + minHeight > threshold * 4) {
                newBackgroundColor = `rgba(255, 255, 0, ${newOpacity})`;
                fontColor = "rgba(0, 0, 0)";
                setNavbarClass("third-color");
            } else if (position + minHeight > threshold * 3) {
                newBackgroundColor = `rgba(0, 0, 0, ${newOpacity})`;
                fontColor = "rgba(255, 255, 255)";
                setNavbarClass("first-color");
            } else if (position + minHeight > threshold * 2) {
                newBackgroundColor = `rgba(255, 255, 255, ${newOpacity})`;
                fontColor = "rgba(0, 0, 0)";
                setNavbarClass("second-color");
            } else if (position + minHeight > threshold) {
                newBackgroundColor = `rgba(0, 0, 0, ${newOpacity})`;
                fontColor = "rgba(255, 255, 255)";
                setNavbarClass("first-color");
            }
        }
        setNavbarStyle({
            height: newHeight,
            background: newBackgroundColor,
            "border-bottom": `2px solid ${fontColor}`,
        });
    };
    const [experiences, setExperiences] = useState([]);
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        async function loadPacks() {
            try {
                const data = await obtenerPacks();
                setExperiences(data);
            } catch (err) {
                console.error(err);
            }
        }

        loadPacks();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    let hoverTimeout;

    const handleMouseEnter = () => {
        if (hoverTimeout) clearTimeout(hoverTimeout);
        setIsExperiencesVisible(true);
    };

    const handleMouseLeave = () => {
        hoverTimeout = setTimeout(() => {
            setIsExperiencesVisible(false);
        }, disableDelay);
    };

    const handleChangePage = (pageName) => {
        setPage(pageName);
    };

    const [isActive, setIsActive] = useState(false);

    const handleToggle = () => {
        setIsActive((isActive) => !isActive);
    };
    return (
        <>
            <div className="navbar" style={navbarStyle}>
                <nav>
                    <div className="left-bar">
                        <a onClick={() => handleChangePage("home")}>
                            <img src="/images/logotemporal.png" alt="Logo" />
                        </a>
                        <ul>
                            <li>
                                <a className={navbarClass}>About Us</a>
                            </li>
                            <li>
                                <a className={navbarClass}>Basque Country</a>
                            </li>
                            <li>
                                <a
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    onClick={() =>
                                        handleChangePage("experiences")
                                    }
                                    className={navbarClass}
                                >
                                    Experiencies
                                </a>
                                <div
                                    id="experiences-box"
                                    style={{
                                        display: isExperiencesVisible
                                            ? "flex"
                                            : "none",
                                    }}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    {experiences.map((experience) => (
                                        <div
                                            className="experience-in-box"
                                            key={experience.pack_id}
                                        >
                                            <a
                                                onClick={() =>
                                                    handleChangePage(
                                                        "singleExperience"
                                                    )
                                                }
                                                className={navbarClass}
                                            >
                                                {experience.name}
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </li>
                            <li>
                                <a
                                    onClick={() => handleChangePage("stories")}
                                    className={navbarClass}
                                >
                                    Stories
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={() => handleChangePage("contact")}
                                    className={navbarClass}
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="right-bar">
                        <ul>
                            <li>
                                <a
                                    onClick={() =>
                                        handleChangePage("clientProfile")
                                    }
                                    className={navbarClass}
                                >
                                    <PersonOutlineOutlinedIcon />
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={() =>
                                        handleChangePage("favoritesPage")
                                    }
                                    className={navbarClass}
                                >
                                    <FavoriteBorderOutlinedIcon />
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div></div>
            </div>
            <div className="navbar-responsive">
                <nav>
                    <div className="left-bar">
                        <DragHandleIcon fontSize="large" />
                    </div>
                    <div className="center-bar">
                        <Button onClick={() => handleChangePage("home")}>
                            <img src="/images/logotemporal.png" alt="Logo" />
                        </Button>
                    </div>
                    <div className="right-bar">
                        <ul>
                            <li>
                                <Button
                                    onClick={() =>
                                        handleChangePage("clientProfile")
                                    }
                                    className={navbarClass}
                                >
                                    <PersonOutlineOutlinedIcon />
                                </Button>
                            </li>
                            <li>
                                <Button
                                    onClick={() =>
                                        handleChangePage("favoritesPage")
                                    }
                                    className={navbarClass}
                                >
                                    <FavoriteBorderOutlinedIcon />
                                </Button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div
                className={
                    isActive
                        ? "navbar-menu-back-close active-menu"
                        : "navbar-menu-back-close"
                }
                onClick={handleToggle}
            ></div>
            <div
                className={
                    isActive
                        ? "navbar-responsive-menu active-menu"
                        : "navbar-responsive-menu"
                }
            >
                <nav>
                    <ul>
                        <li>
                            <Button>
                                About Us
                                <NavigateNextOutlinedIcon fontSize="large" />
                            </Button>
                        </li>
                        <li>
                            <Button>
                                Basque Country
                                <NavigateNextOutlinedIcon fontSize="large" />
                            </Button>
                        </li>
                        <li>
                            <Button
                                onClick={() => handleChangePage("experiences")}
                            >
                                Experiencies
                                <NavigateNextOutlinedIcon fontSize="large" />
                            </Button>
                        </li>
                        <li>
                            <Button onClick={() => handleChangePage("stories")}>
                                Stories
                                <NavigateNextOutlinedIcon fontSize="large" />
                            </Button>
                        </li>
                        <li>
                            <Button onClick={() => handleChangePage("contact")}>
                                Contact
                                <NavigateNextOutlinedIcon fontSize="large" />
                            </Button>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="navbar-responsive-space">
                <Button
                    className={isActive ? "active-menu" : ""}
                    onClick={handleToggle}
                >
                    <DragHandleIcon fontSize="large" />
                </Button>
            </div>
        </>
    );
}

export default NavBar;
