import ExploreMenu from "./components/ExploreMenu";
import MenuCard from "./components/MenuCard";
import foodImg from "/food.jpg";
import drinkImg from "/drink.jpg";
import { useNavigate } from "react-router-dom";

const MenuGrid = () => {
	const navigate = useNavigate();

	const handleClick = (sectionId: string) => () => {
		navigate("/menu#" + sectionId);
	};

	return (
		<section id="menu" className="menu-grid">
			<button className="un-btn" onClick={handleClick("drink")}>
				<MenuCard
					image={drinkImg}
					title="DRINKS MENU"
					content="We have the perfect drink for every occasion, come to us. From freshly blended coffees to the most unique cocktails, you will find such drinks unto us."
				/>
			</button>
			<button className="un-btn" onClick={handleClick("food")}>
				<MenuCard
					image={foodImg}
					title="FOOD MENU"
					content="With the finest ingredients available, we have prepared great dishes that ensure a delightful culinary escapade. We have a combination of the conventional and original to cater for your needs whether you are coming in for a cup of coffee or a well-prepared meal."
				/>
			</button>
			<ExploreMenu />
		</section>
	);
};

export default MenuGrid;
