import NavBar from '../../components/navbar/NavBar'
import InternalNav from './InternalNav'
import PersonalData from './PersonalData'
import Bookings from './Bookings';
import './ClientProfile.css'
import { useState, useContext } from 'react';
import { logout } from '../../utils/js/apiCallController';
import { PageContext } from "../../utils/js/context/PageContext";


function ClientProfile() {
    const { setPage } = useContext(PageContext);

    const handleLogout = async () => {
        try {
            await logout();
            setPage('home');
        } catch (error) {
            console.error('Error during logout:', error);
            alert('Error al cerrar sesión');
        }
    };

    const menuItems = [
        {
            id: 1,
            label: 'Personal Data',
            onClick: () => handleMenus('personalData'),
            // icon: '👤',
            active: true
        },
        {
            id: 2,
            label: 'My bookings',
            onClick: () => handleMenus('myBookings'),
            // icon: '📅',
            active: false
        },
        {
            id: 3,
            label: 'LOG OUT',
            onClick: handleLogout,
            // icon: '📅',
            active: false
        }
    ];

    const [currentMenu, setCurrentMenu] = useState("personalData");
    const menus = { personalData: PersonalData, myBookings: Bookings };
    const MenuComponent = menus[currentMenu];

    function handleMenus(menuName) {
        setCurrentMenu(menuName);
    }

    return (
        <>
            <header>
                <NavBar></NavBar>
            </header>
            <main className="client-main-profile">
                <div className="membership">
                    <h1 className="membership-title">MEMBERSHIP</h1>
                </div>
                <div className="main-content">
                    <div className="nav-section">
                        <InternalNav menuItems={menuItems} />
                    </div>
                    <div className="content-section">
                        <MenuComponent />
                    </div>
                </div>
            </main>
        </>
    );
}

export default ClientProfile;