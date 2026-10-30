import { Search, SlidersHorizontal, UserRound } from "lucide-react";
import { useMemo, useState } from "react";
import EmployeeProfileModal from "./EmployeeProfileModal";
import AddEmployeeModal from "./AddEmployeeModal";

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

const initialEmployees: Employee[] = [
  {
    id: 1,
    name: "Neha Sharma",
    employeeId: "E10234",
    role: "Software Engineer",
    department: "Engineering",
    location: "Bengaluru",
    status: "Present",
    manager: "Arjun Mehta",
    joiningDate: "2023-04-12",
    avatar: "https://i.pravatar.cc/150?u=1",
  },
  {
    id: 2,
    name: "Rahul Verma",
    employeeId: "E09781",
    role: "Account Executive",
    department: "Sales",
    location: "Mumbai",
    status: "Present",
    manager: "Karan Malhotra",
    joiningDate: "2022-08-21",
    avatar: "https://i.pravatar.cc/150?u=2",
  },
  {
    id: 3,
    name: "Priya Nair",
    employeeId: "E10456",
    role: "Marketing Manager",
    department: "Marketing",
    location: "Delhi",
    status: "On Leave",
    manager: "Sneha Iyer",
    joiningDate: "2021-11-02",
    avatar: "https://i.pravatar.cc/150?u=3",
  },
  {
    id: 4,
    name: "Amit Patel",
    employeeId: "E08823",
    role: "Senior Analyst",
    department: "Finance",
    location: "Pune",
    status: "Present",
    manager: "Vikram Joshi",
    joiningDate: "2020-03-18",
    avatar: "https://i.pravatar.cc/150?u=4",
  },
  {
    id: 5,
    name: "Sanjana Reddy",
    employeeId: "E10112",
    role: "HR Executive",
    department: "HR",
    location: "Hyderabad",
    status: "Present",
    manager: "Arjun Mehta",
    joiningDate: "2023-01-09",
    avatar: "https://i.pravatar.cc/150?u=5",
  },
  {
    id: 6,
    name: "Karan Singh",
    employeeId: "E09345",
    role: "Support Specialist",
    department: "Support",
    location: "Remote",
    status: "Remote",
    manager: "Neha Sharma",
    joiningDate: "2022-05-27",
    avatar: "https://i.pravatar.cc/150?u=6",
  },
  {
    id: 7,
    name: "Anjali Desai",
    employeeId: "E10765",
    role: "QA Engineer",
    department: "Engineering",
    location: "Ahmedabad",
    status: "On Leave",
    manager: "Neha Sharma",
    joiningDate: "2024-02-15",
    avatar: "https://i.pravatar.cc/150?u=7",
  },
  {
    id: 8,
    name: "Rohit Kumar",
    employeeId: "E08421",
    role: "Backend Developer",
    department: "Engineering",
    location: "Bengaluru",
    status: "Remote",
    manager: "Arjun Mehta",
    joiningDate: "2021-07-30",
    avatar: "https://i.pravatar.cc/150?u=8",
  },
];

const departments = [
  "All Departments",
  "Engineering",
  "Sales",
  "Marketing",
  "Finance",
  "HR",
  "Support",
];

const statuses = ["All Status", "Present", "On Leave", "Remote", "Inactive"];

const statusStyles: Record<EmployeeStatus, string> = {
  Present: "bg-emerald-50 text-emerald-700 ring-emerald-100",
  "On Leave": "bg-amber-50 text-amber-700 ring-amber-100",
  Remote: "bg-blue-50 text-blue-700 ring-blue-100",
  Inactive: "bg-slate-100 text-slate-600 ring-slate-200",
};

