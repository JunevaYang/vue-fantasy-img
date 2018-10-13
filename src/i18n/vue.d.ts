import Vue from 'vue';

type keyWords = 'delete'|'remove'|'openDir'|'openFile'|'openImg'|'openImgInDir'|'choose'|'add'

type Languages = 'zh-cn'

interface Lang {
  (strings: keyWords| Array<keyWords>): string;
  setLanguage(language: Languages): void;
}

declare module 'vue/types/vue' {
  interface Vue {
    $lang: Lang;
  }
}

declare module 'vue/types/plugin' {
  interface PluginObject<T> {
    lang: Languages;
  }
}
