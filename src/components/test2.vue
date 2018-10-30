<style scoped lang="less">

</style>
<template>
 <div>
     <h1>test page 2</h1>
     <input type="file" value="choose file">
 </div>
</template>

<script>

   export default {
        mounted(){
            console.log("test 2 mounted");
        },
        beforeRouteLeave(to,from,next){
            this.$store.commit("HIDE_INFO_PAGE");
            next();
        }
   }
</script>

