import DataStore from 'nedb';
import dbConfig from './configs.js';

const db = new DataStore({
  filename: dbConfig.path,
  autoload: true,
});

export default db;
