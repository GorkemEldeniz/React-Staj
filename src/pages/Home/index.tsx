import Header from "./Header";
import Hero from "./Hero";
import SearchInput from "./Search";

export default function Home() {
	return (
		<div className='w-full h-full px-8'>
			<Header />
			<Hero />
			<SearchInput />
		</div>
	);
}
