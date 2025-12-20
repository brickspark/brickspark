import { cn } from "@/lib/utils";

interface LegoBrickProps {
  color: 'red' | 'blue' | 'green' | 'yellow' | 'primary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  studs?: 1 | 2 | 4;
}

const colorClasses = {
  red: 'bg-lego-red',
  blue: 'bg-lego-blue',
  green: 'bg-lego-green',
  yellow: 'bg-lego-yellow',
  primary: 'bg-primary',
};

const sizeClasses = {
  sm: 'w-8 h-6',
  md: 'w-12 h-8',
  lg: 'w-16 h-10',
};

const studSizes = {
  sm: 'w-2 h-2',
  md: 'w-3 h-3',
  lg: 'w-4 h-4',
};

export const LegoBrick = ({ color, size = 'md', className, studs = 2 }: LegoBrickProps) => {
  const studArray = Array.from({ length: studs }, (_, i) => i);
  
  return (
    <div 
      className={cn(
        "relative rounded-sm shadow-brick",
        colorClasses[color],
        sizeClasses[size],
        className
      )}
    >
      {/* Studs on top */}
      <div className="absolute -top-1 left-1/2 -translate-x-1/2 flex gap-1">
        {studArray.map((i) => (
          <div 
            key={i}
            className={cn(
              "rounded-full shadow-sm",
              colorClasses[color],
              studSizes[size],
              "border border-foreground/10"
            )}
          />
        ))}
      </div>
    </div>
  );
};
