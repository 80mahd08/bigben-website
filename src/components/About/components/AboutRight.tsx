import { RespImg } from "fhf-react";
import aboutImgRightTop from "/about-img-right-top.jpg";

export default function AboutRight() {
	return (
		<div className="about-right">
			<RespImg alt="photo of the resto" src={aboutImgRightTop} />
		</div>
	);
}
