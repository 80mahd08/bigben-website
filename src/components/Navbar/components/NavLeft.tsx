import { UnstyledList } from "fhf-react";

export default function NavLeft() {
	return (
		<div className="nav-left">
			<UnstyledList className="un-list">
				<li>
					<a href="#home">Home</a>
				</li>
				<li>
					<a href="#about">About</a>
				</li>
			</UnstyledList>
		</div>
	);
}
