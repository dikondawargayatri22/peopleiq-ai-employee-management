import {
  AlertCircle,
  BarChart,
  Bot,
  BrainCircuit,
  Lightbulb,
  MessageSquare,
  Mic,
  Paperclip,
  Send,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  UserRound,
  Zap,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";

type Message = {
  id: number;
  role: "assistant" | "user";
  content: string;
  time: string;
};

const initialMessages: Message[] = [
  {
    id: 1,
    role: "assistant",
    content: "Hello! I'm your PeopleIQ AI assistant. How can I help you manage your workforce today? I can analyze attendance trends, predict attrition risks, or help with performance reviews.",
    time: "09:00 AM",
  },
];

const suggestedPrompts = [
  "Analyze attendance for Engineering",
  "Predict attrition risk for next month",
  "Summarize Neha Sharma's performance",
  "Generate a recruitment plan for UI Designers",
];

const attritionRisks = [
  { name: "Rahul Verma", risk: "High", reason: "Decreased engagement", color: "red" },
  { name: "Priya Nair", risk: "Medium", reason: "Long commute identified", color: "amber" },
  { name: "Suresh Menon", risk: "Low", reason: "High workload", color: "blue" },
];

function AIAssistantPage() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const newUserMessage: Message = {
      id: Date.now(),
      role: "user",
      content: inputValue,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages([...messages, newUserMessage]);
    setInputValue("");

    // Simulate AI Response
    setTimeout(() => {
      const aiResponse: Message = {
        id: Date.now() + 1,
        role: "assistant",
        content: "I'm analyzing the data right now. Based on current patterns, I see a 12% increase in productivity in the Engineering department since the last sprint. Would you like me to generate a detailed report on this?",
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <section className="grid gap-6 lg:grid-cols-[1fr_400px] animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Chat Section */}
      <div className="flex flex-col rounded-3xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm overflow-hidden h-[calc(100vh-140px)] transition-colors duration-300">
        {/* Chat Header */}
        <div className="border-b border-slate-100 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-950/50 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-900/20">
              <Bot size={22} />
            </div>
            <div>
              <h2 className="font-bold text-slate-900 dark:text-zinc-100">PeopleIQ Assistant</h2>
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs text-slate-500 dark:text-zinc-500 font-medium">Online & Analyzing</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 text-slate-400 dark:text-zinc-500 hover:text-blue-600 dark:hover:text-blue-400 transition rounded-xl hover:bg-blue-50 dark:hover:bg-zinc-800">
              <Zap size={18} />
            </button>
            <button className="p-2 text-slate-400 dark:text-zinc-500 hover:text-blue-600 dark:hover:text-blue-400 transition rounded-xl hover:bg-blue-50 dark:hover:bg-zinc-800">
              <ShieldCheck size={18} />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div className={`flex gap-3 max-w-[80%] ${message.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white shadow-md ${
                  message.role === "user" ? "bg-zinc-800 dark:bg-zinc-700" : "bg-blue-600"
                }`}>
                  {message.role === "user" ? <UserRound size={16} /> : <Bot size={16} />}
                </div>
                <div className={`space-y-1 ${message.role === "user" ? "items-end" : "items-start"}`}>
                  <div className={`rounded-2xl px-4 py-2.5 text-sm transition-all ${
                    message.role === "user" 
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-900/10" 
                      : "bg-slate-100 dark:bg-zinc-800 text-slate-800 dark:text-zinc-200"
                  }`}>
                    {message.content}
                  </div>
                  <p className="text-[10px] font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-tighter">{message.time}</p>
                </div>
              </div>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-slate-100 dark:border-zinc-800 bg-slate-50/30 dark:bg-zinc-950/30">
          <div className="mb-4 flex flex-wrap gap-2">
            {suggestedPrompts.map((prompt) => (
              <button
                key={prompt}
                onClick={() => setInputValue(prompt)}
                className="text-[11px] font-semibold text-slate-600 dark:text-zinc-400 bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 px-3 py-1.5 rounded-full hover:border-blue-300 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition shadow-sm"
              >
                {prompt}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 rounded-2xl p-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-400 transition-all">
            <button className="p-2 text-slate-400 dark:text-zinc-500 hover:text-blue-600 dark:hover:text-blue-400 transition">
              <Paperclip size={20} />
            </button>
            <input
              type="text"
              placeholder="Ask me anything about your employees..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 bg-transparent text-sm text-slate-700 dark:text-zinc-200 outline-none placeholder:text-slate-400 dark:placeholder:text-zinc-600"
            />
            <button className="p-2 text-slate-400 dark:text-zinc-500 hover:text-blue-600 dark:hover:text-blue-400 transition">
              <Mic size={20} />
            </button>
            <button
              onClick={handleSend}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-900/20 hover:bg-blue-700 transition active:scale-95"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar Insights */}
      <div className="space-y-6 overflow-y-auto h-[calc(100vh-140px)] pr-1 custom-scrollbar">
        {/* Workforce Attrition Risk */}
        <div className="rounded-3xl border border-red-100 dark:border-zinc-800 bg-red-50/30 dark:bg-zinc-900/30 p-6 shadow-sm transition-colors duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-red-600 text-white shadow-lg shadow-red-900/20">
              <AlertCircle size={20} />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-zinc-100">AI Attrition Risk</h3>
          </div>
          <div className="space-y-4">
            {attritionRisks.map((item) => (
              <div key={item.name} className="flex items-center justify-between p-3 rounded-2xl bg-white dark:bg-zinc-950 border border-red-50 dark:border-zinc-800 shadow-sm transition-all hover:shadow-md">
                <div>
                  <p className="text-sm font-bold text-slate-800 dark:text-zinc-200">{item.name}</p>
                  <p className="text-[11px] text-slate-500 dark:text-zinc-500">{item.reason}</p>
                </div>
                <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase ${
                  item.risk === "High" ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 ring-red-200 dark:ring-red-900/40" :
                  item.risk === "Medium" ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 ring-amber-200 dark:ring-amber-900/40" :
                  "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 ring-blue-200 dark:ring-blue-900/40"
                } ring-1`}>
                  {item.risk} Risk
                </span>
              </div>
            ))}
          </div>
          <button className="mt-6 w-full rounded-2xl bg-red-600 py-3 text-sm font-semibold text-white shadow-lg shadow-red-900/20 transition hover:bg-red-700 active:scale-95">
            View Intervention Plans
          </button>
        </div>

        {/* Sentiment Analysis */}
        <div className="rounded-3xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm transition-colors duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-purple-600 text-white shadow-lg shadow-purple-900/20">
              <BrainCircuit size={20} />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-zinc-100">Workforce Sentiment</h3>
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs mb-1.5 font-bold">
                <span className="text-emerald-600 dark:text-emerald-400">Positive</span>
                <span className="text-slate-500 dark:text-zinc-500">72%</span>
              </div>
              <div className="h-2 w-full bg-slate-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.4)]" style={{ width: "72%" }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1.5 font-bold">
                <span className="text-amber-500 dark:text-amber-400">Neutral</span>
                <span className="text-slate-500 dark:text-zinc-500">20%</span>
              </div>
              <div className="h-2 w-full bg-slate-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full bg-amber-400 rounded-full shadow-[0_0_8px_rgba(251,191,36,0.4)]" style={{ width: "20%" }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1.5 font-bold">
                <span className="text-red-500 dark:text-red-400">Negative</span>
                <span className="text-slate-500 dark:text-zinc-500">8%</span>
              </div>
              <div className="h-2 w-full bg-slate-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full bg-red-500 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.4)]" style={{ width: "8%" }} />
              </div>
            </div>
          </div>
          <p className="mt-6 text-xs text-slate-500 dark:text-zinc-500 leading-relaxed italic border-l-2 border-zinc-200 dark:border-zinc-800 pl-3">
            "Sentiment improved by 5% following the announcement of the flexible work policy."
          </p>
        </div>

        {/* Proactive Suggestions */}
        <div className="rounded-3xl border border-blue-100 dark:border-zinc-800 bg-blue-50/50 dark:bg-zinc-900/30 p-6 shadow-sm transition-colors duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-md">
              <Lightbulb size={20} />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-zinc-100">AI Suggestions</h3>
          </div>
          <div className="space-y-3">
            {[
              "Review leave policy for Q3",
              "Schedule 1-on-1 with Rahul Verma",
              "Congratulate Engineering on goals",
            ].map((text) => (
              <div key={text} className="flex items-start gap-2 text-sm text-slate-700 dark:text-zinc-300 bg-white/60 dark:bg-zinc-950/50 p-3 rounded-xl border border-blue-100/50 dark:border-zinc-800/50 transition-all hover:bg-white dark:hover:bg-zinc-900 hover:shadow-md">
                <Sparkles size={14} className="mt-0.5 text-blue-500 shrink-0" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AIAssistantPage;
