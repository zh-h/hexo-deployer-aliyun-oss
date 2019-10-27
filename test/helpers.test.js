const helpers = require('../lib/helpers');
const should = require('chai').should();
const assert = require('chai').assert;

function url_for_function(url, options) {
  url = url.charAt(0) === '/' ? url : '/' + url;
  return url;
}

const aliyunOssUrlFor = helpers.makeAliyunOssUrlForHelper(url_for_function);

describe('url_for helper test', () => {
  it('make helper success', () => {
    assert.equal(typeof aliyunOssUrlFor, 'function');
  });
  it('side nav links', () => {
    should.equal(aliyunOssUrlFor('/likes'), '/likes/index.html');
    should.equal(aliyunOssUrlFor('/archives'), '/archives/index.html');
    assert.notEqual(aliyunOssUrlFor('https://github.com/zh-h'), 'https://github.com/zh-h/index.html');
  });
  it('post and tag links', () => {
    should.equal(aliyunOssUrlFor('/categories/Java/'), '/categories/Java/index.html');
    should.equal(aliyunOssUrlFor('/2018/04/10/2018/04/10/gzip-request-deompress/'), '/2018/04/10/2018/04/10/gzip-request-deompress/index.html');
  });
  it('static contents links', () => {
    assert.notEqual(aliyunOssUrlFor('/css/style.css'), '/css/style.css/index.html');
    assert.notEqual(aliyunOssUrlFor('/favicon.ico'), '/favicon.ico/index.html');
  });
});