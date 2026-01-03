import { Terminal, Play, Copy, Check } from "lucide-react";
import { useState } from "react";

const CodePlayground = () => {
    const [code, setCode] = useState(`def neural_network(input_data):\n    # Initialize weights\n    weights = [0.5, -0.2, 0.1]\n    \n    # Calculate weighted sum\n    activation = sum([i*w for i,w in zip(input_data, weights)])\n    \n    return max(0, activation)  # ReLU activation`);
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="w-full h-full p-8 flex flex-col">
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                        <Terminal className="w-4 h-4 text-blue-400" />
                    </div>
                    <span className="font-display font-bold text-white">Main.py</span>
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={handleCopy}
                        className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-white transition-colors flex items-center gap-2"
                    >
                        {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                        {copied ? "Copied" : "Copy"}
                    </button>
                    <button className="px-6 py-2 rounded-lg bg-primary hover:bg-primary/80 text-white font-bold text-xs uppercase tracking-widest transition-colors flex items-center gap-2">
                        <Play className="w-3 h-3 fill-current" />
                        Run Code
                    </button>
                </div>
            </div>

            <div className="flex-1 glass-panel rounded-2xl overflow-hidden bg-[#02010a]/80 border-white/10 font-mono text-sm relative">
                {/* Line Numbers */}
                <div className="absolute top-0 left-0 bottom-0 w-12 bg-white/2 border-r border-white/5 flex flex-col items-end py-6 pr-4 text-muted-foreground/30 select-none">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                        <div key={n} className="leading-6">{n}</div>
                    ))}
                </div>

                {/* Editor Area */}
                <textarea
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="w-full h-full bg-transparent resize-none p-6 pl-16 text-blue-100 focus:outline-none selection:bg-primary/30 leading-6"
                    spellCheck={false}
                />
            </div>
        </div>
    );
};

export default CodePlayground;
