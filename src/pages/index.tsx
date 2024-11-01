import { PriceSlider } from "@/components/PricingCard/PriceSlider";
import { ToggleSwitch } from "@/components/PricingCard/ToggleSwitch";
import { useTheme } from "@/hooks/useTheme";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import gsap from "gsap";
import { useEffect, useState } from "react"


const PricingTiers = [
  { pageViews: '10K', monthlyPrice: 8, yearlyPrice: 72 },
  { pageViews: '50K', monthlyPrice: 12, yearlyPrice: 108 },
  { pageViews: '100K', monthlyPrice: 16, yearlyPrice: 144 },
  { pageViews: '500K', monthlyPrice: 24, yearlyPrice: 216 },
  { pageViews: '1M', monthlyPrice: 36, yearlyPrice: 324 },
]

export default function Home() {
  const [selectedTier, setSelectedTier] = useState(2);
  const [isYearly, setIsYearly] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    gsap.from('.pricing-card', {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });
  }, []);

  const currentPrice = isYearly ? PricingTiers[selectedTier].yearlyPrice * 0.75 : PricingTiers[selectedTier].monthlyPrice;

  return (
    <HeroHighlight containerClassName="min-h-screen w-full">
      <div className="pricing-card w-full max-w-2xl mx-4 p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-xl transition-colors duration-300 z-30 relative">
        <div className="flex justify-end mb-8">
          <ToggleSwitch checked={isDark} onChange={toggleTheme} label="Dark Mode" />
        </div>
        <h1 className="text=3xl font-bold text-center text-slate-800 dark:text-white mb-4">Simple, traffix-based pricing</h1>
        <p className="text-center text-slate-600 dark:text-slate-300 mb-8">Sign-up for 30-day trial. No credit card required.</p>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <span className="text-slate-600 dark:text-slate-300 uppercase tracking-wider">
            {PricingTiers[selectedTier].pageViews} Pageviews
          </span>
          <div className="flex items-center gap-2">
            <span className="text-4xl font-bold text-slate-800 dark:text-white">
              ${currentPrice}
            </span>
            <span className="text-slate-600 dark:text-slate-300">
              / {isYearly ? 'year' : 'month'}
            </span>
          </div>
        </div>
        <PriceSlider 
          value={selectedTier}
          onChange={setSelectedTier}
          max={4}
        />
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="text-slate-600 dark:text-slate-300">Monthly Billing</span>
          <ToggleSwitch
            checked={isYearly}
            onChange={() => setIsYearly(!isYearly)}
          />
          <div className="flex items-center gap-2">
            <span className="text-slate-600 dark:text-slate-300">Yearly Billing</span>
            <span className="px-2 py-1 text-sm text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/30 rounded-full">
              25% discount
            </span>
          </div>
        </div>
        <div className="border-t border-slate-200 dark:border-slate-700 pt-8">
          <ul className="space-y-4 mb-8">
            {['Unlimited websites', '100% data ownership', 'Email reports'].map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
          <button className="w-full py-3 px-6 bg-slate-800 dark:bg-teal-500 text-white rounded-full font-medium hover:bg-slate-700 dark:hover:bg-teal-400 transition-colors duration-300">
            Start my trial
          </button>
        </div>
      </div>
    </HeroHighlight>
  )
}