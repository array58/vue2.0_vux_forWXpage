<style scoped lang="scss">
@import "scss/mainPage.scss";

</style>
<template>
 <div>
     <div class="routerWrapper">
        <router-view/>
     </div>
    <Tabbar style="background:#F3F3F3;height:52px;">
        <TabbarItem selected>
            <img slot="icon" src="../assets/pics/icon_school_a.png">
            <img slot="icon-active" src="../assets/pics/icon_school_b.png">
            <span slot="label" style="font-size:12px">幼儿园</span>
        </TabbarItem>     
        <TabbarItem>
            <img slot="icon" src="../assets/pics/icon_pay_a.png">
            <img slot="icon-active" src="../assets/pics/icon_pay_b.png">
            <span slot="label" style="font-size:12px">缴费</span>
        </TabbarItem>     
        <TabbarItem>
            <img slot="icon" src="../assets/pics/icon_news_a.png">
            <img slot="icon-active" src="../assets/pics/icon_news_b.png">
            <span slot="label" style="font-size:12px">班级圈</span>
        </TabbarItem>     
        <TabbarItem>
            <img slot="icon" src="../assets/pics/icon_mine_a.png">
            <img slot="icon-active" src="../assets/pics/icon_mine_b.png">
            <span slot="label" style="font-size:12px">我的</span>
        </TabbarItem>     
    </Tabbar> 
 </div>
</template>

<script>
    import { Tabbar, TabbarItem } from 'vux'

    export default {
        components: {
            Tabbar,
            TabbarItem
        },
        mounted(){

        }
    }
</script>

