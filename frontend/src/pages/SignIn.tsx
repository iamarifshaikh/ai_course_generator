import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Brain } from "lucide-react";

const SignIn = () => {
    return (
        <div className="min-h-screen bg-[#030014] text-white font-sans flex items-center justify-center relative overflow-hidden">
            {/* Minimal Background - No Heavy Glitter */}
            <div className="fixed inset-0 bg-gradient-to-b from-[#0a0a0f] to-black z-0" />

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative z-10 w-full max-w-sm p-6"
            >
                {/* Clean Glass Card */}
                <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                    <div className="flex justify-center mb-8">
                        <Link to="/" className="p-3 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors text-white border border-white/5">
                            <Brain className="w-6 h-6" />
                        </Link>
                    </div>

                    <div className="text-center mb-10">
                        <h1 className="text-xl font-display font-medium tracking-tight mb-2">Welcome Back</h1>
                        <p className="text-muted-foreground text-xs">Sign in to continue your progress.</p>
                    </div>

                    <form className="space-y-5">
                        <div className="space-y-2">
                            <input
                                type="email"
                                className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-sm focus:outline-none focus:border-white/50 transition-colors text-white placeholder:text-muted-foreground/40 font-medium"
                                placeholder="Email Address"
                            />
                        </div>
                        <div className="space-y-2">
                            <input
                                type="password"
                                className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-sm focus:outline-none focus:border-white/50 transition-colors text-white placeholder:text-muted-foreground/40 font-medium"
                                placeholder="Password"
                            />
                        </div>

                        <button className="w-full py-4 rounded-xl bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-gray-200 transition-colors mt-6">
                            Sign In
                        </button>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-[10px] text-muted-foreground uppercase tracking-widest">
                            New here?{" "}
                            <Link to="/signup" className="text-white hover:underline decoration-white/20 underline-offset-4">
                                Create Account
                            </Link>
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default SignIn;
