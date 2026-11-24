import type { Metadata } from "next";
import RoomsCatalog from "../../components/RoomsCatalog";
export const metadata: Metadata = { title: "Rooms and Suites in Chancay | Hotel BlueThree", description: "Explore rooms and suites at BlueThree in Chancay, Peru. Discover options with jacuzzis, balconies and views, and inquire about availability and rates." };
export default function Page() { return <RoomsCatalog language="en" />; }
