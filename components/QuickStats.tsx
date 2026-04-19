"use client";
import { Briefcase, Brain, Zap, Award } from 'lucide-react';

const STATS = [
  {
    icon: Briefcase,
    value: "6+",
    label: "Years Building Products",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Brain,
    value: "5+",
    label: "AI/ML Systems",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Zap,
    value: "60%+",
    label: "Performance Optimization",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Award,
    value: "FDA",
    label: "Medical Device Experience",
    color: "from-green-500 to-emerald-500"
  }
];

export default function QuickStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 my-8">
      {STATS.map(({ icon: Icon, value, label, color }) => (
        <div
          key={label}
          className="group relative p-4 md:p-6 rounded-lg bg-gradient-to-br from-background to-background/50 border border-border/50 hover:border-primary/50 transition-all duration-300 overflow-hidden"
        >
          {/* Gradient background on hover */}
          <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
          
          <div className="relative space-y-2">
            <div className={`inline-block p-2 rounded-lg bg-gradient-to-br ${color} bg-opacity-10`}>
              <Icon className={`h-5 w-5 md:h-6 md:w-6 bg-gradient-to-br ${color} bg-clip-text text-transparent`} />
            </div>
            <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
              {value}
            </div>
            <p className="text-xs md:text-sm text-muted-foreground font-medium">{label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
