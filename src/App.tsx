import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./lib/Redux/store";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";
import Turkey from "./pages/Turkey";

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
				path: "detail",
				element: <Detail />,
			},
			{
				path: "turkey",
				element: <Turkey />,
			},
			{
				path: "*",
				element: <NotFound />,
			},
		],
	},
]);

function App() {
	return (
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	);
}

export default App;
