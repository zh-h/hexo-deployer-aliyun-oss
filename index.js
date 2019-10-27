const deployer = require('./lib/deployer');
const makeAliyunOssUrlForHelper = require('./lib/helpers').makeAliyunOssUrlForHelper;

// 调用oss命令行工具进行部署
hexo.extend.deployer.register('aliyun-oss', deployer);

// 取出原本的链接生成辅助函数进行扩展
// 参考 https://hexo.io/zh-cn/api/helper
const url_for = hexo.extend.helper.get('url_for').bind(hexo);

// 扩展成 OSS 部署使用的链接生成函数
hexo.extend.helper.register('url_for', makeAliyunOssUrlForHelper(url_for));