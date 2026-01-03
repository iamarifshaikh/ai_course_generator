import { useState } from "react";
import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const QuizInterface = () => {
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const question = {
        title: "Which activation function handles the vanishing gradient problem best?",
        options: [
            "Sigmoid Function",
            "Rectified Linear Unit (ReLU)",
            "Hyperbolic Tangent (Tanh)",
            "Step Function"
        ],
        correct: 1
    };

    return (
        <div className="w-full h-full flex flex-col items-center justify-center p-12 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-6">Knowledge Check 1.2</span>

            <h2 className="text-3xl font-display font-bold text-white text-center mb-12">
                {question.title}
            </h2>

            <div className="w-full space-y-4">
                {question.options.map((option, idx) => (
                    <motion.button
                        key={idx}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        onClick={() => !isSubmitted && setSelectedOption(idx)}
                        className={`w-full p-6 rounded-2xl text-left border transition-all duration-300 relative overflow-hidden ${selectedOption === idx
                            ? isSubmitted
                                ? idx === question.correct
                                    ? "bg-emerald-500/20 border-emerald-500/50"
                                    : "bg-red-500/20 border-red-500/50"
                                : "bg-primary/20 border-primary/60"
                            : "glass-panel bg-white/5 border-white/5 hover:bg-white/10"
                            } ${isSubmitted && idx === question.correct ? "bg-emerald-500/20 border-emerald-500/50" : ""}`}
                    >
                        <div className="flex items-center justify-between z-10 relative">
                            <span className={`font-medium ${selectedOption === idx ? "text-white" : "text-muted-foreground"}`}>
                                {option}
                            </span>
                            {isSubmitted && idx === question.correct && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
                            {isSubmitted && selectedOption === idx && idx !== question.correct && <XCircle className="w-5 h-5 text-red-400" />}
                        </div>
                    </motion.button>
                ))}
            </div>

            <div className="mt-12 w-full flex justify-end">
                <button
                    onClick={() => isSubmitted ? setIsSubmitted(false) : setIsSubmitted(true)}
                    disabled={selectedOption === null}
                    className="px-8 py-4 rounded-xl bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-widest transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                    {isSubmitted ? (
                        <>
                            Next Question <ArrowRight className="w-4 h-4" />
                        </>
                    ) : (
                        "Submit Answer"
                    )}
                </button>
            </div>
        </div>
    );
};

export default QuizInterface;
