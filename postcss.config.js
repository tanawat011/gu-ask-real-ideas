console.log('\n')
console.log(`   ✅ PostCSS Config \n`)
console.log(`   ----------- \n`)

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {
      ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
    },
  },
}