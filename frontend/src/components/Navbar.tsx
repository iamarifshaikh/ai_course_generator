import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Brain, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out flex justify-center ${scrolled ? "top-4" : "top-0"
                }`}
        >
            <div
                className={`transform transition-all duration-500 ease-in-out ${scrolled
                    ? "w-[95%] max-w-6xl rounded-full glass-panel py-3 px-8 shadow-xl bg-[#020617]/80"
                    : "w-full bg-transparent py-6 px-10"
                    }`}
            >
                <div className="flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                            <Brain className="w-6 h-6 text-white" />
                        </div>
                        <span className="font-display font-extrabold text-2xl tracking-tighter text-white">
                            Axiora<span className="text-primary italic">.</span>
                        </span>
                    </Link>

                    <div className="hidden md:flex items-center gap-8">
                        <a href="#features" className="text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">Courses</a>
                        <a href="#how-it-works" className="text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">Process</a>
                        <a href="#dashboard" className="text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">Insights</a>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="hidden sm:block text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-white transition-colors">
                            Sign In
                        </button>
                        <Button
                            variant="default"
                            className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 font-bold transition-all border border-white/10"
                        >
                            <Sparkles className="w-5 h-5 mr-2 animate-pulse" />
                            Get Started
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
