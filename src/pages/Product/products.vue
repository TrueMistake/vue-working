<template>
    <div class="container">
        <h1>Продукты</h1>

        <app-basket-top
                :totalCount="totalCount"
                :totalPrice="totalPrice"
                :fortamPrice="discharge(totalPrice)"
        ></app-basket-top>

        <div class="card-list">
            <div class="card-item"
                 v-for="(item, key) in products"
                 :key="key">
                <router-link
                        tag="a"
                        :to="'/product/' + item.id"
                        class="card-item__link">
                    <img :src="item.img" alt="" class="card-item__img">
                </router-link>
                <router-link
                        tag="a"
                        :to="'/product/' + item.id"
                        class="card-item__name card-item__link"
                >{{item.name}}</router-link>
                <div class="card-item__bottom">
                    <div class="card-item__price">{{discharge(item.price)}} ₽</div>
                    <div class="card-item__buy" @click="addBasket(item, 1)">
                        <template v-for="counter in arrToBuy">
                            <span v-if="counter.id === item.id">{{counter.buy}}</span>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Detail from './productDetail'
    import basketTop from "../Basket/basketTop";

    export default {
        computed: {
            products() {
                return this.$store.getters.products
            },
            totalCount() {
                return this.$store.getters.totalCount
            },
            totalPrice() {
                return this.$store.getters.totalPrice
            },
            localStor() {
                return this.$store.getters.localStor
            },
            arrToBuy() {
                return this.$store.getters.arrToBuy
            }
        },
        methods: {
            discharge(price) {
                return price.toLocaleString()
            },
            addBasket(item, count){
                this.$store.dispatch('addBasket',{id: item.id, count: count})
            }
        },
        components:{
            appDetail:Detail,
            appBasketTop:basketTop
        }
    }
</script>

<style scoped>
    .card-list{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .card-item{
        border: 1px solid #dedede;
        overflow: hidden;
        border-radius: 5px;
        margin-bottom: 15px;
        width: 30%;
    }
    .card-item__link{
        display: block;
    }
    .card-item__img{
        display: block;
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    .card-item__name{
        padding:5px 15px;
        font-size: 18px;
        text-decoration: none;
        color: #000;
        cursor: pointer;
    }
    .card-item__bottom{
        padding: 10px 15px 15px 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .card-item__price{
        font-size: 16px;
        font-weight: bold;
    }
    .card-item__buy{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #000;
        cursor: pointer;
        position: relative;
    }
    .card-item__buy span{
        position: absolute;
        top: 10px;
        right: 10px;
        color: #fff;
        font-size: 16px;
        font-weight: bold;
    }
</style>
