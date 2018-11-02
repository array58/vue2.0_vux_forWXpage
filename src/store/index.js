import Vue from "vue"
import Vuex from "vuex"

Vue.use( Vuex )

export default new Vuex.Store({
    state:{
        ifOpenInfoPage:false,//弹出信息窗口
        commentsWrapperHeight:300,//评论区域的高度
        
    },
    mutations:{
        SHOW_INFO_PAGE(state){
            console.log( "ifOpenInfoPage open" );
            state.ifOpenInfoPage=true;
        },
        HIDE_INFO_PAGE(state){
            console.log( "ifOpenInfoPage close" )
            state.ifOpenInfoPage=false
        },
        SET_COMMENTSAREA_HEIGHT(state,h){
            state.commentsWrapperHeight = h
        }
    }
})