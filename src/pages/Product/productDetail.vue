<template>
    <div class="container">
        <h1>Детальная продукта</h1>
        <router-link class="" to="/products">Back</router-link>
        <div class="detail">
            <img :src="product.img" alt="" class="detail-img">
            <div class="detail-right">
                <div class="detail-right__name">{{product.name}}</div>
                <div class="detail-right__price">{{discharge(product.price)}} ₽</div>
                <div class="detail-right__buy" @click="addBasket(product, 1)"><span>{{productById(product.id).buy}}</span></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:['id'],
        computed: {
            product() {
                const id = this.id;
                return this.$store.getters.productById(id)
            },
            localStor() {
                return this.$store.getters.localStor
            },
            productById() {
                return this.$store.getters.productById
            }
        },
        methods: {
            discharge(price) {
                return price.toLocaleString()
            },
            addBasket(item, count) {
                this.$store.dispatch('addBasket', {id: item.id, count: count})
            }
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
