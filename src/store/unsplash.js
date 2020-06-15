import Unsplash, { toJson } from "unsplash-js";
global.fetch = fetch;
const ACCESS_KEY = 'dad23b803723474b1dee05b85a4e3b57e0d6ffb7ea7b3cb39dc30ef9eabab13c';
const SECRET_KEY = 'eb2c1362c5a0892f6f7766d6d496d0d263d03d09f3f4b71839fc7f17baf909dc';
const unsplash = new Unsplash({
    accessKey: ACCESS_KEY,
    secret: SECRET_KEY,
    headers: {
        "X-Custom-Header": "foo"
    },
    timeout: 500
});

export default {
    state: {
        photos: [],
        access_token: null
    },
    mutations: {
        like(state, payload) {
            console.log('state',state);
            console.log('payload',payload);
        },
        photos(state, payload) {
            state.photos = payload;
        }
    },
    actions: {
        like(state, payload) {
            console.log('payload',payload);
            try {
                unsplash.photos.likePhoto(payload)
                    .then(toJson)
                    .then(json => {
                        console.log('json',json);
                        state.commit('like', json);
                    });
            } catch (e) {
                console.log(e.message);
            }
        },
        photos({commit}) {
            try{
                unsplash.photos.listPhotos(2, 10, "latest")
                    .then(toJson)
                    .then(json => {
                        commit('photos',json);
                    });
            } catch (e) {
                console.log(e.message);
            }
        },
        auth() {
            console.log('auth');
            try {
                unsplash.auth.userAuthentication(query.code)
                    .then(toJson)
                    .then(json => {
                        console.log('json',json);
                        unsplash.auth.setBearerToken(json.access_token);
                    });
            }catch (e) {
                console.log(e.message);
            }
        }
    },
    getters: {
        photos(state) {
          return state.photos;
        },
        detailAuthor(state){
            return user => {
                return state.photos.find(product => product.user.username === user)
            }
        }
    }
}
