import db from '../index';

class ImageInfo {
  constructor({ path, tags = [], info = [], colors = [] } = {}) {
    this.path = path;
    this.tags = tags;
    this.info = info;
    this.colors = colors;
  }
}

export default {
  /**
   *
   * @param {Array<ImageInfo> | ImageInfo} imageInfos
   */
  add(imageInfos) {
    return new Promise((resolve, reject) => {
      db.insert(imageInfos, (err, doc) => {
        if (err) {
          reject(err);
        } else {
          resolve(doc);
        }
      });
    });
  },
  /**
   *
   * @param {string} path
   * @param {ImageInfo} newImageInfo
   */
  update(path, newImageInfo) {
    return new Promise((resolve, reject) => {
      db.update({ path }, { $set: newImageInfo }, (err, num, doc) => {
        if (err) {
          reject(err);
        } else {
          resolve(doc);
        }
      });
    });
  },
  /**
   *
   * @param {string} path
   * @returns
   */
  remove(path) {
    return new Promise((resolve, reject) => {
      db.remove({ path }, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  },
};
