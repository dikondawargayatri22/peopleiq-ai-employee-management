import { useNavigate } from "react-router-dom";
import {
  BarChart3,
  Bot,
  Building2,
  CalendarDays,
  Clock,
  LayoutDashboard,
  Settings,
  UserPlus,
  Users,
  Wallet,
  ArrowRight,
  Sparkles,
  TrendingUp,
  ChevronRight,
  Briefcase,
  Layers,
} from "lucide-react";

type ModuleCard = {
  title: string;
  description: string;
  path: string;
  icon: React.ElementType;
  color: string;
  badge: string;
};

const modules: ModuleCard[] = [
  {
    title: "Dashboard",
    description: "Real-time workforce intelligence and AI-powered performance insights.",
    path: "/dashboard",
    icon: LayoutDashboard,
    color: "from-blue-500 to-cyan-500",
    badge: "Analytics Hub",
  },
  {
    title: "Employees",
    description: "Manage employee directory, profiles, roles, and structural hierarchy.",
    path: "/employees",
    icon: Users,
    color: "from-emerald-500 to-teal-500",
    badge: "Workforce",
  },
  {
    title: "Attendance",
    description: "Track work hours, clock-in times, location logs, and daily status.",
    path: "/attendance",
    icon: Clock,
    color: "from-amber-500 to-orange-500",
    badge: "Operations",
  },
  {
    title: "Leave",
    description: "Manage leave balances, view trends, and approve time-off requests.",
    path: "/leaves",
    icon: CalendarDays,
    color: "from-red-500 to-rose-500",
    badge: "Time Off",
  },
  {
    title: "Performance",
    description: "Track reviews, skill distributions, and overall workforce growth.",
    path: "/performance",
    icon: BarChart3,
    color: "from-purple-500 to-indigo-500",
    badge: "Reviews",
  },
  {
    title: "Payroll",
    description: "Monitor base salaries, bonuses, tax deductions, and payment runs.",
    path: "/payroll",
    icon: Wallet,
    color: "from-pink-500 to-fuchsia-500",
    badge: "Finance",
  },
  {
    title: "Recruitment",
    description: "Run end-to-end talent sourcing, schedule interviews, and track offers.",
    path: "/recruitment",
    icon: UserPlus,
    color: "from-violet-500 to-purple-600",
    badge: "Hiring",
  },
  {
    title: "AI Assistant",
    description: "Ask natural language questions about attrition risk, reviews, and policies.",
    path: "/ai-assistant",
    icon: Bot,
    color: "from-indigo-500 to-blue-600",
    badge: "AI Powered",
  },
  {
    title: "Settings",
    description: "Configure security keys, themes, notifications, and profile settings.",
    path: "/settings",
    icon: Settings,
    color: "from-slate-500 to-slate-700",
    badge: "System",
  },
];

const departmentsData = [
  { name: "Engineering", count: 420, color: "bg-blue-500", percentage: "33%" },
  { name: "Sales", count: 240, color: "bg-emerald-500", percentage: "19%" },
  { name: "Marketing", count: 150, color: "bg-amber-500", percentage: "12%" },
  { name: "Finance", count: 110, color: "bg-purple-500", percentage: "9%" },
  { name: "HR & Ops", count: 80, color: "bg-rose-500", percentage: "6%" },
  { name: "Support", count: 140, color: "bg-teal-500", percentage: "11%" },
  { name: "Design", count: 108, color: "bg-indigo-500", percentage: "9%" },
];

