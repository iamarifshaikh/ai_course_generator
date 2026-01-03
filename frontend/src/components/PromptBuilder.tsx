import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown, ChevronUp, Upload, BookOpen, Clock, Eye, Target, FileText } from "lucide-react";

type ExperienceLevel = "beginner" | "intermediate" | "advanced";
type Tone = "casual" | "friendly" | "professional" | "academic";
type LessonLength = "short" | "medium" | "deep";
type VisualDensity = "low" | "medium" | "high";
type QuizStrictness = "easy" | "normal" | "hard";

interface PromptConfig {
    topic: string;
    experience: ExperienceLevel;
    tone: Tone;
    lessonLength: LessonLength;
    visualDensity: VisualDensity;
    quizStrictness: QuizStrictness;
    assignmentMode: boolean;
}

const PromptBuilder = () => {
    const [showAdvanced, setShowAdvanced] = useState(false);
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const navigate = useNavigate();
    const [config, setConfig] = useState<PromptConfig>({
        topic: "",
        experience: "beginner",
        tone: "friendly",
        lessonLength: "medium",
        visualDensity: "medium",
        quizStrictness: "normal",
        assignmentMode: true,
    });

    const experienceLevels: { value: ExperienceLevel; label: string; icon: string }[] = [
        { value: "beginner", label: "Beginner", icon: "🌱" },
        { value: "intermediate", label: "Intermediate", icon: "🌿" },
        { value: "advanced", label: "Advanced", icon: "🌳" },
    ];

    const tones: { value: Tone; label: string }[] = [
        { value: "casual", label: "Casual" },
        { value: "friendly", label: "Friendly" },
        { value: "professional", label: "Professional" },
        { value: "academic", label: "Academic" },
    ];

    const lessonLengths: { value: LessonLength; label: string; desc: string }[] = [
        { value: "short", label: "Quick", desc: "5-10 min" },
        { value: "medium", label: "Standard", desc: "15-20 min" },
        { value: "deep", label: "Deep Dive", desc: "30+ min" },
    ];

    const visualDensities: { value: VisualDensity; label: string }[] = [
        { value: "low", label: "Minimal" },
        { value: "medium", label: "Balanced" },
        { value: "high", label: "Rich" },
    ];

    const quizLevels: { value: QuizStrictness; label: string }[] = [
        { value: "easy", label: "Easy" },
        { value: "normal", label: "Normal" },
        { value: "hard", label: "Challenging" },
    ];

    const handleSubmit = () => {
        if (!config.topic.trim()) return;
        console.log("Course configuration:", config);
        navigate("/course");
    };

    // Auto-resize textarea
    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`;
        }
    }, [config.topic]);

    return (
        <div className="w-full max-w-3xl mx-auto">
            {/* Main Prompt Input */}
            {/* Main Prompt Input */}
            {/* Main Prompt Input */}
            <div className="glass-card bg-[#1A0B3B]/40 rounded-3xl p-1 mb-6 border-white/10 shadow-2xl relative group">
                <div className="absolute -inset-0.5 bg-white/5 rounded-3xl transition duration-500"></div>

                <div className="relative bg-[#050510]/90 backdrop-blur-xl rounded-2xl p-6 flex flex-col gap-4">
                    <textarea
                        ref={textareaRef}
                        placeholder="What do you want to learn today?"
                        value={config.topic}
                        onChange={(e) => setConfig({ ...config, topic: e.target.value })}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                                e.preventDefault();
                                handleSubmit();
                            }
                        }}
                        className="w-full bg-transparent border-none text-xl font-medium placeholder:text-muted-foreground/30 focus:outline-none focus:ring-0 py-2 resize-none min-h-[80px] max-h-[200px] custom-scrollbar"
                        rows={1}
                    />

                    {/* Integrated Footer: Experience Buttons (Left) & Send Button (Right) */}
                    <div className="flex items-center justify-between border-t border-white/5 pt-4">

                        {/* Experience Levels */}
                        <div className="flex flex-wrap gap-2">
                            {experienceLevels.map((level) => (
                                <button
                                    key={level.value}
                                    onClick={() => setConfig({ ...config, experience: level.value })}
                                    className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 border ${config.experience === level.value
                                        ? "bg-primary text-white border-primary"
                                        : "bg-white/5 text-muted-foreground border-transparent hover:bg-white/10 hover:text-white"
                                        }`}
                                >
                                    {level.label}
                                </button>
                            ))}
                        </div>

                        {/* Send Action */}
                        <button
                            onClick={handleSubmit}
                            disabled={!config.topic.trim()}
                            className="h-12 w-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 disabled:opacity-0 disabled:scale-75 group/btn border border-white/20 shadow-lg shadow-black/20"
                        >
                            <Target className="w-6 h-6 group-hover/btn:rotate-12 transition-transform duration-300" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Advanced Options Toggle */}
            <button
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/60 hover:text-primary transition-all mb-6 mx-auto group"
            >
                <span>Neural Configuration</span>
                {showAdvanced ? (
                    <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                ) : (
                    <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                )}
            </button>

            {/* Advanced Options Panel */}
            {
                showAdvanced && (
                    <div className="glass-card bg-[#1A0B3B]/30 rounded-3xl p-8 space-y-8 animate-in fade-in slide-in-from-top-4 duration-500">
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Tone Selection */}
                            <div>
                                <label className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-primary mb-4">
                                    <BookOpen className="w-3.5 h-3.5" />
                                    Teaching Protocol
                                </label>
                                <div className="grid grid-cols-2 gap-2">
                                    {tones.map((tone) => (
                                        <button
                                            key={tone.value}
                                            onClick={() => setConfig({ ...config, tone: tone.value })}
                                            className={`px-4 py-3 rounded-xl text-xs font-bold transition-all duration-300 ${config.tone === tone.value
                                                ? "bg-primary/20 text-white border border-primary/50"
                                                : "bg-white/5 text-muted-foreground hover:bg-white/10 border border-white/5"
                                                }`}
                                        >
                                            {tone.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Lesson Length */}
                            <div>
                                <label className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-primary mb-4">
                                    <Clock className="w-3.5 h-3.5" />
                                    Injection Depth
                                </label>
                                <div className="grid grid-cols-3 gap-2">
                                    {lessonLengths.map((length) => (
                                        <button
                                            key={length.value}
                                            onClick={() => setConfig({ ...config, lessonLength: length.value })}
                                            className={`p-3 rounded-xl text-center transition-all duration-300 ${config.lessonLength === length.value
                                                ? "bg-primary/20 text-white border border-primary/50"
                                                : "bg-white/5 border border-white/5 hover:bg-white/10"
                                                }`}
                                        >
                                            <div className="text-[10px] font-black uppercase tracking-tight">{length.label}</div>
                                            <div className="text-[8px] text-muted-foreground font-bold mt-1 opacity-60">{length.desc}</div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Visual Density */}
                            <div>
                                <label className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-primary mb-4">
                                    <Eye className="w-3.5 h-3.5" />
                                    Visual Fidelity
                                </label>
                                <div className="flex gap-2">
                                    {visualDensities.map((density) => (
                                        <button
                                            key={density.value}
                                            onClick={() => setConfig({ ...config, visualDensity: density.value })}
                                            className={`flex-1 px-4 py-3 rounded-xl text-xs font-bold transition-all duration-300 ${config.visualDensity === density.value
                                                ? "bg-primary/20 text-white border border-primary/50"
                                                : "bg-white/5 text-muted-foreground hover:bg-white/10 border border-white/5"
                                                }`}
                                        >
                                            {density.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Quiz Strictness */}
                            <div>
                                <label className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-primary mb-4">
                                    <Target className="w-3.5 h-3.5" />
                                    Validation Strictness
                                </label>
                                <div className="flex gap-2">
                                    {quizLevels.map((level) => (
                                        <button
                                            key={level.value}
                                            onClick={() => setConfig({ ...config, quizStrictness: level.value })}
                                            className={`flex-1 px-4 py-3 rounded-xl text-xs font-bold transition-all duration-300 ${config.quizStrictness === level.value
                                                ? "bg-primary/20 text-white border border-primary/50"
                                                : "bg-white/5 text-muted-foreground hover:bg-white/10 border border-white/5"
                                                }`}
                                        >
                                            {level.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Assignment Mode Toggle */}
                        <div className="flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/5">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                    <FileText className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <div className="text-sm font-bold">Applied Exercises</div>
                                    <div className="text-[10px] uppercase font-black tracking-widest text-muted-foreground opacity-60">Hands-on Labs</div>
                                </div>
                            </div>
                            <button
                                onClick={() => setConfig({ ...config, assignmentMode: !config.assignmentMode })}
                                className={`w-14 h-7 rounded-full transition-all duration-500 relative ${config.assignmentMode ? "bg-primary" : "bg-white/10"
                                    }`}
                            >
                                <span
                                    className={`absolute top-1 w-5 h-5 rounded-full bg-white shadow-sm transition-all duration-500 ${config.assignmentMode ? "left-8" : "left-1"
                                        }`}
                                />
                            </button>
                        </div>

                        {/* File Upload Area */}
                        <div className="border border-dashed border-white/10 rounded-2xl p-8 text-center hover:border-primary/50 transition-all cursor-pointer group hover:bg-white/5">
                            <Upload className="w-8 h-8 mx-auto mb-3 text-muted-foreground group-hover:text-primary transition-colors" />
                            <p className="text-xs font-bold uppercase tracking-widest">
                                Sync Context Nodes
                            </p>
                            <p className="text-[10px] text-muted-foreground mt-1 opacity-50">
                                PDFs, Markdown, or Code Repositories
                            </p>
                        </div>
                    </div>
                )
            }

            {/* Submit Button */}
        </div >
    );
};

export default PromptBuilder;
