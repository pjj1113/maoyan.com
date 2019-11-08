import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use( VueRouter );

import Home from '../views/home'
import Mine from '../views/mine'
import Cinema from '../views/cinema'
import City from '../views/city'
import HomeHot from '../views/home/homeHot'
import Search from '../views/search'

import HomeCommit from '../views/home/homeCommit'

const router = new VueRouter ({
    mode:'history',
    routes: [
        {
            path:'/',
            redirect:'/home'
        },
        {
            path:'/home',
            component:Home,
            redirect:'/home/homehot',
            children:[
                {
                    path:'homehot',
                    component:HomeHot,
                    name:"homehot"
                },
                {
                    path:'homeCommit',
                    component:HomeCommit,
                    name:"homeCommit"
                }
            ]
        },
        {
            path:'/cinema',
            component:Cinema
        },
        {
            path:'/mine',
            component:Mine
        },
        {
            path:'/city',
            component:City
        },
        {
            path:'/search',
            component:Search
        }

    ]
})

export default router