import { Brain, Code, FileQuestion, Lightbulb, CheckCircle, ChevronRight } from "lucide-react";

const LiveTutorPreview = () => {
    return (
        <div className="glass-card rounded-3xl p-8 overflow-hidden relative">
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

            <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-pink-500 flex items-center justify-center">
                        <Brain className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <h4 className="font-display font-semibold">Live Adaptive Tutor</h4>
                        <p className="text-xs text-muted-foreground">Currently learning: React Hooks</p>
                    </div>
                    <div className="ml-auto flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-xs text-green-400">Active Session</span>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-4">
                    {/* Explanation Panel */}
                    <div className="bg-secondary/30 rounded-xl p-5">
                        <div className="flex items-center gap-2 mb-3 text-sm font-medium text-primary">
                            <Lightbulb className="w-4 h-4" />
                            Concept Explanation
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            The <span className="text-foreground font-medium">useState</span> hook allows you to add state to functional components. It returns an array with two elements: the current state value and a function to update it.
                        </p>
                        <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                            <CheckCircle className="w-3 h-3 text-green-500" />
                            Adapted to your beginner level
                        </div>
                    </div>

                    {/* Code Example */}
                    <div className="bg-secondary/30 rounded-xl p-5">
                        <div className="flex items-center gap-2 mb-3 text-sm font-medium text-primary">
                            <Code className="w-4 h-4" />
                            Interactive Example
                        </div>
                        <pre className="text-xs bg-background/50 rounded-lg p-3 overflow-x-auto">
                            <code className="text-muted-foreground">
                                <span className="text-pink-400">const</span> [count, setCount] = <span className="text-purple-400">useState</span>(0);
                                {"\n\n"}
                                <span className="text-muted-foreground/50">// Increment the counter</span>
                                {"\n"}
                                <span className="text-pink-400">const</span> increment = () ={">"} {"{"}
                                {"\n"}  setCount(count + 1);
                                {"\n"}{"}"};
                            </code>
                        </pre>
                    </div>
                </div>

                {/* Quiz Section Preview */}
                <div className="mt-4 bg-gradient-to-r from-primary/10 to-pink-500/10 rounded-xl p-5 border border-primary/20">
                    <div className="flex items-center gap-2 mb-3 text-sm font-medium">
                        <FileQuestion className="w-4 h-4 text-primary" />
                        Quick Check
                    </div>
                    <p className="text-sm mb-4">What does useState return?</p>
                    <div className="space-y-2">
                        {["A single value", "An array with value and setter", "A function only"].map((option, i) => (
                            <button
                                key={i}
                                className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all duration-200 ${i === 1
                                    ? "bg-primary/20 border border-primary/50 text-foreground"
                                    : "bg-secondary/30 text-muted-foreground hover:bg-secondary/50"
                                    }`}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Progress indicator */}
                <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="text-xs text-muted-foreground">Mastery: 67%</div>
                        <div className="w-32 h-2 bg-secondary rounded-full overflow-hidden">
                            <div className="w-2/3 h-full bg-gradient-to-r from-primary to-pink-500 rounded-full" />
                        </div>
                    </div>
                    <button className="flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors">
                        Continue <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LiveTutorPreview;
