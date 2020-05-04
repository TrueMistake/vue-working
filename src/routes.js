import VueRouter from 'vue-router'
import Form from './pages/form'
import Home from './pages/home'
import Card from './pages/card'
import cardDetail from './pages/cardDetail'
import ErrorCmp from './pages/Error'
import basketPage from "./pages/basketPage";

export default new VueRouter({
    routes: [
        {
            path: '/',
            name:'home',
            component:Home
        },
        {
            path: '/form',
            name:'form',
            component:Form
        },
        {
            path: '/cards',
            name: 'cards',
            component:Card,
            props:true
        },
        {
            path: '/card/:id',
            name: 'card',
            component:cardDetail,
            props: (route) => route.params.item
        },
        {
            path: '/basket',
            name: 'basket',
            component:basketPage,
            props: (route) => route.params.item
        },
        {
            path: '*',
            component:ErrorCmp
        }
    ],
    mode:'history'
})