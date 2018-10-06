import settings from 'electron-settings';

export const configKeys = {
  initialized: 'initialized',
  folders: 'folders',
};

export default {
  init() {
    if (settings.has(configKeys.initialized)) {
      return;
    }

    settings.set(configKeys.initialized, true);
    settings.set(configKeys.folders, []);
  },
  get folders() {
    return settings.get(configKeys.folders);
  },
  setFolders(folders) {
    settings.set(configKeys.folders, folders);
  },
};
