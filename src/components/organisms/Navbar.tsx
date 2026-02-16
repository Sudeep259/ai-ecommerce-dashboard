const Navbar = () => {
  return (
    <div className="h-16 bg-white shadow flex items-center justify-between px-6">
      <h1 className="font-semibold text-lg">
        Dashboard
      </h1>

      <div className="flex items-center gap-4">
        <input
          className="border rounded px-3 py-1"
          placeholder="Search..."
        />
        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
};

export default Navbar;