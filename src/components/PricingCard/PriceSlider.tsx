import { PriceSliderProps } from '@/types/pricing';
import * as Slider from '@radix-ui/react-slider';
import { useState } from 'react';
import { gsap } from 'gsap';

export const PriceSlider = ({ value, onChange, max }: PriceSliderProps) => {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <Slider.Root
      value={[value]}
      onValueChange={([val]) => onChange(val)}
      max={max}
      step={1}
      aria-label="Price Range"
      className="relative flex items-center w-full h-12 my-8 touch-none select-none"
      onPointerDown={() => setIsDragging(true)}
      onPointerUp={() => setIsDragging(false)}
    >
      <Slider.Track className="relative w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full">
        <Slider.Range className="absolute h-full bg-gradient-to-r from-teal-400 to-teal-500 dark:from-teal-500 dark:to-teal-400 rounded-full transition-all duration-200" />
      </Slider.Track>
      
      <Slider.Thumb 
        className={`
          group relative flex items-center justify-center
          w-8 h-8 rounded-full 
          bg-gradient-to-br from-teal-400 to-teal-500 
          dark:from-teal-500 dark:to-teal-400
          shadow-lg shadow-teal-500/20 dark:shadow-teal-400/20
          ring-2 ring-white dark:ring-slate-800
          hover:ring-4 hover:ring-teal-200 dark:hover:ring-teal-900/50
          focus:outline-none focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-800
          transition-all duration-200 transform
          ${isDragging ? 'scale-110' : 'scale-100'}
          cursor-grab active:cursor-grabbing
        `}
        aria-label="Price Slider Thumb"
      >
    <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="transform transition-transform group-hover:scale-110"
    >

    <g className="group-active:translate-y-[1px] transition-transform">
        <path
        d="M8 10H16"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        className="group-hover:translate-y-[1px] transition-transform"
        />
        <path
        d="M8 14H16"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        className="group-hover:translate-y-[-1px] transition-transform"
        />
        
        <circle
        cx="12"
        cy="12"
        r="1"
        fill="white"
        className="opacity-50 group-hover:opacity-100 transition-opacity"
        />
        <path
        d="M12 6L14 8H10L12 6Z"
        fill="white"
        className="opacity-0 group-hover:opacity-50 transition-opacity"
        />
        <path
        d="M12 18L10 16H14L12 18Z"
        fill="white"
        className="opacity-0 group-hover:opacity-50 transition-opacity"
        />
    </g>
    </svg>
      </Slider.Thumb>
      
      <div className="absolute -bottom-6 left-0 right-0 flex justify-between text-xs font-medium text-slate-500 dark:text-slate-400">
        <span>10K</span>
        <span>50K</span>
        <span>100K</span>
        <span>500K</span>
        <span>1M</span>
      </div>
    </Slider.Root>
  );
};