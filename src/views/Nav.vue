<template>
  <nav class="nav">
    <div class="nav-logo">
      <img src="@/assets/logo.png" alt="logo">
      <span>图片管理</span>
    </div>
    <router-link
      class="nav-item"
      v-for="(item, index) in navRoutes"
      :key="item.to"
      :class="{active: selectedIndex === index}"
      :to="item.to"
      @click.native="setSelectedIndex(index)">
      <font-awesome-icon class="nav-item-icon" :icon="item.icon"></font-awesome-icon>
      <span class="nav-item-text" v-html="item.text"></span>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      selectedIndex: 0,
    };
  },
  computed: {
    navRoutes() {
      return [
        {
          text: '首&emsp;页',
          to: '/index',
          icon: 'home',
        },
        {
          text: '设&emsp;置',
          to: '/setting',
          icon: 'cog',
        },
        {
          text: '标&emsp;签',
          to: '/tags',
          icon: 'tags',
        },
        {
          text: '关&emsp;于',
          to: '/about',
          icon: 'exclamation-circle',
        },
      ];
    },
  },
  methods: {
    setSelectedIndex(index) {
      this.selectedIndex = index;
    },
  },
};
</script>

<style lang="less" scoped>
@import url('../less/variables.less');

.nav {
  display: flex;
  flex-direction: column;

  &-logo {
    height: 1.5em;
    padding: 10px;
    margin-bottom: 2em;
    display: flex;
    align-items: center;
    background-color: @color-primary;
    color: @color-white-text;

    img {
      height: 100%;
      margin-right: 10px;
    }
  }

  &-item {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    transition: all 0.4s ease;
    outline: none;
    text-decoration: none;
    color: @color-black-text;

    &::before {
      content: '';
      position: absolute;
      top: 0px;
      left: 0px;
      height: 100%;
      width: 5px;
      background-color: transparent;
      transition: all 0.4s ease;
    }

    &:hover {
      color: darken(@color-black-text, 20%);
    }

    &.active {
      color: darken(@color-black-text, 20%);
      font-weight: bold;
      background-color: @color-secondary;

      &::before {
        background-color: @color-primary;
      }
    }


    &-icon {
      margin-right: 0.5em;
    }
  }
}
</style>


