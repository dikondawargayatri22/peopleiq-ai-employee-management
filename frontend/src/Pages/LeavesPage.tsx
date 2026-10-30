import {
  CalendarCheck,
  CalendarDays,
  CalendarX,
  CheckCircle2,
  Clock,
  Download,
  Filter,
  MoreVertical,
  Plus,
  Search,
  XCircle,
} from "lucide-react";
import { useMemo, useState } from "react";
import StatCard from "../components/dashboard/StartCard";
import ApplyLeaveModal from "../components/leaves/ApplyLeaveModal";
import { useNotifications } from "../context/NotificationContext";

type LeaveStatus = "Approved" | "Pending" | "Rejected";
type LeaveType = "Annual Leave" | "Sick Leave" | "Maternity" | "Paternity" | "Unpaid";

type LeaveRequest = {
  id: number;
  name: string;
  employeeId: string;
  type: LeaveType;
  startDate: string;
  endDate: string;
  days: number;
  status: LeaveStatus;
  reason: string;
};

const initialLeaveRequests: LeaveRequest[] = [
  {
    id: 1,
    name: "Neha Sharma",
    employeeId: "E10234",
    type: "Annual Leave",
    startDate: "2026-06-10",
    endDate: "2026-06-12",
    days: 3,
    status: "Pending",
    reason: "Family vacation",
  },
  {
    id: 2,
    name: "Rahul Verma",
    employeeId: "E09781",
    type: "Sick Leave",
    startDate: "2026-06-03",
    endDate: "2026-06-04",
    days: 2,
    status: "Approved",
    reason: "Medical appointment",
  },
  {
    id: 3,
    name: "Priya Nair",
    employeeId: "E10456",
    type: "Annual Leave",
    startDate: "2026-06-01",
    endDate: "2026-06-05",
    days: 5,
    status: "Approved",
    reason: "Personal work",
  },
  {
    id: 4,
    name: "Amit Patel",
    employeeId: "E08823",
    type: "Unpaid",
    startDate: "2026-06-15",
    endDate: "2026-06-15",
    days: 1,
    status: "Rejected",
    reason: "Personal urgent matter",
  },
  {
    id: 5,
    name: "Sanjana Reddy",
    employeeId: "E10112",
    type: "Sick Leave",
    startDate: "2026-06-20",
    endDate: "2026-06-21",
    days: 2,
    status: "Pending",
    reason: "Dental surgery",
  },
  {
    id: 6,
    name: "Karan Singh",
    employeeId: "E09345",
    type: "Annual Leave",
    startDate: "2026-07-05",
    endDate: "2026-07-10",
    days: 6,
    status: "Pending",
    reason: "Summer break",
  },
];

const statusStyles: Record<LeaveStatus, string> = {
  Approved: "bg-emerald-50 text-emerald-700 ring-emerald-100 dark:bg-emerald-950/30 dark:text-emerald-400 dark:ring-emerald-800",
  Pending: "bg-amber-50 text-amber-700 ring-amber-100 dark:bg-amber-950/30 dark:text-amber-400 dark:ring-amber-800",
  Rejected: "bg-red-50 text-red-700 ring-red-100 dark:bg-red-950/30 dark:text-red-400 dark:ring-red-800",
};

const leaveTypes = ["All Types", "Annual Leave", "Sick Leave", "Maternity", "Paternity", "Unpaid"];
const statuses = ["All Status", "Approved", "Pending", "Rejected"];

