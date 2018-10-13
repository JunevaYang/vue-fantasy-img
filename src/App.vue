<template>
  <div id="app">
    <nav-view v-once class="nav-view" />
    <router-view class="router-view" />
  </div>
</template>

<script>
import NavView from '@/views/Nav';

export default {
  name: 'App',
  components: {
    NavView,
  },
};
</script>

<style lang="less">
@import url('./less/normalize.css');

html,
body {
  height: 100%;
}

a,
input,
button {
  background: transparent;
  border: none;
  outline: none;
}

img {
  display: block;
}
</style>

<style lang="less">
@import url('./less/variables.less');

#app {
  display: flex;
  height: 100%;
  flex-direction: column;

  .nav-view {
    width: 100%;
    height: @global-nav-height;
    background-color: --color-primary;
  }

  .router-view {
    flex: 1;
    height: 100%;
    overflow: hidden;
  }
}
</style>
