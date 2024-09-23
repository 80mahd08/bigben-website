import { RespBackgImg, RespHeading } from "fhf-react";
import { useEffect, useRef, useState } from "react";
import useIsInViewport from "../../hook/useIsInViewport";
import { CircularProgress } from "@mui/material";

interface MenuItem {
	eleTitle: string;
	price: string;
}

type MenuDisplayPropsTypes = {
	title: string;
	imgSrc: string;
	cont: MenuItem[];
	direction: "row" | "row-reverse";
};

export default function MenuDisplay({
	title,
	imgSrc,
	cont,
	direction,
}: MenuDisplayPropsTypes) {
	const menuDisplayRef = useRef(null);
	const isInView = useIsInViewport(menuDisplayRef, "100px");
	const [imageLoaded, setImageLoaded] = useState(false);

	useEffect(() => {
		if (isInView && !imageLoaded) {
			const img = new Image();
			img.src = imgSrc;
			img.onload = () => setImageLoaded(true);
			img.onerror = (error) => console.error("Error loading image:", error);
		}
	}, [isInView, imgSrc, imageLoaded]);

	return (
		<div
			ref={menuDisplayRef}
			className="menu-display"
			style={{ flexDirection: direction }}>
			<div className="content">
				<div className="title">
					<RespHeading level={1}>{title}</RespHeading>
				</div>
				{cont.map((ele: MenuItem, index) => {
					return (
						<div
							key={index}
							className={`${title}-${ele.eleTitle}-${index + 1}`}>
							<p>{ele.eleTitle}</p>
							<p>{ele.price}</p>
						</div>
					);
				})}
			</div>

			{imageLoaded ? (
				<RespBackgImg url={imgSrc} className="img">
					<></>
				</RespBackgImg>
			) : (
				<div className="img" style={{ display: "grid", placeItems: "center" }}>
					<CircularProgress className="loading" color="inherit" />
				</div>
			)}
		</div>
	);
}
