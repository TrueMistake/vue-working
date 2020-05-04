<template>
    <div class="container">
        <h1>cardDetail</h1>
        <router-link class="" to="/cards">Back</router-link>
        <div class="detail">
            <img :src="img" alt="" class="detail-img">
            <div class="detail-right">
                <div class="detail-right__name">{{name}}</div>
                <div class="detail-right__price">{{price}} P</div>
                <div class="detail-right__buy" @click="buyProduct(id)"><span>{{product.buy}}</span></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:['item'],
        data() {
          return{
            id: this.$route.params.id,
            name: this.$route.params.name,
            img: this.$route.params.img,
            price: this.$route.params.price,
            arrToBuy: [],
            product: null
          }
        },
        mounted() {
            if (localStorage.getItem('myProduct')) {
                this.arrToBuy = JSON.parse(localStorage.getItem('myProduct'));
                this.arrToBuy.card.filter(el => {
                    if (this.id === el.id) {
                        return this.product = el;
                    }
                })
            }
        },
        methods: {
            buyProduct(id) {
                for (let i = 0; i, this.arrToBuy.card.length; i++) {
                    if (this.arrToBuy.card[i].id === id) {
                        this.arrToBuy.card[i].buy += 1;
                        this.arrToBuy.count += 1;
                        this.arrToBuy.total = +this.arrToBuy.total + +this.price;
                        this.localStor();
                    }
                }
            },
            localStor() {
                localStorage.setItem('myProduct', JSON.stringify(this.arrToBuy))
            }
        },
        computed: {

        }
    }
</script>

<style scoped>
    .detail{
        display: flex;
        justify-content: space-between;
        margin-top: 50px;
    }
    .detail-img{
        width: 49%;
        height: 100%;
        object-fit: contain;
    }
    .detail-right{
        width: 49%;
        padding-left: 30px;
    }
    .detail-right__name{
        font-size: 30px;
        font-weight: bold;
        margin-bottom: 10px;
    }
    .detail-right__price{
        font-size: 20px;
        margin-bottom: 20px;
    }
    .detail-right__buy{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #000;
        cursor: pointer;
        position: relative;
    }
    .detail-right__buy span{
        position: absolute;
        top: 10px;
        right: 10px;
        color: #fff;
    }
</style>