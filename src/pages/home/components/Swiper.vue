<template>
  <div class="swiper">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img class="swiper-image" src="../images/1.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img class="swiper-image" src="../images/2.jpg" alt="">
        </div>
      </div>

      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
  </template>
<script>
  import Swiper from "swiper"
  import 'swiper/css/swiper.css'
  export default {
    name: "Swiper",
    mounted() {
      new Swiper('.swiper-container',{
        loop:true,
        pagination:{
          el:'.swiper-pagination'
        }
      })
    }
  }
</script>

<style lang="stylus" scoped>
  .swiper >>> .swiper-pagination-bullet-active
    background: #fff
  .swiper
    width: 100%
    height 0
    overflow hidden
    padding-bottom 26.25%
    background-color: #ccc;
    .swiper-image
      width: 100%


</style>
