// components/ToggleSwitch.tsx
import { ToggleSwitchProps } from '@/types/pricing';
import { Switch } from '@radix-ui/react-switch';

export const ToggleSwitch =  ({ checked, onChange, label }: ToggleSwitchProps) => {
  return (
    <div className="flex items-center gap-2">
      {label && <span className="text-slate-600 dark:text-slate-300">{label}</span>}
      <Switch
        checked={checked}
        onCheckedChange={onChange}
        className={`
          relative inline-flex h-6 w-11 items-center rounded-full
          ${checked ? 'bg-teal-400' : 'bg-slate-300 dark:bg-slate-600'}
        `}
      >
        <span className={`
          ${checked ? 'translate-x-6' : 'translate-x-1'}
          inline-block h-4 w-4 transform rounded-full bg-white transition
        `} />
      </Switch>
    </div>
  );
};