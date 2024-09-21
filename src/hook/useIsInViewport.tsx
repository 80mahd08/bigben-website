import { useState, useEffect } from "react";

export default function useIsInViewport(
	ref: React.MutableRefObject<any>,
	rootMarginInput: string
) {
	const [isInViewport, setIsInViewport] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsInViewport(entry.isIntersecting);
			},
			{
				root: null, // Defaults to the browser viewport
				rootMargin: rootMarginInput, // , No margin around the root
				threshold: 0.1, // 10% of the element needs to be visible
			}
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		// Cleanup function
		return () => {
			if (ref.current) {
				observer.unobserve(ref.current);
			}
		};
	}, [ref]);

	return isInViewport;
}
