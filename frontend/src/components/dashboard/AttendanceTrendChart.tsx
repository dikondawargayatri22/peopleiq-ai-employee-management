import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const attendanceData = [
  { month: "Jan", present: 88, attendance: 84 },
  { month: "Feb", present: 92, attendance: 86 },
  { month: "Mar", present: 85, attendance: 82 },
  { month: "Apr", present: 94, attendance: 90 },
  { month: "May", present: 91, attendance: 88 },
  { month: "Jun", present: 96, attendance: 92 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/90 p-4 shadow-2xl backdrop-blur-md">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-zinc-500">{label}</p>
        <div className="space-y-1.5">
          {payload.map((entry: any, index: number) => (
            <div key={index} className="flex items-center gap-2 text-sm font-bold">
              <div className="h-2 w-2 rounded-full" style={{ backgroundColor: entry.color }} />
              <span className="text-slate-600 dark:text-zinc-400">{entry.name}:</span>
              <span className="text-slate-900 dark:text-zinc-100">{entry.value}%</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

function AttendanceTrendChart() {
  return (
    <div className="group rounded-[2.5rem] border border-slate-200/60 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/30">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-black tracking-tight text-slate-900 dark:text-zinc-100">
            Workforce Presence
          </h3>
          <p className="mt-1 text-sm font-medium text-slate-500 dark:text-zinc-500">
            Monthly attendance and productivity trend
          </p>
        </div>

        <div className="flex gap-2">
           <span className="flex items-center gap-1.5 rounded-full bg-blue-50 dark:bg-zinc-800 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-blue-700 dark:text-blue-400">
            <div className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            Present
          </span>
          <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 dark:bg-zinc-800 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
             <div className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
            Avg. Rate
          </span>
        </div>
      </div>

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={attendanceData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorPresent" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2563eb" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorAttendance" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid 
              strokeDasharray="3 3" 
              vertical={false} 
              stroke="#e2e8f0" 
              className="dark:stroke-zinc-800" 
            />
            <XAxis 
              dataKey="month" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 600 }}
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 600 }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="present"
              name="Present"
              stroke="#2563eb"
              strokeWidth={4}
              fillOpacity={1}
              fill="url(#colorPresent)"
              activeDot={{ r: 6, strokeWidth: 0, fill: '#2563eb' }}
            />
            <Area
              type="monotone"
              dataKey="attendance"
              name="Avg Rate"
              stroke="#10b981"
              strokeWidth={4}
              fillOpacity={1}
              fill="url(#colorAttendance)"
              activeDot={{ r: 6, strokeWidth: 0, fill: '#10b981' }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default AttendanceTrendChart;
