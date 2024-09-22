import { RespBackgImg } from "fhf-react";

interface MenuCardProps {
	image: string;
	title: string;
	content: string;
}

const MenuCard = ({ image, title, content }: MenuCardProps) => {
	return (
		<RespBackgImg className="menu-card" url={image}>
			<div className="overlay">
				<h2>{title}</h2>
				<p>{content}</p>
			</div>
		</RespBackgImg>
	);
};

export default MenuCard;
