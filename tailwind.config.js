export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Winter theme
        'winter-primary': '#E6F2FF',
        'winter-secondary': '#B3D9FF',
        'winter-accent': '#6BB6FF',
        'winter-dark': '#1A365D',
        
        // Spring theme
        'spring-primary': '#F0FFF4',
        'spring-secondary': '#C6F6D5',
        'spring-accent': '#68D391',
        'spring-dark': '#22543D',
        
        // Summer theme
        'summer-primary': '#FFFAF0',
        'summer-secondary': '#FED7AA',
        'summer-accent': '#FB923C',
        'summer-dark': '#7C2D12',
        
        // Autumn theme
        'autumn-primary': '#FEF3E7',
        'autumn-secondary': '#FBBF24',
        'autumn-accent': '#F59E0B',
        'autumn-dark': '#78350F'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    // Custom plugin for theme variants
    function({ addVariant }) {
      addVariant('winter', '.winter &');
      addVariant('spring', '.spring &');
      addVariant('summer', '.summer &');
      addVariant('autumn', '.autumn &');
    }
  ]
};
