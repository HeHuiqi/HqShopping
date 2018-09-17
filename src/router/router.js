import Vue from 'vue';
import VueRouter from 'vue-router';
// import HqIndex from '../views/HqIndex.vue';
// import HqAbout from '../views/HqAbout.vue';
import HqList from  '../views/list.vue';
import HqDetail from '../views/product-detail.vue';


const routes = [
    {
        path:'*',
        redirect:'/list'
    },
    {
        path:'/list',
        component:HqList,
    },

    {
        path:'/product/:id',
        meta:{
            title:'商品详情',
        },
        component:HqDetail,
    }
]

const routerConfig = {
    mode:'history',
    routes:routes,
}

//开启使用VueRouter
Vue.use(VueRouter);

const  Router = new VueRouter(routerConfig);

module.exports  = Router;

