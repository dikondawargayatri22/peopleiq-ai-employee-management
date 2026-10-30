import {
//   AlertTriangle,
  ArrowRight,
  Brain,
  Clock,
  GraduationCap,
  ShieldAlert,
  Sparkles,
  Users,
} from "lucide-react";

const insights = [
  {
    title: "Engineering overtime increased by 18%",
    description:
      "AI detected a workload spike in the Engineering department over the last 30 days.",
    category: "Workload",
    priority: "High",
    icon: Clock,
    style: "bg-blue-50 text-blue-700 border-blue-100 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-900/30",
  },
  {
    title: "3 employees show potential attrition risk",
    description:
      "Risk indicators include overtime, lower engagement, and recent leave pattern changes.",
    category: "Retention",
    priority: "Critical",
    icon: ShieldAlert,
    style: "bg-red-50 text-red-700 border-red-100 dark:bg-red-950/20 dark:text-red-400 dark:border-red-900/30",
  },
  {
    title: "Sales team may face understaffing next week",
    description:
      "AI found overlapping leave requests that may affect customer follow-ups.",
    category: "Leave Planning",
    priority: "Medium",
    icon: Users,
    style: "bg-amber-50 text-amber-700 border-amber-100 dark:bg-amber-950/20 dark:text-amber-400 dark:border-amber-900/30",
  },
  {
    title: "Recommend upskilling for 12 employees",
    description:
      "Performance trends suggest training in communication, leadership, and technical depth.",
    category: "Learning",
    priority: "Medium",
    icon: GraduationCap,
    style: "bg-purple-50 text-purple-700 border-purple-100 dark:bg-purple-900/20 dark:text-purple-400 dark:border-purple-900/30",
  },
];

function AIInsightsPanel() {
  return (
    <section className="rounded-3xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm transition-colors duration-300">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="rounded-2xl bg-purple-50 dark:bg-purple-900/30 p-2 text-purple-700 dark:text-purple-300">
              <Sparkles size={20} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-zinc-100">AI Insights</h3>
          </div>

          <p className="mt-2 text-sm text-slate-500 dark:text-zinc-500">
            AI-generated workforce recommendations for HR decisions.
          </p>
        </div>

        <span className="rounded-full bg-slate-100 dark:bg-zinc-800 px-3 py-1 text-xs font-semibold text-slate-600 dark:text-zinc-400">
          Live
        </span>
      </div>

      <div className="space-y-4">
        {insights.map((insight) => {
          const Icon = insight.icon;

          return (
            <article
              key={insight.title}
              className={`rounded-3xl border p-4 transition-all hover:shadow-md ${insight.style}`}
            >
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-white/70 dark:bg-black/20 p-2">
                  <Icon size={20} />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="font-semibold">{insight.title}</h4>
                    <span className="rounded-full bg-white/70 dark:bg-black/20 px-2 py-0.5 text-xs font-semibold">
                      {insight.priority}
                    </span>
                  </div>

                  <p className="mt-2 text-sm opacity-90">
                    {insight.description}
                  </p>

                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wide opacity-80">
                      {insight.category}
                    </span>

                    <button
                      type="button"
                      className="flex items-center gap-1 text-xs font-semibold hover:underline"
                    >
                      Review <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-5 rounded-3xl border border-dashed border-slate-300 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-800/30 p-4">
        <div className="flex items-center gap-3">
          <Brain size={20} className="text-slate-600 dark:text-zinc-400" />
          <p className="text-sm text-slate-600 dark:text-zinc-400">
            Next version: connect these insights with Spring Boot + AI API.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AIInsightsPanel;