<template>
    <div class="unsplash">
        <h1>unsplash</h1>
        <div class="unsplash-list">
            <div class="unsplash-item" v-for="(photo, key) of photos" :key="key">
                <router-link
                        tag="a"
                        :to="'/unsplash/' + photo.user.username">
                    <img class="unsplash-item__img" :src="photo.urls.thumb" alt="">
                </router-link>
                <div class="unsplash-item__bottom">
                    <div class="unsplash-item__author">Author:
                        <router-link
                                tag="a"
                                :to="'/unsplash/' + photo.user.username">
                                {{photo.user.first_name}}
                        </router-link>
                    </div>
                    <div class="unsplash-item__date">Date: {{photo.created_at}}</div>
                    <div class="unsplash-item__likes">Like: {{photo.likes}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import unsplashDetail from "./unsplashDetail";
    export default {
        computed: {
            photos() {
                return this.$store.getters.photos;
            }
        },
        mounted() {
            this.$store.dispatch('photos');
        },
        methods: {

        },
        components:{
            appUnsplashDetail:unsplashDetail
        }
    }
</script>

<style scoped>
    .unsplash{

    }
    .unsplash-item{
        margin-bottom: 30px;
        background: #fff;
        border: 1px solid #ccc;
        border-radius: 10px;
        width: 600px;
        overflow: hidden;
    }
    .unsplash-item__img{
        /*height: 100%;*/
        /*width: 101%;*/
        display: block;
        object-fit: contain;
        margin-bottom: 10px;
    }
    .unsplash-item__bottom{
        padding: 20px;
    }
    .unsplash-item__author{
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 10px;
    }
    .unsplash-item__date{
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 10px;
    }
    .unsplash-item__likes{
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 10px;
    }
</style>
