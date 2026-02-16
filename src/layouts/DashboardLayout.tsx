import Sidebar from "../components/organisms/Sidebar";
import Navbar from "../components/organisms/Navbar";

const DashboardLayout = ({ children }: any) => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen">
        <Navbar />

        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;