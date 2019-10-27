
/**
 * 判断包含字符的数量
 * 
 * @param {string} str 字符串
 * @param {char} char 包含的字符
 */
function charCount(str, char) {
  let count = 0;
  for (const thatChar of str) {
    if (thatChar === char) {
      count++;
    }
  }
  return count;
}

/**
 * 创建构建链接的辅助函数
 * 
 * @param {function} url_for_function 原本 hexo 内置的函数
 */
function makeAliyunOssUrlForHelper(url_for_function) {
  /**
   * 生成 Aliyun OSS 可以访问的 index.html 结尾的地址
   * OSS 设计是文件对象管理不是网站浏览，目录结尾不会访问到 index.html内容
   * 
   * @param {string} url 相对地址
   * @param {Object} options 参数选项
   */
  return function aliyunOssUrlFor(url, options) {
    let genreatedUrl = url_for_function(url, options);
    // 匹配文章、标签、归档页面，如：
    // /tags/nginx/
    // /categories/Linux/docker/
    // permalink: :year/:month/:day/:title/ 文章链接默认的格式，以 / 开头和结尾
    if (genreatedUrl.charAt(0) === '/') {
      if (genreatedUrl.charAt(genreatedUrl.length - 1) === '/') {
        genreatedUrl = genreatedUrl + 'index.html';
        return genreatedUrl;
      }
      // 匹配侧边导航链接，如：/archives
      // 排除 /img/avatar.png /favicon.ico
      if (charCount(genreatedUrl, '/') === 1 && charCount(genreatedUrl, '.') === 0) {
        genreatedUrl = genreatedUrl + '/index.html';
        return genreatedUrl;
      }
    }
    return genreatedUrl;

  }
}

module.exports = {
  'makeAliyunOssUrlForHelper': makeAliyunOssUrlForHelper
}