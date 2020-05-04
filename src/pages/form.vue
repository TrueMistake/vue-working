<template>
    <div class="container">
        <h1>Form</h1>
        <form action="" class="form" @submit.prevent="validate()">
            <label class="form-label">
                <input class="form-input form-name" v-model="name" type="text" name="name" placeholder="Введите имя">
                <span class="form-error">Ошибка заполнения поля</span>
            </label>
            <label class="form-label">
                <input class="form-input form-phone" v-model="phone" id="form-phone" name="phone" maxlength="11" type="text" placeholder="+7(800)777-77-77">
                <span class="form-error">Ошибка заполнения поля</span>
            </label>
            <label class="form-label">
                <input class="form-input form-email" v-model="email" type="text" name="email" placeholder="Введите email">
                <span class="form-error">Ошибка заполнения поля</span>
            </label>
            <label class="form-checkbox" @click="checked === !checked">
                <input type="checkbox" v-model="checked">
                <span class="form-checkbox__span">Подтвердите что соглашаетесь</span>
                <span class="form-error">Ошибка заполнения поля</span>
            </label>
            <button type="submit" class="form-btn">Отправить</button>
        </form>
    </div>
</template>

<style>
    .form{

    }
    .form-label{
        display: block;
        margin-bottom: 15px;
    }
    .form-input{
        padding: 5px 10px;
    }
    .form-error{
        display: none;
        color: red;
        margin-top: 5px;
    }
    .form-error.isError{
        display: block;
    }
    .form-btn{
        display: block;
        margin-top: 15px;
        cursor: pointer;
        background: transparent;
        border: 1px solid #000;
        padding: 10px 20px;
    }
    .form-btn:hover{
        background: cornflowerblue;
        color: #fff;
    }
</style>

<script>
    import axios from 'axios'
    export default {
        data(){
            return{
                checked: false,
                name:'',
                phone:'',
                email:'',
                success:null
            }
        },
        computed: {

        },
        methods:{
            validate(){
                this.success = []
                if (this.name) {
                    document.querySelector('.form-name').nextElementSibling.classList.remove('isError')
                    this.success.push(this.name);
                } else {
                    document.querySelector('.form-name').nextElementSibling.classList.add('isError')
                }

                if (this.validPhone()) {
                    document.querySelector('.form-phone').nextElementSibling.classList.remove('isError')
                    this.success.push(this.phone);
                } else {
                    document.querySelector('.form-phone').nextElementSibling.classList.add('isError')
                }

                if (this.validEmail()) {
                    document.querySelector('.form-email').nextElementSibling.classList.remove('isError')
                    this.success.push(this.email);
                } else {
                    document.querySelector('.form-email').nextElementSibling.classList.add('isError')
                }

                this.checkInput();

                if (this.checked) {
                    this.sendForm();
                }

            },
            validPhone() {
                return /(\d?)(\d{3})(\d{3})(\d{2})(\d{2})/g.test(this.phone);
            },
            validEmail(){
                return /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i.test(this.email);
            },
            checkInput() {
                let check = document.querySelector('.form-checkbox');
                if (!this.checked) {
                    check.querySelector('.form-error').classList.add('isError')
                } else {
                    check.querySelector('.form-error').classList.remove('isError')
                }
            },
            sendForm() {
                axios.post('./vue//user.php', this.success)
                    .then((response) => {
                        console.log('response',response);
                    })
                    .catch((error) => {
                        console.log('error', error);
                    })
            }
        }
    }
</script>