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

const Home: React.FC = () => {
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
    <HeroHighlight containerClassName={`min-h-screen w-full flex items-center justify-center ${
      isDark 
        ? 'bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950' 
        : 'bg-gradient-to-br from-white via-purple-50/30 to-slate-50/80'
    }`}>
      <div className={`pricing-card w-full max-w-2xl mx-4 p-6 sm:p-8 lg:p-10 
        rounded-3xl transition-all duration-300 z-30 relative
        ${isDark 
          ? 'backdrop-blur-xl bg-slate-900/50 border border-white/5 shadow-2xl shadow-purple-900/20' 
          : 'bg-white/70 backdrop-blur-md border border-white/40 shadow-xl shadow-purple-200/30'
        }`}>
        <div className="flex justify-end mb-4 sm:mb-6">
          <ToggleSwitch checked={isDark} onChange={toggleTheme} label="Dark Mode" />
        </div>
        
        <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-3 sm:mb-4
          ${isDark
            ? 'bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300'
            : 'bg-gradient-to-r from-indigo-600 via-purple-600 to-purple-500'
          } bg-clip-text text-transparent`}>
          Simple, traffic-based pricing
        </h1>
        
        <p className={`text-center text-base sm:text-lg mb-6 sm:mb-8
          ${isDark ? 'text-slate-300/90' : 'text-slate-600'}`}>
          Start your 30-day trial today. No credit card required.
        </p>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-8 mb-6 sm:mb-8">
        <span className={`pageviews-text uppercase tracking-wider font-medium text-sm sm:text-base 
          relative inline-flex items-center gap-2 transform transition-all duration-300
          ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
          <span className="relative">
            {PricingTiers[selectedTier].pageViews}
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-current to-transparent opacity-20"></span>
          </span>
          <span className="opacity-50">Pageviews</span>
        </span>
          <div className="flex items-center gap-2 sm:gap-3">
            <span className={`text-4xl sm:text-5xl font-bold
              ${isDark 
                ? 'bg-gradient-to-r from-pink-400 to-purple-400' 
                : 'bg-gradient-to-r from-indigo-500 to-purple-500'
              } bg-clip-text text-transparent`}>
              ${currentPrice}
            </span>
            <span className={isDark ? 'text-slate-400' : 'text-slate-500'}>
              / {isYearly ? 'year' : 'month'}
            </span>
          </div>
        </div>

        <PriceSlider 
          value={selectedTier}
          onChange={setSelectedTier}
          max={4}
        />

        <div className="flex items-center justify-center flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
          <span className={isDark ? 'text-slate-300' : 'text-slate-600'}>Monthly Billing</span>
          <ToggleSwitch
            checked={isYearly}
            onChange={() => setIsYearly(!isYearly)}
          />
          <div className="flex items-center gap-2">
            <span className={isDark ? 'text-slate-300' : 'text-slate-600'}>Yearly Billing</span>
            <span className={`px-3 py-1 text-xs sm:text-sm rounded-full
              ${isDark 
                ? 'bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-300 border border-pink-500/20' 
                : 'bg-purple-50 text-purple-600 border border-purple-100'
              }`}>
              25% discount
            </span>
          </div>
        </div>

        <div className={`border-t pt-6 ${isDark ? 'border-slate-700/50' : 'border-slate-100'}`}>
          <ul className="space-y-3 mb-6">
            {['Unlimited websites', '100% data ownership', 'Email reports'].map((feature) => (
              <li key={feature} className={`flex items-center gap-3 text-sm sm:text-base
                ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                <svg className={`w-4 h-4 sm:w-5 sm:h-5 ${isDark ? 'text-pink-400' : 'text-purple-500'}`} 
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
          <button className={`w-full py-3 sm:py-4 px-6 sm:px-8 rounded-xl sm:rounded-2xl font-medium 
            transition-all duration-300 transform hover:scale-[1.02] focus:ring-2 
            ${isDark 
              ? 'bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white focus:ring-purple-500/50' 
              : 'bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white focus:ring-purple-500/30'
            }`}>
            Start my trial
          </button>
        </div>
      </div>
    </HeroHighlight>
  );
};

export default Home;