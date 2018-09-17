
import Vue from 'vue';
import Vuex from 'vuex';

import product_data from '../product.js';

Vue.use(Vuex);

function getFilterArray(array) {
    const res = [];
    const json = {};
    for (let i = 0;i<array.length;i++){
        const _self = array[i];
        if (!json[_self]){
            res.push(_self);
            json[_self] = 1;
        }
    }
    return res;
}

const store = new Vuex.Store({

    state:{
        //商品列表
        productList:[],
        //购物车
        cartList:[]
    },
    getters:{
        brands:state => {


            const  brands = state.productList.map((item)=> {
                return item.brand
            });
            return getFilterArray(brands);
        },
        colors:state => {

            const  colors = state.productList.map(item => item.color);
            return getFilterArray(colors);
        }
    },
    mutations:{
        //添加商品列表
        setProductList(state,data){
            state.productList = data;
        }

    },
    actions:{
        //请求商品列表
        getProductList(context){
            //模拟请求
            setTimeout( () => {
                context.commit('setProductList',product_data);
            },500);
        }

    }

});
module.exports = store;