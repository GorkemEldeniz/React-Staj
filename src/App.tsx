import Header from "./components/Header";
import Hero from "./components/Hero";
import SearchInput from "./components/Search";

function App() {
	return (
		<div className='w-full h-screen px-8 mx-auto max-w-screen-mobile bg-image'>
			<Header />
			<Hero />
			<SearchInput />
		</div>
	);
}

export default App;
