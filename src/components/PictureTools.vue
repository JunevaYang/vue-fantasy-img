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
        :class="{active: currentSelectFolder === folder}"
        :title="folder"
        @click="currentSelectFolder=folder"
        @click.right="popuMenu(folder)">{{folder | folderName}}</li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { remote } from 'electron';
import path from 'path';
const { Menu, MenuItem } = remote;

export default {
  name: 'PictureTools',
  data() {
    return {
      menu: null,
      currentSelectFolder: null,
    };
  },
  filters: {
    folderName(folder) {
      return path.basename(folder);
    },
  },
  computed: {
    ...mapState(['folders']),
  },
  mounted() {
    this._initContextMenu();
    this.currentSelectFolder = this.folders && this.folders[0];
  },
  methods: {
    ...mapMutations(['addFolders', 'removeFolder', 'clearFolders']),
    _initContextMenu() {
      this.menu = new Menu();

      this.menu.append(
        new MenuItem({
          label: '删除',
          click: () => {
            this.removeFolderClick(this.currentSelectFolder);
          },
        }),
      );
      this.menu.append(
        new MenuItem({
          label: '打开文件夹',
          click: () => {
            remote.shell.openItem(this.currentSelectFolder);
          },
        }),
      );
    },
    addFolderClick() {
      const paths = remote.dialog.showOpenDialog({
        title: '选择文件夹',
        buttonLable: '添加',
        properties: ['openDirectory', 'multiSelections'],
      });

      paths && this.addFolders(paths);
    },
    popuMenu(folder) {
      this.currentSelectFolder = folder;
      this.menu.popup({ window: remote.getCurrentWindow() });
    },
    removeFolderClick(path) {
      this.removeFolder(path);
    },
  },
};
</script>

<style lang="less" scoped>
.add-folder {
  position: relative;
  width: 100%;
  padding: 5px 0 8px;
  margin: 5px 0;
  border-bottom: 1px solid var(--color-gray);

  &:hover {
    color: var(--color-blue);
  }
}

.folders {
  text-align: center;
  list-style: none;
  margin: 0;
  padding: 0;

  .folder {
    position: relative;
    width: 100%;
    padding: 5px 0;
    margin: 5px 0;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 5px;
    }

    &.active,
    &:hover {
      background-color: var(--color-gray);
      color: var(--color-blue);

      &::before {
        background-color: var(--color-blue);
      }
    }
  }
}
</style>
