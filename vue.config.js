const path = require('path');
function resolve(dir) {
   return path.join(__dirname, dir)
}
module.exports = {
   chainWebpack: (config)=>{
      config.resolve.alias
         .set('@', resolve('src'))
         .set('assets', resolve('src/assets'))
         .set('components', resolve('src/components'))
         .set('views', resolve('src/views'))
         .set('routers', resolve('src/router'))
         .set('store', resolve('src/store'))
         .set('network', resolve('src/network'))
   }
}

// 方式二：
// module.exports = {
//    configureWebpack: {
//       resolve: {
//          alias: {
//             'assets': 'src/assets',
//             'components': 'src/components',
//             'views': 'src/views',
//             'routers': 'src/router'
//          }
//       }
//    }
// }