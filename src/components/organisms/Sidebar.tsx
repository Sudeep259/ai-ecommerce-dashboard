const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-5">
      <h2 className="text-2xl font-bold mb-8">
        Admin Panel
      </h2>

      <ul className="space-y-4">
        <li className="hover:text-blue-400 cursor-pointer">
          Dashboard
        </li>
        <li className="hover:text-blue-400 cursor-pointer">
          Products
        </li>
        <li className="hover:text-blue-400 cursor-pointer">
          Orders
        </li>
        <li className="hover:text-blue-400 cursor-pointer">
          Customers
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;