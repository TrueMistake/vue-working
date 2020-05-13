import Vue from 'vue';
import Vuex from 'vuex';
import Card from './card'
import Calculator from './calculator'

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        Card,
        Calculator
    }
})
