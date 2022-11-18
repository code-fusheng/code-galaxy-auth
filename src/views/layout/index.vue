<template>
  <div class="main">
    <div class="nav">
      <navbar />
    </div>
    <div class="center-container">
      <!-- 主区域组件渲染 -->
      <router-view />
    </div>
    <div class="bottom">
      <bottom />
    </div>
  </div>
</template>

<script>
import Bottom from '@/views/layout/bottom/index'
import Navbar from '@/views/layout/navbar/index'
export default {
  components: {
    Navbar,
    Bottom
  }
}
</script>

<style scoped>
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

.main {
  width: 100%;
  height: 100%;
}

.nav {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 44px;
  z-index: 9999;
}

.center-container {
  padding-top: 44px;
  padding-bottom: 60px;
  width: 100%;
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0;
  background-image: url('../../assets/img/bgi-7-plus.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

@media screen and (max-width: 470px) {
  .center-container {
    background: #060c21;
  }
}

.bottom {
  position: absolute;
  height: 60px;
  width: 100%;
  left: 0;
  bottom: 0;
  z-index: 9999;
}
</style>
