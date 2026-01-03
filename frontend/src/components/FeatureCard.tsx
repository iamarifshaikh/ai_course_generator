import type { ReactNode } from "react";

interface FeatureCardProps {
    icon: ReactNode;
    title: string;
    description: string;
    gradient?: boolean;
}

const FeatureCard = ({ icon, title, description, gradient }: FeatureCardProps) => {
    return (
        <div className={`glass-card rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_hsl(262,83%,58%,0.15)] group ${gradient ? 'bg-gradient-to-br from-primary/20 to-pink-500/10' : ''}`}>
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                {icon}
            </div>
            <h3 className="font-display font-semibold text-lg mb-2">{title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </div>
    );
};

export default FeatureCard;
