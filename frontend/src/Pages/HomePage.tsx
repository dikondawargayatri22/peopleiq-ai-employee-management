import {
  ArrowRight,
  Eye,
  EyeOff,
  Fingerprint,
  IdCard,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Users,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type AuthMode = "login" | "register";

function HomePage() {
  const navigate = useNavigate();
  const [authMode, setAuthMode] = useState<AuthMode>("login");
  
  // Form State
  const [employeeId, setEmployeeId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate production delay
    setTimeout(() => {
      localStorage.setItem(
        "peopleiq_user",
        JSON.stringify({
          email,
          employeeId,
          name: name || "Demo User",
          role: "Employee",
          isAuthenticated: true,
        })
      );
      setIsLoading(false);
      navigate("/overview");
    }, 1200);
  };

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-500 flex flex-col lg:flex-row">
      {/* Brand Side - Visual */}
      <section className="relative hidden lg:flex lg:w-1/2 flex-col justify-between p-16 overflow-hidden bg-zinc-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,#27272a_0%,transparent_50%)] opacity-40" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_70%,#3f3f46_0%,transparent_50%)] opacity-20" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5" />
        </div>

        <div className="relative z-10 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-100 shadow-xl shadow-black/40">
            <Users size={28} className="text-zinc-900" />
          </div>
          <div>
            <h1 className="text-2xl font-black tracking-tight text-white">PeopleIQ</h1>
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Enterprise AI</p>
          </div>
        </div>

        <div className="relative z-10">
          <p className="mb-6 inline-flex rounded-full border border-zinc-700 bg-zinc-800/50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-zinc-300">
            Intelligence v4.0
          </p>
          <h2 className="text-6xl font-black leading-tight text-white">
            The Future of <br />
            <span className="text-zinc-400 text-7xl italic">Workforce</span> <br />
            Intelligence.
          </h2>
          <p className="mt-8 max-w-lg text-xl font-medium leading-relaxed text-zinc-400">
            A unified platform for employee lifecycle management, powered by advanced AI insights and real-time behavioral analytics.
          </p>
          
          <div className="mt-12 flex gap-12 text-zinc-100">
            <div>
              <p className="text-4xl font-black tracking-tighter">98%</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-widest text-zinc-500">Accuracy</p>
            </div>
            <div>
              <p className="text-4xl font-black tracking-tighter">1.2k+</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-widest text-zinc-500">Enterprises</p>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
          <span>&copy; 2026 PeopleIQ Inc.</span>
          <div className="flex gap-4">
            <button className="hover:text-white transition">Privacy</button>
            <button className="hover:text-white transition">Security</button>
          </div>
        </div>
      </section>

      {/* Auth Side */}
      <section className="relative flex flex-1 items-center justify-center p-8 lg:p-12 bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,#18181b_0%,transparent_50%)] opacity-50" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5" />
        </div>

        <div className="relative z-10 w-full max-w-[440px] space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          
          <div className="bg-zinc-900/50 backdrop-blur-2xl border border-zinc-800 rounded-[2.5rem] shadow-2xl shadow-black/50 overflow-hidden">
            <div className="p-8 pb-0 text-center">
              <h3 className="text-2xl font-black text-white tracking-tight">
                {authMode === "login" ? "Identity Verification" : "Secure Registration"}
              </h3>
              <p className="mt-2 text-sm font-medium text-zinc-400">
                {authMode === "login" 
                  ? "Enter your credentials to synchronize." 
                  : "Register your unique signature to begin."}
              </p>
            </div>

            <div className="px-8 mt-8">
              <div className="flex p-1 bg-zinc-800/50 rounded-2xl border border-zinc-800">
                <button
                  onClick={() => setAuthMode("login")}
                  className={`flex-1 py-2.5 text-xs font-black uppercase tracking-widest rounded-xl transition-all ${
                    authMode === "login" 
                    ? "bg-zinc-100 text-zinc-900 shadow-lg" 
                    : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  Log In
                </button>
                <button
                  onClick={() => setAuthMode("register")}
                  className={`flex-1 py-2.5 text-xs font-black uppercase tracking-widest rounded-xl transition-all ${
                    authMode === "register" 
                    ? "bg-zinc-100 text-zinc-900 shadow-lg" 
                    : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  New Account
                </button>
              </div>
            </div>

            <form onSubmit={handleAuth} className="p-8 space-y-5">
              {authMode === "register" && (
                <div className="space-y-1.5 animate-in fade-in slide-in-from-top-2 duration-300">
                  <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-1">Full Name</label>
                  <div className="group relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                      <Fingerprint size={18} className="text-zinc-500 group-focus-within:text-zinc-100 transition-colors" />
                    </div>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="block w-full pl-11 pr-4 py-3.5 bg-zinc-950 border border-zinc-800 rounded-2xl text-white outline-none focus:ring-4 focus:ring-zinc-500/10 focus:border-zinc-500 transition-all font-semibold"
                      placeholder="e.g. John Doe"
                    />
                  </div>
                </div>
              )}

              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-1">Employee ID</label>
                <div className="group relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                    <IdCard size={18} className="text-zinc-500 group-focus-within:text-zinc-100 transition-colors" />
                  </div>
                  <input
                    type="text"
                    required
                    value={employeeId}
                    onChange={(e) => setEmployeeId(e.target.value)}
                    className="block w-full pl-11 pr-4 py-3.5 bg-zinc-950 border border-zinc-800 rounded-2xl text-white outline-none focus:ring-4 focus:ring-zinc-500/10 focus:border-zinc-500 transition-all font-semibold uppercase placeholder:normal-case"
                    placeholder="e.g. E10234"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-1">Work Email</label>
                <div className="group relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                    <Mail size={18} className="text-zinc-500 group-focus-within:text-zinc-100 transition-colors" />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-11 pr-4 py-3.5 bg-zinc-950 border border-zinc-800 rounded-2xl text-white outline-none focus:ring-4 focus:ring-zinc-500/10 focus:border-zinc-500 transition-all font-semibold"
                    placeholder="name@company.ai"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between ml-1">
                  <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Security Key</label>
                </div>
                <div className="group relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                    <LockKeyhole size={18} className="text-zinc-500 group-focus-within:text-zinc-100 transition-colors" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-11 pr-12 py-3.5 bg-zinc-950 border border-zinc-800 rounded-2xl text-white outline-none focus:ring-4 focus:ring-zinc-500/10 focus:border-zinc-500 transition-all font-semibold"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-4 text-zinc-500 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="relative w-full overflow-hidden rounded-[1.25rem] bg-zinc-100 px-5 py-4 text-xs font-black tracking-[0.2em] text-zinc-900 shadow-xl shadow-black/20 transition-all hover:bg-white active:scale-[0.98] disabled:opacity-70 group"
              >
                <div className={`flex items-center justify-center gap-2 transition-transform duration-300 ${isLoading ? '-translate-y-12' : 'translate-y-0'}`}>
                  {authMode === "login" ? "ACCESS WORKSPACE" : "CREATE ACCOUNT"}
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
                
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center animate-in fade-in zoom-in duration-300">
                    <div className="h-5 w-5 border-2 border-zinc-900/30 border-t-zinc-900 rounded-full animate-spin" />
                  </div>
                )}
              </button>
            </form>

            <div className="bg-zinc-800/30 p-6 border-t border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                <ShieldCheck size={14} className="text-zinc-100" />
                Verified
              </div>
              <p className="text-[9px] font-black text-zinc-600 uppercase tracking-[0.2em]">PeopleIQ Core</p>
            </div>
          </div>

          <p className="text-center text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-600">
            Secure Enterprise Gateway
          </p>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
