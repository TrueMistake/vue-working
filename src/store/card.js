export default {
    state: {
        products:[
            {
                id: 1,
                name: 'Товар 1',
                img:'/src/assets/1.png',
                price:1000
            },
            {
                id: 2,
                name: 'Товар 2',
                img:'/src/assets/2.png',
                price:2000
            },
            {
                id: 3,
                name: 'Товар 3',
                img:'/src/assets/3.png',
                price:3000
            },
            {
                id: 4,
                name: 'Товар 4',
                img:'/src/assets/4.png',
                price:4000
            },
            {
                id: 5,
                name: 'Товар 5',
                img:'/src/assets/5.png',
                price:5000
            },
            {
                id: 6,
                name: 'Товар 6',
                img:'/src/assets/6.png',
                price:6000
            }
        ],
        totalCount: 0,
        totalPrice: 0,
        store: {'card':[]},
        arrToBuy: []
    },
    mutations: {
        totalCount(state, payload) {
            state.totalCount += payload;
            state.store['count'] = state.totalCount;
        },
        totalPrice(state, payload) {
            state.totalPrice += payload;
            state.store['total'] = state.totalPrice;
        },
        addStore(state, payload) {
            let mass = state.store.card.filter(el => el.id === payload.id);
            if (state.store.card.length && mass.length) {
                for (let i = 0; i < state.store.card.length; i++) {
                    if (state.store.card[i].id === payload.id ){
                        state.store.card[i].buy += 1;
                    }
                }
            } else {
                state.store.card.push({
                    id: payload.id,
                    img: payload.img,
                    name: payload.name,
                    price: payload.price,
                    buy: 1
                });
            }
            state.arrToBuy = state.store.card;
        },
        removeStore(state, payload) {
            let mass = state.store.card.filter(el => el.id === payload.id);
            if (state.store.card.length && mass.length) {
                for (let i = 0; i < state.store.card.length; i++) {
                    if (state.store.card[i].id === payload.id ){
                        state.store.card[i].buy -= 1;
                    }
                }
            }
            state.arrToBuy = state.store.card;
        },
        remoteBasket(state, payload) {
            let mass = state.arrToBuy.filter(el => el.id === payload);
            if (state.arrToBuy.length && mass.length) {
                for (let i = 0; i < state.arrToBuy.length; i++) {
                    if (state.arrToBuy[i].id === payload ){
                        state.arrToBuy[i].buy -= 1;
                    }
                }
            }
        },
        addLocalStorage(state) {
            localStorage.setItem('myProduct', JSON.stringify(state.store))
        },
        clearBasket(state) {
            state.arrToBuy = [];
        },
        changeCount(state, payload) {
            const {id, count} = payload;
            state.arrToBuy.filter(item => {
                if (item.id === id) {
                    item.buy = count;
                }
            });
        },
        recalculation(state) {
            state.totalCount = 0;
            state.totalPrice = 0;
            state.arrToBuy.map(el => {
                state.totalCount += +el.buy;
                state.totalPrice += +el.buy * el.price;
            });
            state.store['count'] = state.totalCount;
            state.store['total'] = state.totalPrice;
        }
    },
    actions: {
        addBasket(state, payload) {
            const item = state.state.products.find(item => item.id === payload.id);
            state.commit('totalCount', payload.count);
            state.commit('totalPrice', item.price);
            state.commit('addStore', {
                id: item.id,
                img: item.img,
                name: item.name,
                price: item.price,
                buy: 1
            });
            state.commit('addLocalStorage', item)
        },
        remoteBasket(state, payload) {
            const item = state.state.products.find(item => item.id === payload.id);
            state.commit('remoteBasket', payload.id);
            state.commit('totalCount', -payload.count);
            state.commit('totalPrice', -item.price);
            state.commit('removeStore', payload.id);
            state.commit('addLocalStorage', item);
        },
        clearBasket(state) {
            state.commit('clearBasket');
            localStorage.clear();
        },
        changeCount(state, payload) {
            state.commit('changeCount', payload);
            state.commit('recalculation');
            state.commit('addLocalStorage');
        }
    },
    getters: {
        products(state) {
            return state.products;
        },
        totalCount(state) {
            return state.totalCount;
        },
        totalPrice(state) {
           return state.totalPrice;
        },
        productById(state){
            return productId => {
                return state.arrToBuy.find(product => product.id === +productId)
            }
        },
        arrToBuy(state) {
            return state.arrToBuy
        },
        localStor(state) {
            if (localStorage.getItem('myProduct')) {
                state.totalCount = JSON.parse(localStorage.getItem('myProduct')).count;
                state.totalPrice = JSON.parse(localStorage.getItem('myProduct')).total;
                state.store.card = JSON.parse(localStorage.getItem('myProduct')).card;
                state.arrToBuy = JSON.parse(localStorage.getItem('myProduct')).card;
            }
        }
    }
}
