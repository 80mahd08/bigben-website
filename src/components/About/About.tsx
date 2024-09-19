import { Container } from "fhf-react";
import AboutLeft from "./components/AboutLeft";
import AboutRight from "./components/AboutRight";

export default function About() {
	return (
		<section id="about">
			<Container>
				<AboutLeft />
				<AboutRight />
			</Container>
		</section>
	);
}
