export interface PricingTier {
    pageViews: string;
    monthlyPrice: number;
    yearlyPrice: number;
}

export interface ThemeContextType {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}


export interface PriceSliderProps {
    value: number;
    onChange: (value: number) => void;
    max: number;
}

export interface ToggleSwitchProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    label?: string;
}