# hexo-deployer-aliyun-oss
将 Hexo 静态网站部署到阿里云 OSS

## 准备
### 1. 安装 ossutil
参考阿里云文档 https://help.aliyun.com/document_detail/120075.html?spm=a2c4g.11186623.6.697.4c684813dpka22

### 2. OSS 配置
参考阿里云文档 https://help.aliyun.com/document_detail/120072.html?spm=a2c4g.11186623.6.704.45f2448a8hDnRl#title-pkz-2sj-0cc

使用交互式设置最方便， `stsToken` 这个属性不必设置

## Hexo 配置
### 1. 安装阿里云 OSS 部署插件

```bash
npm i git+https://github.com/zh-h/hexo-deployer-aliyun-oss.git#master
```
我还没准备好发布到 npmjs.org, 可以用 git 安装

### 2. 修改 Hexo 的部署配置
打开 `_config.yml`, 定位到 `deploy` 段

在后面添加 `type`, `bucket`, `ossCliPath` 配置, 像这样子:
```yaml
deploy:
- type: aliyun-oss
  bucket: applehater
  ossCliPath: /Users/x/IdeaProjects/ossutilmac64 
```

还要把 `permalink` 配置成 `:year/:month/:day/:title/index.html` 以`index.html` 结尾才能访问到页面

## Hexo 构建和部署

```bash
hexo d
```
终端输出
```bash
xs-iMac:zh-h.github.io x$ hexo d
INFO  Deploying: aliyun-oss
{"type":"aliyun-oss","bucket":"applehater","ossCliPath":"/Users/x/IdeaProjects/ossutilmac64","_":[]}
Total num: 739, size: 8,642,283. Dealed num: 135(upload 43 files, 92 directories), OK size: 992,673, Progress: 11.486%, SpTotal num: 739, size: 8,642,283. Dealed num: 292(upload 85 files, 207 directories), OK size: 1,911,915, Progress: 22.123%,Total num: 739, size: 8,642,283. Dealed num: 456(upload 135 files, 321 directories), OK size: 2,869,642, Progress: 33.205%Total num: 739, size: 8,642,283. Dealed num: 534(upload 173 files, 361 directories), OK size: 3,845,412, Progress: 44.495%Total num: 739, size: 8,642,283. Dealed num: 613(upload 212 files, 401 directories), OK size: 5,107,727, Progress: 59.102%Total num: 739, size: 8,642,283. Dealed num: 617(upload 216 files, 401 directories), OK size: 5,935,357, Progress: 68.678%Total num: 739, size: 8,642,283. Dealed num: 633(upload 231 files, 402 directories), OK size: 6,937,438, Progress: 80.273%Total num: 739, size: 8,642,283. Dealed num: 658(upload 253 files, 405 directories), OK size: 7,862,962, Progress: 90.982%                                                                                                                          Succeed: Total num: 739, size: 8,642,283. OK num: 739(upload 296 files, 443 directories).

45.390422(s) elapsed
INFO  Deploy done: aliyun-oss
```
在构建后部署, 或者用以下命令构建后直接部署
```bash
hexo g -d
```

部署完成, 访问: http://applehater.cn/ (你的 oss 或者网站地址)

Happy writing, Happy deploying 😎
