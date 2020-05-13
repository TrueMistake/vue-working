<template>
    <div class="container">
        <h1>Калькулатор кредита</h1>
        <div class="service-list">
            <div class="service-item" :class="{checked : serviceCheck[key]}" v-for="(service, key) in services" :key="key">
                <label class="service-label">
                    <input type="checkbox" class="service-check" :value="key" name="service-checked" v-model="serviceCheck[key]">
                    <span class="service-span">Оплачу</span>
                </label>
                <div class="service-title">{{service.title}}</div>
                <div class="service-description">{{service.description}}</div>
                <div class="service-credit">Сумма кредита: <span>{{discharge(service.price)}}</span> ₽</div>
                <input class="service-pay" type="text"
                       @focus="focusInput"
                       @blur="blurInput"
                       @change="changeInput"
                       min="0"
                       :max="service.price"
                       :disabled="!serviceCheck[key]"
                       :value="discharge(service.price)"> ₽
            </div>
        </div>
        <div class="service-total">Сумма к оплате: {{discharge(totalPrice)}} ₽</div>
        <button class="btn">Оформить</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                totalPrice: 0,
                serviceCheck: []
            }
        },
        computed: {
            services() {
                return this.$store.getters.services
            },
        },
        methods: {
            discharge(price) {
                return String(price).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
            },
            focusInput(event) {
                event.target.value = ''
            },
            blurInput(event) {
                if (+event.target.value <= +event.target.min) {
                    event.target.value = +event.target.min;
                }
                this.eachInput();
            },
            changeInput(event) {
                if (+event.target.value >= +event.target.max) {
                    event.target.value = +event.target.max;
                } else if (+event.target.value <= +event.target.min) {
                    event.target.value = +event.target.min;
                }
                this.eachInput();
            },
            eachInput() {
                this.totalPrice = 0;
                setTimeout(() => {
                    const input = document.querySelectorAll('.service-item.checked .service-pay');
                    Array.from(input).forEach(el => {
                        console.log('el.value',el.value);
                        el.setAttribute('value', el.value);
                        let conversion = el.value.replace(' ','');
                        this.totalPrice += +conversion;
                    },1)
                })
            }
        },
        watch: {
            serviceCheck() {
                this.eachInput();

                /*this.totalPrice = 0;
                for (let i = 0; i < this.services.length; i++) {
                    Object.keys(this.serviceCheck).forEach(key => {
                        if (this.services[i].id === key) {

                        }
                        console.log('key',key);
                    })
                }*/
            }
        }
    }
</script>

<style scoped>
    .service-list{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .service-item{
        border: 1px solid #dedede;
        border-radius: 8px;
        padding: 15px;
        margin-bottom: 20px;
        flex-basis: 45%;
        position: relative;
    }
    .service-label{
        position: absolute;
        top: 15px;
        right: 15px;
        cursor: pointer;

    }
    .service-title{
        font-size: 22px;
        font-weight: bold;
        margin-bottom: 15px;
    }
    .service-description{
        font-size: 18px;
        margin-bottom: 15px;
    }
    .service-credit{
        font-size: 18px;
        margin-bottom: 15px;
    }
    .service-credit span{
        font-weight: bold;
    }
    .service-pay{
        text-align: right;
        padding: 5px 10px;
        font-size: 16px;
        font-weight: bold;
    }
    .service-total{
        margin-top: 50px;
        margin-bottom: 20px;
        text-align: center;
        font-size: 18px;
    }
    .btn{
        display: block;
        margin: 0 auto;
        background: transparent;
        border: 1px solid #dedede;
        border-radius: 5px;
        padding: 10px 20px;
        font-weight: bold;
        cursor: pointer;
        transition: background .2s linear, color .2s linear;
    }
    .btn:hover{
        background: red;
        color: #fff;
    }
</style>