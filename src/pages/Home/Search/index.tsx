import Header from "./Header";
import Hero from "./Hero";
import SearchInput from "./SearchInput";

export default function SearchWrapper() {
	return (
		<main className='w-full h-screen px-8 bg-image'>
			<Header />
			<Hero />
			<SearchInput />
		</main>
	);
}
