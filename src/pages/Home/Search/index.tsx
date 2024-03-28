import Header from "./Header";
import Hero from "./Hero";
import SearchInput from "./SearchInput";

export default function SearchWrapper() {
	return (
		<div className='w-full h-full px-8'>
			<Header />
			<Hero />
			<SearchInput />
		</div>
	);
}
