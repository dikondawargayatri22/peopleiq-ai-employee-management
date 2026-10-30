import {
  Banknote,
  ChevronRight,
  CreditCard,
  Download,
  Filter,
  PieChart,
  Plus,
  Receipt,
  Search,
  TrendingDown,
  TrendingUp,
  Wallet,
} from "lucide-react";
import { useMemo, useState } from "react";
import StatCard from "../components/dashboard/StartCard";

type PayrollStatus = "Paid" | "Processing" | "Scheduled" | "On Hold";

type PayrollRecord = {
  id: number;
  name: string;
  employeeId: string;
  department: string;
  basicSalary: number;
  bonuses: number;
  deductions: number;
  netPay: number;
  status: PayrollStatus;
  paymentDate: string;
};

const payrollData: PayrollRecord[] = [
  {
    id: 1,
    name: "Neha Sharma",
    employeeId: "E10234",
    department: "Engineering",
    basicSalary: 95000,
    bonuses: 5000,
    deductions: 2000,
    netPay: 98000,
    status: "Paid",
    paymentDate: "2026-05-31",
  },
  {
    id: 2,
    name: "Rahul Verma",
    employeeId: "E09781",
    department: "Sales",
    basicSalary: 75000,
    bonuses: 12000,
    deductions: 1500,
    netPay: 85500,
    status: "Paid",
    paymentDate: "2026-05-31",
  },
  {
    id: 3,
    name: "Priya Nair",
    employeeId: "E10456",
    department: "Marketing",
    basicSalary: 82000,
    bonuses: 3000,
    deductions: 1800,
    netPay: 83200,
    status: "Scheduled",
    paymentDate: "2026-06-30",
  },
  {
    id: 4,
    name: "Amit Patel",
    employeeId: "E08823",
    department: "Finance",
    basicSalary: 88000,
    bonuses: 4000,
    deductions: 2100,
    netPay: 89900,
    status: "Paid",
    paymentDate: "2026-05-31",
  },
  {
    id: 5,
    name: "Sanjana Reddy",
    employeeId: "E10112",
    department: "HR",
    basicSalary: 72000,
    bonuses: 2500,
    deductions: 1200,
    netPay: 73300,
    status: "Processing",
    paymentDate: "2026-06-05",
  },
  {
    id: 6,
    name: "Karan Singh",
    employeeId: "E09345",
    department: "Support",
    basicSalary: 65000,
    bonuses: 1500,
    deductions: 1000,
    netPay: 65500,
    status: "Paid",
    paymentDate: "2026-05-31",
  },
];

const statusStyles: Record<PayrollStatus, string> = {
  Paid: "bg-emerald-50 text-emerald-700 ring-emerald-100 dark:bg-emerald-950/30 dark:text-emerald-400 dark:ring-emerald-800",
  Processing: "bg-blue-50 text-blue-700 ring-blue-100 dark:bg-blue-950/30 dark:text-blue-400 dark:ring-blue-800",
  Scheduled: "bg-amber-50 text-amber-700 ring-amber-100 dark:bg-amber-950/30 dark:text-amber-400 dark:ring-amber-800",
  "On Hold": "bg-red-50 text-red-700 ring-red-100 dark:bg-red-950/30 dark:text-red-400 dark:ring-red-800",
};

const departments = ["All Departments", "Engineering", "Sales", "Marketing", "Finance", "HR", "Support"];
const statusFilters = ["All Status", "Paid", "Processing", "Scheduled", "On Hold"];

function PayrollPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDept, setSelectedDept] = useState("All Departments");
  const [selectedStatus, setSelectedStatus] = useState("All Status");

  const filteredPayroll = useMemo(() => {
    return payrollData.filter((record) => {
      const searchValue = searchTerm.toLowerCase();
      const matchesSearch =
        record.name.toLowerCase().includes(searchValue) ||
        record.employeeId.toLowerCase().includes(searchValue);

      const matchesDept =
        selectedDept === "All Departments" || record.department === selectedDept;

      const matchesStatus =
        selectedStatus === "All Status" || record.status === selectedStatus;

      return matchesSearch && matchesDept && matchesStatus;
    });
  }, [searchTerm, selectedDept, selectedStatus]);

  const stats = [
    {
      title: "Total Payroll (Monthly)",
      value: "₹4.2M",
      description: "Company-wide cost",
      trend: "+2.4%",
      trendType: "up" as const,
      accent: "blue" as const,
      icon: <Wallet size={22} />,
    },
    {
      title: "Avg Net Pay",
      value: "₹82,450",
      description: "Per employee average",
      trend: "+1.2%",
      trendType: "up" as const,
      accent: "emerald" as const,
      icon: <Banknote size={22} />,
    },
    {
      title: "Pending Payments",
      value: "14",
      description: "Current cycle processing",
      trend: "-5",
      trendType: "up" as const,
      accent: "amber" as const,
      icon: <CreditCard size={22} />,
    },
    {
      title: "Total Deductions",
      value: "₹154K",
      description: "Tax and benefits",
      trend: "+0.8%",
      trendType: "down" as const,
      accent: "slate" as const,
      icon: <Receipt size={22} />,
    },
  ];

  return (
    <section className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 rounded-3xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 shadow-sm lg:flex-row lg:items-center transition-colors duration-300">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
            Financial Management
          </p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900 dark:text-zinc-100">
            Payroll Overview
          </h1>
          <p className="mt-2 text-slate-600 dark:text-zinc-400">
            Manage employee salaries, bonuses, deductions, and financial reports.
          </p>
        </div>

        <div className="flex gap-3">
          <button className="flex items-center gap-2 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-800 px-5 py-3 text-sm font-semibold text-slate-700 dark:text-zinc-300 transition hover:bg-slate-50 dark:hover:bg-zinc-700">
            <Download size={18} />
            Export CSV
          </button>
          <button className="flex items-center gap-2 rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 shadow-lg shadow-blue-600/20 active:scale-95">
            <Plus size={18} />
            Process Payroll
          </button>
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

      {/* Main Content Area */}
      <div className="grid gap-6 xl:grid-cols-[1fr_350px]">
        <div className="space-y-6">
          {/* Filters */}
          <div className="rounded-3xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 shadow-sm transition-colors duration-300">
            <div className="grid gap-4 md:grid-cols-[1fr_200px_180px]">
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950 px-4 py-3 focus-within:border-blue-500 transition-all">
                <Search size={18} className="text-slate-400" />
                <input
                  type="text"
                  placeholder="Search by name or employee ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-transparent text-sm text-slate-700 dark:text-zinc-200 outline-none placeholder:text-slate-400"
                />
              </div>

              <select
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
                className="rounded-2xl border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950 px-4 py-3 text-sm text-slate-700 dark:text-zinc-200 outline-none cursor-pointer focus:border-blue-500 transition-all"
              >
                {departments.map((dept) => (
                  <option key={dept} value={dept} className="dark:bg-zinc-900">{dept}</option>
                ))}
              </select>

              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="rounded-2xl border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950 px-4 py-3 text-sm text-slate-700 dark:text-zinc-200 outline-none cursor-pointer focus:border-blue-500 transition-all"
              >
                {statusFilters.map((status) => (
                  <option key={status} value={status} className="dark:bg-zinc-900">{status}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Payroll Table */}
          <div className="overflow-hidden rounded-3xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm transition-colors duration-300">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1000px] border-collapse">
                <thead className="bg-slate-50 dark:bg-zinc-950/50">
                  <tr className="text-left text-sm font-semibold text-slate-600 dark:text-zinc-400">
                    <th className="px-6 py-4">Employee</th>
                    <th className="px-6 py-4 text-right">Basic Salary</th>
                    <th className="px-6 py-4 text-right">Bonuses</th>
                    <th className="px-6 py-4 text-right">Deductions</th>
                    <th className="px-6 py-4 text-right font-bold">Net Pay</th>
                    <th className="px-6 py-4 text-center">Status</th>
                    <th className="px-6 py-4">Pay Date</th>
                    <th className="px-6 py-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-zinc-800">
                  {filteredPayroll.map((record) => (
                    <tr key={record.id} className="text-sm transition hover:bg-slate-50 dark:hover:bg-zinc-800/50">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-zinc-800 font-bold text-slate-600 dark:text-zinc-300 text-xs">
                            {record.name.split(" ").map(n => n[0]).join("")}
                          </div>
                          <div>
                            <p className="font-semibold text-slate-900 dark:text-zinc-100">{record.name}</p>
                            <p className="text-xs text-slate-500 dark:text-zinc-500">{record.department}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right text-slate-600 dark:text-zinc-400">
                        ₹{record.basicSalary.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 text-right text-emerald-600 dark:text-emerald-400 font-medium">
                        +₹{record.bonuses.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 text-right text-red-600 dark:text-red-400 font-medium">
                        -₹{record.deductions.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 text-right font-bold text-slate-900 dark:text-zinc-100">
                        ₹{record.netPay.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className={`rounded-full px-3 py-1 text-[11px] font-bold ring-1 ${statusStyles[record.status]}`}>
                          {record.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-slate-500 dark:text-zinc-500 text-xs">
                        {record.paymentDate}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="inline-flex items-center gap-1 rounded-xl border border-slate-200 dark:border-zinc-800 px-3 py-2 text-xs font-semibold text-slate-700 dark:text-zinc-300 transition hover:bg-slate-100 dark:hover:bg-zinc-800">
                          Payslip <ChevronRight size={14} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Sidebar Insights */}
        <div className="space-y-6">
          {/* AI Insights */}
          <div className="rounded-3xl border border-blue-100 dark:border-zinc-800 bg-blue-50/50 dark:bg-zinc-900/50 p-6 shadow-sm transition-colors duration-300">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-900/20">
                <PieChart size={20} />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-zinc-100">AI Payroll Insight</h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-zinc-400">
              We've identified a <strong>₹24,000 potential saving</strong> in tax deductions for the Sales department by optimizing the allowance structures.
            </p>
            <div className="mt-4 flex items-center gap-2 rounded-xl bg-white dark:bg-zinc-950 p-3 shadow-sm ring-1 ring-blue-100 dark:ring-zinc-800">
              <TrendingDown size={16} className="text-emerald-500" />
              <span className="text-xs font-medium text-slate-700 dark:text-zinc-300">Lower tax liability predicted</span>
            </div>
          </div>

          {/* Department Breakdown */}
          <div className="rounded-3xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm transition-colors duration-300">
            <h3 className="font-bold text-slate-900 dark:text-zinc-100">Cost Breakdown</h3>
            <p className="text-xs text-slate-500 dark:text-zinc-500 mt-1">Payroll distribution by department</p>
            
            <div className="mt-6 space-y-4">
              {[
                { dept: "Engineering", percent: 45, color: "bg-blue-600" },
                { dept: "Sales", percent: 25, color: "bg-emerald-500" },
                { dept: "Marketing", percent: 15, color: "bg-amber-500" },
                { dept: "Other", percent: 15, color: "bg-zinc-500" },
              ].map((item) => (
                <div key={item.dept}>
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-semibold text-slate-700 dark:text-zinc-300">{item.dept}</span>
                    <span className="text-slate-500 dark:text-zinc-500">{item.percent}%</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-slate-100 dark:bg-zinc-800 overflow-hidden">
                    <div className={`h-full ${item.color}`} style={{ width: `${item.percent}%` }} />
                  </div>
                </div>
              ))}
            </div>
            
            <button className="mt-6 w-full flex items-center justify-center gap-2 rounded-2xl border border-slate-200 dark:border-zinc-800 py-3 text-sm font-semibold text-slate-700 dark:text-zinc-300 transition hover:bg-slate-50 dark:hover:bg-zinc-800">
              View Detailed Analytics
            </button>
          </div>

          {/* Recent Activity */}
          <div className="rounded-3xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm transition-colors duration-300">
            <h3 className="font-bold text-slate-900 dark:text-zinc-100">Recent Activity</h3>
            <div className="mt-4 space-y-4">
              <div className="flex gap-3">
                <div className="h-2 w-2 mt-1.5 rounded-full bg-emerald-500" />
                <div>
                  <p className="text-xs font-semibold text-slate-800 dark:text-zinc-200">May Salaries Disbursed</p>
                  <p className="text-[10px] text-slate-400 dark:text-zinc-500 font-bold uppercase">Yesterday</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="h-2 w-2 mt-1.5 rounded-full bg-blue-500" />
                <div>
                  <p className="text-xs font-semibold text-slate-800 dark:text-zinc-200">Bonus approved for Engineering</p>
                  <p className="text-[10px] text-slate-400 dark:text-zinc-500 font-bold uppercase">2 days ago</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="h-2 w-2 mt-1.5 rounded-full bg-amber-500" />
                <div>
                  <p className="text-xs font-semibold text-slate-800 dark:text-zinc-200">New tax policy updated</p>
                  <p className="text-[10px] text-slate-400 dark:text-zinc-500 font-bold uppercase">1 week ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PayrollPage;
