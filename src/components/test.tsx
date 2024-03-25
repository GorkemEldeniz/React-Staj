import Sun from "../../public/icons/wheather/sun-clear.svg";

export default function Test() {
	return (
		<>
			<img src={Sun} />
			<h1 className='text-blue-light'>Heading</h1>
			<p className='text-heading-hg'>Hello world!</p>
			<p className='text-heading-xl'>Hello world!</p>
			<p className='text-heading-lg'>Hello world!</p>
			<p className='text-heading-md'>Hello world!</p>
			<p className='text-heading-sm'>Hello world!</p>
			<p className='text-heading-xs'>Hello world!</p>
			<br />
			<br />
			<h1>Normal</h1>
			<p className='text-lg'>Hello world!</p>
			<p className='text-md'>Hello world!</p>
			<p className='text-sm'>Hello world!</p>
			<p className='text-xs'>Hello world!</p>
		</>
	);
}
