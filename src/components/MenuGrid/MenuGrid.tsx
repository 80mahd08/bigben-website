import ExploreMenu from "./components/ExploreMenu";
import MenuCard from "./components/MenuCard";
import foodImg from "/food.jpg";
import drinkImg from "/drink.jpg";
import { Link } from "react-router-dom";

const MenuGrid = () => {
	return (
		<section id="menu" className="menu-grid">
			<Link to="/menu#drink">
				<MenuCard image={drinkImg} title="DRINKS MENU" />
			</Link>
			<Link to="/menu#food">
				<MenuCard image={foodImg} title="FOOD MENU" />
			</Link>
			<ExploreMenu />
		</section>
	);
};

export default MenuGrid;
