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
            const arr = [];


            for (let i = 0; i < 8; i++) {
                for (let j = 0; j < 8; j++) {
                    let div = document.createElement('div');

                    /* разметка по цветам */
                    if (i % 2 === j % 2) {
                        div.classList.add('red');
                    } else {
                        div.classList.add('white');
                    }
                    desc.appendChild(div);

                    /* добавляем пешки */
                    if (i === 1 || i === 6) {
                      let img = document.createElement('img');
                      img.classList.add('img');
                      img.setAttribute('src', '../src/assets/1.png');
                      div.append(img);
                    }
                  /* добавляем остальные фигуры */
                    if (i === 0 || i === 7) {
                      let img = document.createElement('img');
                      img.setAttribute('data-num',`${i}-${j}`);
                      img.classList.add('img');
                      if (i === 7 && j === 3) {
                        img.setAttribute('src', this.otherChess(4));
                        div.append(img);
                        continue;
                      }
                      if (i === 7 && j === 4) {
                        img.setAttribute('src', this.otherChess(3));
                        div.append(img);
                        continue;
                      }
                      img.setAttribute('src', this.otherChess(j));
                      div.append(img);
                    }
                }
            }


            let list = document.querySelectorAll('#chess div');

            let start = null;

            for (let i = 0; i < list.length; i++) {
              list[i].addEventListener('click', e => {
                start = e.target;
                arr.push({id: e.target});
                console.log('arr', arr);
                console.log('start', start);
                console.log('target', e.target);
              })
            }



          console.log('item', list)


        },
        methods: {
          otherChess(num) {
            let img = null;

            switch (num) {
              case 0:
                img = '../src/assets/1.png';
                break;
              case 1:
                img = '../src/assets/2.png';
                break;
              case 2:
                img = '../src/assets/3.png';
                break;
              case 3:
                img = '../src/assets/4.png';
                break;
              case 4:
                img = '../src/assets/5.png';
                break;
              case 5:
                img = '../src/assets/6.png';
                break;
              case 6:
                img = '../src/assets/7.png';
                break;
              case 7:
                img = '../src/assets/8.png';
                break;
            }

            return img;
          }
        }
    }
</script>

<style >
    #chess{
      border: 1px solid #000;
      width: 162px;
      height: 162px;
      display: grid;
      grid-template-columns: repeat(8, 20px);
    }
    #chess div{
      position: relative;
    }
    .red,
    .white{

    }
    .red{
        background: red;
    }
    .white{
        background: white;
    }

    .img{
      width: 100%;
      height: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
</style>
