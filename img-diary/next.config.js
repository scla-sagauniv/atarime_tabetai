// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

module.exports = {
  async rewrites() {
    return [
      // {
      //   source: '/Stablediffusion-httptrigger',
      //   destination: 'https://atrm-functions.azurewebsites.net/api/StableDiffusion-httptrigger?',
      // },
      {
        source: '/Chatgpt-httptrigger',
        destination: 'https://atrm-functions.azurewebsites.net/api/Chatgpt-httptrigger?'
      },
    ];
  },
};