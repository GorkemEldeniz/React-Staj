import { Outlet, ScrollRestoration } from "react-router-dom";

export default function Layout() {
	return (
		<div className='w-full max-w-screen-sm mx-auto'>
			<ScrollRestoration />
			<Outlet />
		</div>
	);
}
