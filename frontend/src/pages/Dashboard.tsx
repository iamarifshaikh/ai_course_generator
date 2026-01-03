import { motion } from "framer-motion";
import { Clock, Book, ChevronRight, Award, Zap, MoreHorizontal, User } from "lucide-react";
import Navbar from "@/components/Navbar";

const Dashboard = () => {
    // Mock History Data
    const history = [
        { id: 1, title: "Neural Networks Fundamentals", date: "2 mins ago", progress: 10, type: "AI Course" },
        { id: 2, title: "Advanced React Patterns", date: "Yesterday", progress: 45, type: "Deep Dive" },
        { id: 3, title: "System Design for Scale", date: "3 days ago", progress: 100, type: "Review" },
    ];

    return (
        <div className="min-h-screen bg-[#030014] text-white font-sans selection:bg-primary/30">
            {/* Background Ambience */}
            <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_#1a0b2e_0%,_#000000_100%)] pointer-events-none z-0" />
            <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none z-0 mix-blend-overlay" />

            <Navbar />

            <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl font-display font-bold mb-2"
                        >
                            Welcome back, Traveler
                        </motion.h1>
                        <p className="text-muted-foreground">Your neural learning path is active.</p>
                    </div>

                    <div className="flex gap-4">
                        <div className="glass-panel bg-white/5 px-6 py-3 rounded-2xl flex items-center gap-3 border border-white/5">
                            <Zap className="w-5 h-5 text-yellow-500" />
                            <div>
                                <div className="text-xs font-black uppercase text-muted-foreground tracking-widest">Streak</div>
                                <div className="font-bold">12 Days</div>
                            </div>
                        </div>
                        <div className="glass-panel bg-white/5 px-6 py-3 rounded-2xl flex items-center gap-3 border border-white/5">
                            <Award className="w-5 h-5 text-primary" />
                            <div>
                                <div className="text-xs font-black uppercase text-muted-foreground tracking-widest">XP</div>
                                <div className="font-bold">2,450</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Dashboard Grid */}
                <div className="grid lg:grid-cols-3 gap-8">

                    {/* Main History Column */}
                    <div className="lg:col-span-2 space-y-8">
                        <section>
                            <h2 className="text-sm font-black uppercase tracking-widest text-muted-foreground mb-6 flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                Recent Activity
                            </h2>

                            <div className="space-y-4">
                                {history.map((item, index) => (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="group glass-card bg-[#140a25]/60 hover:bg-[#1f1136]/80 p-6 rounded-2xl border border-white/5 hover:border-primary/20 transition-all cursor-pointer relative overflow-hidden"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                                        <div className="flex items-center justify-between relative z-10">
                                            <div className="flex items-center gap-4">
                                                <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary border border-primary/20">
                                                    <Book className="w-6 h-6" />
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{item.title}</h3>
                                                    <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                                                        <span>{item.type}</span>
                                                        <span className="w-1 h-1 rounded-full bg-white/20" />
                                                        <span>{item.date}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-6">
                                                <div className="text-right hidden sm:block">
                                                    <div className="text-xs font-bold mb-1">{item.progress}% Complete</div>
                                                    <div className="w-24 h-1.5 bg-black/40 rounded-full overflow-hidden">
                                                        <div
                                                            className="h-full bg-primary rounded-full"
                                                            style={{ width: `${item.progress}%` }}
                                                        />
                                                    </div>
                                                </div>
                                                <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-white group-hover:translate-x-1 transition-all" />
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar Profile Column */}
                    <aside className="space-y-8">
                        <div className="glass-card bg-[#140a25]/60 p-8 rounded-3xl border border-white/5 flex flex-col items-center text-center">
                            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-primary to-blue-600 p-1 mb-4 shadow-xl shadow-primary/20">
                                <div className="w-full h-full rounded-full bg-[#0a0518] flex items-center justify-center overflow-hidden">
                                    <User className="w-10 h-10 text-white/50" />
                                </div>
                            </div>
                            <h2 className="text-xl font-bold">Arif Shaikh</h2>
                            <p className="text-sm text-muted-foreground mb-6">Neural Architect</p>

                            <button className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-sm font-bold transition-all">
                                Edit Profile
                            </button>
                        </div>
                    </aside>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;
