import { UnstyledList } from "fhf-react";

export default function NavRight() {
	return (
		<div className="nav-right">
			<UnstyledList className="un-list">
				<li>
					<a href="#menu">Menu</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
			</UnstyledList>
		</div>
	);
}
