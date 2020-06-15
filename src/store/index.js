import Vue from 'vue';
import Vuex from 'vuex';
import Card from './card'
import Calculator from './calculator'
import todo from "./todo";
import unsplash from "./unsplash";

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        Card,
        Calculator,
        todo,
        unsplash
    }
})
