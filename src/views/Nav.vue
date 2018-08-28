<template>
  <nav class="nav">
    <div class="logo-container">
      <img class="logo" src="@/assets/logo-1.svg" alt="logo" width="30" height="30">
      <h2 class="title">幻想蓝</h2>
    </div>
    <div class="nav-info">
      <div class="searchbar">
        <label for="search"></label>
        <input type="text" id="search" placeholder="搜索栏">

      </div>
    </div>
    <div class="controllers">
      <span class="controller">
        <button class="icon">
          <img src="@/assets/controller-shrink.svg" alt="shrink" width="20" height="1">
        </button>
      </span>
      <span class="controller">
        <button class="icon">
          <img src="@/assets/controller-restore-1.svg" alt="shrink" width="20" height="12">
        </button>
      </span>
      <span class="controller">
        <button class="icon">
          <img src="@/assets/controller-close.svg" alt="shrink" width="15" height="15">
        </button>
      </span>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
};
</script>

<style lang="less" scoped>
@import url('../less/variables.less');

.nav {
  display: flex;

  .logo-container {
    display: flex;
    align-items: center;
    width: 160px;

    .logo {
      border-radius: 50%;
      margin: 0 10px;
    }

    .title {
      color: @color-text-white;
      font-size: 22px;
    }
  }

  .nav-info {
    flex: 1;
    display: flex;
    align-items: center;

    .searchbar {
      background-color: #ffffff;
      border-radius: 20px;
      padding-left: 10px;

      input {
        height: 20px;
      }
    }
  }

  .controllers {
    width: 140px;
    display: flex;
    background-color: @color-secondary;
    align-items: center;

    .controller {
      flex: 1;
      height: 100%;
      display: flex;
      justify-content: center;

      &:hover {
        .icon {
          color: @color-text-white;
        }
      }

      .icon {
        padding: 0;
        display: flex;
        height: 100%;
        align-items: center;
      }
    }
  }
}
</style>


