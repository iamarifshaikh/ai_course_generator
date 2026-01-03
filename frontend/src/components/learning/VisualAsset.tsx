import { useState } from "react";
import { Maximize2, Download, FileImage } from "lucide-react";
import { motion } from "framer-motion";

const VisualAsset = () => {
    const [isZoomed, setIsZoomed] = useState(false);

    // Mock data - would normally be passed via props
    const asset = {
        type: "diagram",
        title: "Transformer Architecture",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Full_GPT_architecture.png/800px-Full_GPT_architecture.png",
        caption: "The breakdown of the Transformer model architecture showing Encoder and Decoder blocks."
    };

    return (
        <div className="w-full h-full p-8 flex flex-col">
            <div className="flex justify-between items-start mb-6">
                <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">Visual Resource</span>
                    <h2 className="text-3xl font-display font-bold text-white tracking-tight">
                        {asset.title}
                    </h2>
                </div>
                <div className="flex gap-2">
                    <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-muted-foreground hover:text-white">
                        <Download className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => setIsZoomed(!isZoomed)}
                        className={`p-2 rounded-lg transition-colors ${isZoomed ? "bg-primary text-white" : "bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white"}`}
                    >
                        <Maximize2 className="w-5 h-5" />
                    </button>
                </div>
            </div>

            <div className={`flex-1 relative glass-panel rounded-3xl overflow-hidden bg-[#0a0518]/50 border-white/5 group flex items-center justify-center transition-all duration-500 ${isZoomed ? "fixed inset-8 z-50 bg-black/95 border-primary/20" : ""}`}>
                {/* Background Grid Pattern */}
                <div className="absolute inset-0 opacity-20"
                    style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)', backgroundSize: '40px 40px' }}
                />

                <motion.div
                    layout
                    className={`relative z-10 ${isZoomed ? "w-full h-full p-8" : "max-w-[80%] max-h-[80%]"}`}
                >
                    <img
                        src={asset.url}
                        alt={asset.title}
                        className={`w-full h-full object-contain rounded-lg shadow-2xl ${isZoomed ? "" : "group-hover:scale-105 transition-transform duration-500"}`}
                    />

                    {!isZoomed && (
                        <div className="absolute -bottom-12 left-0 right-0 text-center opacity-0 group-hover:opacity-100 group-hover:bottom-4 transition-all duration-300">
                            <span className="px-4 py-2 rounded-full glass-panel bg-black/60 text-xs font-bold text-white backdrop-blur-md">
                                {asset.caption}
                            </span>
                        </div>
                    )}
                </motion.div>

                {isZoomed && (
                    <button
                        onClick={() => setIsZoomed(false)}
                        className="absolute top-8 right-8 p-4 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-colors"
                    >
                        <Maximize2 className="w-6 h-6 rotate-180" />
                    </button>
                )}
            </div>

            {!isZoomed && (
                <div className="mt-6 flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <FileImage className="w-5 h-5" />
                    </div>
                    <div>
                        <h4 className="font-bold text-white text-sm">Context</h4>
                        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                            {asset.caption}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VisualAsset;
