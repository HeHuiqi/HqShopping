import Vue from 'vue';
import VueRouter from 'vue-router';
// import HqIndex from '../views/HqIndex.vue';
// import HqAbout from '../views/HqAbout.vue';
import HqList from  '../views/list.vue';
import HqDetail from '../views/product-detail.vue';
import HqCart from '../views/cart.vue';


const routes = [
    {
        path:'*',
        redirect:'/list'
    },
    {
        path:'/list',
        meta:{
            title:'商品列表',
        },
        component:HqList,
    },

    {
        path:'/product/:id',
        meta:{
            title:'商品详情',
        },
        component:HqDetail,
    },
    {
        path:'/cart',
        meta:{
            title:'购物车',
        },
        component:HqCart,
    }
]

const routerConfig = {
    // mode:'history',
    routes:routes,
}

//开启使用VueRouter
Vue.use(VueRouter);

const  Router = new VueRouter(routerConfig);

Router.beforeEach((to,from,next) => {
    window.document.title = to.meta.title;
    next();
});

Router.afterEach((to,from,next) => {
    window.scrollTo(0,0);
});


module.exports  = Router;

