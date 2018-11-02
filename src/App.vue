<template>
  <!-- <div class="app"> -->
    <router-view/>
    <!-- <div class="router_page" :class="{'openInfoPage':ifOpenInfoPage}"></div> -->
  <!-- </div> -->
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
  
  },
  mounted(){

  }
}
</script>

<style scoped lang="less">
// .app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   color: #2c3e50;
//   position: relative;
//   overflow-x: hidden;
//   .router_page{
//     // position: absolute;
//     transition-duration: 500ms;
//     -webkit-transition-duration: 500ms;
//     top: 0;
//     // left: 100%;
//     width: 100%;
//     height: 100%;
//   }
//   .openInfoPage{
//     left: 0;
//   }
// }
</style>
