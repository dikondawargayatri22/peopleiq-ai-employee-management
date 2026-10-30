import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Cell,
} from "recharts";

const departmentData = [
  { department: "Eng", employees: 402, color: "#2563eb" },
  { department: "Sales", employees: 285, color: "#10b981" },
  { department: "Mkt", employees: 194, color: "#8b5cf6" },
  { department: "Fin", employees: 126, color: "#f59e0b" },
  { department: "HR", employees: 84, color: "#ec4899" },
  { department: "Ops", employees: 112, color: "#06b6d4" },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/90 p-4 shadow-2xl backdrop-blur-md">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-zinc-500">{label} Department</p>
        <div className="mt-2 flex items-center gap-3">
          <p className="text-2xl font-black text-slate-900 dark:text-zinc-100">
            {payload[0].value}
          </p>
          <span className="text-xs font-bold text-slate-400 dark:text-zinc-500 uppercase">Staff members</span>
        </div>
      </div>
    );
  }
  return null;
};

function DepartmentHeadcountChart() {
  return (
    <div className="group rounded-[2.5rem] border border-slate-200/60 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/30">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-black tracking-tight text-slate-900 dark:text-zinc-100">
            Staff Distribution
          </h3>
          <p className="mt-1 text-sm font-medium text-slate-500 dark:text-zinc-500">
            Headcount allocation by department
          </p>
        </div>

        <div className="h-10 w-10 flex items-center justify-center rounded-2xl bg-slate-50 dark:bg-zinc-800 text-slate-400 dark:text-zinc-500">
          <div className="grid grid-cols-2 gap-1">
            <div className="h-1.5 w-1.5 rounded-full bg-current" />
            <div className="h-1.5 w-1.5 rounded-full bg-current" />
            <div className="h-1.5 w-1.5 rounded-full bg-current" />
            <div className="h-1.5 w-1.5 rounded-full bg-current" />
          </div>
        </div>
      </div>

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={departmentData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid 
              strokeDasharray="3 3" 
              vertical={false} 
              stroke="#e2e8f0" 
              className="dark:stroke-zinc-800" 
            />
            <XAxis 
              dataKey="department" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 700 }}
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 700 }}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(148, 163, 184, 0.1)' }} />
            <Bar 
              dataKey="employees" 
              radius={[12, 12, 12, 12]} 
              barSize={32}
            >
              {departmentData.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.color} 
                  fillOpacity={0.8}
                  className="transition-all duration-300 hover:fill-opacity-100"
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default DepartmentHeadcountChart;
