import { useState } from "react";
import {
    ChevronRight,
    BookOpen,
    Code,
    Layers,
    CheckCircle2,
    FileText,
    MessageSquare,
    Sparkles,
    Image as ImageIcon
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export type NodeType = "module" | "lesson" | "reading" | "code" | "flashcard" | "quiz" | "assignment" | "discussion" | "visual";

export interface CourseNode {
    id: string;
    type: NodeType;
    title: string;
    children?: CourseNode[];
    isExpanded?: boolean;
}

interface LessonNavigatorProps {
    data: CourseNode[];
    activeId: string;
    onSelect: (node: CourseNode) => void;
}

const NodeIcon = ({ type, isActive }: { type: NodeType; isActive: boolean }) => {
    const className = `w-4 h-4 ${isActive ? "text-primary animate-pulse" : "text-muted-foreground"}`;

    switch (type) {
        case "module": return <Layers className={className} />;
        case "lesson": return <BookOpen className={className} />;
        case "code": return <Code className={className} />;
        case "flashcard": return <Layers className={className} />;
        case "quiz": return <CheckCircle2 className={className} />;
        case "assignment": return <FileText className={className} />;
        case "visual": return <ImageIcon className={className} />;
        case "discussion": return <MessageSquare className={className} />;
        default: return <Sparkles className={className} />;
    }
};

const TreeNode = ({
    node,
    level,
    activeId,
    onSelect,
    onToggle
}: {
    node: CourseNode;
    level: number;
    activeId: string;
    onSelect: (node: CourseNode) => void;
    onToggle: (id: string) => void;
}) => {
    const isActive = activeId === node.id;
    const hasChildren = node.children && node.children.length > 0;
    const isExpanded = node.isExpanded;

    return (
        <div className="w-full">
            <button
                onClick={() => {
                    if (hasChildren) onToggle(node.id);
                    onSelect(node);
                }}
                className={`w-full flex items-center gap-2 py-2 px-3 rounded-xl transition-all duration-200 group relative ${isActive
                    ? "bg-white/10 text-white"
                    : "hover:bg-white/5 text-muted-foreground hover:text-white"
                    }`}
                style={{ paddingLeft: `${level * 12 + 12}px` }}
            >
                {/* Connector Line (Tree structure visual) */}
                {level > 0 && (
                    <div className="absolute left-[18px] top-0 bottom-0 w-px bg-white/5" style={{ left: `${(level * 12) + 4}px` }} />
                )}

                <div className="flex flex-col gap-2 opacity-70 group-hover:opacity-100 transition-opacity flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                        <NodeIcon type={node.type} isActive={isActive} />
                        <span className={`text-sm font-medium truncate ${isActive ? "text-white shadow-sm" : "text-gray-300 group-hover:text-white"}`}>
                            {node.title}
                        </span>
                    </div>
                </div>

                {hasChildren && (
                    <div className={`transition-transform duration-200 ${isExpanded ? "rotate-90" : ""}`}>
                        <ChevronRight className="w-3 h-3 opacity-50" />
                    </div>
                )}
            </button>

            <AnimatePresence>
                {isExpanded && hasChildren && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                    >
                        {node.children!.map((child) => (
                            <TreeNode
                                key={child.id}
                                node={child}
                                level={level + 1}
                                activeId={activeId}
                                onSelect={onSelect}
                                onToggle={onToggle}
                            />
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const LessonNavigator = ({ data, activeId, onSelect }: LessonNavigatorProps) => {
    // Local state for expansion to allow UI toggling without sticking
    // In a real app, you might sync this with global state or props
    const [treeData, setTreeData] = useState(data);

    const toggleNode = (id: string) => {
        const toggleRecursive = (nodes: CourseNode[]): CourseNode[] => {
            return nodes.map(node => {
                if (node.id === id) {
                    return { ...node, isExpanded: !node.isExpanded };
                }
                if (node.children) {
                    return { ...node, children: toggleRecursive(node.children) };
                }
                return node;
            });
        };
        setTreeData(toggleRecursive(treeData));
    };

    return (
        <div className="glass-panel w-full h-full overflow-y-auto custom-scrollbar p-6 bg-[#02010a]/60 backdrop-blur-xl border-white/5">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary/80 mb-8 pl-3 shadow-sm">
                Course Structure
            </h3>
            <div className="space-y-2">
                {treeData.map((node) => (
                    <TreeNode
                        key={node.id}
                        node={node}
                        level={0}
                        activeId={activeId}
                        onSelect={onSelect}
                        onToggle={toggleNode}
                    />
                ))}
            </div>
        </div>
    );
};

export default LessonNavigator;
