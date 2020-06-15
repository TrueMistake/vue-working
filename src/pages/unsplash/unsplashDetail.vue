<template>
    <div class="unsplash-detail">
        <h1>Детальняа страница Автора</h1>
        <img :src="detailAuthor.urls.full" alt="" class="unsplash-detail__full">
        <div class="unsplash-detail__author">Author: {{detailAuthor.user.username}}</div>
        <div class="unsplash-detail__date">Date: {{detailAuthor.created_at}}</div>
        <div class="unsplash-detail__likes">likes: {{detailAuthor.likes}}</div>
        <button class="unsplash-detail__btn-like" @click="like(detailAuthor.id)">CLICK</button>
        <router-link
                tag="a"
                to="/unsplash"
                class="unsplash-detail__back">Back</router-link>
    </div>
</template>

<script>
    export default {
        props:['id'],
        computed: {
            detailAuthor() {
                const id = this.id;
                return this.$store.getters.detailAuthor(id)
            }
        },
        mounted() {
            this.$store.dispatch('auth');
        },
        methods: {
            like(link) {
                this.$store.dispatch('like', link);
            },
        }
    }
</script>

<style scoped>
    .unsplash-detail__full{
        width: 100%;
        height: 100%;
        object-fit: contain;
        margin-bottom: 20px;
    }
    .unsplash-detail__author{
        margin-bottom: 10px;
        font-size: 18px;
        font-weight: bold;
    }
    .unsplash-detail__date{
        margin-bottom: 10px;
        font-size: 18px;
        font-weight: bold;
    }
    .unsplash-detail__likes{
        margin-bottom: 10px;
        font-size: 18px;
        font-weight: bold;
    }
    .unsplash-detail__btn-like{
        display: block;
        margin-bottom: 20px;
    }
</style>
