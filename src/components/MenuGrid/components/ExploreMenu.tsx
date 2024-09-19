import { Link } from "react-router-dom";

const ExploreMenu = () => {
	return (
		<div className="explore-menu">
			<div className="text-content">
				<h2>OUR MENU</h2>
				<p>
					Donec vehicula vulputate hendrerit. Phasellus dictum vitae augue non
					aliquet. Aenean sodales magna ac ipsum sollicitudin, id eleifend lorem
					dapibus. Suspendisse id posuere ex.
				</p>
			</div>

			<Link to="/menu" className="explore-btn">
				Explore Menu
			</Link>
		</div>
	);
};

export default ExploreMenu;
