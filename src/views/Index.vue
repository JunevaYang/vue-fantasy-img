<template>
  <div class="home-page">
    <div class="box tools-box">
      <picture-tools />
    </div>
    <div class="box picture-box">
      <picture-container />
    </div>
    <div class="box info-box">
      <picture-info />
    </div>
  </div>
</template>

<script>
import PictureTools from '@/components/PictureTools';
import PictureInfo from '@/components/PictureInfo';
import PictureContainer from '@/components/PictureContainer';

export default {
  name: 'home',
  components: {
    PictureTools,
    PictureInfo,
    PictureContainer
  }
};
</script>

<style lang="less" scoped>
.home-page {
  display: flex;
  height: 100%;

  .box {
    box-sizing: border-box;
  }

  .tools-box {
    border-right: 1px solid var(--color-text-gray);
    height: 100%;
    width: 160px;
  }

  .picture-box {
    flex: 1;
    height: 100%;
  }

  .info-box {
    width: 300px;
    height: 100%;
    border-left: 1px solid var(--color-text-gray);
  }
}
</style>
