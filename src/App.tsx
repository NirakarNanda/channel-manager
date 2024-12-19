import Sidebar from "@/components/layout/sidebar";
import Navbar from "@/components/layout/navbar";
import Dashboard from "./components/dashboard/dashboard";

function App() {
  return (
    <div className="flex w-screen">
      <Sidebar />
      <div className="flex-grow flex flex-col">
        <Navbar />
        <main className="flex-grow overflow-auto mt-16 p-6">
          <Dashboard/>
          <div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;