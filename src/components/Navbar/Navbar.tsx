import { Container, useMediaQuery } from "fhf-react";
import NavLeft from "./components/NavLeft";
import NavRight from "./components/NavRight";
import logoSrc from "/logo.png";
import NavList from "./components/NavList";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({
	contactIsInTheViewPort,
}: {
	contactIsInTheViewPort: boolean;
}) {
	const isSmall = useMediaQuery("(max-width: 350px)");
	const location = useLocation();

	return (
		<nav style={{ top: contactIsInTheViewPort ? "-130px" : "0" }}>
			<Container
				style={{
					justifyContent:
						isSmall || location.pathname !== "/" ? "center" : "space-between",
				}}>
				{isSmall || location.pathname !== "/" ? <></> : <NavLeft />}
				<div
					className="logo-container"
					style={{
						flexGrow: location.pathname === "/" ? "0.3" : "0",
					}}>
					{location.pathname === "/" ? (
						<img src={logoSrc} alt="logo" />
					) : (
						<Link to={"/"}>
							<img src={logoSrc} alt="logo" />
						</Link>
					)}
					{isSmall && location.pathname === "/" && !contactIsInTheViewPort ? (
						<NavList />
					) : (
						<></>
					)}
				</div>
				{isSmall || location.pathname !== "/" ? <></> : <NavRight />}
			</Container>
		</nav>
	);
}
