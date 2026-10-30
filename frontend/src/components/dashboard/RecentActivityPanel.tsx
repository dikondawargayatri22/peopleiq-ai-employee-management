import {
  BadgeCheck,
  CalendarPlus,
  CircleDollarSign,
  ClipboardList,
  FileCheck,
  UserPlus,
} from "lucide-react";

const activities = [
  {
    title: "Neha Sharma completed onboarding",
    description: "All onboarding tasks completed successfully.",
    time: "Today, 10:30 AM",
    type: "Onboarding",
    icon: UserPlus,
    color: "bg-emerald-50 text-emerald-700",
  },
  {
    title: "Rahul Verma submitted leave request",
    description: "Requested casual leave for 2 days.",
    time: "Today, 09:15 AM",
    type: "Leave",
    icon: CalendarPlus,
    color: "bg-amber-50 text-amber-700",
  },
  {
    title: "Payroll for May has been processed",
    description: "Monthly payroll summary is ready for review.",
    time: "Yesterday, 06:45 PM",
    type: "Payroll",
    icon: CircleDollarSign,
    color: "bg-blue-50 text-blue-700",
  },
  {
    title: "Performance review scheduled",
    description: "Sales team review scheduled for Friday.",
    time: "Yesterday, 04:20 PM",
    type: "Performance",
    icon: ClipboardList,
    color: "bg-purple-50 text-purple-700",
  },
  {
    title: "Policy document acknowledged",
    description: "43 employees acknowledged updated remote-work policy.",
    time: "2 days ago",
    type: "Policy",
    icon: FileCheck,
    color: "bg-slate-100 text-slate-700",
  },
];

function RecentActivityPanel() {
  return (
    <section className="rounded-3xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm transition-colors duration-300">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="rounded-2xl bg-blue-50 dark:bg-zinc-800 p-2 text-blue-700 dark:text-blue-400">
              <BadgeCheck size={20} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-zinc-100">
              Recent Activity
            </h3>
          </div>

          <p className="mt-2 text-sm text-slate-500 dark:text-zinc-500">
            Latest HR events and workforce updates.
          </p>
        </div>

        <button
          type="button"
          className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
        >
          View all
        </button>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon;

          return (
            <article
              key={activity.title}
              className="flex gap-4 rounded-3xl border border-slate-100 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-900/50 p-4 transition-all hover:bg-slate-100 dark:hover:bg-zinc-800/50"
            >
              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${activity.color} dark:bg-zinc-800 dark:text-zinc-100`}
              >
                <Icon size={20} />
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h4 className="font-semibold text-slate-900 dark:text-zinc-100">
                    {activity.title}
                  </h4>

                  <span className="rounded-full bg-white dark:bg-zinc-800 px-2.5 py-1 text-xs font-semibold text-slate-500 dark:text-zinc-500">
                    {activity.type}
                  </span>
                </div>

                <p className="mt-1 text-sm text-slate-600 dark:text-zinc-400">
                  {activity.description}
                </p>

                <p className="mt-2 text-xs font-medium text-slate-400 dark:text-zinc-500">
                  {activity.time}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default RecentActivityPanel;