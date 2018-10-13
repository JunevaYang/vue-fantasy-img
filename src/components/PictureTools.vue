<template>
  <div class="picture-tools">
    <button
      @click="addFolderClick"
      class="add-folder">添加文件夹</button>
    <ul
      v-for="folder in folders"
      :key="folder"
      class="folders">
      <li
        class="folder"
        @click.right="removeFolderClick(folder)">{{folder | folderName}}</li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { remote } from 'electron';
import path from 'path';

export default {
  name: 'PictureTools',
  filters: {
    folderName(folder) {
      return path.basename(folder);
    },
  },
  computed: {
    ...mapState(['folders']),
  },
  mounted() {},
  methods: {
    ...mapMutations(['addFolders', 'removeFolder', 'clearFolders']),
    addFolderClick() {
      const paths = remote.dialog.showOpenDialog({
        title: '选择文件夹',
        buttonLable: '添加',
        properties: ['openDirectory', 'multiSelections'],
      });

      this.addFolders(paths);
    },
    removeFolderClick(path) {
      this.removeFolder(path);
    },
  },
};
</script>

<style lang="less" scoped>
.folders {
  list-style-type: none;
  list-style-position: inside;

  .folder {
  }
}
</style>


