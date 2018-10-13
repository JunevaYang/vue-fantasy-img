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
};
</script>

<style lang="less">
@import url('./less/normalize.css');

:root {
  // root variables
  --color-primary: #217DFA;
  --color-secondary: #005DFF;
  --color-text-white: #fff;
  --color-text-gray: #E9E9E9;
  --color-text-black: #707070;
}

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
    background-color: var(--color-primary);
  }

  .router-view {
    flex: 1;
    height: 100%;
    overflow: hidden;
  }
}
</style>
