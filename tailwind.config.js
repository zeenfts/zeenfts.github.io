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
        // 'summer-primary': '#FFF5F5',
        // 'summer-secondary': '#FED7E2', 
        // 'summer-accent': '#F56565',
        // 'summer-dark': '#742A2A',
        'summer-primary': '#FFF5F7', 
        'summer-secondary': '#FBB6CE', 
        'summer-accent': '#E53E3E', 
        'summer-dark': '#822727',       
        
        // Autumn theme
        'autumn-primary': '#FFFAF0',
        'autumn-secondary': '#FED7AA',
        'autumn-accent': '#FB923C',
        'autumn-dark': '#BD6D0C'
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
