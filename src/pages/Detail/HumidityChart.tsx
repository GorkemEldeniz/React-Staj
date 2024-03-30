import { Drop } from "@phosphor-icons/react";
import {
	Bar,
	BarChart,
	CartesianGrid,
	Rectangle,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";

interface HumidityChartProps {
	humidityForecastList: {
		name: string;
		Humidity: number;
	}[];
}

export default function HumidityChart({
	humidityForecastList,
}: HumidityChartProps) {
	return (
		<div className='p-4 space-y-1 bg-gray-700 rounded-md'>
			<h1 className='flex gap-1 text-gray-100 text-heading-md'>
				<Drop size={24} />
				Humidity
			</h1>
			<ResponsiveContainer width='100%' height={300}>
				<BarChart
					data={humidityForecastList}
					margin={{
						top: 10,
						right: 30,
						left: 0,
						bottom: 0,
					}}
				>
					<CartesianGrid strokeDasharray='3 3' />
					<XAxis dataKey='name' />
					<YAxis tickFormatter={(val) => val + "%"} />
					<Tooltip
						labelClassName='font-bold text-gray-500'
						formatter={(val) => val + "%"}
					/>
					<Bar
						dataKey='Humidity'
						fill='#8FB2F5'
						activeBar={<Rectangle fill='pink' />}
					/>
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}
