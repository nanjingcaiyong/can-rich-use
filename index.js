var caniuse = require('caniuse-lite');

/**
 * @description 获取不支持输入特性的浏览器版本
 * @param { string } feature 特性名称
 * @returns 
 */
function getUnsupportedBrowsersByFeature(feature) {
  const caniuseFeature = caniuse.features[feature];

  if (caniuseFeature) {
    const stats = caniuse.feature(caniuseFeature).stats; // 返回浏览器版本和支持情况的数组
    // console.log(stats)
    const results = Object.keys(stats).reduce((browsers, browser) => browsers.concat(Object.keys(stats[browser]).filter(version => stats[browser][version].indexOf('y') !== 0).map(version => `${browser} ${version}`)), []);
    return results;
  }
  return ['> 0%']; // 所有浏览器都不支持
}
console.log(getUnsupportedBrowsersByFeature('proxy'))