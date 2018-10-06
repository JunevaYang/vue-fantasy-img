import { app } from 'electron';
import path from 'path';

export default {
  path: path.join(app.getPath('userData'), 'data.db')
};
