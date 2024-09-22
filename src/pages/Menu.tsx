import MenuDisplay from "./components/MenuDisplay";
import { Container } from "fhf-react";
import menu from "./menu.json";

const imagePaths: Record<string, string> = {
	cafe: "/menu_imgs/cafe.jpg",
	boissons: "/menu_imgs/boissons.jpg",
	thé: "/menu_imgs/thé.jpg",
	jus: "/menu_imgs/jus.jpg",
	smoothie: "/menu_imgs/smoothie.jpg",
	granette: "/menu_imgs/granette.jpg",
	coktaile: "/menu_imgs/coktaile.jpg",
	chocolatChaud: "/menu_imgs/chocolatChaud.jpg",
	frappuccino: "/menu_imgs/frappuccino.jpg",
	milkshake: "/menu_imgs/milkshake.jpg",
	mojito: "/menu_imgs/mojito.jpg",
	glace: "/menu_imgs/glace.jpg",
	chocolatGlace: "/menu_imgs/chocolatGlace.jpg",
	baguetteFarcie: "/menu_imgs/baguetteFarcie.jpg",
	makloube: "/menu_imgs/makloube.jpg",
	cornet: "/menu_imgs/cornet.jpg",
	panozzo: "/menu_imgs/panozzo.jpg",
	hamburger: "/menu_imgs/hamburger.jpg",
	pizza: "/menu_imgs/pizza.jpg",
	fruitDeMer: "/menu_imgs/fruitDeMer.jpg",
	ojja: "/menu_imgs/ojja.jpg",
	salade: "/menu_imgs/salade.jpg",
	boeuf: "/menu_imgs/boeuf.jpg",
	agneau: "/menu_imgs/agneau.jpg",
	platsAPartager: "/menu_imgs/platsAPartager.jpg",
	supplement: "/menu_imgs/supplement.jpg",
	autresPlats: "/menu_imgs/autresPlats.jpg",
};

type MenuItem = {
	name: string;
	price: number;
};

interface Menu {
	drink: Record<string, MenuItem[]>;
	food: Record<string, MenuItem[]>;
}

export default function Menu() {
	return (
		<div className="menu-page">
			<Container>
				<section id="drink">
					<div className="title">
						<h1>Drinks: </h1>
					</div>
					<div className="content">
						{Object.entries(menu.drink).map(([key, value], index) => (
							<MenuDisplay
								key={key}
								title={key}
								imgSrc={
									imagePaths[key as keyof typeof imagePaths] || "/default.jpg"
								}
								cont={value}
								direction={index % 2 === 0 ? "row" : "row-reverse"} // Use index for direction logic
							/>
						))}
					</div>
				</section>

				<section id="food">
					<div className="title">
						<h1>Food: </h1>
					</div>
					<div className="content">
						{Object.entries(menu.food).map(([key, value], index) => (
							<MenuDisplay
								key={key}
								title={key}
								imgSrc={
									imagePaths[key as keyof typeof imagePaths] || "/default.jpg"
								}
								cont={value}
								direction={index % 2 === 0 ? "row" : "row-reverse"} // Use index for direction logic
							/>
						))}
					</div>
				</section>
			</Container>
		</div>
	);
}
