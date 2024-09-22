// src/imagePaths.ts
const imagePaths: Record<string, string> = {
	cafe: new URL("/menu_imgs/cafe.jpg", import.meta.url).href,
	boissons: new URL("/menu_imgs/boissons.jpg", import.meta.url).href,
	thé: new URL("/menu_imgs/thé.jpg", import.meta.url).href,
	jus: new URL("/menu_imgs/jus.jpg", import.meta.url).href,
	smoothie: new URL("/menu_imgs/smoothie.jpg", import.meta.url).href,
	granette: new URL("/menu_imgs/granette.jpg", import.meta.url).href,
	cocktails: new URL("/menu_imgs/cocktails.jpg", import.meta.url).href,
	chocolatChaud: new URL("/menu_imgs/chocolatChaud.jpg", import.meta.url).href,
	frappuccino: new URL("/menu_imgs/frappuccino.jpg", import.meta.url).href,
	milkshake: new URL("/menu_imgs/milkshake.jpg", import.meta.url).href,
	glace: new URL("/menu_imgs/glace.jpg", import.meta.url).href,
	chocolatGlace: new URL("/menu_imgs/chocolatGlace.jpg", import.meta.url).href,
	baguetteFarcie: new URL("/menu_imgs/baguetteFarcie.jpg", import.meta.url)
		.href,
	makloube: new URL("/menu_imgs/makloub.jpg", import.meta.url).href,
	cornet: new URL("/menu_imgs/cornet.jpg", import.meta.url).href,
	panozzo: new URL("/menu_imgs/panozzo.jpg", import.meta.url).href,
	hamburger: new URL("/menu_imgs/hamburger.jpg", import.meta.url).href,
	pizza: new URL("/menu_imgs/pizza.jpg", import.meta.url).href,
	fruitDeMer: new URL("/menu_imgs/fruitDeMer.jpg", import.meta.url).href,
	ojja: new URL("/menu_imgs/ojja.jpg", import.meta.url).href,
	salade: new URL("/menu_imgs/salade.jpg", import.meta.url).href,
	boeuf: new URL("/menu_imgs/boeuf.jpg", import.meta.url).href,
	agneau: new URL("/menu_imgs/agneau.jpg", import.meta.url).href,
	platsAPartager: new URL("/menu_imgs/platsAPartager.jpg", import.meta.url)
		.href,
	supplement: new URL("/menu_imgs/supplement.jpg", import.meta.url).href,
	autresPlats: new URL("/menu_imgs/autresPlats.jpg", import.meta.url).href,
};

export default imagePaths;
