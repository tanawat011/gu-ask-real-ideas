/** @type {import('next').NextConfig} */

console.log('\n')
console.log('   ✅ NextJS Config \n')
console.log('   ----------- \n')

const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  reactStrictMode: true,
}

module.exports = nextConfig
