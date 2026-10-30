import type { ReactNode } from "react";
import { TrendingDown, TrendingUp } from "lucide-react";

type StatCardProps = {
  title: string;
  value: string;
  description: string;
  icon: ReactNode;
  trend: string;
  trendType: "up" | "down" | "neutral";
  accent: "blue" | "emerald" | "amber" | "red" | "purple" | "slate";
};

const accentStyles = {
  blue: "bg-blue-50 text-blue-700 ring-blue-100 dark:bg-blue-900/30 dark:text-blue-400 dark:ring-blue-800",
  emerald: "bg-emerald-50 text-emerald-700 ring-emerald-100 dark:bg-emerald-950/30 dark:text-emerald-400 dark:ring-emerald-800",
  amber: "bg-amber-50 text-amber-700 ring-amber-100 dark:bg-amber-950/30 dark:text-amber-400 dark:ring-amber-800",
  red: "bg-red-50 text-red-700 ring-red-100 dark:bg-red-950/30 dark:text-red-400 dark:ring-red-800",
  purple: "bg-purple-50 text-purple-700 ring-purple-100 dark:bg-purple-900/30 dark:text-purple-400 dark:ring-purple-800",
  slate: "bg-slate-50 text-slate-700 ring-slate-100 dark:bg-zinc-800/50 dark:text-zinc-400 dark:ring-zinc-700",
};

function StatCard({
  title,
  value,
  description,
  icon,
  trend,
  trendType,
  accent,
}: StatCardProps) {
  const isPositive = trendType === "up";
  const isNegative = trendType === "down";

  return (
    <article className="group rounded-[2rem] border border-slate-200/60 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/20">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-zinc-500">{title}</p>
          <h3 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {value}
          </h3>
        </div>

        <div
          className={`flex h-14 w-14 items-center justify-center rounded-[1.25rem] shadow-inner transition-transform duration-300 group-hover:scale-110 ${accentStyles[accent]}`}
        >
          {icon}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between gap-3 pt-4 border-t border-slate-50 dark:border-zinc-800/50">
        <p className="text-xs font-medium text-slate-500 dark:text-zinc-400">{description}</p>

        <div
          className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${
            isPositive
              ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400"
              : isNegative
              ? "bg-red-50 text-red-700 dark:bg-red-950/30 dark:text-red-400"
              : "bg-slate-50 text-slate-600 dark:bg-zinc-800 dark:text-zinc-400"
          }`}
        >
          {isPositive && <TrendingUp size={14} />}
          {isNegative && <TrendingDown size={14} />}
          <span>{trend}</span>
        </div>
      </div>
    </article>
  );
}

export default StatCard;