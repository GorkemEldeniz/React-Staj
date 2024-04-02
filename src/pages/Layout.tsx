import { Analytics } from "@vercel/analytics/react";
import { Outlet, ScrollRestoration } from "react-router-dom";

export default function Layout() {
	return (
		<div className='w-full max-w-screen-sm mx-auto'>
			<Analytics />
			<ScrollRestoration />
			<Outlet />
		</div>
	);
}
