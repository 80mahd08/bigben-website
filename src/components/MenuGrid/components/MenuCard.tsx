import { RespBackgImg } from "fhf-react";

const MenuCard = ({ image, title }: { image: string; title: string }) => {
	return (
		<RespBackgImg className="menu-card" url={image}>
			<div className="overlay">
				<h2>{title}</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
					consequatur modi tempore, harum voluptates natus ipsa officia atque
					maiores perferendis a voluptate vitae adipisci libero nam quos quaerat
					saepe. Facilis?
				</p>
			</div>
		</RespBackgImg>
	);
};

export default MenuCard;
