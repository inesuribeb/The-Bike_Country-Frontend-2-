import React from 'react';
import DropDown from "../../components/button/DropDown";
import './DayDetails.css'

const DayDetails = () => {
  const days = [
    {
      day: 'Day 1',
      title: 'Arrival',
      details: "Welcome to Bayonne! Arrive at Bayonne International Airport and transfer to your hotel. Evening walking tour of the historic city center, known for its rich Basque culture. Welcome dinner featuring local Basque cuisine and an orientation meeting with your tour guide."
    },
    {
      day: 'Day 2',
      title: 'From Bayonne to Pamplona',
      details: "Morning departure from Bayonne. Travel through the picturesque Pyrenees mountains. Stop at Saint-Jean-Pied-de-Port, a historic starting point of the Camino de Santiago. Afternoon arrival in Pamplona, famous for the Running of the Bulls. Evening tapas (pintxos) tour in the old town."
    },
    {
      day: 'Day 3',
      title: 'From Pamplona to Estella',
      details: "Explore Pamplona's historic center in the morning. Visit the Plaza del Castillo and Café Iruña. Journey to Puente la Reina to see the legendary medieval bridge. Arrive in Estella by late afternoon. Visit the Palace of the Kings of Navarra and the Church of San Pedro de la Rúa."
    },
    {
      day: 'Day 4',
      title: 'From Estella to Logroño',
      details: "Morning visit to the Monastery of Irache and its famous wine fountain. Travel through the wine region of La Rioja. Arrive in Logroño, the capital of La Rioja. Afternoon wine tasting session at a local bodega. Evening free to explore Calle del Laurel, famous for its tapas bars."
    },
    {
      day: 'Day 5',
      title: 'From Logroño to Viana',
      details: "Start with a visit to Logroño's central market. Drive through vineyards to reach the medieval town of Viana. Visit the ruins of the Church of San Pedro and learn about the history of César Borgia. Optional afternoon cooking class featuring traditional Navarrese cuisine."
    },
    {
      day: 'Day 6',
      title: 'From Viana to Navarra',
      details: "Final day exploring the heart of Navarra. Visit the Monastery of La Oliva, one of the best-preserved Cistercian monasteries in Spain. Stop at the Desert of the Bardenas Reales, a UNESCO Biosphere Reserve. Farewell dinner featuring local specialties and wine."
    }
  ];

  return (
    <div className="container-single-experience">
      <h1 className="title-single-experience">From France to Navarra</h1>
      <div className="space-y-4">
        {days.map((day, index) => (
          <DropDown 
            key={index}
            text={`${day.day} - ${day.title}`}
            className="travel-day-dropdown"
          >
            <div className="p-4">
              {day.details}
            </div>
          </DropDown>
        ))}
      </div>
    </div>
  );
};

export default DayDetails;