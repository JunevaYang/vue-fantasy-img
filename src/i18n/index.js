import { forceToArray } from '../tools/utils';

/**
 * @readonly
 * @enum {string}
 */
const zhCN = {
  delete: '删除',
  remove: '移除',
  openDir: '打开文件夹',
  openFile: '打开文件',
  openImg: '打开图片',
  openImgInDir: '打开图片文件夹',
  choose: '选择',
  dir: '文件夹',
  add: '添加'
};

const I18n = () => {};

I18n.install = function(Vue, { lang = 'zh-cn' } = {}) {
  const defaultLang = 'zh-cn';
  let _lang = lang || defaultLang;

  const langs = {
    'zh-cn': zhCN
  };

  /**
   *
   * @param {import('./vue').keyWords | Array<import('./vue').keyWords>} strings
   * @return {string}
   */
  Vue.prototype.$lang = function(strings) {
    strings = forceToArray(strings);
    const lang = langs[_lang] || langs[defaultLang];
    return strings.map(s => lang[s]).join('');
  };

  /**
   * @param {import('./vue').Languages} lang
   */
  Vue.prototype.$lang.setLanguage = function(lang) {
    _lang = lang;
  };
};

export default I18n;
