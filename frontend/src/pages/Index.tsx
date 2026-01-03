import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import PromptBuilder from "@/components/PromptBuilder";
import LiveTutorPreview from "@/components/LiveTutorPreview";
import ProgressDashboard from "@/components/ProgressDashboard";
import Footer from "@/components/Footer";
import {
    Brain,
    Sparkles,
    Gauge,
    RefreshCw,
    BarChart3,
    Layers,
    MessageSquare,
    Route,
    Target,
    Zap,
    ChevronDown,
    Cpu,
    Palette,
    BarChart,
    Shield,
    ArrowRight
} from "lucide-react";

const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const Index = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [activeHub, setActiveHub] = useState<number | null>(null);

    const hubs = [
        {
            title: "Neural Engineering",
            category: "Logic & Code",
            icon: <Cpu className="w-8 h-8" />,
            color: "from-blue-600/30 to-indigo-500/30",
            glow: "bg-blue-500/20",
            courses: [
                { name: "Python Architecture", level: "Advanced" },
                { name: "Go Concurrency", level: "Intermediate" },
                { name: "Rust Memory Safety", level: "Advanced" },
                { name: "Distributed Systems", level: "Intermediate" }
            ]
        },
        {
            title: "Creative Synthesis",
            category: "Design & Arts",
            icon: <Palette className="w-8 h-8" />,
            color: "from-purple-600/30 to-pink-500/30",
            glow: "bg-purple-500/20",
            courses: [
                { name: "Generative UI", level: "Advanced" },
                { name: "Brand Ontology", level: "Beginner" },
                { name: "Abstract Theory", level: "Intermediate" },
                { name: "Motion Synthesis", level: "Advanced" }
            ]
        },
        {
            title: "Strategic Logic",
            category: "Executive Growth",
            icon: <BarChart className="w-8 h-8" />,
            color: "from-orange-600/30 to-yellow-500/30",
            glow: "bg-orange-500/20",
            courses: [
                { name: "Systems Thinking", level: "Intermediate" },
                { name: "Behavioral Econ", level: "Beginner" },
                { name: "Venture Scaling", level: "Advanced" },
                { name: "Game Theory", level: "Advanced" }
            ]
        },
        {
            title: "Existential Foundations",
            category: "Science & Minds",
            icon: <Shield className="w-8 h-8" />,
            color: "from-emerald-600/30 to-teal-500/30",
            glow: "bg-emerald-500/20",
            courses: [
                { name: "Quantum Logic", level: "Advanced" },
                { name: "Molecular Bio", level: "Advanced" },
                { name: "Metaphysics", level: "Intermediate" },
                { name: "Cognitive Psych", level: "Beginner" }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-transparent text-foreground relative selection:bg-primary/30">
            {/* Subtle Grid Texture Wrapper */}
            <div className="fixed inset-0 pointer-events-none z-0 bg-grid-subtle opacity-10" />
            {/* Cosmic Background Layer */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 left-0 right-0 h-[60vh] bg-gradient-to-b from-[#1A0B3B]/30 to-transparent" />
                <div className="wireframe-ceiling opacity-20" />

                {/* Floating Orbs */}
                <motion.div
                    animate={{ y: [0, -20, 0], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[20%] right-[10%] w-96 h-96 bg-primary/10 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[40%] left-[20%] w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[200px]"
                />
                <motion.div
                    animate={{ y: [0, 30, 0], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-[10%] left-[5%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[150px]"
                />
            </div>

            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-40 pb-32 px-6 z-10 overflow-hidden">
                <div className="container mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Decorative Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-white/10 mb-8 hover:scale-105 transition-transform cursor-default">
                            <Sparkles className="w-4 h-4 text-[#d8b4fe]" />
                            <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                                Cognitive Evolution Architecture
                            </span>
                        </div>

                        {/* Main Title */}
                        <h1 className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl max-w-5xl mx-auto mb-8 leading-[1.05] tracking-tight">
                            GROWING IDEAS, <span className="block italic font-medium opacity-50">INSPIRING</span>
                            <span className="gradient-text"> BRILLIANCE</span>
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground/80 max-w-2xl mx-auto mb-16 leading-relaxed">
                            Master any skill with our neural-mapped learning engine. We don't just teach—we adapt, evolve, and ensure cognitive mastery.
                        </p>

                        <div className="max-w-4xl mx-auto">
                            <PromptBuilder />
                        </div>

                        {/* Scrolling Indicator */}
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="mt-24 text-muted-foreground/30 flex flex-col items-center gap-2"
                        >
                            <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Deep Dive</span>
                            <ChevronDown className="w-5 h-5" />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Stats / Trust Section */}
            <section className="relative py-12 z-10">
                <div className="container mx-auto px-6">
                    <div className="glass-panel rounded-[40px] p-12">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                            {[
                                { value: "2500+", label: "Neural Pathways Mapped", desc: "Detailed Cognitive Nodes" },
                                { value: "15x", label: "Faster Recall Rate", desc: "Active Retrieval Sync" },
                                { value: "98%", label: "Knowledge Retention", desc: "Spaced Repetition Impact" },
                                { value: "6M", label: "Learning Minutes", desc: "Real-time Telemetry Data" },
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="text-center group"
                                >
                                    <div className="text-4xl md:text-5xl font-black gradient-text mb-3 group-hover:scale-110 transition-transform">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm font-bold text-foreground mb-1">{stat.label}</div>
                                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground/60">{stat.desc}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Aesthetic Discovery Hub */}
            <section id="discovery-hub" className="py-32 px-6 relative z-10 overflow-hidden">
                <div className="container mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={revealVariants}
                        className="text-center mb-20"
                    >
                        <h2 className="font-display font-bold text-4xl md:text-6xl mb-6">Discovery <span className="gradient-text">Hub</span></h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Select a core domain to reveal specialized neural templates tailored for your learning trajectory.</p>
                    </motion.div>

                    {/* Interactive Domain Hubs */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {hubs.map((hub, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                onClick={() => setActiveHub(activeHub === i ? null : i)}
                                className={`relative p-10 rounded-[48px] cursor-pointer transition-all duration-700 overflow-hidden group ${activeHub === i
                                    ? "glass-portal ring-1 ring-primary/40 scale-[1.02]"
                                    : "bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] hover:border-white/20"
                                    }`}
                            >
                                {/* Atmospheric Glow Portal */}
                                {/* Atmospheric Subtle Highlight */}
                                <div className={`absolute -top-32 -right-32 w-64 h-64 rounded-full blur-[60px] transition-all duration-1000 ${hub.glow} ${activeHub === i ? "opacity-60 scale-150" : "opacity-0 group-hover:opacity-20"}`} />

                                <div className="relative z-10">
                                    <div className={`mb-8 p-4 rounded-2xl bg-white/5 border border-white/10 w-fit transform transition-all duration-500 group-hover:bg-primary/20 group-hover:border-primary/40 group-hover:scale-110 ${activeHub === i ? "bg-primary/30 border-primary/50 text-white" : "text-primary/70"}`}>
                                        {hub.icon}
                                    </div>
                                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/80 mb-4">
                                        {hub.category}
                                    </div>
                                    <h3 className="text-3xl font-extrabold tracking-tight leading-tight group-hover:text-white transition-colors duration-500">
                                        {hub.title}
                                    </h3>

                                    <div className="mt-12 flex items-center gap-3 text-xs font-bold text-muted-foreground/60 group-hover:text-white transition-all duration-500">
                                        <div className="h-px w-8 bg-white/20 group-hover:w-12 transition-all" />
                                        <span>{activeHub === i ? "Initializing Protocol" : "Initialize Link"}</span>
                                        <ChevronDown className={`w-4 h-4 transition-transform duration-700 ${activeHub === i ? "rotate-180" : ""}`} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Sub-topic Selection Area */}
                    <div className="relative min-h-[400px]">
                        {activeHub === null ? (
                            <motion.div
                                initial={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 flex flex-col items-center justify-center text-center p-12 glass-card rounded-[40px] border-dashed border-white/10"
                            >
                                <Layers className="w-16 h-16 text-muted-foreground/20 mb-6" />
                                <p className="text-muted-foreground/40 font-bold uppercase tracking-widest">Select a domain to begin synthesis</p>
                            </motion.div>
                        ) : (
                            <motion.div
                                key={activeHub}
                                initial={{ opacity: 0, scale: 0.98, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                className="glass-card rounded-[40px] p-12 border-primary/20 relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-grid-subtle opacity-5" />

                                <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                                    <div className="space-y-8">
                                        <div className="space-y-2">
                                            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-black uppercase tracking-widest text-primary">Selected Protocol</div>
                                            <h4 className="text-4xl font-bold">{hubs[activeHub].title} Templates</h4>
                                        </div>
                                        <p className="text-muted-foreground">Accelerate your mastery with specialized cognitive templates designed for deep retention and rapid skill acquisition.</p>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {hubs[activeHub].courses.map((course, i) => (
                                                <motion.div
                                                    key={i}
                                                    whileHover={{ scale: 1.02, x: 5 }}
                                                    className="p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-primary/40 hover:bg-primary/5 cursor-pointer transition-all group/item"
                                                >
                                                    <div className="flex justify-between items-start mb-2">
                                                        <h5 className="font-bold group-hover/item:text-primary transition-colors">{course.name}</h5>
                                                        <span className="text-[8px] font-black px-1.5 py-0.5 rounded bg-white/5 border border-white/10 uppercase tracking-tighter opacity-50">{course.level}</span>
                                                    </div>
                                                    <div className="text-[10px] text-muted-foreground flex items-center gap-2">
                                                        <span>Initialize Sequence</span>
                                                        <Sparkles className="w-3 h-3 text-primary opacity-0 group-hover/item:opacity-100 transition-opacity" />
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="hidden lg:block relative">
                                        <div className="aspect-video rounded-[32px] overflow-hidden glass-card border-white/10 shadow-2xl relative">
                                            <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-primary/10 to-transparent" />
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                                                    <Zap className="w-10 h-10 text-primary animate-pulse" />
                                                </div>
                                            </div>
                                            {/* Abstract Content */}
                                            <div className="p-8 space-y-4">
                                                <div className="h-2 w-1/3 bg-white/10 rounded-full" />
                                                <div className="h-2 w-1/2 bg-white/5 rounded-full" />
                                                <div className="h-32 w-full bg-white/5 rounded-2xl border border-white/10" />
                                            </div>
                                        </div>
                                        {/* Orbital Decorations */}
                                        <div className="absolute -top-8 -right-8 w-16 h-16 rounded-full bg-primary/10 blur-lg animate-bounce" />
                                        <div className="absolute -bottom-10 -left-10 w-24 h-24 rounded-full bg-purple-500/10 blur-xl animate-pulse" />
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            </section>

            {/* Bento Grid Content Section */}
            <section id="features" className="py-24 px-6 relative z-10">
                <div className="container mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={revealVariants}
                        className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8"
                    >
                        <div className="max-w-xl">
                            <h2 className="font-display font-bold text-4xl md:text-6xl mb-6 leading-tight">
                                Your Neural <span className="gradient-text">Learning Hub</span>
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Every interaction is analyzed by our cognitive core to build a perfectly tailored experience.
                            </p>
                        </div>
                        <div className="flex items-center gap-6 pb-2">
                            <div className="text-right">
                                <div className="text-2xl font-bold">Adaptive Sync</div>
                                <div className="text-xs text-primary font-bold tracking-widest uppercase">Live Telemetry</div>
                            </div>
                            <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center animate-pulse">
                                <Zap className="w-6 h-6 text-primary" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Features Bento Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[250px]">
                        {/* Featured Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="md:col-span-8 md:row-span-2 glass-card rounded-3xl p-10 relative overflow-hidden group hover:border-primary/30 transition-all duration-500"
                        >
                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                                        <Brain className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="text-3xl font-bold mb-4">Mastering Complexity</h3>
                                    <p className="text-muted-foreground text-lg max-w-md leading-relaxed">
                                        Our AI breaks down complex subjects into atomic, learnable concepts tailored to your existing mental models.
                                    </p>
                                </div>
                                <div className="flex gap-4">
                                    <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">Socratic Mode</div>
                                    <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">Deep Synthesis</div>
                                </div>
                            </div>
                            {/* Decorative background visual */}
                            <div className="absolute top-0 right-0 w-2/3 h-full overflow-hidden opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity">
                                <LiveTutorPreview />
                            </div>
                        </motion.div>

                        {/* Smaller Cards */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="md:col-span-4 md:row-span-1 glass-card rounded-3xl p-8 hover:border-primary/30 transition-all"
                        >
                            <Gauge className="w-8 h-8 text-primary mb-6" />
                            <h4 className="text-xl font-bold mb-2">Silent Feedback</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Tracking hesitation and dwell time to predict your cognitive load.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="md:col-span-4 md:row-span-1 glass-card rounded-3xl p-8 hover:border-primary/30 transition-all"
                        >
                            <RefreshCw className="w-8 h-8 text-primary mb-6" />
                            <h4 className="text-xl font-bold mb-2">Interval Mastery</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Dynamically scheduled active recall sessions based on your forgetting curve.
                            </p>
                        </motion.div>

                        {/* Mastery Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="md:col-span-4 md:row-span-2 glass-card rounded-3xl p-8 relative overflow-hidden hover:border-primary/30 transition-all"
                        >
                            <ProgressDashboard />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="md:col-span-8 md:row-span-1 glass-card rounded-3xl p-10 flex flex-col md:flex-row items-center gap-10 hover:border-primary/30 transition-all"
                        >
                            <div className="flex-1">
                                <h4 className="text-2xl font-bold mb-4">Interactive Curriculum</h4>
                                <p className="text-muted-foreground leading-relaxed">
                                    Your learning roadmap expands and shifts in real-time as you master concepts or identify gaps.
                                </p>
                            </div>
                            <div className="flex gap-2">
                                <div className="w-16 h-16 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center">
                                    <Layers className="w-8 h-8 text-indigo-400" />
                                </div>
                                <div className="w-16 h-16 rounded-2xl bg-pink-500/20 border border-pink-500/30 flex items-center justify-center">
                                    <Route className="w-8 h-8 text-pink-400" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* How It Works with Interactive Windows */}
            <section id="how-it-works" className="py-32 px-6 relative z-10">
                <div className="container mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={revealVariants}
                        className="text-center mb-24"
                    >
                        <h2 className="font-display font-bold text-4xl md:text-6xl mb-6">The Success <span className="gradient-text">Journey</span></h2>
                        <p className="text-muted-foreground text-lg">Follow the neural path to expertise.</p>
                    </motion.div>

                    <div className="grid lg:grid-cols-12 gap-16 items-start">
                        {/* Left Side: Step List */}
                        <div className="lg:col-span-5 space-y-6">
                            {[
                                {
                                    icon: <MessageSquare className="w-6 h-6" />,
                                    title: "Describe Your Goal",
                                    desc: "Our NLP core extracts intent from your prompts to build a personalized learning ontology.",
                                    details: ["Goal Extraction", "Context Mapping", "Source Verification"]
                                },
                                {
                                    icon: <BarChart3 className="w-6 h-6" />,
                                    title: "Neural Mapping",
                                    desc: "Identifies foundation prerequisites and cognitive gaps based on your background.",
                                    details: ["Prerequisite Scan", "Gap Detection", "Path Optimization"]
                                },
                                {
                                    icon: <Zap className="w-6 h-6" />,
                                    title: "Adaptive Learning",
                                    desc: "Interactive tutoring via Socratic labs and real-time code execution environments.",
                                    details: ["Logic Puzzles", "Code Labs", "Active Recall"]
                                },
                                {
                                    icon: <Target className="w-6 h-6" />,
                                    title: "Verified Mastery",
                                    desc: "Prove your skills through simulated scenarios that bypass simple rote memorization.",
                                    details: ["Outcome Testing", "Skill Badging", "Credential Sync"]
                                }
                            ].map((step, i) => (
                                <motion.div
                                    key={i}
                                    onMouseEnter={() => setActiveStep(i)}
                                    onClick={() => setActiveStep(i)}
                                    className={`p-8 rounded-3xl cursor-pointer transition-all duration-500 border-2 ${activeStep === i
                                        ? "glass-card border-primary/40 bg-primary/5 scale-[1.02]"
                                        : "border-transparent opacity-50 hover:opacity-100"
                                        }`}
                                >
                                    <div className="flex items-center gap-5 mb-4">
                                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${activeStep === i ? "bg-primary text-white" : "bg-white/5 text-muted-foreground"
                                            }`}>
                                            {step.icon}
                                        </div>
                                        <span className={`text-xs font-bold uppercase tracking-widest ${activeStep === i ? "text-primary" : "text-muted-foreground"
                                            }`}>Step 0{i + 1}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed mb-6">{step.desc}</p>

                                    {activeStep === i && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="flex flex-wrap gap-2"
                                        >
                                            {step.details.map((detail, idx) => (
                                                <span key={idx} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-primary">
                                                    {detail}
                                                </span>
                                            ))}
                                        </motion.div>
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        {/* Right Side: Interactive Windows */}
                        <div className="lg:col-span-7 sticky top-32">
                            <div className="glass-card rounded-[40px] border-white/10 overflow-hidden min-h-[500px] relative group">
                                <div className="absolute inset-0 wireframe-grid opacity-20" />

                                {/* Window Toolbar */}
                                <div className="absolute top-0 left-0 right-0 h-12 border-b border-white/5 bg-white/5 flex items-center px-6 gap-2 z-20">
                                    <div className="w-3 h-3 rounded-full bg-red-500/30" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/30" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/30" />
                                    <div className="ml-4 text-[10px] uppercase tracking-widest font-bold text-muted-foreground/40">Neural Protocol V4.2</div>
                                </div>

                                <div className="p-12 pt-20 h-full relative z-10">
                                    {activeStep === 0 && (
                                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                                            <div className="flex items-center gap-4 text-primary">
                                                <span className="text-xs font-mono">{"// Initializing Ontology"}</span>
                                                <div className="flex-1 h-px bg-primary/20" />
                                            </div>
                                            <div className="space-y-4">
                                                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 font-mono text-sm">
                                                    <span className="text-primary">{">"} </span>
                                                    I want to learn advanced astrophysical concepts and their mathematical foundations.
                                                </div>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="p-6 rounded-3xl glass-card border-primary/20 space-y-4">
                                                        <div className="text-[10px] font-bold uppercase tracking-widest opacity-50 text-white">Extracted Nodes</div>
                                                        <div className="space-y-2">
                                                            <div className="h-2 w-full bg-primary/20 rounded-full" />
                                                            <div className="h-2 w-2/3 bg-primary/20 rounded-full" />
                                                            <div className="h-2 w-3/4 bg-primary/20 rounded-full" />
                                                        </div>
                                                    </div>
                                                    <div className="p-6 rounded-3xl glass-card border-purple-500/20 space-y-4">
                                                        <div className="text-[10px] font-bold uppercase tracking-widest opacity-50 text-white">Context Depth</div>
                                                        <div className="flex justify-between items-end h-12 gap-1">
                                                            {[40, 70, 45, 90, 60].map((h, i) => (
                                                                <div key={i} className="flex-1 bg-primary/30 rounded-t-lg" style={{ height: `${h}%` }} />
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                    {activeStep === 1 && (
                                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full flex flex-col justify-center items-center text-center">
                                            <div className="relative w-64 h-64 mb-10">
                                                <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-spin-slow" />
                                                <div className="absolute inset-4 border border-purple-500/30 rounded-full animate-reverse-spin" />
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <BarChart3 className="w-16 h-16 text-primary" />
                                                </div>
                                                {/* Floating Nodes */}
                                                {[0, 72, 144, 216, 288].map((deg, i) => (
                                                    <div
                                                        key={i}
                                                        className="absolute w-4 h-4 rounded-full bg-primary"
                                                        style={{
                                                            top: '50%', left: '50%',
                                                            transform: `rotate(${deg}deg) translate(110px) rotate(-${deg}deg) margin-top: -8px; margin-left: -8px;`
                                                        }}
                                                    />
                                                ))}
                                            </div>
                                            <div className="space-y-2">
                                                <h4 className="text-xl font-bold">Knowledge Synthesis</h4>
                                                <p className="text-sm text-muted-foreground">Mapping prerequisites for "Quantum Chromodynamics"</p>
                                            </div>
                                        </motion.div>
                                    )}

                                    {activeStep === 2 && (
                                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                                            <div className="p-6 rounded-3xl glass-card border-white/10">
                                                <div className="flex justify-between items-center mb-6">
                                                    <div className="text-sm font-bold">Active Recap: Socratic Challenge</div>
                                                    <div className="px-2 py-1 rounded-md bg-green-500/20 text-green-400 text-[10px] font-bold">LIVE</div>
                                                </div>
                                                <p className="text-lg mb-6 leading-relaxed">How does the Pauli Exclusion Principle apply to the stability of degenerate stars?</p>
                                                <div className="space-y-3">
                                                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/50 cursor-pointer transition-colors text-sm">
                                                        Through electron-vibration coupling.
                                                    </div>
                                                    <div className="p-4 rounded-2xl bg-white/5 border border-primary/50 bg-primary/5 cursor-pointer transition-colors text-sm flex justify-between items-center">
                                                        By creating degeneracy pressure.
                                                        <Sparkles className="w-4 h-4 text-primary" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex gap-4">
                                                <div className="flex-1 p-4 rounded-3xl bg-white/5 border border-white/10 text-center">
                                                    <div className="text-[10px] uppercase font-bold opacity-50 mb-1">Time Expended</div>
                                                    <div className="text-lg font-bold">01:42s</div>
                                                </div>
                                                <div className="flex-1 p-4 rounded-3xl bg-white/5 border border-white/10 text-center">
                                                    <div className="text-[10px] uppercase font-bold opacity-50 mb-1">Concentration</div>
                                                    <div className="text-lg font-bold">94%</div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                    {activeStep === 3 && (
                                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                                            <div className="flex flex-col items-center justify-center p-10 rounded-3xl bg-gradient-to-br from-primary/10 to-purple-600/10 border border-primary/20">
                                                <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mb-6 relative">
                                                    <Target className="w-12 h-12 text-primary" />
                                                    <div className="absolute inset-0 rounded-full border border-primary animate-ping" />
                                                </div>
                                                <h4 className="text-2xl font-bold mb-2">Goal Achieved!</h4>
                                                <p className="text-sm text-muted-foreground text-center">Quantum Mechanics Fundamentals Mastered</p>
                                            </div>
                                            <div className="space-y-4">
                                                <div className="flex justify-between text-xs font-bold uppercase tracking-widest opacity-60">
                                                    <span>Core Competencies</span>
                                                    <span>Verified</span>
                                                </div>
                                                <div className="space-y-3">
                                                    {[
                                                        { label: "Wave-Particle Duality", val: 100 },
                                                        { label: "Schrödinger Equation", val: 85 },
                                                        { label: "Matrix Mechanics", val: 92 }
                                                    ].map((item, i) => (
                                                        <div key={i} className="space-y-2">
                                                            <div className="flex justify-between text-[11px] font-bold">
                                                                <span>{item.label}</span>
                                                                <span className="text-primary">{item.val}%</span>
                                                            </div>
                                                            <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                                                <motion.div
                                                                    initial={{ width: 0 }}
                                                                    animate={{ width: `${item.val}%` }}
                                                                    transition={{ delay: i * 0.2 }}
                                                                    className="h-full bg-gradient-to-r from-primary to-purple-400"
                                                                />
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </div>

                                {/* Floating Decoration */}
                                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-[40px]" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Footer Section */}
            <section className="py-40 px-6 relative z-10 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-primary/5 rounded-full blur-[100px] opacity-30" />
                <div className="container mx-auto text-center relative z-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="font-display font-bold text-5xl md:text-7xl mb-10 leading-tight">
                            Ready to Begin Your <br />
                            <span className="gradient-text font-black">Ultimate Success Journey?</span>
                        </h2>
                        <p className="text-muted-foreground/80 text-xl max-w-2xl mx-auto mb-16">
                            Join the next generation of intelligent learners. Axiora is waiting to build your custom path to excellence.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-16 py-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full text-2xl font-black uppercase tracking-widest transition-all border border-white/20 flex items-center gap-4 mx-auto group shadow-lg hover:bg-white/5"
                        >
                            <span>Get Started</span>
                            <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Index;

