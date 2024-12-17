import NavBar from "../../components/navbar/NavBar";
import Sections from "../../components/sections/Sections";
function Home() {
    return (
        <>
            <header>
                <NavBar changeBackgroundColor={true}></NavBar>
            </header>
            <main>
                <Sections></Sections>
            </main>
        </>
    );
}
export default Home;
