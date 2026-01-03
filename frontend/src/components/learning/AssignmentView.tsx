import { UploadCloud, FileText, CheckCircle } from "lucide-react";

const AssignmentView = () => {
    return (
        <div className="w-full h-full p-8 flex flex-col items-center justify-center">
            <div className="glass-panel rounded-[40px] p-12 max-w-4xl w-full">
                <div className="flex items-start justify-between mb-8">
                    <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">Practical Task</span>
                        <h2 className="text-3xl font-display font-bold text-white">Build a Perceptron</h2>
                    </div>
                    <div className="px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-300 text-xs font-bold uppercase tracking-widest">
                        Due in 2 days
                    </div>
                </div>

                <div className="space-y-6 text-muted-foreground mb-12">
                    <p>
                        Using the concepts learned in this module, implement a single-layer perceptron in Python. Your implementation should include:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Weight initialization method</li>
                        <li>Activation function (Step or Sigmoid)</li>
                        <li>Training loop with error calculation</li>
                        <li>Prediction method for new data</li>
                    </ul>
                </div>

                <div className="border-2 border-dashed border-white/10 rounded-3xl p-12 flex flex-col items-center justify-center bg-white/[0.02] hover:bg-white/[0.04] transition-colors cursor-pointer group">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <UploadCloud className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-white text-lg mb-2">Drop your solution here</h3>
                    <p className="text-sm text-muted-foreground mb-6">Supports .py, .ipynb, .zip</p>
                    <button className="px-6 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-colors">
                        Browse Files
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AssignmentView;
