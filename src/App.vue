<template>
  <div class="container">
    <nav class="nav">
      <ul class="nav-ul">
        <router-link tag="li" :to="{name:'home'}" class="nav-li" exact active-class="active">
          <a class="nav-link">Home</a>
        </router-link>
        <router-link tag="li" :to="{name:'form'}" class="nav-li" active-class="active">
          <a class="nav-link">Form</a>
        </router-link>
        <router-link tag="li" :to="{name:'products'}" class="nav-li" active-class="active">
          <a class="nav-link">Card</a>
        </router-link>
        <router-link tag="li" :to="{name:'calculator'}" class="nav-li" active-class="active">
          <a class="nav-link">Calculator</a>
        </router-link>
      </ul>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {

    }
  }
}
</script>

<style>
    *,*:before,*:after:{
        box-sizing: border-box;
    }
  body{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Arial';
  }
  .container{
    width: 1170px;
    margin: 0 auto;
    box-sizing: border-box;
  }
  @media screen and (max-width: 1200px){
      .container{
          width: 992px;
      }
  }
  @media screen and (max-width: 992px){
      .container{
          width: 767px;
      }
  }
  @media screen and (max-width: 767px){
      .container{
          width: 100%;
          padding: 0 15px;
      }
  }
  .nav{
    background: #f1f1f1;
    padding: 15px 20px;
    border-radius: 0 0 5px 5px;
  }
  .nav-ul{
    padding-left: 0;
    margin: 0;
    display: flex;
  }
  .nav-li{
    list-style-type: none;
    padding-right: 20px;
  }
  .nav-li.active .nav-link{
    color: red;
  }
  .nav-link{
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
  }
</style>
