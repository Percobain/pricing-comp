// src/config/theme.ts
const colors = {
    background: "var(--background)",
    foreground: "var(--foreground)",
    pricing: {
      slider: 'hsl(174, 77%, 80%)', 
      track: 'hsl(174, 86%, 45%)',
      discount: {
        bg: 'hsl(14, 92%, 95%)',
        text: 'hsl(15, 100%, 70%)',
      },
      button: 'hsl(226, 100%, 87%)',
    },
    slate: {
      850: '#1e293b',
    },
};
  
const animations = {
    'slide-up': 'slideUp 500ms ease-out',
    'fade-in': 'fadeIn 300ms ease-in',
};
  
const keyframes = {
    slideUp: {
      '0%': { transform: 'translateY(10px)', opacity: '0' },
      '100%': { transform: 'translateY(0)', opacity: '1' },
    },
    fadeIn: {
      '0%': { opacity: '0' },
      '100%': { opacity: '1' },
    },
};
  
export const theme = {
    extend: {
      colors,
      animation: animations,
      keyframes,
    },
};