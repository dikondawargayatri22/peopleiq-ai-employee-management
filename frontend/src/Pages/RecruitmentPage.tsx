import {
  Briefcase,
  ChevronRight,
  ClipboardList,
  Download,
  FileText,
  Filter,
  GraduationCap,
  Plus,
  Search,
  Sparkles,
  UserCheck,
  Users,
} from "lucide-react";
import { useMemo, useState } from "react";
import StatCard from "../components/dashboard/StartCard";

type CandidateStage = "Applied" | "Screening" | "Interview" | "Technical" | "Offer" | "Hired";

type Candidate = {
  id: number;
  name: string;
  role: string;
  department: string;
  stage: CandidateStage;
  aiScore: number;
  appliedDate: string;
  experience: string;
};

const candidatesData: Candidate[] = [
  {
    id: 1,
    name: "Arjun Khanna",
    role: "Senior React Developer",
    department: "Engineering",
    stage: "Technical",
    aiScore: 92,
    appliedDate: "2026-05-28",
    experience: "8 Years",
  },
  {
    id: 2,
    name: "Meera Reddy",
    role: "Product Designer",
    department: "Design",
    stage: "Interview",
    aiScore: 88,
    appliedDate: "2026-06-01",
    experience: "5 Years",
  },
  {
    id: 3,
    name: "Suresh Menon",
    role: "Sales Executive",
    department: "Sales",
    stage: "Applied",
    aiScore: 75,
    appliedDate: "2026-06-02",
    experience: "3 Years",
  },
  {
    id: 4,
    name: "Ishita Gupta",
    role: "Backend Architect",
    department: "Engineering",
    stage: "Offer",
    aiScore: 95,
    appliedDate: "2026-05-15",
    experience: "12 Years",
  },
  {
    id: 5,
    name: "Vikram Malhotra",
    role: "HR Generalist",
    department: "HR",
    stage: "Screening",
    aiScore: 82,
    appliedDate: "2026-06-01",
    experience: "4 Years",
  },
  {
    id: 6,
    name: "Ananya Iyer",
    role: "Data Scientist",
    department: "Engineering",
    stage: "Technical",
    aiScore: 89,
    appliedDate: "2026-05-30",
    experience: "6 Years",
  },
];

const stageStyles: Record<CandidateStage, string> = {
  Applied: "bg-slate-50 text-slate-700 ring-slate-100 dark:bg-zinc-800 dark:text-zinc-400 dark:ring-zinc-700",
  Screening: "bg-blue-50 text-blue-700 ring-blue-100 dark:bg-blue-900/20 dark:text-blue-400 dark:ring-blue-900/30",
  Interview: "bg-purple-50 text-purple-700 ring-purple-100 dark:bg-purple-900/20 dark:text-purple-400 dark:ring-purple-900/30",
  Technical: "bg-amber-50 text-amber-700 ring-amber-100 dark:bg-amber-900/20 dark:text-amber-400 dark:ring-amber-900/30",
  Offer: "bg-emerald-50 text-emerald-700 ring-emerald-100 dark:bg-emerald-950/30 dark:text-emerald-400 dark:ring-emerald-800",
  Hired: "bg-blue-600 text-white ring-blue-700 dark:bg-blue-500",
};

const departments = ["All Departments", "Engineering", "Design", "Sales", "HR", "Marketing"];
const stages = ["All Stages", "Applied", "Screening", "Interview", "Technical", "Offer", "Hired"];

function RecruitmentPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDept, setSelectedDept] = useState("All Departments");
  const [selectedStage, setSelectedStage] = useState("All Stages");

  const filteredCandidates = useMemo(() => {
    return candidatesData.filter((c) => {
      const searchValue = searchTerm.toLowerCase();
      const matchesSearch =
        c.name.toLowerCase().includes(searchValue) ||
        c.role.toLowerCase().includes(searchValue);

      const matchesDept =
        selectedDept === "All Departments" || c.department === selectedDept;

      const matchesStage =
        selectedStage === "All Stages" || c.stage === selectedStage;

      return matchesSearch && matchesDept && matchesStage;
    });
  }, [searchTerm, selectedDept, selectedStage]);

  const stats = [
    {
      title: "Active Job Openings",
      value: "24",
      description: "Across 6 departments",
      trend: "+4",
      trendType: "up" as const,
      accent: "blue" as const,
      icon: <Briefcase size={22} />,
    },
    {
      title: "Total Applications",
      value: "842",
      description: "Received this month",
      trend: "+15%",
      trendType: "up" as const,
      accent: "purple" as const,
      icon: <Users size={22} />,
    },
    {
      title: "Interviews Today",
      value: "12",
      description: "Scheduled across teams",
      trend: "6 pending",
      trendType: "neutral" as const,
      accent: "amber" as const,
      icon: <ClipboardList size={22} />,
    },
    {
      title: "Hired This Quarter",
      value: "38",
      description: "Onboarding completed",
      trend: "+12%",
      trendType: "up" as const,
      accent: "emerald" as const,
      icon: <UserCheck size={22} />,
    },
  ];

  return (
    <section className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 rounded-3xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 shadow-sm lg:flex-row lg:items-center transition-colors duration-300">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
            Talent Acquisition
          </p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900 dark:text-zinc-100">
            Recruitment Pipeline
          </h1>
          <p className="mt-2 text-slate-600 dark:text-zinc-400">
            Manage job postings, track candidates, and use AI to find the best talent.
          </p>
        </div>

        <div className="flex gap-3">
          <button className="flex items-center gap-2 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-800 px-5 py-3 text-sm font-semibold text-slate-700 dark:text-zinc-300 transition hover:bg-slate-50 dark:hover:bg-zinc-700">
            <Plus size={18} />
            Post New Job
          </button>
          <button className="flex items-center gap-2 rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 shadow-lg shadow-blue-600/20 active:scale-95">
            <Users size={18} />
            Add Candidate
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
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

      <div className="grid gap-6 xl:grid-cols-[1fr_380px]">
        {/* Main Pipeline Area */}
        <div className="space-y-6">
          {/* Filters */}
          <div className="rounded-3xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 shadow-sm transition-colors duration-300">
            <div className="grid gap-4 md:grid-cols-[1fr_200px_180px_50px]">
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950 px-4 py-3 focus-within:border-blue-500 transition-all">
                <Search size={18} className="text-slate-400" />
                <input
                  type="text"
                  placeholder="Search candidates by name or role..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-transparent text-sm text-slate-700 dark:text-zinc-200 outline-none placeholder:text-slate-400"
                />
              </div>

              <select
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
                className="rounded-2xl border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950 px-4 py-3 text-sm text-slate-700 dark:text-zinc-200 outline-none cursor-pointer focus:border-blue-500 transition-all"
              >
                {departments.map((dept) => (
                  <option key={dept} value={dept} className="dark:bg-zinc-900">{dept}</option>
                ))}
              </select>

              <select
                value={selectedStage}
                onChange={(e) => setSelectedStage(e.target.value)}
                className="rounded-2xl border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950 px-4 py-3 text-sm text-slate-700 dark:text-zinc-200 outline-none cursor-pointer focus:border-blue-500 transition-all"
              >
                {stages.map((stage) => (
                  <option key={stage} value={stage} className="dark:bg-zinc-900">{stage}</option>
                ))}
              </select>

              <button className="flex items-center justify-center rounded-2xl border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-800 text-slate-500 dark:text-zinc-400 transition hover:bg-slate-100 dark:hover:bg-zinc-700">
                <Filter size={20} />
              </button>
            </div>
          </div>

          {/* Candidate Table */}
          <div className="overflow-hidden rounded-3xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm transition-colors duration-300">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px] border-collapse">
                <thead className="bg-slate-50 dark:bg-zinc-950/50">
                  <tr className="text-left text-sm font-semibold text-slate-600 dark:text-zinc-400">
                    <th className="px-6 py-4">Candidate</th>
                    <th className="px-6 py-4">Applied For</th>
                    <th className="px-6 py-4">AI Score</th>
                    <th className="px-6 py-4">Stage</th>
                    <th className="px-6 py-4">Exp.</th>
                    <th className="px-6 py-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-zinc-800">
                  {filteredCandidates.map((c) => (
                    <tr key={c.id} className="text-sm transition hover:bg-slate-50 dark:hover:bg-zinc-800/50">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 dark:bg-zinc-800 font-bold text-blue-600 dark:text-blue-400">
                            {c.name.split(" ").map(n => n[0]).join("")}
                          </div>
                          <div>
                            <p className="font-semibold text-slate-900 dark:text-zinc-100">{c.name}</p>
                            <p className="text-xs text-slate-500 dark:text-zinc-500">{c.appliedDate}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className="text-slate-700 dark:text-zinc-200 font-medium">{c.role}</span>
                          <span className="text-[10px] bg-slate-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-slate-500 dark:text-zinc-400 font-bold uppercase">{c.department}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold ${
                            c.aiScore > 90 ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400" : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                          }`}>
                            {c.aiScore}
                          </div>
                          <div className="h-1.5 w-16 overflow-hidden rounded-full bg-slate-100 dark:bg-zinc-800">
                            <div 
                              className={`h-full ${c.aiScore > 90 ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]" : "bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.4)]"}`} 
                              style={{ width: `${c.aiScore}%` }}
                            />
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`rounded-full px-3 py-1 text-[11px] font-bold ring-1 ${stageStyles[c.stage]}`}>
                          {c.stage}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-slate-600 dark:text-zinc-400 font-medium">{c.experience}</td>
                      <td className="px-6 py-4 text-right">
                        <button className="inline-flex items-center gap-1 rounded-xl border border-slate-200 dark:border-zinc-800 px-3 py-2 text-xs font-semibold text-slate-700 dark:text-zinc-300 transition hover:bg-slate-100 dark:hover:bg-zinc-800">
                          Profile <ChevronRight size={14} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Sidebar Insights */}
        <div className="space-y-6">
          {/* AI Resume Screening */}
          <div className="rounded-3xl border border-purple-100 dark:border-zinc-800 bg-purple-50/50 dark:bg-zinc-900/50 p-6 shadow-sm transition-colors duration-300">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-purple-600 text-white shadow-lg shadow-purple-900/20">
                <Sparkles size={20} />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-zinc-100">AI Screening Insight</h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-zinc-400">
              Our AI models have identified <strong>3 high-potential</strong> candidates for the Backend Architect position. Their skills match 95% of our requirements.
            </p>
            <button className="mt-5 w-full rounded-2xl bg-purple-600 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-900/20 transition hover:bg-purple-700 active:scale-95">
              View Matches
            </button>
          </div>

          {/* Active Job Postings */}
          <div className="rounded-3xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm transition-colors duration-300">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-slate-900 dark:text-zinc-100">Urgent Openings</h3>
              <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase cursor-pointer hover:underline">View All</span>
            </div>
            
            <div className="mt-5 space-y-4">
              {[
                { title: "React Developer", dept: "Engineering", apps: 42, color: "blue" },
                { title: "UI Designer", dept: "Design", apps: 18, color: "purple" },
                { title: "Sales Head", dept: "Sales", apps: 56, color: "emerald" },
              ].map((job, i) => (
                <div key={i} className="group cursor-pointer rounded-2xl border border-slate-100 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950 p-3 transition-all hover:border-blue-200 dark:hover:border-blue-500/50 hover:bg-white dark:hover:bg-zinc-800 hover:shadow-md">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-bold text-slate-800 dark:text-zinc-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{job.title}</p>
                      <p className="text-xs text-slate-500 dark:text-zinc-500">{job.dept}</p>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400">
                      <Users size={12} /> {job.apps}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hiring Workflow */}
          <div className="rounded-3xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm transition-colors duration-300">
            <h3 className="font-bold text-slate-900 dark:text-zinc-100">Onboarding Status</h3>
            <div className="mt-5 space-y-4">
              {[
                { name: "Rahul Sharma", progress: 85, task: "IT Setup" },
                { name: "Anjali Singh", progress: 40, task: "HR Orientation" },
                { name: "Karan Johar", progress: 10, task: "Documentation" },
              ].map((person, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="font-semibold text-slate-700 dark:text-zinc-300">{person.name}</span>
                    <span className="text-slate-400 dark:text-zinc-500 font-medium">{person.task}</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-slate-100 dark:bg-zinc-800 overflow-hidden">
                    <div className="h-full bg-blue-600 rounded-full shadow-[0_0_8px_rgba(37,99,235,0.4)]" style={{ width: `${person.progress}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-6 w-full flex items-center justify-center gap-2 rounded-2xl bg-zinc-900 dark:bg-zinc-800 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:hover:bg-zinc-700 active:scale-95">
              <ClipboardList size={18} />
              Manage Onboarding
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RecruitmentPage;
