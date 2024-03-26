import Logo from "@/assets/logo.png";

export default function Header() {
	return (
		<header className='flex justify-center py-12'>
			<img src={Logo} alt='Logo' />
		</header>
	);
}
