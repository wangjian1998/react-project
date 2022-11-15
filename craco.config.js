const path = require('path')

const CracoLessPlugin = require('craco-less');


const resolve =  pathname => path.resolve(__dirname, pathname)

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  webpack: {
    alias: {
      '@':resolve( "src"),
      "component": resolve("src/component"),
      "utils": resolve("src/utils"),
      // '@mui/styled-engine': '@mui/styled-engine-sc',
    }
  }
}
