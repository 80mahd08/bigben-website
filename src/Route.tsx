import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { useRef } from "react";
import useIsInViewport from "./hook/useIsInViewport";

export default function Route() {
	const contactRef = useRef(null);
	const isInTheViewPort = useIsInViewport(contactRef, "-115px");

	console.log(isInTheViewPort);

	return (
		<>
			<Navbar contactIsInTheViewPort={isInTheViewPort} />
			<Outlet context={contactRef} />
		</>
	);
}
