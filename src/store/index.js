import Vue from "vue"
import Vuex from "vuex"

Vue.use( Vuex )

export default new Vuex.Store({
    state:{
        ifOpenInfoPage:false
    },
    mutations:{
        SHOW_INFO_PAGE(state){
            console.log( "ifOpenInfoPage open" );
            state.ifOpenInfoPage=true;
        },
        HIDE_INFO_PAGE(state){
            console.log( "ifOpenInfoPage close" )
            state.ifOpenInfoPage=false
        }
    }
})