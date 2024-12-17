import ExperiencesPacks from './ExperiencesPacks'
import Details from './Details'
import NavBar from '../../components/navbar/NavBar'
import Intro from '../../components/sections/Intro'
import './Experiences.css';


function Experiences() {
    return (
        <>
            <header>
                <NavBar></NavBar>
            </header>
            <Intro
                title={"Experiences"}
                content={""}
                imageUrl={"https://enoughcycling.cc/wp-content/uploads/2022/04/ENOUGH-THETRAKA-DAY2-CHIARA-REDASCHI-43-scaled.jpg"}>
            </Intro>
            <main>
                <ExperiencesPacks></ExperiencesPacks>
                <Details></Details>
            </main>
        </>
    );
}

export default Experiences;