function OverviewPage() {
  const navigate = useNavigate();

  return (
    <section className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Banner / Header */}
      <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200/60 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-10 shadow-sm transition-all duration-300">
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="space-y-4">
            <p className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              <Sparkles size={13} className="animate-pulse" />
              Unified Enterprise Portal
            </p>

            <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white lg:text-5xl">
              Welcome back, <span className="text-blue-600 dark:text-blue-400">Demo User</span>
            </h1>

            <p className="max-w-2xl text-lg font-medium leading-relaxed text-slate-500 dark:text-zinc-400">
              Your central system overview and shortcut terminal. Access any enterprise module or monitor key company-wide metrics down below.
            </p>
          </div>

          <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-blue-50 dark:bg-zinc-800 shadow-md">
            <Building2 size={44} className="text-blue-600 dark:text-blue-400" />
          </div>
        </div>

        {/* Subtle background glow */}
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/5 blur-[100px]" />
        <div className="absolute -bottom-20 left-20 h-64 w-64 rounded-full bg-emerald-500/5 blur-[100px]" />
      </div>

      {/* Workspace Modules Header */}
      <div className="space-y-2">
        <h2 className="text-2xl font-black text-slate-950 dark:text-zinc-100 tracking-tight">
          Workspace Modules
        </h2>
        <p className="text-sm font-medium text-slate-500 dark:text-zinc-400">
          Navigate quickly to any management portal by clicking on its card.
        </p>
      </div>

      {/* Modules Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {modules.map((mod) => {
          const Icon = mod.icon;
          return (
            <button
              key={mod.title}
              onClick={() => navigate(mod.path)}
              className="group relative flex flex-col text-left rounded-[2rem] border border-slate-200/60 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/30 focus:outline-none focus:ring-4 focus:ring-blue-500/15"
            >
              {/* Top border neon glow on hover */}
              <div className={`absolute top-0 inset-x-12 h-1 bg-gradient-to-r ${mod.color} rounded-b-full opacity-0 group-hover:opacity-100 transition-all duration-300`} />

              <div className="flex items-center justify-between w-full">
                <span className="rounded-full bg-slate-50 dark:bg-zinc-800 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-zinc-400">
                  {mod.badge}
                </span>

                <ChevronRight size={16} className="text-slate-400 dark:text-zinc-600 group-hover:translate-x-1 transition-transform" />
              </div>

              <div className="mt-5 flex items-center gap-4">
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${mod.color} text-white shadow-lg shadow-blue-500/10`}>
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {mod.title}
                  </h3>
                  <p className="text-xs font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest mt-0.5">
                    Launch Module
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm font-medium leading-relaxed text-slate-500 dark:text-zinc-400 flex-1">
                {mod.description}
              </p>

              <div className="mt-5 flex items-center gap-1 text-xs font-black uppercase tracking-widest text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                Enter
                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          );
        })}
      </div>

      {/* Enterprise Metrics Section Header */}
      <div className="space-y-2 pt-6 border-t border-slate-200/60 dark:border-zinc-800/60">
        <h2 className="text-2xl font-black text-slate-950 dark:text-zinc-100 tracking-tight">
          Enterprise Analytics & Metrics
        </h2>
        <p className="text-sm font-medium text-slate-500 dark:text-zinc-400">
          Real-time organizational health indices and active pipelines.
        </p>
      </div>

      {/* Metrics Row */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Total Employees Metric Card */}
        <div className="group rounded-[2rem] border border-slate-200/60 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 shadow-sm transition-all duration-300 hover:shadow-lg">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <p className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-zinc-500">
                Total Workforce
              </p>
              <h3 className="text-5xl font-black text-slate-900 dark:text-white tracking-tight pt-2">
                1,248
              </h3>
            </div>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400">
              <Users size={26} />
            </div>
          </div>

          <p className="mt-4 flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
            <TrendingUp size={14} />
            +4.3% YoY growth in headcount
          </p>

          <div className="mt-8 space-y-4 pt-6 border-t border-slate-100 dark:border-zinc-800/50">
            <h4 className="text-xs font-black text-slate-400 dark:text-zinc-500 uppercase tracking-widest">
              Live Presence Breakdown
            </h4>

            <div className="space-y-3">
              <div>
                <div className="flex items-center justify-between text-xs font-bold mb-1">
                  <span className="text-slate-600 dark:text-zinc-400">Present Office (Checked-In)</span>
                  <span className="text-slate-900 dark:text-white">1,103 <span className="text-slate-400 font-normal">(88.4%)</span></span>
                </div>
                <div className="h-2 w-full bg-slate-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: "88.4%" }} />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs font-bold mb-1">
                  <span className="text-slate-600 dark:text-zinc-400">Remote / Field Ops</span>
                  <span className="text-slate-900 dark:text-white">88 <span className="text-slate-400 font-normal">(7.1%)</span></span>
                </div>
                <div className="h-2 w-full bg-slate-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: "7.1%" }} />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs font-bold mb-1">
                  <span className="text-slate-600 dark:text-zinc-400">On Approved Leave</span>
                  <span className="text-slate-900 dark:text-white">57 <span className="text-slate-400 font-normal">(4.5%)</span></span>
                </div>
                <div className="h-2 w-full bg-slate-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500 rounded-full" style={{ width: "4.5%" }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Departments Card */}
        <div className="group rounded-[2rem] border border-slate-200/60 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 shadow-sm transition-all duration-300 hover:shadow-lg">
          <div className="flex items-start justify-between mb-4">
            <div className="space-y-1">
              <p className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-zinc-500">
                Departments Overview
              </p>
              <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">
                7 Major Units
              </h3>
            </div>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400">
              <Building2 size={26} />
            </div>
          </div>

          <div className="space-y-3.5 pt-4">
            {departmentsData.map((dept) => (
              <div key={dept.name} className="flex flex-col">
                <div className="flex items-center justify-between text-xs font-bold mb-1">
                  <span className="text-slate-700 dark:text-zinc-300 flex items-center gap-1.5">
                    <span className={`h-2.5 w-2.5 rounded-full ${dept.color}`} />
                    {dept.name}
                  </span>
                  <span className="text-slate-900 dark:text-white">
                    {dept.count} <span className="text-slate-400 font-normal">({dept.percentage})</span>
                  </span>
                </div>
                <div className="h-1.5 w-full bg-slate-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                  <div className={`h-full ${dept.color} rounded-full`} style={{ width: dept.percentage }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recruitment Metric Card */}
        <div className="group rounded-[2rem] border border-slate-200/60 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 shadow-sm transition-all duration-300 hover:shadow-lg">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <p className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-zinc-500">
                Hiring Candidate Pool
              </p>
              <h3 className="text-5xl font-black text-slate-900 dark:text-white tracking-tight pt-2">
                842
              </h3>
            </div>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-400">
              <UserPlus size={26} />
            </div>
          </div>

          <p className="mt-4 flex items-center gap-1 text-xs font-bold text-purple-600 dark:text-purple-400">
            <TrendingUp size={14} />
            +15% YoY increase in candidate pipeline
          </p>

          <div className="mt-8 space-y-4 pt-6 border-t border-slate-100 dark:border-zinc-800/50">
            <h4 className="text-xs font-black text-slate-400 dark:text-zinc-500 uppercase tracking-widest">
              Active Candidate Stage Breakdown
            </h4>

            <div className="space-y-3">
              <div>
                <div className="flex items-center justify-between text-xs font-bold mb-1">
                  <span className="text-slate-600 dark:text-zinc-400">New Applied / Sourced</span>
                  <span className="text-slate-900 dark:text-white">620 <span className="text-slate-400 font-normal">(73.6%)</span></span>
                </div>
                <div className="h-2 w-full bg-slate-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-slate-400 rounded-full" style={{ width: "73.6%" }} />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs font-bold mb-1">
                  <span className="text-slate-600 dark:text-zinc-400">Interviews & Technical Rounds</span>
                  <span className="text-slate-900 dark:text-white">188 <span className="text-slate-400 font-normal">(22.3%)</span></span>
                </div>
                <div className="h-2 w-full bg-slate-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: "22.3%" }} />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs font-bold mb-1">
                  <span className="text-slate-600 dark:text-zinc-400">Offers Extended / Pending Acceptance</span>
                  <span className="text-slate-900 dark:text-white">34 <span className="text-slate-400 font-normal">(4.1%)</span></span>
                </div>
                <div className="h-2 w-full bg-slate-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: "4.1%" }} />
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-slate-50 dark:bg-zinc-800/40 p-4 border border-slate-100 dark:border-zinc-800 flex items-center justify-between mt-3 text-xs font-bold text-slate-700 dark:text-zinc-300">
              <span className="flex items-center gap-2">
                <Briefcase size={15} className="text-purple-600 dark:text-purple-400" />
                Active Job Positions Open
              </span>
              <span className="bg-purple-100 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 rounded-md px-2 py-0.5">
                24 Active
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OverviewPage;