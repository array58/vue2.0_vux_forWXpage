<template>
  <div id="app">
    <img src="./assets/logo.png">
    <button @click="goToPage1">go to page1</button>
      <button @click="goToPage2">go to page2</button>
    <div class="router_page" :class="{'openInfoPage':ifOpenInfoPage}">
      <router-view/>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";
export default {
  name: 'App',
  computed:{
    ...mapState([
      "ifOpenInfoPage"
    ])
  },
   methods:{
    goToPage1(){
      this.$router.push({name:"test1"})
    },
    goToPage2(){
      this.$router.push({name:"test2"})
    }
  },
  mounted(){
    console.log(this.ifOpenInfoPage)
  }
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
    transition-duration: 500ms;
    -webkit-transition-duration: 500ms;
    top: 0;
    left: 100%;
    width: 100%;
    height: 100%;
    background: yellow;
  }
  .openInfoPage{
    left: 0;
  }
}
</style>
