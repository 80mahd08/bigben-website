import { Container, RespImg } from "fhf-react";
import iconFav from "/fav.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { useOutletContext } from "react-router-dom";

export default function Contact() {
	const contactRef: React.MutableRefObject<null> = useOutletContext();
	return (
		<section id="contact" ref={contactRef}>
			<Container>
				<div className="img-container">
					<RespImg src={iconFav} alt="icon" />
				</div>
				<div className="contact-navigation">
					<a href="#home">Home</a>
					<a href="#about">About</a>
					<a href="#menu">Menu</a>
				</div>
				<div className="icons">
					<a href="https://www.facebook.com/profile.php?id=61562767896049">
						<FontAwesomeIcon icon={faFacebook} />
						<span style={{ display: "none" }}>facebook icon</span>
					</a>

					<a href="https://www.instagram.com/bigbengafsa/">
						<FontAwesomeIcon icon={faInstagram} />
						<span style={{ display: "none" }}>insta icon</span>
					</a>
					<button title="phone hover icon" className="phone">
						<FontAwesomeIcon icon={faPhone} />
						<span style={{ display: "none" }}>phone icon</span>
					</button>
				</div>
			</Container>
		</section>
	);
}
