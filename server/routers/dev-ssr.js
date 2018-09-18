const Router = require('koa-router')
// node 端发送请求
const axios = require('axios')
const path = require('path')
// 写入磁盘
const fs = require('fs')
// fs 相同, 不将文件写入磁盘, 写入内存, 快
const MemoryFS = require('memory-fs')
// 打包 webpack
const webpack = require('webpack')
const VueServerRenderer = require('vue-server-renderer')
const serverRender = require('./server-render')
const serverConfig = require('../../build/webpack.config.server')
// 生成 bundle
const serverCompiler = webpack(serverConfig)
const mfs = new MemoryFS()
// 输出目录
serverCompiler.outputFileSystem = mfs

// 记录打包生成的文件
let bundle
// 改变了就打包，生成新文件
serverCompiler.watch({}, (err, stats) => {
  if (err) throw err
  stats = stats.toJson()
  stats.errors.forEach(err => console.log(err))
  stats.warnings.forEach(warn => console.warn(err))
  const bundlePath = path.join(
    serverConfig.output.path,
    'vue-ssr-server-bundle.json'
  )
  bundle = JSON.parse(mfs.readFileSync(bundlePath, 'utf-8'))
  console.log('new bundle generated')
})
// 处理返回的东西, koa 中间件
const handleSSR = async ctx => {
  if (!bundle) {
    ctx.body = '你等一会，别着急......'
    return
  }
  const clientManifestResp = await axios.get(
    'http://127.0.0.1:8000/public/vue-ssr-client-manifest.json'
  )
  const clientManifest = clientManifestResp.data
  const template = fs.readFileSync(
    path.join(__dirname, '../server.template.ejs'),
    'utf-8'
  )
  const renderer = VueServerRenderer.createBundleRenderer(bundle, {
    inject: false,
    clientManifest
  })
  await serverRender(ctx, renderer, template)
}

const router = new Router()
router.get('*', handleSSR)

module.exports = router
