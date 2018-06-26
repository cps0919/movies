<template>
    <div class="myself">
      <div class="title">
        <div class="name">
          <img src="https://img1.doubanio.com/icon/u1000001-28.jpg" alt="">
          <span>请登录</span>
        </div>
      </div>
      <div class="tab border-1px">
        <div class="tab-item">
          <router-link to="/myself/critics">想看</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/myself/discuss">讨论</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/myself/filmmaker">在看</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/myself/Looking">看过</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/myself/seen">影评</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/myself/want">影人</router-link>
        </div>
      </div>
      <router-view></router-view>
    </div>
</template>
<script>
    export default {
        components: {},
      created(){
        this.$axios.get("api/v2/user/1000001").then((res) => {
          res = res.data
          this.usbox=res
        }).catch((error) => {
          console.log(error)
        })
      }
    }
</script>
<style lang="stylus" scoped="">
  @import "../commons/styl/mixi-style.styl"
.myself
  .title
    background #3EAF0E
    position relative
    .name
      padding  60px 20px
      font-size 20px
      color white
      img
        border-radius 50%
        vertical-align middle
        margin-right 10px
  .tab
    display flex
    border-1px rgba(7,17,27,0.1)
    .tab-item
      flex 1
      text-align center
      padding 5px 0
      a
        display inline-block
        color rgba(7,17,27,0.5)
        padding-bottom 2px
        width 100%
        height 100%
        text-decoration none
      .router-link-active
        color rgb(7,17,27)
        border-bottom 1px solid rgb(7,17,27)
</style>
