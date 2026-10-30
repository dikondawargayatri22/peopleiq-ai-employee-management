import {
  CalendarDays,
  Clock,
  Download,
  Filter,
  Search,
  UserCheck,
  UserMinus,
  UserX,
} from "lucide-react";
import { useMemo, useState, useEffect } from "react";
import StatCard from "../components/dashboard/StartCard";

type AttendanceStatus = "Present" | "Late" | "Absent" | "Half Day" | "On Leave";

type AttendanceRecord = {
  id: number;
  name: string;
  employeeId: string;
  date: string;
  checkIn: string;
  checkOut: string;
  status: AttendanceStatus;
  workHours: string;
  department: string;
};

const attendanceData: AttendanceRecord[] = [
  {
    id: 1,
    name: "Neha Sharma",
    employeeId: "E10234",
    date: "2026-06-03",
    checkIn: "09:05 AM",
    checkOut: "06:15 PM",
    status: "Present",
    workHours: "9h 10m",
    department: "Engineering",
  },
  {
    id: 2,
    name: "Rahul Verma",
    employeeId: "E09781",
    date: "2026-06-03",
    checkIn: "09:45 AM",
    checkOut: "06:30 PM",
    status: "Late",
    workHours: "8h 45m",
    department: "Sales",
  },
  {
    id: 3,
    name: "Priya Nair",
    employeeId: "E10456",
    date: "2026-06-03",
    checkIn: "-",
    checkOut: "-",
    status: "On Leave",
    workHours: "0h 0m",
    department: "Marketing",
  },
  {
    id: 4,
    name: "Amit Patel",
    employeeId: "E08823",
    date: "2026-06-03",
    checkIn: "08:55 AM",
    checkOut: "05:45 PM",
    status: "Present",
    workHours: "8h 50m",
    department: "Finance",
  },
  {
    id: 5,
    name: "Sanjana Reddy",
    employeeId: "E10112",
    date: "2026-06-03",
    checkIn: "09:12 AM",
    checkOut: "06:05 PM",
    status: "Present",
    workHours: "8h 53m",
    department: "HR",
  },
  {
    id: 6,
    name: "Karan Singh",
    employeeId: "E09345",
    date: "2026-06-03",
    checkIn: "09:00 AM",
    checkOut: "06:00 PM",
    status: "Present",
    workHours: "9h 0m",
    department: "Support",
  },
  {
    id: 7,
    name: "Anjali Desai",
    employeeId: "E10765",
    date: "2026-06-03",
    checkIn: "-",
    checkOut: "-",
    status: "Absent",
    workHours: "0h 0m",
    department: "Engineering",
  },
  {
    id: 8,
    name: "Rohit Kumar",
    employeeId: "E08421",
    date: "2026-06-03",
    checkIn: "10:15 AM",
    checkOut: "04:30 PM",
    status: "Half Day",
    workHours: "6h 15m",
    department: "Engineering",
  },
];

const statusStyles: Record<AttendanceStatus, string> = {
  Present: "bg-emerald-50 text-emerald-700 ring-emerald-100 dark:bg-emerald-950/30 dark:text-emerald-400 dark:ring-emerald-800",
  Late: "bg-amber-50 text-amber-700 ring-amber-100 dark:bg-amber-950/30 dark:text-amber-400 dark:ring-amber-800",
  Absent: "bg-red-50 text-red-700 ring-red-100 dark:bg-red-950/30 dark:text-red-400 dark:ring-red-800",
  "Half Day": "bg-blue-50 text-blue-700 ring-blue-100 dark:bg-blue-950/30 dark:text-blue-400 dark:ring-blue-800",
  "On Leave": "bg-purple-50 text-purple-700 ring-purple-100 dark:bg-purple-950/30 dark:text-purple-400 dark:ring-purple-800",
};

const departments = [
  "All Departments",
  "Engineering",
  "Sales",
  "Marketing",
  "Finance",
  "HR",
  "Support",
];

const statuses = [
  "All Status",
  "Present",
  "Late",
  "Absent",
  "Half Day",
  "On Leave",
];

function AttendancePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] =
    useState("All Departments");
  const [selectedStatus, setSelectedStatus] = useState("All Status");
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [checkInTime, setCheckInTime] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCheckIn = () => {
    setIsCheckedIn(true);
    setCheckInTime(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
    alert("Check-in successful! Have a great day at work.");
  };

  const handleCheckOut = () => {
    setIsCheckedIn(false);
    alert(`Check-out successful! Total session: ${checkInTime ? "Active since " + checkInTime : "Completed"}`);
    setCheckInTime(null);
  };

  const filteredData = useMemo(() => {
    return attendanceData.filter((record) => {
      const searchValue = searchTerm.toLowerCase();
      const matchesSearch =
        record.name.toLowerCase().includes(searchValue) ||
        record.employeeId.toLowerCase().includes(searchValue);

      const matchesDepartment =
        selectedDepartment === "All Departments" ||
        record.department === selectedDepartment;

      const matchesStatus =
        selectedStatus === "All Status" || record.status === selectedStatus;

      return matchesSearch && matchesDepartment && matchesStatus;
    });
  }, [searchTerm, selectedDepartment, selectedStatus]);

  const stats = [
    {
      title: "Present Today",
      value: "1,103",
      description: "92% of total workforce",
      trend: "+2.1%",
      trendType: "up" as const,
      accent: "emerald" as const,
      icon: <UserCheck size={22} />,
    },
    {
      title: "Late Arrivals",
      value: "42",
      description: "3.5% of total workforce",
      trend: "+12%",
      trendType: "down" as const, // Late going up is bad
      accent: "amber" as const,
      icon: <Clock size={22} />,
    },
    {
      title: "Absent",
      value: "15",
      description: "1.2% of total workforce",
      trend: "-5%",
      trendType: "up" as const, // Absent going down is good
      accent: "red" as const,
      icon: <UserX size={22} />,
    },
    {
      title: "On Leave",
      value: "57",
      description: "Approved leaves",
      trend: "+4",
      trendType: "neutral" as const,
      accent: "purple" as const,
      icon: <UserMinus size={22} />,
    },
  ];

  return (
    <section className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header & Check-in Section */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 shadow-sm transition-colors duration-300">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
            Attendance Tracking
          </p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900 dark:text-zinc-100">
            Daily Attendance
          </h1>
          <p className="mt-4 text-slate-600 dark:text-zinc-400">
            Monitor employee attendance, work hours, and late statuses in real-time.
            AI detection flags unusual patterns.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="flex items-center gap-2 rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 shadow-lg shadow-blue-600/20">
              <Download size={18} />
              Export Report
            </button>
            <button className="flex items-center gap-2 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-800 px-5 py-3 text-sm font-semibold text-slate-700 dark:text-zinc-300 transition hover:bg-slate-50 dark:hover:bg-zinc-700">
              <Filter size={18} />
              Advanced Filters
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 dark:border-zinc-800 bg-zinc-950 p-8 text-white shadow-xl shadow-black/20 transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-zinc-400 font-medium">Current Time</p>
              <h2 className="text-4xl font-black tracking-tight text-white mt-1">
                {currentTime.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                })}
              </h2>
              <p className="mt-2 text-zinc-400 text-sm font-medium">
                {currentTime.toLocaleDateString([], {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 shadow-2xl shadow-blue-600/40">
              <CalendarDays size={32} />
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <button
              onClick={handleCheckIn}
              disabled={isCheckedIn}
              className={`flex-1 rounded-2xl py-4 text-center font-bold text-white shadow-lg transition-all active:scale-95 ${
                isCheckedIn
                  ? "bg-zinc-800 cursor-not-allowed opacity-50"
                  : "bg-emerald-600 shadow-emerald-600/20 hover:bg-emerald-700"
              }`}
            >
              {isCheckedIn ? "Checked In" : "Check In"}
            </button>
            <button
              onClick={handleCheckOut}
              disabled={!isCheckedIn}
              className={`flex-1 rounded-2xl py-4 text-center font-bold text-white transition-all active:scale-95 ${
                !isCheckedIn
                  ? "bg-zinc-800 cursor-not-allowed opacity-50"
                  : "bg-red-600 hover:bg-red-700 shadow-lg shadow-red-600/20"
              }`}
            >
              Check Out
            </button>
          </div>
          <p className="mt-5 text-center text-[10px] font-bold uppercase tracking-widest text-zinc-500">
            Location: Bengaluru HQ • IP: 192.168.1.45
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            description={stat.description}
            trend={stat.trend}
            trendType={stat.trendType}
            accent={stat.accent}
            icon={stat.icon}
          />
        ))}
      </div>

      {/* Filters & Table */}
      <div className="space-y-4">
        <div className="rounded-3xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 shadow-sm transition-colors duration-300">
          <div className="grid gap-4 lg:grid-cols-[1fr_220px_180px]">
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950 px-4 py-3 focus-within:border-blue-500 transition-all">
              <Search size={18} className="text-slate-400" />
              <input
                type="text"
                placeholder="Search employee by name or ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-transparent text-sm text-slate-700 dark:text-zinc-200 outline-none placeholder:text-slate-400"
              />
            </div>

            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="rounded-2xl border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950 px-4 py-3 text-sm text-slate-700 dark:text-zinc-200 outline-none cursor-pointer focus:border-blue-500 transition-all"
            >
              {departments.map((dept) => (
                <option key={dept} value={dept} className="dark:bg-zinc-900">
                  {dept}
                </option>
              ))}
            </select>

            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="rounded-2xl border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950 px-4 py-3 text-sm text-slate-700 dark:text-zinc-200 outline-none cursor-pointer focus:border-blue-500 transition-all"
            >
              {statuses.map((status) => (
                <option key={status} value={status} className="dark:bg-zinc-900">
                  {status}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm transition-colors duration-300">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1000px] border-collapse">
              <thead className="bg-slate-50 dark:bg-zinc-950/50">
                <tr className="text-left text-sm font-semibold text-slate-600 dark:text-zinc-400">
                  <th className="px-6 py-4">Employee</th>
                  <th className="px-6 py-4">Employee ID</th>
                  <th className="px-6 py-4">Department</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Check-In</th>
                  <th className="px-6 py-4">Check-Out</th>
                  <th className="px-6 py-4">Work Hours</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-zinc-800">
                {filteredData.map((record) => (
                  <tr
                    key={record.id}
                    className="text-sm transition hover:bg-slate-50 dark:hover:bg-zinc-800/50"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-zinc-800 font-bold text-slate-600 dark:text-zinc-300">
                          {record.name.split(" ").map(n => n[0]).join("")}
                        </div>
                        <span className="font-semibold text-slate-900 dark:text-zinc-100">
                          {record.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-medium text-slate-700 dark:text-zinc-300">
                      {record.employeeId}
                    </td>
                    <td className="px-6 py-4 text-slate-600 dark:text-zinc-400">
                      {record.department}
                    </td>
                    <td className="px-6 py-4 text-slate-600 dark:text-zinc-400">{record.date}</td>
                    <td className="px-6 py-4 text-slate-600 dark:text-zinc-400">{record.checkIn}</td>
                    <td className="px-6 py-4 text-slate-600 dark:text-zinc-400">{record.checkOut}</td>
                    <td className="px-6 py-4 font-medium text-slate-700 dark:text-zinc-300">
                      {record.workHours}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${
                          statusStyles[record.status]
                        }`}
                      >
                        {record.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="rounded-xl border border-slate-200 dark:border-zinc-800 px-3 py-2 text-xs font-semibold text-slate-700 dark:text-zinc-300 transition hover:bg-slate-100 dark:hover:bg-zinc-800">
                        Details
                      </button>
                    </td>
                  </tr>
                ))}
                {filteredData.length === 0 && (
                  <tr>
                    <td colSpan={9} className="px-6 py-12 text-center">
                      <p className="font-semibold text-slate-700 dark:text-zinc-300">
                        No records found
                      </p>
                      <p className="mt-1 text-sm text-slate-500 dark:text-zinc-500">
                        Try adjusting your filters.
                      </p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AttendancePage;
