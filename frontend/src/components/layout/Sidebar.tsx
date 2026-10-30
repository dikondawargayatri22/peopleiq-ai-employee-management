import {
  BarChart3,
  Bot,
  CalendarDays,
  Clock,
  Layers,
  LayoutDashboard,
  LogOut,
  Settings,
  ShieldCheck,
  UserPlus,
  Users,
  Wallet,
} from "lucide-react";
import { NavLink } from "react-router-dom";

type SidebarItem = {
  label: string;
  path: string;
  icon: React.ElementType;
  badge?: string;
};

const sidebarItems: SidebarItem[] = [
  {
    label: "Overview",
    path: "/overview",
    icon: Layers,
  },
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Employees",
    path: "/employees",
    icon: Users,
  },
  {
    label: "Attendance",
    path: "/attendance",
    icon: Clock,
  },
  {
    label: "Leave",
    path: "/leaves",
    icon: CalendarDays,
    badge: "5",
  },
  {
    label: "Performance",
    path: "/performance",
    icon: BarChart3,
  },
  {
    label: "Payroll",
    path: "/payroll",
    icon: Wallet,
  },
  {
    label: "Recruitment",
    path: "/recruitment",
    icon: UserPlus,
  },
  {
    label: "AI Assistant",
    path: "/ai-assistant",
    icon: Bot,
    badge: "AI",
  },
  {
    label: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

function Sidebar() {
  return (
    <aside className="hidden min-h-screen w-72 flex-col border-r border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-slate-900 dark:text-zinc-50 lg:flex transition-colors duration-300">
      {/* Brand */}
      <div className="border-b border-slate-200 dark:border-zinc-800 px-6 py-6">
        <NavLink to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 shadow-lg shadow-blue-900/40">
            <Users size={24} className="text-white" />
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-zinc-100">PeopleIQ</h1>
            <p className="text-xs font-medium text-slate-500 dark:text-zinc-400">
              AI-Powered HR Platform
            </p>
          </div>
        </NavLink>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-4 py-5">
        {sidebarItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `group flex w-full items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20"
                    : "text-slate-600 dark:text-zinc-400 hover:bg-slate-50 dark:hover:bg-zinc-900 hover:text-blue-600 dark:hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className="flex items-center gap-3">
                    <Icon
                      size={19}
                      className={
                        isActive
                          ? "text-white"
                          : "text-slate-400 group-hover:text-blue-600 dark:group-hover:text-zinc-100"
                      }
                    />
                    <span>{item.label}</span>
                  </span>

                  {item.badge && (
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                        item.badge === "AI"
                          ? "bg-purple-500/20 text-purple-600 dark:text-purple-300"
                          : "bg-red-500 text-white"
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* AI Status */}
      <div className="px-4 pb-4">
        <div className="rounded-3xl border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-900/50 p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
              <ShieldCheck size={20} />
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-zinc-100">AI Status</p>
              <p className="text-xs text-slate-500 dark:text-zinc-500">All models active</p>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between rounded-2xl bg-white dark:bg-zinc-950 px-3 py-2 shadow-sm">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
              <span className="text-xs text-slate-600 dark:text-zinc-300">Live monitoring</span>
            </div>

            <span className="text-xs text-slate-400">2m ago</span>
          </div>
        </div>
      </div>

      {/* User Section */}
      <div className="border-t border-slate-200 dark:border-zinc-800 p-4">
        <div className="flex items-center justify-between rounded-3xl bg-slate-50 dark:bg-zinc-900/50 p-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
              HR
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-zinc-100">HR Manager</p>
              <p className="text-xs text-slate-500 dark:text-zinc-400">Admin Access</p>
            </div>
          </div>

          <button
            type="button"
            className="rounded-xl p-2 text-slate-400 transition hover:bg-slate-200 dark:hover:bg-zinc-800 hover:text-slate-900 dark:hover:text-white"
            aria-label="Logout"
          >
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
