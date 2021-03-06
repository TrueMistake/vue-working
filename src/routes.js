import VueRouter from 'vue-router'
import Form from './pages/Form/form'
import Home from './pages/home'
import Product from './pages/Product/products'
import productDetail from './pages/Product/productDetail'
import ErrorCmp from './pages/Error/Error'
import basketPage from "./pages/Basket/basketPage";
import calculator from "./pages/Calculator/calculator";
import todo from "./pages/Todo/todo";
import unsplash from "./pages/unsplash/unsplash";
import unsplashDetail from './pages/unsplash/unsplashDetail'
import chess from "./pages/chess/chess";

export default new VueRouter({
    routes: [
        {
            path: '/',
            name:'home',
            component:Home
        },
        {
            path: '/chess',
            name:'chess',
            component:chess
        },
        {
            path: '/form',
            name:'form',
            component:Form
        },
        {
            path: '/products',
            name: 'products',
            component:Product,
            props:true
        },
        {
            path: '/product/:id',
            name: 'product',
            props:true,
            component:productDetail
        },
        {
            path: '/basket',
            name: 'basket',
            component:basketPage,
            props:true
        },
        {
            path: '/calculator',
            name: 'calculator',
            component:calculator,
            props:true
        },
        {
            path: '/todo',
            name: 'todo',
            component:todo,
            props:true
        },
        {
            path: '/unsplash',
            name: 'unsplash',
            component:unsplash,
            props:true
        },
        {
            path: '/unsplash/:id',
            name: 'unsplash',
            component: unsplashDetail,
            props:true
        },
        {
            path: '*',
            component:ErrorCmp
        }
    ],
    mode:'history'
})
