<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe624</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632</span>
      输入城市/游玩/景点</div>
    <div class="header-right">
      城市
      <span class="iconfont arrow-icon">&#xe64a</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
.header
  display flex
  line-height .86rem
  background: $bgColor
  color #fff
  .header-left
    width: .64rem
    text-align center
    .back-icon
      font-size .4rem
  .header-right
    width: 1.24rem
    text-align center
    .arrow-icon
      font-size .24rem
  .header-input
    flex 1
    background: #fff
    border-radius .1rem
    margin-top .12rem
    line-height .64rem
    color #ccc
    height: .64rem
    margin-left .2rem
    padding-left .2rem
</style>
