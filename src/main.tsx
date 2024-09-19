import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./sass/index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Menu from "./pages/Menu.tsx";
import Route from "./Route.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Route />,
		children: [
			{
				path: "",
				index: true,
				element: <App />,
			},
			{
				path: "menu",
				element: <Menu />,
			},
		],
	},
]);

createRoot(document.getElementById("root")!).render(
	<>
		<RouterProvider router={router} />
	</>
);
