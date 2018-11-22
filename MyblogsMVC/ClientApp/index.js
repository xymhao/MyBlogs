import Vue from 'vue'
import VueRouter from 'vue-router'  //导入路由插件的包
import App from './App.vue'  //导入根组件

Vue.config.productionTip = false
Vue.use(VueRouter) //安装路由模块

const routes = [
    {
        path: '/',
        component: App
    }
]

const router = new VueRouter({    //创建路由对象
    routes,
    mode: 'history'
})

new Vue({
    el: '#app',
    render: h => h(App),
    router //挂载路由对象到 VM 实例上
})
