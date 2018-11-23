import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/Helloworld'
import HelloWorld2 from '../components/Helloworld2'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        }, {
            path: '/index',
            name: 'HelloWorld',
            component: HelloWorld
        }, {
            path: '/index2',
            name: 'HelloWorld2',
            component: HelloWorld2
        }
    ]
})
