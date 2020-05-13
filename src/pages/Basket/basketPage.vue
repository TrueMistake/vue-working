<template>
    <div class="wrap" v-if="arrToBuy.length">
        <h1>Корзина</h1>
        <div class="basketPage">
            <div class="basketPage-list">
                <div class="basketPage-item" v-for="item in arrToBuy" :key="item.id + Math.random()">
                    <img :src="item.img" alt="" class="basketPage-item__img">
                    <div class="basketPage-item__name">{{item.name}}</div>
                    <div class="basketPage-item__num">
                        <div @click="addBascket(item)" class="basketPage-item__num-plus">+</div>
                        <input type="number" @change="changeCount" :value="item.buy">
                        <div @click="remoteBasket(item)" class="basketPage-item__num-minus">-</div>
                    </div>
                    <div class="basketPage-item__price">{{item.price}} ₽.</div>
                </div>
            </div>
            <div class="basketPage-finish">
                <div class="basketPage-counts">Количество: <span>{{totalCount}} шт.</span></div>
                <div class="basketPage-total">Итого: <span>{{totalPrice}} ₽.</span></div>
            </div>
        </div>
<!--        <button class="basketPage-clear" @click="clearBasket">Очистить корзину</button>-->
        <router-link class="" to="/cards">Back</router-link>
    </div>
    <div class="empty" v-else>
        <h1>Корзина пуста</h1>
        <router-link class="" to="/cards">Back</router-link>
    </div>
</template>

<script>
    export default {
        computed: {
            arrToBuy() {
                return this.$store.getters.arrToBuy
            },
            totalCount() {
                return this.$store.getters.totalCount
            },
            totalPrice() {
                return this.$store.getters.totalPrice
            }
        },
        methods: {
            addBascket(item) {
                this.$store.dispatch('addBascket', item.id)
            },
            remoteBasket(item) {
                this.$store.dispatch('remoteBasket', item.id)
            },
            changeCount(event) {
                // console.log('event', event.target.value);
            }
            /*payment(item, payment) {
                for (let i = 0; i, this.arrToBuy.length; i++) {
                    if (this.arrToBuy[i].id === item.id) {
                        if (payment === 'plus') {
                            this.arrToBuy[i].buy += 1;
                            this.count += 1;
                            this.total += +this.arrToBuy[i].price
                        }
                        if (payment === 'minus') {
                            this.arrToBuy[i].buy -= 1;
                            this.count -= 1;
                            this.total -= +this.arrToBuy[i].price
                        }
                    }
                }
            },
            localStor() {
                localStorage.setItem('myProduct', JSON.stringify(this.store))
            },
            clearBasket() {

                /!** Todo
                 * поправить очистку корзины
                 * **!/
                this.arrToBuy = [];
                localStorage.clear();
            }*/
        },
        /*watch: {
            arrToBuy() {
                this.store = {'card': this.arrToBuy};
                this.localStor();
            },
            count() {
                this.store['count'] = this.count;
                this.localStor();
            },
            total() {
                this.store['total'] = this.total;
                this.localStor();
            }
        }*/
    }
</script>

<style scoped>
    .basketPage{
        display: flex;
        justify-content: space-between;
    }
    .basketPage-list{
        width: 100%;
        padding-right: 40px;
    }
    .basketPage-item{
        margin-bottom: 15px;
        border: 1px solid #dedede;
        border-radius: 5px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px 0 0;
    }
    .basketPage-item__img{
        width: 120px;
        height: 80px;
        object-fit: contain;
    }
    .basketPage-item__name{

    }
    .basketPage-item__num{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .basketPage-item__num input{
        width: 30px;
        padding: 5px 10px;
    }
    .basketPage-item__num-plus{
        cursor: pointer;
        width: 20px;
        padding: 5px 10px;
        text-align: center;
        font-weight: bold;
    }
    .basketPage-item__num-minus{
        cursor: pointer;
        width: 20px;
        padding: 5px 10px;
        text-align: center;
        font-weight: bold;
    }
    .basketPage-item__price{

    }

    .basketPage-finish{
        min-width: 300px;
        flex-shrink: 0;
        padding: 20px;
        border: 1px solid #dedede;
        border-radius: 5px;
        align-self: baseline;
    }
    .basketPage-counts{
        font-size: 22px;
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;
    }
    .basketPage-counts span{

    }
    .basketPage-total{
        font-size: 25px;
        font-weight: bold;
        display: flex;
        justify-content: space-between;
    }
    .basketPage-total span{

    }

    .basketPage-clear{
        background: transparent;
        border: 1px solid #dedede;
        border-radius: 5px;
        padding: 10px 20px;
        font-weight: bold;
        cursor: pointer;
        margin-top: 20px;
    }

    .empty{

    }
    .empty h1{
        color: red;
        font-size: 30px;
        margin-bottom: 20px;
    }
</style>