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
                    <div class="card-item__buy" @click="addBascket(item)">
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
        /*mounted(){
            if (localStorage.getItem('myProduct')) {
                this.totalCount = JSON.parse(localStorage.getItem('myProduct')).count;
                this.totalPrice = JSON.parse(localStorage.getItem('myProduct')).total;
                this.store.card = JSON.parse(localStorage.getItem('myProduct')).card;
                this.arrToBuy = JSON.parse(localStorage.getItem('myProduct')).card;
            }
        },*/
        methods: {
            discharge(price) {
                return price.toLocaleString()
            },
            addBascket(item){
                this.$store.dispatch('addBascket',item.id)
                /*let item = this.prod.filter((el) => {
                        if (el.id == id) {
                            el.buy = 1;
                            return el;
                        }
                    });
                this.totalCount++;
                this.totalPrice += Number(item[0].price);
                this.addLocalStorage(item[0],this.totalCount,this.totalPrice);
                this.localStor();*/
            },

            /*addLocalStorage(item, count, price) {
                let mass = this.store.card.filter(el => el.id === item.id);
                if (this.store.card.length && mass.length) {
                    for (let i = 0; i < this.store.card.length; i++) {
                        if (this.store.card[i].id === item.id ){
                            this.store.card[i].buy += 1;
                        }
                    }
                } else {
                    this.store.card.push({
                        id: item.id,
                        img: item.img,
                        name: item.name,
                        price: item.price,
                        buy: 1
                    });
                }
                this.arrToBuy = this.store.card;

                this.store['count'] = count;
                this.store['total'] = price;
            },
            localStor() {
                localStorage.setItem('myProduct', JSON.stringify(this.store))
            },*/
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