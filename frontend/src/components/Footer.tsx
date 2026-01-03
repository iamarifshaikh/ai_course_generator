import { Brain } from "lucide-react";

const Footer = () => {
    return (
        <footer className="relative mt-20 pb-12 px-6">
            <div className="container mx-auto glass-panel rounded-[40px] p-16">
                <div className="grid md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                                <Brain className="w-6 h-6 text-white" />
                            </div>
                            <span className="font-display font-extrabold text-2xl tracking-tighter">
                                Axiora<span className="text-primary italic">.</span>
                            </span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                            Pioneering the future of cognitive synthesis through neural-mapped adaptive learning technologies.
                        </p>
                    </div>

                    {/* Product */}
                    <div>
                        <h4 className="font-display font-bold uppercase tracking-widest text-xs text-foreground mb-6">Neural Engine</h4>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li><a href="#" className="hover:text-primary transition-colors">Pathfinder</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Cognitive Load</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Spaced Sync</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Telemetry</a></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="font-display font-bold uppercase tracking-widest text-xs text-foreground mb-6">Mastery</h4>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">API Core</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Insights</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Archive</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-display font-bold uppercase tracking-widest text-xs text-foreground mb-6">Core</h4>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li><a href="#" className="hover:text-primary transition-colors">Manifesto</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-[10px] items-center font-bold uppercase tracking-[0.3em] text-muted-foreground/40">
                        © 2026 Axiora Systems. All protocols active.
                    </p>
                    <div className="flex gap-8">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-primary/50">Neural Status: Stable</span>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/40 italic underline cursor-pointer">Re-Sync Node</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
