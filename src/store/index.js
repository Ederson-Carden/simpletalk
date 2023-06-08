import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        // currentPathName: '',
        // currentPathUrl: '',
        testid:'',
        userInfo:{
            id:null,
            name:'iKun',
            title:'练习时长两年半',
            text:'聊天达人，会唱,跳,rap,还有篮球~~~~~~~',
            num:465,
            num1:464,
            gushi:'关注我吧。',
            imgURL:require('../assets/img/ikun.jpg'),
      }
    },
    mutations: {//commit调用
        setPath (state) {
            // state.currentPathName = localStorage.getItem("currentPathName")
            // state.currentPathUrl = localStorage.getItem("currentPathUrl")
            state.testid = "666666"
            console.log(state.testid)
        },
        setUserInfo (state) {
            state.userInfo = localStorage.getItem("user")
            console.log(state.userInfo)
        }
    }
})

export default store
