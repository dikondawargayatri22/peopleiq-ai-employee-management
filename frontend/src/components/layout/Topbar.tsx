import { Bell, Search, Sun, Moon, Check, Trash2, X } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { useNotifications } from "../../context/NotificationContext";
import { useState } from "react";

function Topbar() {
  const { theme, toggleTheme } = useTheme();
  const { notifications, markAsRead, clearAll, addNotification } = useNotifications();
  const [showNotifications, setShowNotifications] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const unreadCount = notifications.filter((n) => !n.read).length;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      addNotification({
        title: "Search Performed",
        message: `Searching system records for: "${searchQuery}"`,
        type: "info",
      });
      setSearchQuery("");
    }
  };

  const handleThemeToggle = () => {
    toggleTheme();
  };

  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200/60 bg-white/80 dark:bg-zinc-900/80 dark:border-zinc-800/60 px-8 backdrop-blur-xl transition-all duration-300">
      <div className="flex items-center gap-6 w-full justify-between">
        <form onSubmit={handleSearch} className="group flex w-full max-w-xl items-center gap-3 rounded-2xl border border-slate-200/80 dark:border-zinc-700/80 bg-slate-100/50 dark:bg-zinc-800/50 px-4 py-2.5 transition-all focus-within:border-blue-500 focus-within:bg-white dark:focus-within:bg-zinc-900 focus-within:ring-4 focus-within:ring-blue-500/10">
          <Search size={18} className="text-slate-400 group-focus-within:text-blue-500 transition-colors" />
          <input
            type="text"
            placeholder="Search employees, reports, AI insights..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent text-sm font-medium text-slate-700 dark:text-zinc-200 outline-none placeholder:text-slate-400"
          />
        </form>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={handleThemeToggle}
            className="rounded-2xl border border-slate-200 dark:border-zinc-700 p-2.5 text-slate-600 dark:text-zinc-300 transition-all hover:bg-slate-50 dark:hover:bg-zinc-800 hover:scale-110 active:scale-95"
            title={`Switch to ${theme === "light" ? "Dark" : "Light"} Mode`}
          >
            {theme === "light" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <div className="relative">
            <button
              type="button"
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative rounded-2xl border border-slate-200 dark:border-zinc-700 p-2.5 text-slate-600 dark:text-zinc-300 transition hover:bg-slate-50 dark:hover:bg-zinc-800"
            >
              <Bell size={18} />
              {unreadCount > 0 && (
                <span className="absolute -right-1 -top-1 rounded-full bg-red-500 px-1.5 text-xs font-semibold text-white">
                  {unreadCount}
                </span>
              )}
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-3 w-80 overflow-hidden rounded-3xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 shadow-2xl z-50">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-zinc-700 p-4">
                  <h3 className="font-bold text-slate-900 dark:text-zinc-100">Notifications</h3>
                  <div className="flex gap-2">
                    <button onClick={clearAll} className="p-1.5 text-slate-400 hover:text-red-500 transition">
                      <Trash2 size={16} />
                    </button>
                    <button onClick={() => setShowNotifications(false)} className="p-1.5 text-slate-400 hover:text-slate-600 transition">
                      <X size={16} />
                    </button>
                  </div>
                </div>
                <div className="max-h-[400px] overflow-y-auto">
                  {notifications.length === 0 ? (
                    <div className="p-8 text-center text-sm text-slate-500">No new notifications</div>
                  ) : (
                    notifications.map((n) => (
                      <div
                        key={n.id}
                        className={`flex gap-3 p-4 border-b border-slate-50 dark:border-zinc-700 transition hover:bg-slate-50 dark:hover:bg-zinc-700/50 ${
                          !n.read ? "bg-blue-50/30 dark:bg-blue-900/10" : ""
                        }`}
                      >
                        <div className={`mt-1 h-2 w-2 shrink-0 rounded-full ${
                          n.type === "success" ? "bg-emerald-500" : n.type === "error" ? "bg-red-500" : "bg-blue-500"
                        }`} />
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between gap-2">
                            <p className="text-xs font-bold text-slate-900 dark:text-zinc-100">{n.title}</p>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{n.time}</p>
                          </div>
                          <p className="text-xs text-slate-600 dark:text-zinc-400 line-clamp-2">{n.message}</p>
                          {!n.read && (
                            <button
                              onClick={() => markAsRead(n.id)}
                              className="flex items-center gap-1 text-[10px] font-bold text-blue-600 uppercase"
                            >
                              <Check size={12} /> Mark as read
                            </button>
                          )}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-3 py-2 shadow-sm transition-colors duration-300">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white shadow-lg shadow-blue-900/20">
              HR
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-zinc-100">HR Manager</p>
              <p className="text-xs text-slate-500 dark:text-zinc-400">Admin Access</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Topbar;
