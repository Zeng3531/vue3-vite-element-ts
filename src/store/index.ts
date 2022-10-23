// 引用vuex
import { createStore } from 'vuex'
//引用数据固化
import VuexPersister from 'vuex-persister'

const persister = new VuexPersister({
    // 根据需求填写储存的位置
    storage: window.localStorage
})

const store = createStore({
    state: {
    },
    getters: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
    },
    plugins: [persister.persist]
})

export default store 
