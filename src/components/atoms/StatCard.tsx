type Props = {
  title: string;
  value: string;
};

const StatCard = ({ title, value }: Props) => {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h3 className="text-gray-500 text-sm">{title}</h3>
      <p className="text-2xl font-bold mt-2">{value}</p>
    </div>
  );
};

export default StatCard;