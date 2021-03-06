
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
        },
        addCart(state,id){
            //判断购物车是否已有，如果有数量加1
            const isAdded = state.cartList.find(item => item.id === id);
            if (isAdded){
                isAdded.count++;
            }else {
                state.cartList.push({
                    id:id,
                    count:1,
                });
            }
        },
        //修改商品数量
        editCartCount(state,payload){
            const product = state.cartList.find(item => item.id === payload.id);
            product.count += payload.count;
        },
        //删除商品
        deleteCart(state,id){
            const index = state.cartList.findIndex(item => item.id === id);
            state.cartList.splice(index,1);
        },
        //清空购物车
        emptyCart(state){
            state.cartList = [];
        }

    },
    actions:{
        //请求商品列表
        getProductList(context){
            //模拟请求
            setTimeout( () => {
                context.commit('setProductList',product_data);
            },500);
        },
        //结算
        buy(context){
            //模拟
            return new Promise(resolve => {
                setTimeout(()=>{
                    context.commit('emptyCart');
                    resolve();
                },500);
            });
        }

    }

});
module.exports = store;