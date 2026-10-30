import {
  Bell,
  Building2,
  Check,
  ChevronRight,
  FileText,
  Globe,
  Lock,
  Mail,
  Moon,
  Save,
  Shield,
  Smartphone,
  User,
  Zap,
} from "lucide-react";
import { useState } from "react";

type SettingsCategory = "Profile" | "Company" | "Notifications" | "Security" | "AI Config";

function SettingsPage() {
  const [activeCategory, setActiveCategory] = useState<SettingsCategory>("Profile");
  const [isSaved, setIsSaved] = useState(false);

  const categories: { name: SettingsCategory; icon: any; desc: string }[] = [
    { name: "Profile", icon: User, desc: "Manage your personal information" },
    { name: "Company", icon: Building2, desc: "Configure organization settings" },
    { name: "Notifications", icon: Bell, desc: "Control alert preferences" },
    { name: "Security", icon: Shield, desc: "Secure your account & data" },
    { name: "AI Config", icon: Zap, desc: "Customize AI behavior & models" },
  ];

  const handleSave = () => {
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <section className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 rounded-3xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 shadow-sm lg:flex-row lg:items-center transition-colors duration-300">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-zinc-100">Settings</h1>
          <p className="mt-2 text-slate-600 dark:text-zinc-400">
            Customize your PeopleIQ experience and manage system-wide configurations.
          </p>
        </div>

        <button
          onClick={handleSave}
          className="flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 shadow-lg shadow-blue-900/20 active:scale-95"
        >
          {isSaved ? <Check size={18} /> : <Save size={18} />}
          {isSaved ? "Settings Saved" : "Save Changes"}
        </button>
      </div>

      <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
        {/* Sidebar Nav */}
        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`w-full flex items-center gap-3 p-4 rounded-2xl transition-all duration-200 ${
                activeCategory === cat.name
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-900/10"
                  : "bg-white dark:bg-zinc-900 text-slate-600 dark:text-zinc-400 border border-slate-200 dark:border-zinc-800 hover:border-blue-300 dark:hover:border-zinc-700 hover:text-blue-600 dark:hover:text-zinc-100"
              }`}
            >
              <cat.icon size={20} />
              <div className="text-left">
                <p className="text-sm font-bold">{cat.name}</p>
                <p className={`text-[10px] ${activeCategory === cat.name ? "text-blue-100" : "text-slate-400 dark:text-zinc-500"}`}>
                  {cat.desc}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="rounded-3xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 shadow-sm min-h-[500px] transition-colors duration-300">
          {activeCategory === "Profile" && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="flex items-center gap-6 pb-8 border-b border-slate-100 dark:border-zinc-800">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white shadow-xl shadow-blue-900/20">
                  HR
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-zinc-100">Admin Profile</h3>
                  <p className="text-sm text-slate-500 dark:text-zinc-400">Update your photo and personal details.</p>
                  <button className="mt-3 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline">Change Avatar</button>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-zinc-300">Full Name</label>
                  <input
                    type="text"
                    defaultValue="HR Manager"
                    className="w-full rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950 p-3 text-sm outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:text-zinc-100 transition"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-zinc-300">Email Address</label>
                  <input
                    type="email"
                    defaultValue="admin@peopleiq.ai"
                    className="w-full rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950 p-3 text-sm outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:text-zinc-100 transition"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-zinc-300">Role</label>
                  <input
                    type="text"
                    defaultValue="System Administrator"
                    readOnly
                    className="w-full rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-100 dark:bg-zinc-800/50 p-3 text-sm text-slate-500 dark:text-zinc-500 cursor-not-allowed"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-zinc-300">Phone</label>
                  <input
                    type="text"
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950 p-3 text-sm outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:text-zinc-100 transition"
                  />
                </div>
              </div>
            </div>
          )}

          {activeCategory === "Notifications" && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <h3 className="text-lg font-bold text-slate-900 dark:text-zinc-100">Notification Preferences</h3>
              <p className="text-sm text-slate-500 dark:text-zinc-400">Choose how you want to be notified about system events.</p>
              
              <div className="mt-8 space-y-4">
                {[
                  { label: "Email Notifications", desc: "Receive updates via email", icon: Mail, checked: true },
                  { label: "Push Notifications", desc: "Real-time alerts in your browser", icon: Smartphone, checked: true },
                  { label: "Monthly Reports", desc: "Performance and payroll summaries", icon: FileText, checked: false },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-2xl border border-slate-100 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-950/30">
                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-slate-600 dark:text-zinc-300">
                        <item.icon size={18} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-800 dark:text-zinc-200">{item.label}</p>
                        <p className="text-xs text-slate-500 dark:text-zinc-500">{item.desc}</p>
                      </div>
                    </div>
                    <label className="relative inline-flex cursor-pointer items-center">
                      <input type="checkbox" defaultChecked={item.checked} className="peer sr-only" />
                      <div className="peer h-6 w-11 rounded-full bg-slate-200 dark:bg-zinc-800 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300/20"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeCategory === "AI Config" && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-900/20">
                  <Zap size={20} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-zinc-100">AI Engine Settings</h3>
              </div>
              
              <div className="mt-6 space-y-6">
                <div className="space-y-3 p-5 rounded-2xl bg-blue-50/50 dark:bg-zinc-950/50 border border-blue-100 dark:border-zinc-800">
                  <p className="text-sm font-bold text-blue-900 dark:text-blue-400">AI Model Sensitivity</p>
                  <p className="text-xs text-blue-700 dark:text-zinc-400 leading-relaxed">Adjust how aggressively the AI flags attrition risks and performance anomalies.</p>
                  <input type="range" className="w-full h-2 bg-blue-200 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-600" />
                  <div className="flex justify-between text-[10px] font-bold text-blue-400 dark:text-zinc-500 uppercase">
                    <span>Conservative</span>
                    <span>Balanced</span>
                    <span>Aggressive</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold text-slate-800 dark:text-zinc-200">Auto-generated Summaries</p>
                      <p className="text-xs text-slate-500 dark:text-zinc-500">Automatically generate AI summaries for every performance review.</p>
                    </div>
                    <label className="relative inline-flex cursor-pointer items-center">
                      <input type="checkbox" defaultChecked className="peer sr-only" />
                      <div className="peer h-6 w-11 rounded-full bg-slate-200 dark:bg-zinc-800 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300/20"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold text-slate-800 dark:text-zinc-200">Anomaly Detection</p>
                      <p className="text-xs text-slate-500 dark:text-zinc-500">Enable real-time AI monitoring for attendance and payroll anomalies.</p>
                    </div>
                    <label className="relative inline-flex cursor-pointer items-center">
                      <input type="checkbox" defaultChecked className="peer sr-only" />
                      <div className="peer h-6 w-11 rounded-full bg-slate-200 dark:bg-zinc-800 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300/20"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Placeholder for other categories */}
          {(activeCategory === "Company" || activeCategory === "Security") && (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-4 animate-in fade-in duration-300">
              <div className="p-6 rounded-full bg-slate-50 dark:bg-zinc-950 text-slate-300 dark:text-zinc-800 border border-transparent dark:border-zinc-800">
                <Lock size={64} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-zinc-100">{activeCategory} Settings</h3>
                <p className="text-sm text-slate-500 dark:text-zinc-500 max-w-xs mx-auto">This section is currently being updated for the next release. Administrative access required.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default SettingsPage;
