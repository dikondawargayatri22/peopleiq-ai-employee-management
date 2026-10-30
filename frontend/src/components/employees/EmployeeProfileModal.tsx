import {
  Briefcase,
  CalendarDays,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Star,
  UserRound,
  X,
} from "lucide-react";

type EmployeeStatus = "Present" | "On Leave" | "Remote" | "Inactive";

type Employee = {
  id: number;
  name: string;
  employeeId: string;
  role: string;
  department: string;
  location: string;
  status: EmployeeStatus;
  manager: string;
  joiningDate: string;
  avatar?: string;
};

type EmployeeProfileModalProps = {
  employee: Employee;
  onClose: () => void;
};

const statusStyles: Record<EmployeeStatus, string> = {
  Present: "bg-emerald-50 text-emerald-700 ring-emerald-100 dark:bg-emerald-950/30 dark:text-emerald-400 dark:ring-emerald-800",
  "On Leave": "bg-amber-50 text-amber-700 ring-amber-100 dark:bg-amber-950/30 dark:text-amber-400 dark:ring-amber-800",
  Remote: "bg-blue-50 text-blue-700 ring-blue-100 dark:bg-blue-950/30 dark:text-blue-400 dark:ring-blue-800",
  Inactive: "bg-slate-100 text-slate-600 ring-slate-200 dark:bg-slate-800/50 dark:text-slate-400 dark:ring-slate-700",
};

