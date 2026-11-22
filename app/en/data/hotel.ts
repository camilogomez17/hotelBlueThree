export const whatsapp = "https://wa.me/message/IPFK3E5CKTNGK1";
export const tripAdvisor = "https://www.tripadvisor.com/Hotel_Review-g2336594-d24005682-Reviews-Hotel_BlueThree_Chancay-Chancay_Lima_Region.html";
export const rooms = [
  {
    "src": "/StandardRoom.jpeg",
    "name": "Standard room",
    "description": "Ask about the layout, occupancy and included amenities."
  },
  {
    "src": "/JuniorSuite.jpeg",
    "name": "Junior suite",
    "description": "Request details about features and availability."
  },
  {
    "src": "/DeluxeJuniorSuite.jpeg",
    "name": "Junior suite deluxe",
    "description": "Ask about the details and applicable rate."
  },
  {
    "src": "/DeluxeSuiteTwoBed.jpeg",
    "name": "Deluxe suite with two beds",
    "description": "Ask about occupancy and booking conditions."
  },
  {
    "src": "/DoubleBedRoomJacuzziBalconyPanoramicView.jpeg",
    "name": "Double room with jacuzzi, balcony and panoramic view",
    "description": "Confirm the room features before booking."
  },
  {
    "src": "/GardenViewRoomWithJacuzzi.jpeg",
    "name": "Room with jacuzzi and garden view",
    "description": "Check availability and jacuzzi usage conditions."
  },
  {
    "src": "/JacuzziBalconyGardenViewSuite.jpeg",
    "name": "Suite with jacuzzi, balcony and garden view",
    "description": "Ask about included amenities."
  },
  {
    "src": "/JacuzziBalconyRoomPanoramicView.jpeg",
    "name": "Room with jacuzzi, balcony and panoramic view",
    "description": "Confirm the category and rate with reception."
  },
  {
    "src": "/JacuzziRoomGardenView.jpeg",
    "name": "Room with jacuzzi and garden view",
    "description": "Ask about options available for your dates."
  }
];
export const gallery = [{src:"/Amenities.jpeg",name:"Instalaciones"},{src:"/FoodMenu.jpeg",name:"Dining"},{src:"/CorporateEvents.jpeg",name:"Corporate events"},{src:"/LoveorAnniversaryOrBirthdayDecorationServices.jpeg",name:"Celebraciones"},...rooms.map(room=>({src:room.src,name:room.name}))];
