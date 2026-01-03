import type { ReactNode } from "react";

interface HowItWorksStepProps {
    number: number;
    title: string;
    description: string;
    icon: ReactNode;
}

const HowItWorksStep = ({ number, title, description, icon }: HowItWorksStepProps) => {
    return (
        <div className="flex gap-8 items-start group">
            <div className="relative">
                <div className="w-16 h-16 rounded-[2rem] bg-gradient-to-br from-primary to-purple-800 flex items-center justify-center shadow-[0_10px_30px_rgba(139,92,246,0.3)] group-hover:shadow-[0_10px_40px_rgba(139,92,246,0.5)] transition-all duration-500 group-hover:-translate-y-1">
                    {icon}
                </div>
                <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-[#1A0B3B] border border-primary/40 text-[10px] font-black flex items-center justify-center text-primary shadow-xl">
                    0{number}
                </span>
            </div>
            <div className="flex-1 pt-2">
                <h3 className="font-display font-bold text-xl mb-2 group-hover:text-primary transition-colors">{title}</h3>
                <p className="text-muted-foreground/70 text-base leading-relaxed">{description}</p>
            </div>
        </div>
    );
};

export default HowItWorksStep;
