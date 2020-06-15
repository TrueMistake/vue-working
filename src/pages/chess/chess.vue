<template>
    <div class="chess">
        <h1>Chess</h1>
        <div id="chess"></div>
    </div>
</template>

<script>
    export default {
        mounted() {

            const desc = document.querySelector('#chess');

            for (let i = 0; i < 8; i++) {
                for (let j = 0; j < 8; j++) {
                    let div = document.createElement('div');
                    if (i % 2 === j % 2) {
                        div.classList.add('red');
                    } else {
                        div.classList.add('white');
                    }
                    desc.appendChild(div);
                }
            }

        },
        methods: {

        }
    }
</script>

<style >
    #chess{
        border: 1px solid #000;
        width: 162px;
        height: 190px;
    }
    #chess div{
        width: 20px;
        height: 20px;
        display: inline-block;
    }
    .red,
    .white{
        width: 20px;
        height: 20px;
    }
    .red{
        background: red;
    }
    .white{
        background: white;
    }
</style>
