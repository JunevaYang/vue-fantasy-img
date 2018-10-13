import settings from 'electron-settings';

/**
 * @readonly
 * @enum {string}
 */
export const configKeys = {
  initialized: 'initialized',
  folders: 'folders'
};

export default {
  get folders() {
    return settings.get(configKeys.folders);
  },
  init() {
    if (settings.has(configKeys.initialized)) {
      return;
    }

    settings.set(configKeys.initialized, true);
    settings.set(configKeys.folders, []);
  },
  /**
   *
   * @param {Array<string>} folders
   */
  setFolders(folders) {
    settings.set(configKeys.folders, folders);
  }
};
