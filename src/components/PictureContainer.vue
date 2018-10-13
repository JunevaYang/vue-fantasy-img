<template>
  <div class="picture-container">
    <div class="images">
      <div
        v-for="(info, index) in testData"
        :key="index"
        @click.right="popupMenu(info)"
        class="image-container">
        <div class="image">
          <img
            class="image"
            :src="info.path" >
        </div>
        <div class="tags">
          <span
            v-for="tag in info.tags"
            :key="tag"
            class="tag">{{ tag }}</span>
        </div>
      </div>
    </div>
    <!-- <navigation /> -->
  </div>
</template>

<script>
import { remote } from 'electron';

export default {
  data() {
    return {
      menu: null,
      contextSelectImageData: null,
    };
  },
  computed: {
    testData() {
      return [
        {
          path: 'G:/WindowsTheme/test/1.jpg',
          tags: ['red', '32kb'],
          colors: ['#333', '#555'],
        },
        {
          path: 'G:/WindowsTheme/test/0001.png',
          tags: ['block', '153kb'],
          colors: ['#333', '#555'],
        },
        {
          path: 'G:/WindowsTheme/test/0001.png',
          tags: ['block', '153kb'],
          colors: ['#333', '#555'],
        },
        {
          path: 'G:/WindowsTheme/test/0001.png',
          tags: ['block', '153kb'],
          colors: ['#333', '#555'],
        },
        {
          path: 'G:/WindowsTheme/test/0001.png',
          tags: ['block', '153kb'],
          colors: ['#333', '#555'],
        },
        {
          path: 'G:/WindowsTheme/test/0001.png',
          tags: ['block', '153kb'],
          colors: ['#333', '#555'],
        },
        {
          path: 'G:/WindowsTheme/test/0001.png',
          tags: ['block', '153kb'],
          colors: ['#333', '#555'],
        },
      ];
    },
  },
  mounted() {
    this._initContextMenu();
  },
  methods: {
    _initContextMenu() {
      this.menu = remote.Menu.buildFromTemplate([
        {
          label: this.$lang('openImg'),
          click: () => {
            remote.shell.openItem(this.contextSelectImageData.path);
          },
        },
        {
          label: this.$lang('openImgInDir'),
          click: () => {
            remote.shell.showItemInFolder(this.contextSelectImageData.path);
          },
        },
      ]);
    },
    popupMenu(imageData) {
      this.contextSelectImageData = imageData;
      this.menu.popup({ window: remote.getCurrentWindow() });
    },
    openFile(path) {},
  },
};
</script>

<style lang="less" scoped>
.picture-container {
  height: 100%;
  overflow: auto;

  .images {
    @image-gap: 12px;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: @image-gap;

    .image-container {
      @image-width: 240px;
      @image-height: 130px;
      @tags-height: 18px;

      height: @image-height + @tags-height;
      width: @image-width;
      margin: @image-gap;
      border: 1px solid var(--color-gray);
      transition: box-shadow 0.4s ease;

      &:hover {
        box-shadow: 0 5px 15px #888;
      }

      &:active {
        box-shadow: 0 0px 15px #888;
      }

      .image {
        height: @image-height;
        width: 100%;

        img {
          width: 100%;
          object-fit: cover;
        }
      }

      .tags {
        height: @tags-height;

        .tag {
          padding: 0 3px;
          border: solid var(--color-gray);
          border-width: 0 1px;
        }
      }
    }
  }
}
</style>


