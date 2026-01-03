import { useState } from "react";
import { motion } from "framer-motion";
import { RotateCcw } from "lucide-react";

const NoteFlashcard = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div className="w-full h-full flex items-center justify-center p-12 perspective-1000">
            <div
                className="relative w-full max-w-2xl aspect-[3/2] cursor-pointer group perspective-1000"
                onClick={() => setIsFlipped(!isFlipped)}
            >
                <motion.div
                    initial={false}
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                    className="w-full h-full relative preserve-3d"
                    style={{ transformStyle: "preserve-3d" }}
                >
                    {/* Front */}
                    <div className="absolute inset-0 backface-hidden glass-panel rounded-3xl p-10 flex flex-col items-center justify-center border-primary/20 bg-gradient-to-br from-white/5 to-transparent">
                        <span className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-6">Question Card</span>
                        <h3 className="text-3xl md:text-4xl font-display font-bold text-center leading-tight">
                            What is Backpropagation?
                        </h3>
                        <div className="absolute bottom-6 text-xs text-muted-foreground/40 font-bold uppercase tracking-widest flex items-center gap-2 group-hover:text-primary transition-colors">
                            <RotateCcw className="w-3 h-3" />
                            Click to Flip
                        </div>
                    </div>

                    {/* Back */}
                    <div
                        className="absolute inset-0 backface-hidden glass-panel rounded-3xl p-10 flex flex-col items-center justify-center bg-[#0a0518]/90 border-primary/40 rotate-180"
                        style={{ transform: "rotateY(180deg)" }}
                    >
                        <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-6">Answer</span>
                        <p className="text-lg text-muted-foreground text-center leading-relaxed">
                            Backpropagation is an algorithm used for supervised learning of artificial neural networks using gradient descent. It calculates the gradient of the error function with respect to the neural network's weights.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default NoteFlashcard;
