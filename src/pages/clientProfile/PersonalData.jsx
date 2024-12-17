import React, { useState, useEffect,useContext } from 'react';
import { getMyProfile } from '../../utils/js/apiCallController'
import { PageContext } from "../../utils/js/context/PageContext.js";
import EditPersonalData from './EditPersonalData'
import './PersonalData.css';


function PersonalData() {
    const [client, setClient] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isEditing, setIsEditing] = useState(false); //formulario de edit
    const { setPage } = useContext(PageContext);
  
    const handlePage = (pageName) => {
      setPage(pageName)
    };
    useEffect(() => {
        async function loadProfile() {
            try {
                const data = await getMyProfile();
                setClient(data);
                setLoading(false);
            } catch (err) {
                setError('Error loading profile data');
                setLoading(false);
                handlePage("auth")
            }
        }

        loadProfile();
    }, []);

    const handleUpdateSuccess = (updatedData) => {
        const formattedData = {
            ...updatedData,
            country: updatedData.country || client.country 
        };
        setClient(formattedData);
        setIsEditing(false);
    };


    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (!client) return <div>No client data available</div>;

    return (
        <div className='content-data'>
            <div className='hello'>
                <div className='color' />
                <h3>{client.name} {client.surname}</h3>
            </div>
            {!isEditing ? (
                <>
                    <div className='data-info'>
                        <p>{client.name}</p>
                        <p>{client.surname}</p>
                        <p>{client.email}</p>
                        <p>{client.country?.prefix} {client.phone}</p> 
                        <p>{client.dni}</p>
                        <p>{client.address}</p>
                        <p>{client.country?.name}</p> 
                    </div>
                    <button onClick={() => setIsEditing(true)}>Edit Profile</button>
                </>
            ) : (
                <EditPersonalData 
                    client={client}
                    onSuccess={handleUpdateSuccess}
                    onCancel={() => setIsEditing(false)}
                />
            )}
        </div>
    );
}

export default PersonalData;