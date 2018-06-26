<template>
  <div class="movie">
    <eleheader></eleheader>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/movie/wellreceived" exact>正在热映</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/movie/soon">即将上映</router-link>
      </div>
    </div>
    <router-view :theaters="theaters" :soon="soon"></router-view>
  </div>
</template>

<script>
  import eleheader from "./movies-item/eleheader"

  export default {
    name: "movie",
    components: {
      eleheader
    },
    data(){
      return {
        soon: {},
        theaters:{}
      }
    },
    created() {
      this.$axios.get("api//v2/movie/coming_soon").then((res) => {
        res = res.data
        this.soon = res
      }).catch((error) => {
        console.log(error)
      })
      this.$axios.get("api/v2/movie/in_theaters").then((res) => {
        res = res.data
        this.theaters = res
      }).catch((error) => {
        console.log(error)
      })
    }
  }
</script>

<style scoped lang="stylus">
  @import "../commons/styl/mixi-style.styl"
  .movie
    width 100%
    height 100%
    .tab
      display flex
      border-1px(rgba(7, 17, 27, 0.2))
      .tab-item
        flex 1
        text-align center
        font-size 16px
        line-height 16px
        height 40px
        .router-link-active
          color red
        a
          line-height 40px
          text-decoration none
          color rgba(7, 17, 27,0.7)
</style>
