<style scoped lang="scss">
    @import "scss/banjiquan.scss";
</style>
<template>
 <div class="mainPageWrapper">
     <div ref="h_wrapper">
         <div class="heagerBgWrapper">
            <img src="../assets/pics/bg_pic.png" ref="pageBg">
            <div class="sendMsg">
                <img src="../assets/pics/icon_dt.png" alt="">
                <br/>
                <span>发动态</span>
            </div>
        </div>
        <div class="tabListWrapper">
            <Tabbar style="background:#fff;">
                <TabbarItem>
                    <img slot="icon" src="../assets/pics/icon_xiangji.png">
                    <img slot="icon-active" src="../assets/pics/icon_xiangji.png">
                    <span slot="label" style="font-size:12px;color:#000">班级相册</span>
                </TabbarItem>
                <TabbarItem>
                    <img slot="icon" src="../assets/pics/icon_zuoye.png">
                    <img slot="icon-active" src="../assets/pics/icon_zuoye.png">
                    <span slot="label" style="font-size:12px;color:#000">亲子作业</span>
                </TabbarItem>
                <TabbarItem>
                    <img slot="icon" src="../assets/pics/icon_tongzhi.png">
                    <img slot="icon-active" src="../assets/pics/icon_tongzhi.png">
                    <span slot="label" style="font-size:12px;color:#000">园所通知</span>
                </TabbarItem>
                <TabbarItem>
                    <img slot="icon" src="../assets/pics/icon_qingjia.png">
                    <img slot="icon-active" src="../assets/pics/icon_qingjia.png">
                    <span slot="label" style="font-size:12px;color:#000">宝宝请假</span>
                </TabbarItem>
                <TabbarItem>
                    <img slot="icon" src="../assets/pics/icon_shipu.png">
                    <img slot="icon-active" src="../assets/pics/icon_shipu.png">
                    <span slot="label" style="font-size:12px;color:#000">园所食谱</span>
                </TabbarItem>
            </Tabbar>
        </div>
     </div>
     <div class="commentsWrapper" :style="{'height':commentsWrapperHeight+'px'}">
        <Comment></Comment>
     </div>
 </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'
import { mapMutations,mapState } from "vuex";
import { setTimeout, clearInterval, clearTimeout } from 'timers';
import Comment from "../components/comment.vue"
import testVue from '../components/test.vue';
    export default {
        components: {
            Tabbar,
            TabbarItem,
            Comment
        },
        computed:{
            ...mapState([
                "commentsWrapperHeight"
            ])
        },
        methods:{
            ...mapMutations({
                SET_COMMENTSAREA_HEIGHT:"SET_COMMENTSAREA_HEIGHT"
             }),
             setCommentsAreatHeight(){
               let img = new Image();
                   img.src = this.$refs.pageBg.src;
                   img.onload = ()=>{
                    let h_wrapper_height = this.$refs.h_wrapper.clientHeight,
                    windowHeight = document.body.clientHeight || document.documentElement.clientHeight,
                    commentsWrapperHeight = windowHeight - h_wrapper_height - 52;
                    this.SET_COMMENTSAREA_HEIGHT(commentsWrapperHeight);
                   }
             }
        },
        mounted(){
            this.setCommentsAreatHeight();
        }
    }
</script>

