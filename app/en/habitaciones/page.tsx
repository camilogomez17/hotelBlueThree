import type { Metadata } from "next";
import RoomsCatalog from "../../components/RoomsCatalog";
export const metadata: Metadata = { title: "Rooms and suites | Hotel BlueThree Chancay" };
export default function Page() { return <RoomsCatalog language="en" />; }
