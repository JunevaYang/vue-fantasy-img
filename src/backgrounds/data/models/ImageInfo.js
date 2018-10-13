import db from '../index';
import { forceToArray } from '../../../tools/utils';

/**
 * @typedef {object} ImageInfo
 * @property {string} path
 * @property {Array<string>} tags
 * @property {Array<string>} infos
 * @property {Array<string>} colors
 *
 */

export default {
  /**
   *
   * @param {Array<ImageInfo> | ImageInfo} imageInfos
   */
  add(imageInfos) {
    imageInfos = forceToArray(imageInfos);

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
      db.remove({ path }, err => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }
};
