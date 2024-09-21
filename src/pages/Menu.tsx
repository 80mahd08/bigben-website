import MenuDisplay from "./components/MenuDisplay";
import { Container } from "fhf-react";
import menu from "./menu.json";

const imagePaths: Record<string, string> = {
	cafe: "/menu imgs/cafe.jpg",
	boissons: "/menu imgs/boissons.jpg",
	thé: "/menu imgs/thé.jpg",
	jus: "/menu imgs/jus.jpg",
	smoothie: "/menu imgs/smoothie.jpg",
	granette: "/menu imgs/granette.jpg",
	coktaile: "/menu imgs/coktaile.jpg",
	chocolatChaud: "/menu imgs/chocolatChaud.jpg",
	frappuccino: "/menu imgs/frappuccino.jpg",
	milkshake: "/menu imgs/milkshake.jpg",
	glace: "/menu imgs/glace.jpg",
	chocolatGlace: "/menu imgs/chocolatGlace.jpg",
	baguetteFarcie: "/menu imgs/baguetteFarcie.jpg",
	makloube: "/menu imgs/makloub.jpg",
	cornet: "/menu imgs/cornet.jpg",
	panozzo: "/menu imgs/panozzo.jpg",
	hamburger: "/menu imgs/hamburger.jpg",
	pizza: "/menu imgs/pizza.jpg",
	fruitDeMer: "/menu imgs/fruitDeMer.jpg",
	ojja: "/menu imgs/ojja.jpg",
	salade: "/menu imgs/salade.jpg",
	boeuf: "/menu imgs/boeuf.jpg",
	agneau: "/menu imgs/agneau.jpg",
	platsAPartager: "/menu imgs/platsAPartager.jpg",
	supplement: "/menu imgs/supplement.jpg",
	autresPlats: "/menu imgs/autresPlats.jpg",
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
