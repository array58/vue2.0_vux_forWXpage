<style scoped lang="scss">
    @function rem($px){$rem :75;@return ($px/$rem)+rem;}
    .comtentsWrapper{
        padding: 0 rem(28);
        .commenter_header{
            display: inline-block;
            height: 40px;
            width: 40px;
            border-radius: 50%;
            overflow: hidden;
            img{
                width: 100%;
            }
        }
    }
</style>
<template>
 <div class="comtentsWrapper">
     <div>
         <div class="comment_header">
             <div class="commenter_header">
                 <img src="../assets/pics/icon_school_b.png">
             </div>
             <span class="commenter_username">测试姓名</span>
         </div>
     </div>
 </div>
</template>

<script>
   export default {

   }
</script>

