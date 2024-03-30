import { Wind } from "@phosphor-icons/react";
import {
	Area,
	AreaChart,
	CartesianGrid,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";

interface WindSpeedChartProps {
	windSpeedList: {
		name: string;
		Wind: number;
	}[];
}

export default function WindSpeedChart({ windSpeedList }: WindSpeedChartProps) {
	return (
		<div className='p-4 space-y-1 bg-gray-700 rounded-md'>
			<h1 className='flex gap-1 text-gray-100 text-heading-md'>
				<Wind size={24} />
				Wind
			</h1>
			<ResponsiveContainer width='100%' height={300}>
				<AreaChart
					data={windSpeedList}
					margin={{
						top: 10,
						right: 30,
						left: 0,
						bottom: 0,
					}}
				>
					<CartesianGrid strokeDasharray='3 3' />
					<XAxis dataKey='name' />
					<YAxis />
					<Tooltip
						labelClassName='font-bold text-gray-500'
						formatter={(val) => val + "km/h"}
					/>
					<Area
						type='monotone'
						dataKey='Wind'
						stroke='#3B3B54'
						fill='#3B3B54'
					/>
				</AreaChart>
			</ResponsiveContainer>
		</div>
	);
}
