import { UnstyledList } from "fhf-react";
import { useState } from "react";

export default function NavList() {
	const [isOpen, useIsOpen] = useState(false);
	const handleClick = () => {
		useIsOpen((prev) => !prev);
	};
	return (
		<div className="nav-list">
			<div onClick={handleClick} className="logo">
				<span></span>
				<span></span>
				<span></span>
			</div>
			{isOpen && (
				<div className="list">
					<UnstyledList className="un-list">
						<li>
							<a href="#home">Home</a>
						</li>
						<li>
							<a href="#about">About</a>
						</li>
						<li>
							<a href="#menu">Menu</a>
						</li>
						<li>
							<a href="#contact">Contact</a>
						</li>
					</UnstyledList>
				</div>
			)}
		</div>
	);
}
