import {
  Award,
  BarChart3,
  CheckCircle2,
  ChevronRight,
  Download,
  Filter,
  Search,
  Star,
  Target,
  TrendingUp,
  UserCheck,
} from "lucide-react";
import { useMemo, useState } from "react";
import StatCard from "../components/dashboard/StartCard";
import PerformanceDistributionChart from "../components/dashboard/PerformanceDistributionChart";

type PerformanceRating = "Excellent" | "Good" | "Average" | "Below Average" | "Poor";

type PerformanceReview = {
  id: number;
  name: string;
  employeeId: string;
  department: string;
  rating: PerformanceRating;
  score: number;
  lastReview: string;
  nextReview: string;
  status: "Completed" | "Pending" | "Overdue";
};

const reviewsData: PerformanceReview[] = [
  {
    id: 1,
    name: "Neha Sharma",
    employeeId: "E10234",
    department: "Engineering",
    rating: "Excellent",
    score: 9.4,
    lastReview: "2025-12-15",
    nextReview: "2026-06-15",
    status: "Pending",
  },
  {
    id: 2,
    name: "Rahul Verma",
    employeeId: "E09781",
    department: "Sales",
    rating: "Good",
    score: 8.2,
    lastReview: "2026-01-20",
    nextReview: "2026-07-20",
    status: "Completed",
  },
  {
    id: 3,
    name: "Priya Nair",
    employeeId: "E10456",
    department: "Marketing",
    rating: "Average",
    score: 7.1,
    lastReview: "2025-11-02",
    nextReview: "2026-05-02",
    status: "Overdue",
  },
  {
    id: 4,
    name: "Amit Patel",
    employeeId: "E08823",
    department: "Finance",
    rating: "Excellent",
    score: 9.1,
    lastReview: "2026-03-10",
    nextReview: "2026-09-10",
    status: "Completed",
  },
  {
    id: 5,
    name: "Sanjana Reddy",
    employeeId: "E10112",
    department: "HR",
    rating: "Good",
    score: 8.5,
    lastReview: "2026-02-15",
    nextReview: "2026-08-15",
    status: "Completed",
  },
  {
    id: 6,
    name: "Karan Singh",
    employeeId: "E09345",
    department: "Support",
    rating: "Below Average",
    score: 5.8,
    lastReview: "2026-01-05",
    nextReview: "2026-07-05",
    status: "Pending",
  },
];

const ratingStyles: Record<PerformanceRating, string> = {
  Excellent: "bg-blue-50 text-blue-700 ring-blue-100 dark:bg-blue-900/20 dark:text-blue-400 dark:ring-blue-900/30",
  Good: "bg-emerald-50 text-emerald-700 ring-emerald-100 dark:bg-emerald-950/30 dark:text-emerald-400 dark:ring-emerald-800",
  Average: "bg-amber-50 text-amber-700 ring-amber-100 dark:bg-amber-950/30 dark:text-amber-400 dark:ring-amber-800",
  "Below Average": "bg-orange-50 text-orange-700 ring-orange-100 dark:bg-orange-950/30 dark:text-orange-400 dark:ring-orange-800",
  Poor: "bg-red-50 text-red-700 ring-red-100 dark:bg-red-950/30 dark:text-red-400 dark:ring-red-800",
};

const statusStyles = {
  Completed: "bg-emerald-50 text-emerald-700 ring-emerald-100 dark:bg-emerald-950/30 dark:text-emerald-400 dark:ring-emerald-800",
  Pending: "bg-amber-50 text-amber-700 ring-amber-100 dark:bg-amber-950/30 dark:text-amber-400 dark:ring-amber-800",
  Overdue: "bg-red-50 text-red-700 ring-red-100 dark:bg-red-950/30 dark:text-red-400 dark:ring-red-800",
};

const departments = ["All Departments", "Engineering", "Sales", "Marketing", "Finance", "HR", "Support"];
const statusFilters = ["All Status", "Completed", "Pending", "Overdue"];

function PerformancePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDept, setSelectedDept] = useState("All Departments");
  const [selectedStatus, setSelectedStatus] = useState("All Status");

  const filteredReviews = useMemo(() => {
    return reviewsData.filter((review) => {
      const searchValue = searchTerm.toLowerCase();
      const matchesSearch =
        review.name.toLowerCase().includes(searchValue) ||
        review.employeeId.toLowerCase().includes(searchValue);

      const matchesDept =
        selectedDept === "All Departments" || review.department === selectedDept;

      const matchesStatus =
        selectedStatus === "All Status" || review.status === selectedStatus;

      return matchesSearch && matchesDept && matchesStatus;
    });
  }, [searchTerm, selectedDept, selectedStatus]);

  const stats = [
    {
      title: "Avg Performance Score",
      value: "8.4/10",
      description: "Company-wide average",
      trend: "+0.6",
      trendType: "up" as const,
      accent: "purple" as const,
      icon: <Star size={22} />,
    },
    {
      title: "Reviews Completed",
      value: "942",
      description: "In the current cycle",
      trend: "+12%",
      trendType: "up" as const,
      accent: "emerald" as const,
      icon: <CheckCircle2 size={22} />,
    },
    {
      title: "Top Performers",
      value: "156",
      description: "Score above 9.0",
      trend: "+24",
      trendType: "up" as const,
      accent: "blue" as const,
      icon: <Award size={22} />,
    },
    {
      title: "Goal Completion",
      value: "78%",
      description: "Overall target progress",
      trend: "+5%",
      trendType: "up" as const,
      accent: "blue" as const,
      icon: <Target size={22} />,
    },
  ];

  return (
    <section className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 rounded-3xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 shadow-sm lg:flex-row lg:items-center transition-colors duration-300">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
            Performance Management
          </p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900 dark:text-zinc-100">
            Performance Analytics
          </h1>
          <p className="mt-2 text-slate-600 dark:text-zinc-400">
            Track employee growth, conduct reviews, and analyze workforce performance trends.
          </p>
        </div>

        <div className="flex gap-3">
          <button className="flex items-center gap-2 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-800 px-5 py-3 text-sm font-semibold text-slate-700 dark:text-zinc-300 transition hover:bg-slate-50 dark:hover:bg-zinc-700">
            <Download size={18} />
            Export Data
          </button>
          <button className="flex items-center gap-2 rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 shadow-lg shadow-blue-600/20 active:scale-95">
            <TrendingUp size={18} />
            Start New Cycle
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

      <div className="grid gap-6 xl:grid-cols-[1fr_400px]">
        {/* Main Reviews Section */}
        <div className="space-y-6">
          {/* Filters */}
          <div className="rounded-3xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 shadow-sm transition-colors duration-300">
            <div className="grid gap-4 md:grid-cols-[1fr_200px_180px]">
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

          {/* Table */}
          <div className="overflow-hidden rounded-3xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm transition-colors duration-300">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px] border-collapse">
                <thead className="bg-slate-50 dark:bg-zinc-950/50">
                  <tr className="text-left text-sm font-semibold text-slate-600 dark:text-zinc-400">
                    <th className="px-6 py-4">Employee</th>
                    <th className="px-6 py-4">Rating</th>
                    <th className="px-6 py-4">Score</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Last Review</th>
                    <th className="px-6 py-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-zinc-800">
                  {filteredReviews.map((review) => (
                    <tr key={review.id} className="text-sm transition hover:bg-slate-50 dark:hover:bg-zinc-800/50">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 dark:bg-zinc-800 font-bold text-blue-600 dark:text-blue-400">
                            {review.name.split(" ").map(n => n[0]).join("")}
                          </div>
                          <div>
                            <p className="font-semibold text-slate-900 dark:text-zinc-100">{review.name}</p>
                            <p className="text-xs text-slate-500 dark:text-zinc-500">{review.department}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${ratingStyles[review.rating]}`}>
                          {review.rating}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-16 overflow-hidden rounded-full bg-slate-100 dark:bg-zinc-800">
                            <div 
                              className="h-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.4)]" 
                              style={{ width: `${review.score * 10}%` }}
                            />
                          </div>
                          <span className="font-semibold text-slate-700 dark:text-zinc-300">{review.score}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${statusStyles[review.status]}`}>
                          {review.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-slate-600 dark:text-zinc-400">
                        {review.lastReview}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="inline-flex items-center gap-1 rounded-xl border border-slate-200 dark:border-zinc-800 px-3 py-2 text-xs font-semibold text-slate-700 dark:text-zinc-300 transition hover:bg-slate-100 dark:hover:bg-zinc-800">
                          Review <ChevronRight size={14} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Sidebar Analytics */}
        <div className="space-y-6">
          <PerformanceDistributionChart />
          
          <div className="rounded-3xl border border-blue-100 dark:border-zinc-800 bg-blue-50/50 dark:bg-zinc-900/50 p-6 shadow-sm transition-colors duration-300">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600 text-white">
                <UserCheck size={20} />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-zinc-100">AI Performance Insight</h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-zinc-400">
              The Engineering department has seen a <strong>15% increase</strong> in average scores since the introduction of the new mentorship program. 4 employees are currently flagged for high potential.
            </p>
            <button className="mt-5 w-full rounded-2xl bg-white dark:bg-zinc-800 py-3 text-sm font-semibold text-blue-600 dark:text-blue-400 shadow-sm ring-1 ring-blue-100 dark:ring-zinc-700 transition hover:bg-blue-50 dark:hover:bg-zinc-700">
              View Detailed AI Report
            </button>
          </div>

          <div className="rounded-3xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm transition-colors duration-300">
            <h3 className="font-bold text-slate-900 dark:text-zinc-100">Recent Milestones</h3>
            <div className="mt-4 space-y-4">
              {[
                { title: "Frontend Team", desc: "Completed Sprint Goals", time: "2h ago", color: "blue" },
                { title: "Rahul Verma", desc: "Exceeded Sales Target", time: "5h ago", color: "emerald" },
                { title: "Design Audit", desc: "98% Compliance Score", time: "1d ago", color: "purple" },
              ].map((m, i) => (
                <div key={i} className="flex gap-3">
                  <div className={`mt-1.5 h-2 w-2 shrink-0 rounded-full bg-${m.color}-500`} />
                  <div>
                    <p className="text-sm font-semibold text-slate-800 dark:text-zinc-200">{m.title}</p>
                    <p className="text-xs text-slate-500 dark:text-zinc-400">{m.desc}</p>
                    <p className="mt-1 text-[10px] text-slate-400 dark:text-zinc-500 uppercase font-bold">{m.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PerformancePage;
