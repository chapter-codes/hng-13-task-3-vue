module.exports = {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        'status-open': '#10B981',
        'status-in_progress': '#F59E0B',
        'status-closed': '#6B7280'
      },
      maxWidth: {
        '1440': '1440px'
      }
    }
  },
  plugins: []
}
