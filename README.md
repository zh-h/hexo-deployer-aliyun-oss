# hexo-deployer-aliyun-oss
Aliyun OSS deployer for Hexo

## Preparation
### 1. Install ossutil
https://help.aliyun.com/document_detail/120075.html?spm=a2c4g.11186623.6.697.4c684813dpka22

### 2. OSS config
https://help.aliyun.com/document_detail/120072.html?spm=a2c4g.11186623.6.704.45f2448a8hDnRl#title-pkz-2sj-0cc

`stsToken` is not required.

## Hexo config
### 1. install aliyun oss deploy plugin

```bash
npm i git+https://github.com/zh-h/hexo-deployer-aliyun-oss.git#master
```

### 2. editing config file
Open `_config.yml`, locate to `deploy` section.

Add `type`, `bucket`, `ossCliPath` follow, like this:
```yaml
deploy:
- type: aliyun-oss
  bucket: applehater
  ossCliPath: /Users/x/IdeaProjects/ossutilmac64 
```
Setting `permalink` as `:year/:month/:day/:title/index.html` which is end with `index.html`

## Hexo generate and deploy

```bash
hexo d
```
Terminal output:
```bash
xs-iMac:zh-h.github.io x$ hexo d
INFO  Deploying: aliyun-oss
{"type":"aliyun-oss","bucket":"applehater","ossCliPath":"/Users/x/IdeaProjects/ossutilmac64","_":[]}
Total num: 739, size: 8,642,283. Dealed num: 135(upload 43 files, 92 directories), OK size: 992,673, Progress: 11.486%, SpTotal num: 739, size: 8,642,283. Dealed num: 292(upload 85 files, 207 directories), OK size: 1,911,915, Progress: 22.123%,Total num: 739, size: 8,642,283. Dealed num: 456(upload 135 files, 321 directories), OK size: 2,869,642, Progress: 33.205%Total num: 739, size: 8,642,283. Dealed num: 534(upload 173 files, 361 directories), OK size: 3,845,412, Progress: 44.495%Total num: 739, size: 8,642,283. Dealed num: 613(upload 212 files, 401 directories), OK size: 5,107,727, Progress: 59.102%Total num: 739, size: 8,642,283. Dealed num: 617(upload 216 files, 401 directories), OK size: 5,935,357, Progress: 68.678%Total num: 739, size: 8,642,283. Dealed num: 633(upload 231 files, 402 directories), OK size: 6,937,438, Progress: 80.273%Total num: 739, size: 8,642,283. Dealed num: 658(upload 253 files, 405 directories), OK size: 7,862,962, Progress: 90.982%                                                                                                                          Succeed: Total num: 739, size: 8,642,283. OK num: 739(upload 296 files, 443 directories).

45.390422(s) elapsed
INFO  Deploy done: aliyun-oss
```
To deploy after generating, you can run one of the following commands. There is no difference between the two.
```bash
hexo g -d
```

All done, vist: http://applehater.cn/ (your oss/site url)

Happy writing, Happy deploying 😎
