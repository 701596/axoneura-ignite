import { ReactNode } from "react";

interface InfiniteSliderProps {
  children: ReactNode;
  speed?: number;
  gap?: number;
  className?: string;
}

const InfiniteSlider = ({ children, speed = 30, gap = 48, className = "" }: InfiniteSliderProps) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className="animate-slide-infinite flex items-center w-max"
        style={{
          ["--slider-duration" as string]: `${speed}s`,
          gap: `${gap}px`,
        }}
      >
        {/* Original set */}
        <div className="flex items-center shrink-0" style={{ gap: `${gap}px` }}>
          {children}
        </div>
        {/* Duplicate for seamless loop */}
        <div className="flex items-center shrink-0" style={{ gap: `${gap}px` }} aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
};

export default InfiniteSlider;
