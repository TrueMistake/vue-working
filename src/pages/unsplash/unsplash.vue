<template>
    <div class="unsplash">
        <h1>unsplash</h1>
        <div class="unsplash-list">
            <div class="unsplash-item loading" v-for="(photo, key) of photos" :key="key">
                <router-link
                        tag="a"
                        @click="detailPhoto(photo.id)"
                        :to="'/unsplash/' + photo.user.username">
                    <img class="unsplash-item__img loading" :src="photo.urls.thumb" alt="">
                </router-link>
                <div class="unsplash-item__bottom">
                    <div class="unsplash-item__author loading">Author:
                        <router-link
                                tag="a"
                                @click="detailPhoto(photo.id)"
                                :to="'/unsplash/' + photo.user.username">
                                {{photo.user.first_name}}
                        </router-link>
                    </div>
                    <div class="unsplash-item__date loading">Date: {{photo.created_at}}</div>
                    <div class="unsplash-item__likes loading">Like: {{photo.likes}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import unsplashDetail from "./unsplashDetail";
    export default {
        mounted() {
          this.$store.dispatch('photos', 2);
          let check = false;
          let count = 3;
          window.addEventListener('scroll', () => {

            if (window.innerHeight + window.pageYOffset >= document.documentElement.scrollHeight - 200 && !check) {
              check = true;
              this.$store.dispatch('photos', ++count);
              check = false;
            }

          })
        },
        computed: {
          photos() {
            return this.$store.getters.photos;
          }
        },
        methods: {
          detailPhoto(id) {
            this.$store.dispatch('detailPhoto', id);
          },
        },
        components:{
            appUnsplashDetail:unsplashDetail
        }
    }
</script>

<style scoped>
    .unsplash{

    }
    .unsplash-list{
      margin-bottom: 100px;
    }
    .unsplash-item{
        margin-bottom: 30px;
        background: #fff;
        border: 1px solid #ccc;
        border-radius: 10px;
        width: 600px;
        overflow: hidden;
    }
    .unsplash-item.loading{
      background: #aeaeae;
    }
    .unsplash-item__img{
        display: block;
        object-fit: contain;
        margin-bottom: 10px;
    }
    .unsplash-item__img.loading{
      width: 100%;
      height: 300px;
      background: #fff;
    }
    .unsplash-item__bottom{
        padding: 20px;
    }
    .unsplash-item__author{
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 10px;
    }
    .unsplash-item__author.loading{
      height: 18px;
      background: #fff;
    }
    .unsplash-item__date{
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 10px;
    }
    .unsplash-item__date.loading{
      height: 18px;
      background: #fff;
    }
    .unsplash-item__likes{
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 10px;
    }
    .unsplash-item__likes.loading{
      height: 18px;
      background: #fff;
    }
</style>
