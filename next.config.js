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
  images: {
    loader: 'imgix',
    // path: 'https://tanawat.web.app/',
    path: 'http://localhost:3000/',
  },
  async rewrites () {
    return [
      {
        source: '/:any*',
        destination: '/',
      },
    ];
  },
}

module.exports = nextConfig
