export default function Header({ title }: { title: string }) {
	return (
		<header>
			<h1 className='text-center text-heading-lg text-gray-50'>{title}</h1>
		</header>
	);
}
