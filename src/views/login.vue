<style lang="scss">
    @import "~@/views/scss/login.scss";
</style>
<template>
 <div class="login_wrapper" :style="{'height':pageHeight+'px'}">
     <div class="logo_wrapper">
         <img src="../assets/pics/logo_7kids.png" alt="">
         <p>优儿</p>
     </div>
     <div class="form_wrapper">
         <div class="item_wrapper">
             <span><img src="../assets/pics/icon_tel.png"></span>
             <input type="text">
             <span class="delete_wrapper"><img src="../assets/pics/tag_delete_b.png"></span>
         </div>
         <div class="item_wrapper with_top_gap code">
             <span><img src="../assets/pics/icon_protect.png"></span>
             <input type="text">
         </div>

         <div v-if="showCodeButton" class="item_wrapper with_top_gap code_button button no_letter_spacing" @click="getCode">
             {{codeMsg}}
         </div>
         <div v-else class="item_wrapper with_top_gap code_button code_button_cancel button no_letter_spacing">
             {{codeMsg}}
         </div>


         <div class="item_wrapper with_top_gap button" @click="login">
             确定
         </div>

         
     </div>
 </div>
</template>

<script>
   
   export default {
       data(){
           return {
               showToastModel:false,
               codeMsg:"获取验证码",
               showCodeButton:true,
               pageHeight:667
           }
       },
       methods:{
           Toast(obj){
                this.$vux.toast.show({
                    text: obj.msg,
                    type:obj.type,
                    isShowMask:true
                })
           },
           getCode(){
               this.showCodeButton=false;
               this.codeMsg = `发送中...`;
               let time = 6;
               let timer = setInterval(()=>{
                       this.codeMsg = `重新发送(${time--})`;
                       if(time<1){
                           clearInterval(timer);
                           this.showCodeButton=true;
                           this.codeMsg="获取验证码"
                       }
                   },1000)
           },
           login(){
              this.Toast({
                  type:"warn",
                  msg:"验证码错误"
              })
           }
       },
       mounted(){
           this.pageHeight = document.body.clientHeight&&document.documentElement.clientHeight;
       }
   }
</script>

