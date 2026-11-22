export const whatsapp = "https://wa.me/message/IPFK3E5CKTNGK1";
export const tripAdvisor = "https://www.tripadvisor.com/Hotel_Review-g2336594-d24005682-Reviews-Hotel_BlueThree_Chancay-Chancay_Lima_Region.html";
export const rooms = [
  {
    "src": "/StandardRoom.jpeg",
    "name": "Chambre standard",
    "description": "Renseignez-vous sur l’agencement, la capacité et les services inclus."
  },
  {
    "src": "/JuniorSuite.jpeg",
    "name": "Suite junior",
    "description": "Demandez des informations sur les équipements et la disponibilité."
  },
  {
    "src": "/DeluxeJuniorSuite.jpeg",
    "name": "Junior suite deluxe",
    "description": "Renseignez-vous sur les détails et le tarif applicable."
  },
  {
    "src": "/DeluxeSuiteTwoBed.jpeg",
    "name": "Suite deluxe avec deux lits",
    "description": "Renseignez-vous sur la capacité et les conditions de réservation."
  },
  {
    "src": "/DoubleBedRoomJacuzziBalconyPanoramicView.jpeg",
    "name": "Chambre double avec jacuzzi, balcon et vue panoramique",
    "description": "Confirmez les caractéristiques de la chambre avant de réserver."
  },
  {
    "src": "/GardenViewRoomWithJacuzzi.jpeg",
    "name": "Chambre avec jacuzzi et vue sur le jardin",
    "description": "Vérifiez la disponibilité et les conditions d’utilisation du jacuzzi."
  },
  {
    "src": "/JacuzziBalconyGardenViewSuite.jpeg",
    "name": "Suite avec jacuzzi, balcon et vue sur le jardin",
    "description": "Renseignez-vous sur les services inclus."
  },
  {
    "src": "/JacuzziBalconyRoomPanoramicView.jpeg",
    "name": "Chambre avec jacuzzi, balcon et vue panoramique",
    "description": "Confirmez la catégorie et le tarif auprès de la réception."
  },
  {
    "src": "/JacuzziRoomGardenView.jpeg",
    "name": "Chambre avec jacuzzi et vue sur le jardin",
    "description": "Renseignez-vous sur les options disponibles à vos dates."
  }
];
export const gallery = [{src:"/Amenities.jpeg",name:"Instalaciones"},{src:"/FoodMenu.jpeg",name:"Restauration"},{src:"/CorporateEvents.jpeg",name:"Événements professionnels"},{src:"/LoveorAnniversaryOrBirthdayDecorationServices.jpeg",name:"Celebraciones"},...rooms.map(room=>({src:room.src,name:room.name}))];
