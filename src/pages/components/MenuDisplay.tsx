import { RespBackgImg, RespHeading } from "fhf-react";
import { useEffect, useRef, useState } from "react";
import useIsInViewport from "../../hook/useIsInViewport";
import loadingImage from "/loading.png";

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
	const [imageSrc, setImageSrc] = useState<string | undefined>(undefined);

	useEffect(() => {
		let isMounted = true; // Flag to track component mount status

		const fetchImage = async () => {
			if (isInView && !imageSrc) {
				// Only fetch if not already fetched
				try {
					const importedImage = await import(imgSrc);
					// Assuming importedImage has a 'default' property pointing to the image URL
					if (isMounted) {
						setImageSrc(importedImage.default);
					}
				} catch (error) {
					console.error("Error loading image:", error);
				}
			}
		};

		fetchImage();

		// Cleanup function
		return () => {
			isMounted = false;
		};
	}, [isInView, imgSrc, imageSrc]); // Include imgSrc in the dependency array

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
			{imageSrc ? ( // Conditionally render the image
				<RespBackgImg url={imageSrc} className="img">
					<></>
				</RespBackgImg>
			) : (
				<RespBackgImg url={loadingImage} className="img">
					<></>
				</RespBackgImg>
			)}
		</div>
	);
}
