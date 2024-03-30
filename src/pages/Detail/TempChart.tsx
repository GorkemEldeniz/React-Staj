import { ThermometerSimple } from "@phosphor-icons/react";
import {
	CartesianGrid,
	Legend,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";

interface TempChartProps {
	tempForecastList: {
		name: string;
		Day: number;
		Morning: number;
		Night: number;
	}[];
}

export default function TempChart({ tempForecastList }: TempChartProps) {
	return (
		<div className='p-4 space-y-1 bg-gray-700 rounded-md'>
			<h1 className='flex gap-1 text-gray-100 text-heading-md'>
				<ThermometerSimple size={24} /> Temperatures
			</h1>
			<ResponsiveContainer width='100%' height={300}>
				<LineChart
					className='text-gray-200'
					data={tempForecastList}
					margin={{
						top: 10,
						right: 30,
						left: 0,
						bottom: 0,
					}}
				>
					<CartesianGrid strokeDasharray='3 3' />
					<XAxis dataKey='name' />
					<YAxis tickFormatter={(val) => val + "°C"} />
					<Tooltip
						labelClassName='font-bold text-gray-500'
						formatter={(val) => val + "°C"}
					/>
					<Legend />
					<Line
						stroke='#fde047'
						fill='#fde047'
						type='monotone'
						dataKey='Morning'
					/>
					<Line stroke='#f97316' fill='#f97316' type='monotone' dataKey='Day' />
					<Line
						stroke='#8FB2F5'
						fill='#8FB2F5'
						type='monotone'
						dataKey='Night'
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
}
