<template>
    <div class="header">
        <div class="header-backet">
            <router-link tag="a" to="/basket">
                <div class="header-backet__count">Количество: {{totalCount}}</div>
                <div class="header-backet__price">Цена: {{fortamPrice}}</div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['totalCount','totalPrice','fortamPrice']
    }
</script>

<style scoped>
    .header{
        margin-bottom: 50px;
        border: 1px solid;
        padding: 10px 15px;
        text-align: right;
    }
    .header-backet{
        display: flex;
        justify-content: flex-end;
    }
    .header-backet__count{
        font-size: 16px;
        font-weight: bold;
    }
    .header-backet__price{
        font-size: 16px;
        font-weight: bold;
    }
</style>