export type GalleryCategory = "hotel" | "rooms" | "dining" | "amenities" | "events";

export type GalleryPhoto = {
  src: string;
  name: string;
  category: GalleryCategory;
};

type Locale = "es" | "en";
type CaptionedPhoto = [file: string, category: GalleryCategory, es: string, en: string];

const hotelPhotos: CaptionedPhoto[] = [
  ["rooms/blue-accent-bedroom-booking-775018748.jpg", "rooms", "Habitación con detalles azules", "Blue accent bedroom"],
  ["rooms/bright-bedroom-with-sofa-booking-775018756.jpg", "rooms", "Habitación luminosa con sofá", "Bright bedroom with sofa"],
  ["bathrooms/whirlpool-tub-and-glass-shower-booking-775018766.jpg", "rooms", "Tina de hidromasaje y ducha de vidrio", "Whirlpool tub and glass shower"],
  ["views/bedroom-balcony-overlooking-town-booking-775018775.jpg", "hotel", "Balcón de la habitación con vista a la ciudad", "Bedroom balcony overlooking town"],
  ["exterior/hotel-front-with-flags-booking-775018899.jpg", "hotel", "Fachada del hotel con banderas", "Hotel front with flags"],
  ["amenities/wardrobe-and-robe-booking-775019235.jpg", "amenities", "Armario y bata", "Wardrobe and robe"],
  ["bathrooms/jetted-tub-beside-shower-booking-775052551.jpg", "rooms", "Tina de hidromasaje junto a la ducha", "Jetted tub beside shower"],
  ["rooms/blue-bedroom-with-balcony-doors-booking-775052612.jpg", "rooms", "Habitación azul con puertas al balcón", "Blue bedroom with balcony doors"],
  ["rooms/blue-bedroom-with-sitting-area-booking-775052613.jpg", "rooms", "Habitación azul con zona de estar", "Blue bedroom with sitting area"],
  ["rooms/blue-bedroom-with-wood-slat-divider-booking-775052851.jpg", "rooms", "Habitación azul con separador de listones de madera", "Blue bedroom with wood slat divider"],
  ["rooms/blue-bedroom-facing-mirror-booking-775052852.jpg", "rooms", "Habitación azul frente al espejo", "Blue bedroom facing mirror"],
  ["amenities/mini-fridge-and-kettle-booking-775052853.jpg", "amenities", "Minibar y hervidor", "Mini-fridge and kettle"],
  ["bathrooms/double-mirror-vanity-and-shower-booking-775052854.jpg", "rooms", "Lavabo con doble espejo y ducha", "Double mirror vanity and shower"],
  ["bathrooms/vanity-through-doorway-booking-775052856.jpg", "rooms", "Lavabo visto desde la puerta", "Vanity through doorway"],
  ["rooms/blue-bedroom-from-doorway-booking-775054496.jpg", "rooms", "Habitación azul vista desde la entrada", "Blue bedroom from doorway"],
  ["rooms/blue-bedroom-with-desk-booking-775054497.jpg", "rooms", "Habitación azul con escritorio", "Blue bedroom with desk"],
  ["bathrooms/patterned-glass-shower-booking-775054559.jpg", "rooms", "Ducha con vidrio decorado", "Patterned glass shower"],
  ["rooms/twin-beds-beside-mirror-booking-775054618.jpg", "rooms", "Dos camas individuales junto al espejo", "Twin beds beside mirror"],
  ["rooms/blue-bed-and-shelving-booking-775054930.jpg", "rooms", "Cama azul y estantería", "Blue bed and shelving"],
  ["bathrooms/black-vanity-and-glass-shower-booking-775054938.jpg", "rooms", "Lavabo negro y ducha de vidrio", "Black vanity and glass shower"],
  ["amenities/wall-mounted-tv-and-air-conditioning-booking-775054942.jpg", "amenities", "Televisor de pared y aire acondicionado", "Wall mounted TV and air conditioning"],
  ["rooms/blue-bed-with-tufted-headboard-booking-775055014.jpg", "rooms", "Cama azul con cabecera capitoné", "Blue bed with tufted headboard"],
  ["amenities/wall-mounted-tv-and-wardrobe-booking-775055063.jpg", "amenities", "Televisor de pared y armario", "Wall mounted TV and wardrobe"],
  ["amenities/air-conditioner-remote-booking-775062536.jpg", "amenities", "Control del aire acondicionado", "Air conditioner remote"],
  ["dining/breakfast-tray-with-fruit-booking-775107386.jpg", "dining", "Bandeja de desayuno con fruta", "Breakfast tray with fruit"],
  ["events/empty-event-hall-booking-775108161.jpg", "events", "Salón de eventos vacío", "Empty event hall"],
  ["events/presentation-facing-screen-booking-775108829.jpg", "events", "Presentación frente a la pantalla", "Presentation facing screen"],
  ["events/meeting-with-u-shaped-tables-booking-775108831.jpg", "events", "Reunión con mesas en forma de U", "Meeting with U-shaped tables"],
  ["events/seminar-audience-booking-775108835.jpg", "events", "Público de un seminario", "Seminar audience"],
  ["events/conference-with-banquet-tables-booking-775108838.jpg", "events", "Conferencia con mesas de banquete", "Conference with banquet tables"],
  ["events/uniformed-group-in-event-hall-booking-775108869.jpg", "events", "Grupo uniformado en el salón de eventos", "Uniformed group in event hall"],
  ["dining/celebration-tray-with-balloon-booking-775109995.jpg", "dining", "Bandeja de celebración con globo", "Celebration tray with balloon"],
  ["dining/eggs-toast-and-orange-juice-booking-775110956.jpg", "dining", "Huevos, tostadas y jugo de naranja", "Eggs toast and orange juice"],
  ["views/town-plaza-panorama-booking-775114048.jpg", "hotel", "Vista panorámica de la plaza", "Town plaza panorama"],
  ["rooms/bedroom-wall-art-booking-775114051.jpg", "rooms", "Cuadro decorativo en la habitación", "Bedroom wall art"],
  ["views/balcony-railing-and-open-landscape-booking-775114177.jpg", "hotel", "Baranda del balcón y paisaje", "Balcony railing and open landscape"],
  ["bathrooms/whirlpool-tub-close-up-booking-775117379.jpg", "rooms", "Detalle de la tina de hidromasaje", "Whirlpool tub close up"],
  ["rooms/two-beds-with-blue-runners-booking-786986045.jpg", "rooms", "Dos camas con pieceras azules", "Two beds with blue runners"],
  ["rooms/blue-bedroom-with-seating-and-plants-booking-786986062.jpg", "rooms", "Habitación azul con asientos y plantas", "Blue bedroom with seating and plants"],
  ["bathrooms/round-tub-and-marble-wall-booking-794349690.jpg", "rooms", "Tina redonda y pared de mármol", "Round tub and marble wall"],
  ["rooms/window-side-banquette-and-table-booking-794349691.jpg", "rooms", "Banco y mesa junto a la ventana", "Window side banquette and table"],
  ["rooms/bedroom-with-ring-pendant-booking-794349692.jpg", "rooms", "Habitación con lámpara de aros", "Bedroom with ring pendant"],
  ["rooms/blue-bedroom-with-mirrored-wardrobe-booking-794349708.jpg", "rooms", "Habitación azul con armario de espejo", "Blue bedroom with mirrored wardrobe"],
  ["bathrooms/glass-shower-and-chrome-fixtures-booking-794349820.jpg", "rooms", "Ducha de vidrio y grifería cromada", "Glass shower and chrome fixtures"],
  ["rooms/orange-accent-bedroom-with-tv-tripadvisor-23-26-77-f9.jpg", "rooms", "Habitación con detalles naranjas y televisor", "Orange accent bedroom with TV"],
  ["rooms/orange-accent-bedroom-facing-bathroom-tripadvisor-23-26-77-fb.jpg", "rooms", "Habitación con detalles naranjas frente al baño", "Orange accent bedroom facing bathroom"],
  ["rooms/orange-accent-bed-side-view-tripadvisor-23-26-77-fe.jpg", "rooms", "Vista lateral de la cama con detalles naranjas", "Orange accent bed side view"],
  ["rooms/orange-accent-bedroom-with-table-tripadvisor-23-26-78-02.jpg", "rooms", "Habitación con detalles naranjas y mesa", "Orange accent bedroom with table"],
  ["rooms/orange-accent-bedroom-by-window-tripadvisor-23-26-78-05.jpg", "rooms", "Habitación con detalles naranjas junto a la ventana", "Orange accent bedroom by window"],
  ["rooms/orange-accent-bedroom-from-doorway-tripadvisor-23-26-78-07.jpg", "rooms", "Habitación con detalles naranjas vista desde la entrada", "Orange accent bedroom from doorway"],
  ["rooms/orange-accent-bed-and-nightstand-tripadvisor-23-26-78-09.jpg", "rooms", "Cama con detalles naranjas y mesa de noche", "Orange accent bed and nightstand"],
  ["rooms/orange-accent-bedroom-with-stools-tripadvisor-23-26-78-0c.jpg", "rooms", "Habitación con detalles naranjas y taburetes", "Orange accent bedroom with stools"],
  ["rooms/orange-pillows-and-second-bed-tripadvisor-23-26-78-10.jpg", "rooms", "Almohadas naranjas y segunda cama", "Orange pillows and second bed"],
  ["common-areas/wood-paneled-counter-and-stairs-tripadvisor-23-26-7a-25.jpg", "hotel", "Mostrador de madera y escaleras", "Wood paneled counter and stairs"],
  ["common-areas/illuminated-entry-corridor-tripadvisor-23-26-7a-27.jpg", "hotel", "Pasillo de entrada iluminado", "Illuminated entry corridor"],
  ["common-areas/illuminated-stairwell-tripadvisor-23-26-7a-28.jpg", "hotel", "Escalera iluminada", "Illuminated stairwell"],
  ["exterior/hotel-facade-from-below-tripadvisor-23-26-7b-b4.jpg", "hotel", "Fachada del hotel vista desde abajo", "Hotel facade from below"],
  ["rooms/orange-accent-bed-beside-window-tripadvisor-23-2b-2f-d1.jpg", "rooms", "Cama con detalles naranjas junto a la ventana", "Orange accent bed beside window"],
  ["exterior/hotel-facade-across-park-tripadvisor-23-4e-ab-b1.jpg", "hotel", "Fachada del hotel desde el parque", "Hotel facade across park"],
  ["rooms/bed-with-decorative-petal-arrangement-tripadvisor-23-7f-e9-57.jpg", "rooms", "Cama con decoración de pétalos", "Bed with decorative petal arrangement"],
  ["rooms/blue-bed-beside-balcony-tripadvisor-2a-96-9c-6a.jpg", "rooms", "Cama azul junto al balcón", "Blue bed beside balcony"],
  ["rooms/blue-bedroom-with-open-wardrobe-tripadvisor-2a-96-9d-e5.jpg", "rooms", "Habitación azul con armario abierto", "Blue bedroom with open wardrobe"],
  ["rooms/blue-bed-by-floor-to-ceiling-windows-tripadvisor-2a-96-9d-ec.jpg", "rooms", "Cama azul junto a ventanales", "Blue bed by floor-to-ceiling windows"],
  ["bathrooms/whirlpool-tub-and-shower-overview-tripadvisor-2a-b7-66-56.jpg", "rooms", "Tina de hidromasaje y ducha", "Whirlpool tub and shower overview"],
  ["rooms/blue-bedroom-at-sunset-tripadvisor-2b-cd-df-3d.jpg", "rooms", "Habitación azul al atardecer", "Blue bedroom at sunset"],
  ["rooms/blue-bed-under-ring-pendant-tripadvisor-2b-cd-df-42.jpg", "rooms", "Cama azul bajo una lámpara de aros", "Blue bed under ring pendant"],
  ["rooms/blue-bedroom-with-illuminated-wall-tripadvisor-2e-4a-8e-39.jpg", "rooms", "Habitación azul con pared iluminada", "Blue bedroom with illuminated wall"],
  ["promotional/hotel-and-chancay-promo-collage-tripadvisor-2e-5d-cd-35.jpg", "hotel", "Collage del hotel y Chancay", "Hotel and Chancay promo collage"],
];

const legacyPhotos: CaptionedPhoto[] = [
  ["amenities/Amenities.jpeg", "amenities", "Instalaciones", "Hotel facilities"],
  ["dining/FoodMenu.jpeg", "dining", "Menú de la cafetería", "Café menu"],
  ["events/CorporateEvents.jpeg", "events", "Eventos corporativos", "Corporate events"],
  ["events/LoveorAnniversaryOrBirthdayDecorationServices.jpeg", "events", "Celebraciones", "Celebrations"],
];

export function getGallery(locale: Locale, rooms: { src: string; name: string }[]): GalleryPhoto[] {
  const photos = [...hotelPhotos, ...legacyPhotos].map(([file, category, es, en]) => ({
    src: `/organized_photos/${file}`,
    category,
    name: locale === "es" ? es : en,
  }));
  return [...photos, ...rooms.map(({ src, name }): GalleryPhoto => ({ src, name, category: "rooms" }))];
}
