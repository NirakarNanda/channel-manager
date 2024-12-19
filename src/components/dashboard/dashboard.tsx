import Card from "@/components/dashboard/statcard";
import { 
  Package, 
  CheckCircle, 
  AlertCircle, 
  XCircle, 
  Star, 
  TrendingUp, 
  TrendingDown, 
  UtensilsCrossed 
} from 'lucide-react';

const Dashboard = () => {
  const stats = [
    {
      title: "List of Restaurant",
      value: 4244,
      description: "8.5% Up from Last Month",
      icon: <UtensilsCrossed />,
      iconColor: "purple",
      descriptionColor: "green"
    },
    {
      title: "Outlet Statistics",
      value: 4200,
      description: "99% Restaurant open Today",
      icon: <Package />,
      iconColor: "yellow",
      descriptionColor: "green"
    },
    {
      title: "Total Sales Today",
      value: "$89,000",
      description: "4.3% Down from yesterday",
      icon: <TrendingDown />,
      iconColor: "green",
      descriptionColor: "red"
    },
    {
      title: "Successful Orders",
      value: 1200,
      icon: <CheckCircle />,
      iconColor: "green"
    },
    {
      title: "Failed Orders",
      value: 240,
      icon: <AlertCircle />,
      iconColor: "orange"
    },
    {
      title: "Cancel Orders",
      value: 40,
      icon: <XCircle />,
      iconColor: "red"
    },
    {
      title: "Total Reviews",
      value: "★★★★★",
      icon: <Star />,
      iconColor: "yellow"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 justify-center">
      {/* Main Content - Adjusted margin for sidebar and navbar */}
      <main className="ml-20 md:ml-64 mt-[73px] flex-1 p-4 md:p-6">
        {/* Header Section */}
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          {/* Mobile button removed as it's now in navbar */}
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              {...stat}
            />
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Order Report */}
          <div className="bg-white rounded-lg shadow-md">
            <div className="p-6">
              <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                <h2 className="text-lg font-bold text-gray-800">Order Report</h2>
                <button className="flex items-center bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200 w-full sm:w-auto">
                  <TrendingUp className="w-4 h-4 mr-2" /> Save Report
                </button>
              </header>
              <p className="text-gray-500 mb-4">Lorem ipsum dolor sit amet, consectetur adip</p>
              <div className="h-64 bg-blue-50 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">Chart Coming Soon</span>
              </div>
            </div>
          </div>

          {/* Activity Section */}
          <div className="bg-white rounded-lg shadow-md">
            <div className="p-6">
              <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                <h2 className="text-lg font-bold text-gray-800">Activity</h2>
                <div className="flex space-x-2 w-full sm:w-auto">
                  <button className="flex-1 sm:flex-none px-4 py-2 rounded-md text-gray-500 hover:bg-gray-100 transition-colors duration-200">Day</button>
                  <button className="flex-1 sm:flex-none px-4 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600 transition-colors duration-200">Week</button>
                  <button className="flex-1 sm:flex-none px-4 py-2 rounded-md text-gray-500 hover:bg-gray-100 transition-colors duration-200">Month</button>
                </div>
              </header>
              <div className="h-64 bg-blue-50 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">Activity Chart Coming Soon</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;