function EmployeeDirectory() {
  const [employees, setEmployees] = useState<Employee[]>(initialEmployees);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] =
    useState("All Departments");
  const [selectedStatus, setSelectedStatus] = useState("All Status");
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(
    null
  );
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const filteredEmployees = useMemo(() => {
    return employees.filter((employee) => {
      const searchValue = searchTerm.toLowerCase();

      const matchesSearch =
        employee.name.toLowerCase().includes(searchValue) ||
        employee.employeeId.toLowerCase().includes(searchValue) ||
        employee.role.toLowerCase().includes(searchValue) ||
        employee.department.toLowerCase().includes(searchValue) ||
        employee.manager.toLowerCase().includes(searchValue) ||
        employee.location.toLowerCase().includes(searchValue);

      const matchesDepartment =
        selectedDepartment === "All Departments" ||
        employee.department === selectedDepartment;

      const matchesStatus =
        selectedStatus === "All Status" || employee.status === selectedStatus;

      return matchesSearch && matchesDepartment && matchesStatus;
    });
  }, [employees, searchTerm, selectedDepartment, selectedStatus]);

  const handleAddEmployee = (newEmployee: Employee) => {
    setEmployees((prev) => [newEmployee, ...prev]);
  };

  return (
    <section className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col justify-between gap-4 rounded-3xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm lg:flex-row lg:items-center transition-colors duration-300">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
            Employee Management
          </p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900 dark:text-zinc-100">
            Employee Directory
          </h1>
          <p className="mt-2 text-slate-600 dark:text-zinc-400">
            View, search, and manage employee records across departments.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsAddModalOpen(true)}
          className="rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 active:scale-95"
        >
          Add Employee
        </button>
      </div>

      <div className="rounded-3xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 shadow-sm transition-colors duration-300">
        <div className="grid gap-4 lg:grid-cols-[1fr_220px_180px]">
          <div className="flex items-center gap-3 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950 px-4 py-3 focus-within:border-blue-500 transition-all">
            <Search size={18} className="text-slate-400" />
            <input
              type="text"
              placeholder="Search by name, ID, role, department, manager, or location..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              className="w-full bg-transparent text-sm text-slate-700 dark:text-zinc-200 outline-none placeholder:text-slate-400"
            />
          </div>

          <select
            value={selectedDepartment}
            onChange={(event) => setSelectedDepartment(event.target.value)}
            className="rounded-2xl border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950 px-4 py-3 text-sm text-slate-700 dark:text-zinc-200 outline-none cursor-pointer focus:border-blue-500 transition-all"
          >
            {departments.map((department) => (
              <option key={department} className="dark:bg-zinc-900">{department}</option>
            ))}
          </select>

          <select
            value={selectedStatus}
            onChange={(event) => setSelectedStatus(event.target.value)}
            className="rounded-2xl border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950 px-4 py-3 text-sm text-slate-700 dark:text-zinc-200 outline-none cursor-pointer focus:border-blue-500 transition-all"
          >
            {statuses.map((status) => (
              <option key={status} className="dark:bg-zinc-900">{status}</option>
            ))}
          </select>
        </div>

        <div className="mt-5 flex items-center gap-2 text-sm text-slate-500 dark:text-zinc-500">
          <SlidersHorizontal size={16} />
          <span>
            Showing {filteredEmployees.length} of {employees.length} employees
          </span>
        </div>
      </div>

      <div className="overflow-hidden rounded-3xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm transition-colors duration-300">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1000px] border-collapse">
            <thead className="bg-slate-50 dark:bg-zinc-950/50">
              <tr className="text-left text-sm font-semibold text-slate-600 dark:text-zinc-400">
                <th className="px-6 py-4">Employee</th>
                <th className="px-6 py-4">Employee ID</th>
                <th className="px-6 py-4">Department</th>
                <th className="px-6 py-4">Role</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Location</th>
                <th className="px-6 py-4">Manager</th>
                <th className="px-6 py-4">Joining Date</th>
                <th className="px-6 py-4">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100 dark:divide-zinc-800">
              {filteredEmployees.map((employee) => (
                <tr
                  key={employee.id}
                  className="text-sm transition hover:bg-slate-50 dark:hover:bg-zinc-800/50"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400">
                        {employee.avatar ? (
                          <img
                            src={employee.avatar}
                            alt={employee.name}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <UserRound size={18} />
                        )}
                      </div>

                      <div>
                        <p className="font-semibold text-slate-900 dark:text-zinc-100">
                          {employee.name}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-zinc-500">
                          {employee.location}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4 font-medium text-slate-700 dark:text-zinc-300">
                    {employee.employeeId}
                  </td>

                  <td className="px-6 py-4 text-slate-600 dark:text-zinc-400">
                    {employee.department}
                  </td>

                  <td className="px-6 py-4 text-slate-600 dark:text-zinc-400">
                    {employee.role}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${
                        statusStyles[employee.status]
                      }`}
                    >
                      {employee.status}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-slate-600 dark:text-zinc-400">
                    {employee.location}
                  </td>

                  <td className="px-6 py-4 text-slate-600 dark:text-zinc-400">
                    {employee.manager}
                  </td>

                  <td className="px-6 py-4 text-slate-600 dark:text-zinc-400">
                    {employee.joiningDate}
                  </td>

                  <td className="px-6 py-4">
                    <button
                      type="button"
                      onClick={() => setSelectedEmployee(employee)}
                      className="rounded-xl border border-slate-200 dark:border-zinc-800 px-3 py-2 text-xs font-semibold text-slate-700 dark:text-zinc-300 transition hover:bg-slate-100 dark:hover:bg-zinc-800"
                    >
                      View Profile
                    </button>
                  </td>
                </tr>
              ))}

              {filteredEmployees.length === 0 && (
                <tr>
                  <td colSpan={9} className="px-6 py-12 text-center">
                    <p className="font-semibold text-slate-700 dark:text-zinc-300">
                      No employees found
                    </p>
                    <p className="mt-1 text-sm text-slate-500 dark:text-zinc-500">
                      Try changing your search or filter criteria.
                    </p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {selectedEmployee && (
        <EmployeeProfileModal
          employee={selectedEmployee}
          onClose={() => setSelectedEmployee(null)}
        />
      )}

      {isAddModalOpen && (
        <AddEmployeeModal
          onClose={() => setIsAddModalOpen(false)}
          onAdd={handleAddEmployee}
        />
      )}
    </section>
  );
}

export default EmployeeDirectory;