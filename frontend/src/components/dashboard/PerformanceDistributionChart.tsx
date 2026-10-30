import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  Label,
} from "recharts";
import { TrendingUp, Users } from "lucide-react";

const performanceData = [
  { name: "Excellent", value: 28, count: 42, color: "#3b82f6" },
  { name: "Good", value: 42, count: 63, color: "#10b981" },
  { name: "Average", value: 20, count: 30, color: "#f59e0b" },
  { name: "Needs Attention", value: 10, count: 15, color: "#ef4444" },
];

const totalEmployees = performanceData.reduce((acc, curr) => acc + curr.count, 0);

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="rounded-xl border border-slate-200 bg-white/95 p-3 shadow-xl backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/95">
        <p className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-zinc-100">
          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: data.color }} />
          {data.name}
        </p>
        <div className="mt-1 space-y-1 text-xs">
          <div className="flex justify-between gap-4">
            <span className="text-slate-500 dark:text-zinc-400">Percentage</span>
            <span className="font-semibold text-slate-900 dark:text-zinc-100">{data.value}%</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-slate-500 dark:text-zinc-400">Headcount</span>
            <span className="font-semibold text-slate-900 dark:text-zinc-100">{data.count}</span>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

function PerformanceDistributionChart() {
  return (
    <div className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-bold tracking-tight text-slate-900 dark:text-zinc-100">
            Performance Distribution
          </h3>
          <p className="text-sm text-slate-500 dark:text-zinc-400">
            Current review cycle distribution
          </p>
        </div>
        <div className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
          <TrendingUp size={14} />
          <span>+4.2%</span>
        </div>
      </div>

      <div className="relative mt-4 h-64 flex-grow">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={performanceData}
              dataKey="value"
              nameKey="name"
              innerRadius={70}
              outerRadius={95}
              paddingAngle={5}
              stroke="none"
            >
              {performanceData.map((entry) => (
                <Cell key={entry.name} fill={entry.color} className="outline-none focus:outline-none" />
              ))}
              <Label
                content={({ viewBox }: any) => {
                  const { cx, cy } = viewBox;
                  return (
                    <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle">
                      <tspan
                        x={cx}
                        y={cy - 4}
                        className="fill-slate-900 text-2xl font-bold dark:fill-zinc-100"
                      >
                        {totalEmployees}
                      </tspan>
                      <tspan
                        x={cx}
                        y={cy + 16}
                        className="fill-slate-500 text-xs font-medium dark:fill-zinc-400"
                      >
                        Total Employees
                      </tspan>
                    </text>
                  );
                }}
              />
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 space-y-3">
        {performanceData.map((item) => (
          <div key={item.name} className="group flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="h-2.5 w-2.5 rounded-full shadow-sm transition-transform group-hover:scale-125"
                style={{ backgroundColor: item.color }}
              />
              <div>
                <p className="text-sm font-medium text-slate-700 dark:text-zinc-300">{item.name}</p>
                <p className="text-[10px] text-slate-400 dark:text-zinc-500">{item.count} Employees</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-16 overflow-hidden rounded-full bg-slate-100 dark:bg-zinc-800">
                <div
                  className="h-full rounded-full"
                  style={{ width: `${item.value}%`, backgroundColor: item.color }}
                />
              </div>
              <span className="w-8 text-right text-sm font-semibold text-slate-900 dark:text-white">
                {item.value}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PerformanceDistributionChart;