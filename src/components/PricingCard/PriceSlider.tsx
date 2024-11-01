import { PriceSliderProps } from '@/types/pricing';
import { Slider } from '@radix-ui/react-slider';

export const PriceSlider = ({ value, onChange, max }: PriceSliderProps) => {
  return (
    <Slider
      value={[value]}
      onValueChange={([val]) => onChange(val)}
      max={max}
      step={1}
      className="relative flex items-center w-full h-5 my-8"
    >
      <div className="relative w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full">
        <div 
          className="absolute h-full bg-teal-400 rounded-full" 
          style={{ width: `${(value / max) * 100}%` }}
        />
      </div>
    </Slider>
  );
};