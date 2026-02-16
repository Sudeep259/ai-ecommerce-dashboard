import React, { Suspense } from "react";
import DashboardLayout from "./layouts/DashboardLayout";

const Dashboard = React.lazy(() => import("./pages/Dashboard"));

function App() {
  return (
    <DashboardLayout>
      <Suspense fallback={<div className="p-6">Loading...</div>}>
        <Dashboard />
      </Suspense>
    </DashboardLayout>
  );
}

export default App;