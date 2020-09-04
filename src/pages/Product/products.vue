<template>
    <div class="container">
        <h1>Продукты</h1>

        <app-basket-top
                :totalCount="totalCount"
                :totalPrice="totalPrice"
                :fortamPrice="discharge(totalPrice)"
        ></app-basket-top>

        <div class="card-list">
            <div class="card-item loading"
                 v-for="(item, key) in products"
                 :key="key">
                <router-link
                        tag="a"
                        :to="'/product/' + item.id"
                        class="card-item__link">
                    <img :src="item.img" alt="" class="card-item__img loading">
                </router-link>
                <router-link
                        tag="a"
                        :to="'/product/' + item.id"
                        class="card-item__name card-item__link loading"
                >{{item.name}}</router-link>
                <div class="card-item__bottom loading">
                    <div class="card-item__price loading">{{discharge(item.price)}} ₽</div>
                    <div class="card-item__buy loading" @click="addBasket(item, 1)">
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
      mounted() {
        let load = document.querySelectorAll('.card-list .loading');
        for (let i = 0; i < load.length; i++) {
          load[i].classList.remove('loading');
        }
      },
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
  .loading {
    position: relative;
    background-color: #e2e2e2;
  }
  .loading::after {
    display: block;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    transform: translateX(-100%);
    background: -webkit-gradient(linear, left top, right top, from(transparent), color-stop(rgba(255, 255, 255, 0.2)), to(transparent));
    background: linear-gradient(90deg, transparent,
    rgba(255, 255, 255, 0.2), transparent);
    animation: loading 0.8s infinite;
  }
  @keyframes loading {
    100% {
      transform: translateX(100%);
    }
  }
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
    .card-item__img.loading{
        display: block;
        width: 349px;
        height: 231px;
    }
    .card-item__name{
        padding:5px 15px;
        font-size: 18px;
        text-decoration: none;
        color: #000;
        cursor: pointer;
    }
    .card-item__name.loading{
      height: 31px;
      background: #fff;
    }
    .card-item__bottom{
        padding: 10px 15px 15px 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .card-item__bottom.loading{
      height: 75px;
      background: #fff;
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
