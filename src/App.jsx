import { useState, useEffect } from "react";
import { PageContext } from "./utils/js/context/PageContext.js";
import "./App.css";
import Home from "./pages/home/Home";
import Experiences from "./pages/experiences/Experiences";
import Contact from "./pages/contact/Contact";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ClientProfile from "./pages/clientProfile/ClientProfile";
import Stories from "./pages/stories/Stories";
import FavoritesPage from "./pages/clientProfile/FavoritesPage";
import SingleExperience from "./pages/single-experience/SingleExperience.jsx";
import {
    obtenerPacks,
    workerLogin,
    clientLogin,
    getMyProfile,
} from "./utils/js/apiCallController.js";

function App() {
    const [count, setCount] = useState(0);
    const [page, setPage] = useState("home");
    const [packs, setPacks] = useState(null);
    //Pruebas de la api
    useEffect(() => {
        async function getClientProfile() {
            const data = await getMyProfile();
            console.log("Perfil obtenido:", data);
        }
        getClientProfile();
    }, []);
    useEffect(() => {
        console.log("Page cambiada a:", page);
        window.scrollTo({
            top: 0,
        });
    }, [page]);
    const components = {
        home: Home,
        experiences: Experiences,
        contact: Contact,
        auth: Login,
        register: Register,
        clientProfile: ClientProfile,
        stories: Stories,
        favoritesPage: FavoritesPage,
        singleExperience: SingleExperience,
    };
    const Component = components[page];
    return (
        <PageContext.Provider value={{ page, setPage }}>
            <Component />
        </PageContext.Provider>
    );
}

export default App;
