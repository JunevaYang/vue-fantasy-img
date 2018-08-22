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
    NavView
  }
}
</script>

<style lang="less">
@import url('./less/normalize.css');

html,
body {
  height: 100%;
}

</style>

<style lang="less">
@import url('./less/variables.less');

#app {
  display: flex;
  height: 100%;

  .nav-view {
    width: @global-nav-width;
    height: 100%;
    border-right: 1px solid @color-secondary;
    box-sizing: border-box;
  }

  .router-view {
    flex: 1;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
    overflow: auto;
  }
}
</style>
