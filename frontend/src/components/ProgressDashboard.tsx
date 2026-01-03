import { BarChart3, Flame, Target, TrendingUp, Clock, Brain } from "lucide-react";

const ProgressDashboard = () => {
    const masteryData = [
        { topic: "React Basics", mastery: 95, color: "from-green-500 to-emerald-400" },
        { topic: "State Management", mastery: 78, color: "from-primary to-purple-400" },
        { topic: "Hooks", mastery: 62, color: "from-purple-500 to-pink-400" },
        { topic: "Performance", mastery: 45, color: "from-pink-500 to-rose-400" },
        { topic: "Testing", mastery: 30, color: "from-orange-500 to-amber-400" },
    ];

    return (
        <div className="glass-card rounded-3xl p-8 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />

            <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h3 className="font-display font-bold text-xl mb-1">Learning Dashboard</h3>
                        <p className="text-sm text-muted-foreground">Your cognitive state at a glance</p>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30">
                        <Flame className="w-4 h-4 text-orange-400" />
                        <span className="text-sm font-medium text-orange-400">7 day streak</span>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {[
                        { icon: Target, label: "Concepts Mastered", value: "24", color: "text-green-400" },
                        { icon: Clock, label: "Hours Learned", value: "18.5", color: "text-blue-400" },
                        { icon: TrendingUp, label: "Weekly Progress", value: "+12%", color: "text-purple-400" },
                        { icon: Brain, label: "Active Recall", value: "89%", color: "text-pink-400" },
                    ].map((stat, i) => (
                        <div key={i} className="bg-secondary/30 rounded-xl p-4 text-center">
                            <stat.icon className={`w-5 h-5 mx-auto mb-2 ${stat.color}`} />
                            <div className="text-2xl font-bold font-display mb-1">{stat.value}</div>
                            <div className="text-xs text-muted-foreground">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Mastery Heatmap */}
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <BarChart3 className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">Topic Mastery</span>
                    </div>
                    <div className="space-y-3">
                        {masteryData.map((item, i) => (
                            <div key={i} className="group">
                                <div className="flex items-center justify-between mb-1.5">
                                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                                        {item.topic}
                                    </span>
                                    <span className="text-sm font-medium">{item.mastery}%</span>
                                </div>
                                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                    <div
                                        className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-500`}
                                        style={{ width: `${item.mastery}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Spaced Repetition Queue Preview */}
                <div className="mt-8 p-4 bg-gradient-to-r from-primary/10 to-transparent rounded-xl border border-primary/20">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="text-sm font-medium mb-1">Revision Queue</div>
                            <div className="text-xs text-muted-foreground">3 concepts due for review today</div>
                        </div>
                        <button className="px-4 py-2 bg-primary/20 hover:bg-primary/30 rounded-lg text-sm font-medium transition-colors">
                            Start Review
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgressDashboard;
