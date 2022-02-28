const path =require('path')
module.exports = {
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     components: '@/components'
  //   }
  // }
  chainWebpack:(config)=>{
    config.resolve.alias
    .set('@',path.resolve(__dirname,'src'))
    .set('components','@/components')
  }
}
