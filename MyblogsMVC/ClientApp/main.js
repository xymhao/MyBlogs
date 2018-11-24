//import Vue from 'vue'
//import VueRouter from 'vue-router'  //导入路由插件的包
//import App from './App.vue'  //导入根组件
//import HelloWorld from './components/HelloWorld'

//Vue.config.productionTip = false
//Vue.use(VueRouter) //安装路由模块

//const routes = [
//    {
//        path: '/',
//        name: 'HelloWorld',
//        component: HelloWorld
//    }
//]

//const router = new VueRouter({    //创建路由对象
//    routes,
//    mode: 'history'
//})

//new Vue({
//    el: '#app',
//    render: h => h(App),
//    router //挂载路由对象到 VM 实例上
//})

import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
