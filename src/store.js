import Vue from 'vue';
import Vuex from 'vuex';
import configs from './tools/configs';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    folders: configs.folders
  },
  mutations: {
    addFolders(store, folders) {
      if (Array.isArray(folders)) {
        store.folders = store.folders.concat(folders);
      } else {
        store.folders.push(folders);
      }
      store.folders = [...new Set(store.folders)];

      configs.setFolders(store.folders);
    },
    removeFolder(store, folder) {
      const index = store.folders.findIndex(f => f === folder);
      index !== -1 && store.folders.splice(index, 1);

      configs.setFolders(store.folders);
    },
    clearFolders(store) {
      store.folders = [];
      configs.setFolders(store.folders);
    }
  },
  actions: {}
});
