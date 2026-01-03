import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Maximize2, Image as ImageIcon } from "lucide-react";

interface Slide {
    type: "text" | "image" | "diagram";
    content: string;
    title?: string;
}

const LessonCard = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    // Mock Data
    const slides: Slide[] = [
        {
            type: "text",
            title: "Introduction to Neural Networks",
            content: "Neural networks are a set of algorithms, modeled loosely after the human brain, that are designed to recognize patterns. They interpret sensory data through a kind of machine perception, labeling or clustering raw input. The patterns they recognize are numerical, contained in vectors, into which all real-world data, be it images, sound, text or time series, must be translated.\n\nDeep learning maps pattern-matching properties to a vast, multi-layered hierarchy of concepts. Each layer detects a specific feature, from simple edges in the first layers to complex shapes like eyes or wheels in deeper layers. This hierarchical approach allows them to learn supervised tasks from massive amounts of data with unprecedented accuracy."
        },
        {
            type: "text",
            title: "How It Works (Deep Dive)",
            content: "Think of a neural network as a massive switchboard. Input enters through the first layer (INPUT LAYER), flows through multiple hidden layers where calculations happen (HIDDEN LAYERS), and exits as a prediction or classification (OUTPUT LAYER).\n\nKey Components:\n• Neurons: The basic unit, holding a number between 0 and 1.\n• Weights: The strength of the connection between neurons.\n• Biases: An extra threshold value to shift the activation function.\n\nWhen you train a network, you are essentially just adjusting these weights and biases until the output matches the expected result (Ground Truth)."
        },
        { type: "image", title: "Perceptron Structure", content: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/ArtificialNeuronModel_english.png/1200px-ArtificialNeuronModel_english.png" },
    ];

    return (
        <div className="w-full min-h-[600px] p-8 flex flex-col">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-display font-bold text-white tracking-tight">
                    {slides[activeSlide].title}
                </h2>
                <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-muted-foreground hover:text-white">
                    <Maximize2 className="w-5 h-5" />
                </button>
            </div>

            <div className="flex-1 relative rounded-3xl overflow-hidden bg-[#0c0c12] border border-white/5 group shadow-2xl">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeSlide}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 p-8 flex items-center justify-center"
                    >
                        {slides[activeSlide].type === "text" ? (
                            <div className="text-lg text-muted-foreground leading-relaxed max-w-3xl whitespace-pre-line">
                                {slides[activeSlide].content}
                            </div>
                        ) : (
                            <div className="relative w-full h-full flex items-center justify-center">
                                <ImageIcon className="w-16 h-16 text-white/20 absolute" />
                                <img
                                    src={slides[activeSlide].content}
                                    alt={slides[activeSlide].title}
                                    className="max-w-full max-h-full object-contain relative z-10 rounded-lg shadow-2xl"
                                />
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Overlay */}
                <div className="absolute bottom-6 right-6 flex gap-2">
                    <button
                        onClick={() => setActiveSlide(Math.max(0, activeSlide - 1))}
                        disabled={activeSlide === 0}
                        className="p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white hover:bg-primary hover:border-primary disabled:opacity-30 disabled:hover:bg-black/40 transition-all"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => setActiveSlide(Math.min(slides.length - 1, activeSlide + 1))}
                        disabled={activeSlide === slides.length - 1}
                        className="p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white hover:bg-primary hover:border-primary disabled:opacity-30 disabled:hover:bg-black/40 transition-all"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LessonCard;
