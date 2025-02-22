"use client";
import { Search, UserPlus } from "lucide-react";
import { useState } from "react"; // Importing Lucide Icons
import { DateRangePicker } from "./Datepicker";
import { Chart } from "./ChartData";
import { PieChartChart } from "./PieChart";
import BackButton from "@/components/backButton";
function DashBoard() {
  function handleAddPatient() {
    alert("Add Patient Clicked");
  }
  
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [refreshTrigger, setRefreshTrigger] = useState<number>(0);

  return (
    <div className="bg-gradient-to-r from-blue-50 to-white shadow-xl rounded-2xl p-8 ">
      <div className="flex justify-between items-center mb-6">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 tracking-wide ml-20">Analytics</h1>

        {/* Search Bar and Date Picker */}
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="relative w-80">
            <input
              type="text"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl bg-gray-50 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-lg"
              placeholder="Search..."
            />
            <div className="absolute inset-y-0 left-3 flex items-center">
              <Search className="w-6 h-6 text-gray-500" />
            </div>
          </div>

          {/* Date Picker */}
          <DateRangePicker
            initialDateFrom={startDate}
            initialDateTo={endDate}
            onUpdate={(value) => {
              setStartDate(value.from);
              setEndDate(value.to);
              setRefreshTrigger(prev => prev + 1);
            }}
          />
        </div>
      </div>

      {/* Patient Count Cards */}
      <div className="flex justify-between mt-8">
  <div className="p-6 bg-gray-100 rounded-lg shadow-xl mx-2 w-1/4">
    <h2 className="text-sm font-medium text-gray-500">Total Patients</h2>
    <p className="text-4xl font-bold text-gray-800">1,234</p>
  </div>
  <div className="p-6 bg-gray-100 rounded-lg shadow-xl mx-2 w-1/4">
    <h2 className="text-sm font-medium text-gray-500">Total Appointments</h2>
    <p className="text-4xl font-bold text-gray-800">567</p>
  </div>
  <div className="p-6 bg-gray-100 rounded-lg shadow-xl mx-2 w-1/4">
    <h2 className="text-sm font-medium text-gray-500">Total Revenue</h2>
    <p className="text-4xl font-bold text-gray-800">$12,345</p>
  </div>
  <div className="p-6 bg-gray-100 rounded-lg shadow-xl mx-2 w-1/4">
    <h2 className="text-sm font-medium text-gray-500">Total Doctors</h2>
    <p className="text-4xl font-bold text-gray-800">23</p>
  </div>
</div>

      {/* Main Body with Chart and Pie */}
      <div className="flex mt-8 gap-8">
        <div className="w-2/3 h-96 rounded-xl shadow-2xl">
          <Chart /> {/* Adjust these values as needed */}
        </div>
        <div className="w-1/3 h-96 rounded-xl shadow-2xl">
          <PieChartChart />
        </div>
      </div>
      <div className="absolute top-6 left-6">
					<BackButton destinationRoute="/" />
				</div>
    </div>
    
  );
}

export default DashBoard;
