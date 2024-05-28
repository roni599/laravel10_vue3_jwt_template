import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import Forget from '../components/Forget.vue';
import {createRouter,createWebHistory} from 'vue-router';

const routes=[
    {
        name:'LoginForm',
        component:Login,
        path:'/'
    },
    {
        name:'RegisterForm',
        component:Register,
        path:'/register'
    },
    {
        name:'Forget',
        component:Forget,
        path:'/forget'
    }
];

const router=createRouter({
    history:createWebHistory(),
    routes
});

export default router;