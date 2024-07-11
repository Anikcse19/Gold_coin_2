import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

// Define the type for the data
interface DataType {
  year: string;
  price: number;
  value: number;
}

const data: DataType[] = [
  {
    year: '2000',
    price: 12,
    value: 11,
  },
  {
    year: '2001',
    price: 14,
    value: 26,
  },
  {
    year: '2002',
    price: 15,
    value: 18,
  },
  {
    year: '2003',
    price: 16,
    value: 12,
  },
  {
    year: '2004',
    price: 20,
    value: 25,
  },
  {
    year: '2005',
    price: 24,
    value: 22,
  },
  {
    year: '2006',
    price: 29,
    value: 24,
  },
  {
    year: '2000',
    price: 12,
    value: 11,
  },
  {
    year: '2001',
    price: 14,
    value: 26,
  },
  {
    year: '2002',
    price: 15,
    value: 18,
  },
  {
    year: '2003',
    price: 16,
    value: 12,
  },
];

const colors = ['#ff0000', '#00ff00']; // Red and Green

const CustomBarChart: React.FC = () => (
  <ResponsiveContainer width="100%" height={200}>
    <BarChart data={data}>
      <CartesianGrid stroke="none" />
      <XAxis dataKey="year" tick={false} />
      <YAxis hide={true} tick={false} axisLine={false} />
      {/* <Tooltip /> */}
      {/* <Legend /> */}
      <Bar dataKey="price" fill="#ff0000" />
      <Bar dataKey="value" fill="#7FFFD4	" />
    </BarChart>
  </ResponsiveContainer>
);

export default CustomBarChart;
