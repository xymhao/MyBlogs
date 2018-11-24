import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import HelloWorld2 from '../components/Helloworld2'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        }, {
            path: '/index2',
            name: 'HelloWorld2',
            component: HelloWorld2
        }
    ]
})
