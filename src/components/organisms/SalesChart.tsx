import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const SalesChart = ({ data }: any) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow mt-8">
      <h3 className="font-semibold mb-4">
        Product Price Analytics
      </h3>

      <div className="w-full h-[350px]">
        <ResponsiveContainer>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="title" hide />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="price" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesChart;