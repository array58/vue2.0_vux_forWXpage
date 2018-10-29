<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="router_page">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  position: relative;
  overflow-x: hidden;
  .router_page{
    position: absolute;
    top: 0;
    left: 100%;
    width: 100%;
    height: 100%;
    background: yellow;
    transition-duration:500ms; 
  }
}
</style>
