import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ASCIIArtProps {
  art: string;
  className?: string;
}

export function ASCIIArt({ art, className }: ASCIIArtProps) {
  return (
    <div className="w-full overflow-x-auto py-4 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
      <pre
        className={cn(
          "font-mono text-primary leading-none whitespace-pre select-none inline-block min-w-fit",
          "drop-shadow-[0_0_5px_rgba(var(--primary),0.3)]",
          className
        )}
        aria-hidden="true"
      >
        {art}
      </pre>
    </div>
  );
}
