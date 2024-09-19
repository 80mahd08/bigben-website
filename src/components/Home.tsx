import { Container, RespBackgImg } from "fhf-react";

import homeImg from "/baget-home.jpg";

export default function Home() {
	return (
		<RespBackgImg
			element="section"
			style={{ backgroundAttachment: "fixed" }}
			url={homeImg}
			className="home"
			id={"home"}>
			<Container>
				<div className="title">
					<h3>Welcome to our</h3>
					<h1>cafe and resto</h1>
				</div>
			</Container>
		</RespBackgImg>
	);
}
