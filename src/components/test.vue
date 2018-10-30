<style scoped lang="less">

</style>
<template>
 <div>
     <h1>{{testData}}</h1>
 </div>
</template>

<script>
   export default {
       data(){
          return {
               testData:"test page 1"
          }
       },
       mounted(){
        //   console.log("test1 mounted");
       },
       beforeRouteLeave(to,from,next){
            this.$store.commit("HIDE_INFO_PAGE");
            next();
        }
   }
</script>