function EmployeeProfileModal({ employee, onClose }: EmployeeProfileModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/60 p-4 backdrop-blur-sm">
      <div className="max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[2rem] bg-white dark:bg-zinc-900 shadow-2xl transition-all duration-300">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-6 py-5">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
              Employee Profile
            </p>
            <h2 className="mt-1 text-2xl font-bold text-slate-900 dark:text-zinc-100">
              {employee.name}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-2xl border border-slate-200 dark:border-zinc-800 p-2 text-slate-500 transition hover:bg-slate-100 dark:hover:bg-zinc-800 hover:text-slate-900 dark:hover:text-zinc-100"
            aria-label="Close profile"
          >
            <X size={20} />
          </button>
        </div>

        <div className="space-y-6 p-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_2fr]">
            <div className="rounded-3xl border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950 p-6">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-full bg-blue-600 text-white shadow-xl shadow-blue-900/20">
                  {employee.avatar ? (
                    <img
                      src={employee.avatar}
                      alt={employee.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <UserRound size={42} />
                  )}
                </div>

                <h3 className="mt-4 text-xl font-bold text-slate-900 dark:text-zinc-100">
                  {employee.name}
                </h3>

                <p className="mt-1 text-sm text-slate-500 dark:text-zinc-400">{employee.role}</p>

                <span
                  className={`mt-4 rounded-full px-3 py-1 text-xs font-semibold ring-1 ${
                    statusStyles[employee.status]
                  }`}
                >
                  {employee.status}
                </span>
              </div>

              <div className="mt-6 space-y-4 text-sm">
                <div className="flex items-center gap-3 text-slate-600 dark:text-zinc-400">
                  <Mail size={18} className="text-slate-400 dark:text-zinc-500" />
                  <span>{employee.employeeId.toLowerCase()}@peopleiq.ai</span>
                </div>

                <div className="flex items-center gap-3 text-slate-600 dark:text-zinc-400">
                  <Phone size={18} className="text-slate-400 dark:text-zinc-500" />
                  <span>+91 98765 43210</span>
                </div>

                <div className="flex items-center gap-3 text-slate-600 dark:text-zinc-400">
                  <MapPin size={18} className="text-slate-400 dark:text-zinc-500" />
                  <span>{employee.location}</span>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-blue-50 dark:bg-zinc-800 p-2 text-blue-700 dark:text-blue-400">
                    <Briefcase size={20} />
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-zinc-100">Job Details</h4>
                </div>

                <div className="mt-4 space-y-3 text-sm">
                  <InfoRow label="Employee ID" value={employee.employeeId} />
                  <InfoRow label="Department" value={employee.department} />
                  <InfoRow label="Manager" value={employee.manager} />
                  <InfoRow label="Joining Date" value={employee.joiningDate} />
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-emerald-50 dark:bg-zinc-800 p-2 text-emerald-700 dark:text-emerald-400">
                    <CalendarDays size={20} />
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-zinc-100">Attendance</h4>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <MetricCard label="Present Days" value="22" />
                  <MetricCard label="Late Check-ins" value="2" />
                  <MetricCard label="Work Hours" value="176h" />
                  <MetricCard label="Overtime" value="8h" />
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-5 shadow-sm">
                <h4 className="font-bold text-slate-900 dark:text-zinc-100">Leave Balance</h4>

                <div className="mt-4 space-y-3">
                  <ProgressRow label="Casual Leave" value="7/12" width="58%" />
                  <ProgressRow label="Sick Leave" value="5/10" width="50%" />
                  <ProgressRow label="Earned Leave" value="12/18" width="66%" />
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-purple-50 dark:bg-zinc-800 p-2 text-purple-700 dark:text-purple-400">
                    <Star size={20} />
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-zinc-100">Performance</h4>
                </div>

                <div className="mt-4">
                  <p className="text-4xl font-bold text-slate-900 dark:text-zinc-100">8.4/10</p>
                  <p className="mt-1 text-sm text-slate-500 dark:text-zinc-400">
                    Current review cycle
                  </p>
                </div>

                <div className="mt-4 rounded-2xl bg-emerald-50 dark:bg-emerald-900/20 p-3 text-sm text-emerald-700 dark:text-emerald-400">
                  Strong performer with consistent delivery.
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6 shadow-sm">
              <h4 className="font-bold text-slate-900 dark:text-zinc-100">Skills</h4>

              <div className="mt-4 flex flex-wrap gap-2">
                {["Java", "Spring Boot", "React", "PostgreSQL", "Teamwork"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-slate-100 dark:bg-zinc-800 px-3 py-1 text-sm font-semibold text-slate-700 dark:text-zinc-300"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="rounded-3xl border border-purple-100 dark:border-zinc-800 bg-purple-50 dark:bg-zinc-900/30 p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-white dark:bg-zinc-800 p-2 text-purple-700 dark:text-purple-300">
                  <Sparkles size={20} />
                </div>
                <h4 className="font-bold text-purple-950 dark:text-zinc-100">AI Summary</h4>
              </div>

              <p className="mt-4 text-sm leading-6 text-purple-800 dark:text-zinc-400">
                {employee.name} is showing stable work patterns with strong
                performance consistency. AI summary generation will later be
                connected to Spring Boot and an LLM API using attendance, leave,
                and performance data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-slate-500 dark:text-zinc-500 font-medium">{label}</span>
      <span className="font-semibold text-slate-900 dark:text-zinc-100">{value}</span>
    </div>
  );
}

function MetricCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-slate-50 dark:bg-zinc-900/50 p-3 text-center border border-transparent dark:border-zinc-800">
      <p className="text-lg font-bold text-slate-900 dark:text-zinc-100">{value}</p>
      <p className="mt-1 text-[10px] uppercase font-bold tracking-wider text-slate-500 dark:text-zinc-500">{label}</p>
    </div>
  );
}

function ProgressRow({
  label,
  value,
  width,
}: {
  label: string;
  value: string;
  width: string;
}) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-sm">
        <span className="text-slate-600 dark:text-zinc-400 font-medium">{label}</span>
        <span className="font-bold text-slate-900 dark:text-zinc-100">{value}</span>
      </div>
      <div className="h-2 rounded-full bg-slate-100 dark:bg-zinc-800">
        <div className="h-2 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.4)]" style={{ width }} />
      </div>
    </div>
  );
}

export default EmployeeProfileModal;