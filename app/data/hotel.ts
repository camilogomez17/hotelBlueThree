export const whatsapp = "https://wa.me/message/IPFK3E5CKTNGK1";
export const tripAdvisor = "https://www.tripadvisor.com/Hotel_Review-g2336594-d24005682-Reviews-Hotel_BlueThree_Chancay-Chancay_Lima_Region.html";
export const rooms = [
  {
    "src": "/StandardRoom.jpeg",
    "name": "Habitación estándar",
    "description": "Consulta la distribución, ocupación y servicios incluidos."
  },
  {
    "src": "/JuniorSuite.jpeg",
    "name": "Junior suite",
    "description": "Solicita información sobre características y disponibilidad."
  },
  {
    "src": "/DeluxeJuniorSuite.jpeg",
    "name": "Junior suite deluxe",
    "description": "Consulta los detalles y la tarifa correspondiente."
  },
  {
    "src": "/DeluxeSuiteTwoBed.jpeg",
    "name": "Suite deluxe con dos camas",
    "description": "Consulta la capacidad y las condiciones de reserva."
  },
  {
    "src": "/DoubleBedRoomJacuzziBalconyPanoramicView.jpeg",
    "name": "Habitación doble con jacuzzi, balcón y vista panorámica",
    "description": "Confirma las características de la habitación antes de reservar."
  },
  {
    "src": "/GardenViewRoomWithJacuzzi.jpeg",
    "name": "Habitación con jacuzzi y vista al jardín",
    "description": "Consulta disponibilidad y condiciones de uso del jacuzzi."
  },
  {
    "src": "/JacuzziBalconyGardenViewSuite.jpeg",
    "name": "Suite con jacuzzi, balcón y vista al jardín",
    "description": "Solicita información sobre servicios incluidos."
  },
  {
    "src": "/JacuzziBalconyRoomPanoramicView.jpeg",
    "name": "Habitación con jacuzzi, balcón y vista panorámica",
    "description": "Confirma categoría y tarifa con recepción."
  },
  {
    "src": "/JacuzziRoomGardenView.jpeg",
    "name": "Habitación con jacuzzi y vista al jardín",
    "description": "Consulta las opciones disponibles para tu fecha."
  }
];
export const gallery = [{src:"/Amenities.jpeg",name:"Instalaciones"},{src:"/FoodMenu.jpeg",name:"Gastronomía"},{src:"/CorporateEvents.jpeg",name:"Eventos corporativos"},{src:"/LoveorAnniversaryOrBirthdayDecorationServices.jpeg",name:"Celebraciones"},...rooms.map(room=>({src:room.src,name:room.name}))];
