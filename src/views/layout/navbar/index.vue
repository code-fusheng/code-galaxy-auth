<template>
  <!-- 顶部 -->
  <div id="top" class="top-container">
    <span class="item-text"></span>
  </div>
</template>

<style scoped>
.top-container {
  width: 100%;
  height: 44px;
  margin: 0;
  /* 透明 */
  background-color: transparent;
  text-align: center;
  line-height: 44px;
  /* 开发调试样式 */
  /* border: 1px green solid; */
}

.item-text {
    cursor: pointer;
    line-height: 44px;
    font-size: 24px;
    color: white;
    font-family: 'Courier New', Courier, monospace;
    background-image: -webkit-linear-gradient(left,rgb(255, 81, 0),#ffc966 10%,#ffee00 20%,#00cc11 30%, #ccffe7 40%, #0026ff 50%,#efccff 60%,#CC00CC 70%,#CC00FF 80%,#66FFFF 90%,rgb(255, 38, 0) 100%);
    -webkit-text-fill-color: transparent;/* 将字体设置成透明色 */
    -webkit-background-clip: text;/* 裁剪背景图，使文字作为裁剪区域向外裁剪 */
    -webkit-background-size: 200% 100%;
    -webkit-animation: masked-animation 4s linear infinite;
}
  @keyframes masked-animation {
    0% {
        background-position: 0  0;
    }
    100% {
        background-position: -100%  0;
    }
  }
</style>
