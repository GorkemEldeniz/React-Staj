import { Outlet } from "react-router-dom";

export default function Layout() {
	return (
		<div className='w-full h-screen mx-auto max-w-screen-mobile bg-image'>
			<Outlet />
		</div>
	);
}
