import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Weather from "./pages/Weather";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "weather",
				element: <Weather />,
			},
			{
				path: "*",
				element: <NotFound />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
