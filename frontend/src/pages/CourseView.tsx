import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
    Brain,
    Send,
    Sparkles,
    X,
    History,
    CornerDownLeft,
    Menu,
    ChevronLeft
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Import Learning Components
import LessonCard from "@/components/learning/LessonCard";
import CodePlayground from "@/components/learning/CodePlayground";
import NoteFlashcard from "@/components/learning/NoteFlashcard";
import QuizInterface from "@/components/learning/QuizInterface";
import AssignmentView from "@/components/learning/AssignmentView";
import LessonNavigator from "@/components/learning/LessonNavigator";
import type { CourseNode } from "@/components/learning/LessonNavigator";
import VisualAsset from "@/components/learning/VisualAsset";

const CourseView = () => {
    // STATE
    const [activeNodeId, setActiveNodeId] = useState("l1-read");
    const [prompt, setPrompt] = useState("");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    // Auto-resize textarea on prompt change
    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`;
        }
    }, [prompt]);

    // The panel only opens when content is generated. 
    // It starts closed and has no manual toggle in the header.
    const [isRightPanelOpen, setIsRightPanelOpen] = useState(false);

    // Active Conversation State
    const [activeChatResponse, setActiveChatResponse] = useState<string | null>(null);

    // 1. CURRICULUM DATA (Immutable Left Side)
    const [curriculumData] = useState<CourseNode[]>([
        {
            id: "m1",
            type: "module",
            title: "Module 1: Foundations",
            isExpanded: true,
            children: [
                {
                    id: "l1",
                    type: "lesson",
                    title: "1.1 Intro to Neural Networks",
                    isExpanded: true,
                    children: [
                        { id: "l1-read", type: "reading", title: "Concept: The Perceptron" },
                        { id: "l1-vis", type: "visual", title: "Diagram: Network Topology" },
                        { id: "l1-flash", type: "flashcard", title: "Recall: Key Terms" },
                    ]
                },
                {
                    id: "l2",
                    type: "lesson",
                    title: "1.2 Activation Functions",
                    isExpanded: false,
                    children: [
                        { id: "l2-vis", type: "visual", title: "Chart: Sigmoid vs ReLU" },
                        { id: "l2-code", type: "code", title: "Lab: Implementing ReLU" },
                        { id: "l2-quiz", type: "quiz", title: "Quiz: Activation Logic" },
                    ]
                },
                {
                    id: "l3",
                    type: "lesson",
                    title: "1.3 Backpropagation",
                    isExpanded: false,
                    children: [
                        { id: "l3-read", type: "reading", title: "Concept: Gradient Descent" },
                        { id: "l3-assign", type: "assignment", title: "Project: Build a Net" }
                    ]
                }
            ]
        }
    ]);

    // 2. CONTEXTUAL THREADS
    interface ChatThread {
        id: string;
        question: string;
        preview: string;
        timestamp: number;
    }

    const [lessonThreads, setLessonThreads] = useState<Record<string, ChatThread[]>>({
        "l1": [],
        "l2": [],
        "l3": []
    });

    const findParentLessonId = (nodeId: string): string => {
        if (nodeId.startsWith("l1")) return "l1";
        if (nodeId.startsWith("l2")) return "l2";
        if (nodeId.startsWith("l3")) return "l3";
        return "l1";
    };

    const currentLessonId = findParentLessonId(activeNodeId);

    const findNode = (nodes: CourseNode[], id: string): CourseNode | null => {
        for (const node of nodes) {
            if (node.id === id) return node;
            if (node.children) {
                const found = findNode(node.children, id);
                if (found) return found;
            }
        }
        return null;
    };
    const activeNode = findNode(curriculumData, activeNodeId);

    const handleAISubmit = (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        if (!prompt.trim()) return;

        const newThread: ChatThread = {
            id: `thread-${Date.now()}`,
            question: prompt,
            preview: "Here is a detailed explanation based on the context of this lesson. I've analyzed your question and cross-referenced it with the current topic...",
            timestamp: Date.now()
        };

        setLessonThreads(prev => ({
            ...prev,
            [currentLessonId]: [newThread, ...(prev[currentLessonId] || [])]
        }));

        setActiveChatResponse(newThread.preview);
        setPrompt("");
        setIsRightPanelOpen(true); // THIS IS THE TRIGGER - Opens only on action
    };

    const renderContent = (type: string) => {
        switch (type) {
            case "reading": return <LessonCard />;
            case "code": return <CodePlayground />;
            case "flashcard": return <NoteFlashcard />;
            case "quiz": return <QuizInterface />;
            case "assignment": return <AssignmentView />;
            case "visual": return <VisualAsset />;
            default: return <LessonCard />;
        }
    };

    return (
        <div className="h-screen bg-[#030014] text-gray-100 overflow-hidden font-sans flex flex-col md:flex-row text-base relative">
            {/* BACKGROUND FX - Toned Down */}
            <div className="fixed inset-0 bg-[#050508] z-0" />
            <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_#1a1033_0%,_#000000_100%)] opacity-40 pointer-events-none z-0" />

            {/* Mobile Overlay for Sidebar */}
            <AnimatePresence>
                {isSidebarOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsSidebarOpen(false)}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                    />
                )}
            </AnimatePresence>

            {/* === LEFT COLUMN: NAVIGATION (280px) === */}
            <aside
                className={`fixed md:relative w-[280px] h-full flex flex-col border-r border-white/5 bg-[#0a0a0f] md:bg-[#0a0a0f]/80 backdrop-blur-xl z-50 transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
                    }`}
            >
                <div className="h-20 flex items-center justify-between px-6 border-b border-white/5">
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                            <Brain className="w-5 h-5" />
                        </div>
                        <span className="font-display font-bold text-lg tracking-tight text-white">Axiora</span>
                    </Link>
                    <button
                        onClick={() => setIsSidebarOpen(false)}
                        className="p-2 hover:bg-white/5 rounded-lg text-muted-foreground md:hidden"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                </div>
                <div className="flex-1 overflow-y-auto custom-scrollbar p-0">
                    <LessonNavigator
                        data={curriculumData}
                        activeId={activeNodeId}
                        onSelect={(node) => {
                            setActiveNodeId(node.id);
                            if (window.innerWidth < 768) setIsSidebarOpen(false);
                        }}
                    />
                </div>
            </aside>

            {/* === CENTER COLUMN: STAGE (Flexible) === */}
            <main className="flex-1 h-full flex flex-col relative z-10 min-w-0">
                {/* Header */}
                <header className="h-20 flex items-center justify-between px-4 md:px-8 border-b border-white/5 bg-black/10 backdrop-blur-sm">
                    <div className="flex items-center gap-3 min-w-0">
                        <button
                            onClick={() => setIsSidebarOpen(true)}
                            className="p-2 hover:bg-white/5 rounded-lg text-white md:hidden"
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3 min-w-0">
                            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-primary/80 truncate">
                                Current Activity
                            </span>
                            <div className="hidden md:block h-4 w-px bg-white/10" />
                            <span className="text-xs md:text-sm font-semibold text-white truncate shadow-sm">
                                {activeNode?.title}
                            </span>
                        </div>
                    </div>
                </header>

                {/* Content Area */}
                <div className="flex-1 overflow-y-auto custom-scrollbar p-4 md:p-8 scroll-smooth pb-40">
                    <div className="max-w-5xl mx-auto w-full space-y-8">
                        <motion.div
                            key={activeNodeId}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {renderContent(activeNode?.type || "reading")}
                        </motion.div>
                    </div>
                </div>

                {/* Aesthetic Floating Input Bar (Bottom Center) */}
                <div className="absolute bottom-4 md:bottom-8 left-0 right-0 px-4 md:px-8 z-30 pointer-events-none">
                    <div className="max-w-3xl mx-auto pointer-events-auto">
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="relative group mt-4"
                        >
                            {/* Subtly Highlighted Border */}
                            <div className="absolute -inset-[1px] bg-white/5 rounded-[24px] group-hover:bg-white/10 transition-colors duration-500"></div>

                            <form
                                onSubmit={handleAISubmit}
                                className="relative bg-[#0a0a0f]/60 backdrop-blur-2xl rounded-[22px] flex flex-col border border-white/10 group-focus-within:border-primary/50 transition-all duration-500 shadow-2xl overflow-hidden"
                            >
                                {/* Inner Shadow for depth */}
                                <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.5)] pointer-events-none"></div>

                                <div className="flex items-start px-4">
                                    <div className="mt-5 text-primary/50 group-focus-within:text-primary transition-colors duration-500">
                                        <Sparkles className="w-5 h-5" />
                                    </div>
                                    <textarea
                                        ref={textareaRef}
                                        value={prompt}
                                        onChange={(e) => setPrompt(e.target.value)}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' && !e.shiftKey) {
                                                e.preventDefault();
                                                handleAISubmit();
                                            }
                                        }}
                                        placeholder="Ask Axiora about this lesson..."
                                        className="w-full bg-transparent py-5 pl-3 pr-20 text-white text-[15px] placeholder:text-white/20 focus:outline-none resize-none min-h-[64px] max-h-[200px] custom-scrollbar leading-relaxed font-medium"
                                        rows={1}
                                    />
                                </div>

                                <div className="absolute right-3 bottom-3 flex items-center gap-2">
                                    <button
                                        type="submit"
                                        disabled={!prompt.trim()}
                                        className="h-10 w-10 rounded-2xl bg-primary text-white flex items-center justify-center transition-all disabled:opacity-0 disabled:scale-90 hover:bg-primary/90 active:scale-95 group/btn"
                                    >
                                        <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </button>
                                </div>

                                {/* Bottom Decorative Line */}
                                <div className="h-[1px] w-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent absolute bottom-0 left-1/2 -translate-x-1/2 group-focus-within:w-full transition-all duration-1000"></div>
                            </form>

                            {/* Shortcut Hint */}
                            <div className="absolute -bottom-6 left-6 text-[10px] uppercase tracking-[0.2em] font-bold text-white/20 group-focus-within:text-white/40 transition-colors pointer-events-none">
                                Press <span className="text-white/60">Enter</span> to transmit
                            </div>
                        </motion.div>
                    </div>
                </div>
            </main>

            {/* === RIGHT COLUMN: COPILOT (Sliding) === */}
            <AnimatePresence>
                {isRightPanelOpen && (
                    <>
                        {/* Mobile Overlay for Copilot */}
                        <div
                            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
                            onClick={() => setIsRightPanelOpen(false)}
                        />
                        <motion.aside
                            initial={{ x: "100%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: "100%", opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                            className="fixed md:relative top-0 right-0 h-full w-[85%] md:w-[340px] border-l border-white/10 bg-[#0a0a0f] md:bg-black/40 backdrop-blur-2xl z-50 flex flex-col overflow-hidden shadow-2xl"
                        >
                            <div className="w-full h-full flex flex-col">
                                {/* Panel Header */}
                                <div className="h-20 flex items-center justify-between px-6 border-b border-white/5 bg-white/5">
                                    <div className="flex items-center gap-2 text-primary">
                                        <Sparkles className="w-4 h-4" />
                                        <span className="font-display font-bold">Lesson Context</span>
                                    </div>
                                    <button
                                        onClick={() => setIsRightPanelOpen(false)}
                                        className="p-2 hover:bg-white/5 rounded-lg text-muted-foreground hover:text-white transition-colors"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                </div>

                                {/* Panel Content */}
                                <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-6">
                                    {/* Auto-Generated Response */}
                                    {activeChatResponse && (
                                        <div className="bg-gradient-to-br from-primary/10 to-transparent rounded-2xl p-5 border border-primary/20 animate-in fade-in slide-in-from-bottom-4 shadow-lg shadow-primary/5">
                                            <div className="flex items-center gap-2 mb-3 text-primary">
                                                <Brain className="w-4 h-4" />
                                                <span className="text-xs font-bold uppercase">Axiora Insight</span>
                                            </div>
                                            <p className="text-sm text-gray-200 leading-relaxed">
                                                {activeChatResponse}
                                            </p>
                                        </div>
                                    )}

                                    {/* History */}
                                    <div className="space-y-4 pt-4">
                                        <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground/60 border-t border-white/5 pt-4">
                                            <History className="w-3 h-3" />
                                            Thread History
                                        </h4>

                                        <div className="space-y-2">
                                            {lessonThreads[currentLessonId]?.map((thread) => (
                                                <button
                                                    key={thread.id}
                                                    onClick={() => setActiveChatResponse(thread.preview)}
                                                    className="w-full text-left p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all group hover:border-primary/30"
                                                >
                                                    <div className="flex items-center justify-between mb-1">
                                                        <p className="text-sm font-medium text-white group-hover:text-primary transition-colors line-clamp-1">
                                                            {thread.question}
                                                        </p>
                                                        <CornerDownLeft className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                                                    </div>
                                                    <p className="text-xs text-muted-foreground truncate">
                                                        {new Date(thread.timestamp).toLocaleTimeString()}
                                                    </p>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CourseView;