function LeavesPage() {
  const [leaveRequests, setLeaveRequests] = useState<LeaveRequest[]>(initialLeaveRequests);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All Types");
  const [selectedStatus, setSelectedStatus] = useState("All Status");
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const { addNotification } = useNotifications();

  const filteredRequests = useMemo(() => {
    return leaveRequests.filter((request) => {
      const searchValue = searchTerm.toLowerCase();
      const matchesSearch =
        request.name.toLowerCase().includes(searchValue) ||
        request.employeeId.toLowerCase().includes(searchValue);

      const matchesType =
        selectedType === "All Types" || request.type === selectedType;

      const matchesStatus =
        selectedStatus === "All Status" || request.status === selectedStatus;

      return matchesSearch && matchesType && matchesStatus;
    });
  }, [leaveRequests, searchTerm, selectedType, selectedStatus]);

  const handleApplyLeave = (newRequest: LeaveRequest) => {
    setLeaveRequests((prev) => [newRequest, ...prev]);
    addNotification({
      title: "New Leave Applied",
      message: `${newRequest.name} has applied for ${newRequest.type} (${newRequest.days} days).`,
      type: "info",
    });
  };

  const handleRejectLeave = (id: number) => {
    setLeaveRequests((prev) =>
      prev.map((r) => {
        if (r.id === id) {
          addNotification({
            title: "Leave Rejected",
            message: `Your leave request for ${r.startDate} has been rejected.`,
            type: "error",
          });
          return { ...r, status: "Rejected" };
        }
        return r;
      })
    );
  };

  const stats = [
    {
      title: "Total Leave Balance",
      value: "24 Days",
      description: "Remaining for this year",
      trend: "+2",
      trendType: "up" as const,
      accent: "blue" as const,
      icon: <CalendarDays size={22} />,
    },
    {
      title: "Pending Approvals",
      value: "14",
      description: "Requests awaiting review",
      trend: "+3",
      trendType: "down" as const,
      accent: "amber" as const,
      icon: <Clock size={22} />,
    },
    {
      title: "Approved Today",
      value: "57",
      description: "Employees on leave",
      trend: "+4.3%",
      trendType: "up" as const,
      accent: "emerald" as const,
      icon: <CheckCircle2 size={22} />,
    },
    {
      title: "Rejected Requests",
      value: "8",
      description: "Last 30 days",
      trend: "-12%",
      trendType: "up" as const,
      accent: "red" as const,
      icon: <XCircle size={22} />,
    },
  ];

  return (
    <section className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header & Quick Action */}
      <div className="flex flex-col justify-between gap-4 rounded-3xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 shadow-sm lg:flex-row lg:items-center transition-colors duration-300">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
            Leave Management
          </p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900 dark:text-zinc-100">
            Leave Requests
          </h1>
          <p className="mt-2 text-slate-600 dark:text-zinc-400">
            Manage employee leave applications, approvals, and track balances.
          </p>
        </div>

        <div className="flex gap-3">
          <button className="flex items-center gap-2 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-800 px-5 py-3 text-sm font-semibold text-slate-700 dark:text-zinc-300 transition hover:bg-slate-50 dark:hover:bg-zinc-700">
            <Download size={18} />
            Export
          </button>
          <button
            onClick={() => setIsApplyModalOpen(true)}
            className="flex items-center gap-2 rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 shadow-lg shadow-blue-600/20 active:scale-95"
          >
            <Plus size={18} />
            Request Leave
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

      {/* AI Insights Panel */}
      <div className="rounded-3xl border border-blue-100 dark:border-zinc-800 bg-blue-50/50 dark:bg-zinc-900/50 p-6 shadow-sm transition-colors duration-300">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-900/20">
            <CalendarCheck size={20} />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 dark:text-zinc-100">AI Leave Planner Insight</h3>
            <p className="text-sm text-slate-600 dark:text-zinc-400">
              Predicted high absenteeism for the week of June 15th based on historical patterns.
            </p>
          </div>
        </div>
      </div>

      {/* Filters & Table */}
      <div className="space-y-4">
        <div className="rounded-3xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 shadow-sm transition-colors duration-300">
          <div className="grid gap-4 lg:grid-cols-[1fr_200px_180px_50px]">
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950 px-4 py-3 focus-within:border-blue-500 transition-all">
              <Search size={18} className="text-slate-400" />
              <input
                type="text"
                placeholder="Search employee by name or ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-transparent text-sm text-slate-700 dark:text-zinc-200 outline-none placeholder:text-slate-400"
              />
            </div>

            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="rounded-2xl border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950 px-4 py-3 text-sm text-slate-700 dark:text-zinc-200 outline-none cursor-pointer focus:border-blue-500 transition-all"
            >
              {leaveTypes.map((type) => (
                <option key={type} value={type} className="dark:bg-zinc-900">
                  {type}
                </option>
              ))}
            </select>

            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="rounded-2xl border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950 px-4 py-3 text-sm text-slate-700 dark:text-zinc-200 outline-none cursor-pointer focus:border-blue-500 transition-all"
            >
              {statuses.map((status) => (
                <option key={status} value={status} className="dark:bg-zinc-900">
                  {status}
                </option>
              ))}
            </select>

            <button className="flex items-center justify-center rounded-2xl border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-800 text-slate-500 dark:text-zinc-400 transition hover:bg-slate-100 dark:hover:bg-zinc-700">
              <Filter size={20} />
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm transition-colors duration-300">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1000px] border-collapse">
              <thead className="bg-slate-50 dark:bg-zinc-950/50">
                <tr className="text-left text-sm font-semibold text-slate-600 dark:text-zinc-400">
                  <th className="px-6 py-4">Employee</th>
                  <th className="px-6 py-4">Type</th>
                  <th className="px-6 py-4">Duration</th>
                  <th className="px-6 py-4">Days</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Reason</th>
                  <th className="px-6 py-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-zinc-800">
                {filteredRequests.map((request) => (
                  <tr
                    key={request.id}
                    className="text-sm transition hover:bg-slate-50 dark:hover:bg-zinc-800/50"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 dark:bg-zinc-800 font-bold text-blue-600 dark:text-blue-400">
                          {request.name.split(" ").map(n => n[0]).join("")}
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900 dark:text-zinc-100">{request.name}</p>
                          <p className="text-xs text-slate-500 dark:text-zinc-500">{request.employeeId}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-slate-600 dark:text-zinc-400">
                        {request.type === "Sick Leave" ? (
                          <CalendarX size={16} className="text-red-500" />
                        ) : (
                          <CalendarDays size={16} className="text-blue-500 dark:text-blue-400" />
                        )}
                        <span>{request.type}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-600 dark:text-zinc-400">
                      {request.startDate} to {request.endDate}
                    </td>
                    <td className="px-6 py-4 font-medium text-slate-700 dark:text-zinc-300">
                      {request.days} {request.days === 1 ? "Day" : "Days"}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${
                          statusStyles[request.status]
                        }`}
                      >
                        {request.status}
                      </span>
                    </td>
                    <td className="max-w-[200px] truncate px-6 py-4 text-slate-500 dark:text-zinc-500">
                      {request.reason}
                    </td>
                    <td className="px-6 py-4 text-right">
                      {request.status === "Pending" ? (
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => {
                              setLeaveRequests(prev => prev.map(r => r.id === request.id ? { ...r, status: "Approved" } : r));
                              addNotification({
                                title: "Leave Approved",
                                message: `Leave request for ${request.name} has been approved.`,
                                type: "success",
                              });
                            }}
                            className="rounded-xl bg-emerald-500/10 p-2 text-emerald-600 transition hover:bg-emerald-500 hover:text-white"
                          >
                            <CheckCircle2 size={18} />
                          </button>
                          <button
                            onClick={() => handleRejectLeave(request.id)}
                            className="rounded-xl bg-red-500/10 p-2 text-red-600 transition hover:bg-red-500 hover:text-white"
                          >
                            <XCircle size={18} />
                          </button>
                        </div>
                      ) : (
                        <button className="rounded-xl p-2 text-slate-400 transition hover:bg-slate-100 dark:hover:bg-zinc-800 hover:text-slate-600 dark:hover:text-zinc-300">
                          <MoreVertical size={18} />
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
                {filteredRequests.length === 0 && (
                  <tr>
                    <td colSpan={7} className="px-6 py-12 text-center">
                      <p className="font-semibold text-slate-700 dark:text-zinc-300">No requests found</p>
                      <p className="mt-1 text-sm text-slate-500 dark:text-zinc-500">
                        Try adjusting your filters or search criteria.
                      </p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {isApplyModalOpen && (
        <ApplyLeaveModal
          onClose={() => setIsApplyModalOpen(false)}
          onSubmit={handleApplyLeave}
        />
      )}
    </section>
  );
}

export default LeavesPage;
