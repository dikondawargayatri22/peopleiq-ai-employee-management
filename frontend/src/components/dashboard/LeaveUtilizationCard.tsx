import { CalendarCheck, Clock, Users, ArrowUpRight, Activity } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from "recharts";

const data = [
  { name: "Used", value: 62, color: "#3b82f6" },
  { name: "Available", value: 38, color: "#e2e8f0" },
];

function LeaveUtilizationCard() {
  return (
    <div className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-bold tracking-tight text-slate-900 dark:text-zinc-100">Leave Utilization</h3>
          <p className="text-sm text-slate-500 dark:text-zinc-400">
            Company-wide leave usage overview
          </p>
        </div>
        <div className="flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
          <Activity size={12} />
          <span>Optimal</span>
        </div>
      </div>

      <div className="relative mt-4 h-48">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              startAngle={90}
              endAngle={450}
              dataKey="value"
              stroke="none"
            >
              <Cell fill="#3b82f6" />
              <Cell fill="currentColor" className="text-slate-100 dark:text-zinc-800" />
              <Label
                content={({ viewBox }: any) => {
                  const { cx, cy } = viewBox;
                  return (
                    <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle">
                      <tspan
                        x={cx}
                        y={cy - 4}
                        className="fill-slate-900 text-3xl font-bold dark:fill-zinc-100"
                      >
                        62%
                      </tspan>
                      <tspan
                        x={cx}
                        y={cy + 16}
                        className="fill-slate-500 text-[10px] font-medium uppercase tracking-widest dark:fill-zinc-400"
                      >
                        Utilization
                      </tspan>
                    </text>
                  );
                }}
              />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        <div className="group rounded-2xl border border-slate-100 bg-slate-50/50 p-3 transition-colors hover:bg-slate-50 dark:border-zinc-800 dark:bg-zinc-800/50 dark:hover:bg-zinc-800">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
              <CalendarCheck size={18} />
            </div>
            <div>
              <p className="text-[10px] font-medium uppercase tracking-wider text-slate-500 dark:text-zinc-500">Taken</p>
              <p className="text-sm font-bold text-slate-900 dark:text-zinc-100">9,523 days</p>
            </div>
          </div>
        </div>

        <div className="group rounded-2xl border border-slate-100 bg-slate-50/50 p-3 transition-colors hover:bg-slate-50 dark:border-zinc-800 dark:bg-zinc-800/50 dark:hover:bg-zinc-800">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
              <Clock size={18} />
            </div>
            <div>
              <p className="text-[10px] font-medium uppercase tracking-wider text-slate-500 dark:text-zinc-500">Remaining</p>
              <p className="text-sm font-bold text-slate-900 dark:text-zinc-100">5,837 days</p>
            </div>
          </div>
        </div>

        <div className="group col-span-full rounded-2xl border border-slate-100 bg-slate-50/50 p-3 transition-colors hover:bg-slate-50 dark:border-zinc-800 dark:bg-zinc-800/50 dark:hover:bg-zinc-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400">
                <Users size={18} />
              </div>
              <div>
                <p className="text-[10px] font-medium uppercase tracking-wider text-slate-500 dark:text-zinc-500">On Leave Today</p>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-bold text-slate-900 dark:text-zinc-100">57</p>
                  <span className="flex items-center gap-0.5 text-[10px] font-bold text-emerald-600">
                    <ArrowUpRight size={10} />
                    12%
                  </span>
                </div>
              </div>
            </div>
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-6 w-6 rounded-full border-2 border-white bg-slate-200 dark:border-zinc-900 dark:bg-zinc-700" />
              ))}
              <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-slate-100 text-[8px] font-bold text-slate-500 dark:border-zinc-900 dark:bg-zinc-800">
                +54
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeaveUtilizationCard;