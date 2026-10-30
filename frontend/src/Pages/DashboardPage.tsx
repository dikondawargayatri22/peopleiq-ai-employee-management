import {
  AlertTriangle,
  CalendarDays,
  ClipboardCheck,
  Star,
  UserCheck,
  Users,
} from "lucide-react";

import StatCard from "../components/dashboard/StartCard";
import AttendanceTrendChart from "../components/dashboard/AttendanceTrendChart";
import DepartmentHeadcountChart from "../components/dashboard/DepartmentHeadcountChart";
import PerformanceDistributionChart from "../components/dashboard/PerformanceDistributionChart";
import LeaveUtilizationCard from "../components/dashboard/LeaveUtilizationCard";
import AIInsightsPanel from "../components/dashboard/AIInsightsPanel";
import RecentActivityPanel from "../components/dashboard/RecentActivityPanel";

const dashboardStats = [
  {
    title: "Total Employees",
    value: "1,248",
    description: "Company-wide workforce",
    trend: "+4.3%",
    trendType: "up" as const,
    accent: "blue" as const,
    icon: <Users size={22} />,
  },
  {
    title: "Present Today",
    value: "1,103",
    description: "Checked in today",
    trend: "+2.1%",
    trendType: "up" as const,
    accent: "emerald" as const,
    icon: <UserCheck size={22} />,
  },
  {
    title: "On Leave",
    value: "57",
    description: "Approved leave today",
    trend: "-3.4%",
    trendType: "down" as const,
    accent: "amber" as const,
    icon: <CalendarDays size={22} />,
  },
  {
    title: "Attrition Risk",
    value: "23",
    description: "AI flagged employees",
    trend: "+4",
    trendType: "down" as const,
    accent: "red" as const,
    icon: <AlertTriangle size={22} />,
  },
  {
    title: "Avg Performance Score",
    value: "8.4/10",
    description: "Current review cycle",
    trend: "+0.6",
    trendType: "up" as const,
    accent: "purple" as const,
    icon: <Star size={22} />,
  },
  {
    title: "Pending Approvals",
    value: "14",
    description: "Leaves and requests",
    trend: "-5",
    trendType: "up" as const,
    accent: "slate" as const,
    icon: <ClipboardCheck size={22} />,
  },
];

function DashboardPage() {
  return (
    <section className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200/60 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-10 shadow-sm transition-all duration-300">
        <div className="relative z-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Enterprise Intelligence
          </p>

          <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 dark:text-white lg:text-5xl">
            Workforce <span className="text-blue-600">Performance</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-slate-500 dark:text-zinc-400">
            Real-time analytics and AI-powered insights for your global workforce. 
            Monitor health, attrition, and engagement from a single command center.
          </p>
        </div>
        
        {/* Subtle background glow */}
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/5 blur-[100px]" />
        <div className="absolute -bottom-20 left-20 h-64 w-64 rounded-full bg-purple-500/5 blur-[100px]" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
        {dashboardStats.map((stat) => (
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

      <div className="grid gap-6 xl:grid-cols-2">
        <AttendanceTrendChart />
        <DepartmentHeadcountChart />
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <PerformanceDistributionChart />
        <LeaveUtilizationCard />
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <AIInsightsPanel />
        <RecentActivityPanel />
      </div>
    </section>
  );
}

export default DashboardPage;