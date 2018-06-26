<template>
  <div class="looking">
    <eleheader></eleheader>
    <div class="title border-1px">{{top250.title}}</div>
    <wellreceived :theaters="top250"></wellreceived>
    <!--<div class="title border-1px">{{usbox.title}}</div>
    <wellreceived :theaters="usbox"></wellreceived>-->
  </div>
</template>
<script>
  import wellreceived from "./movies-item/well-received.vue"
  import eleheader from "./movies-item/eleheader.vue"
  export default {
    components: {
      eleheader,
      wellreceived
    },
    data(){
      return {
        top250: {},
        usbox:{}
      }
    },
    created(){
      this.$axios.get("api/v2/movie/top250").then((res) => {
        res = res.data
        this.top250=res
      }).catch((error) => {
        console.log(error)
      });
      this.$axios.get("api/v2/movie/us_box").then((res) => {
        res = res.data
        this.usbox=res
      }).catch((error) => {
        console.log(error)
      })
    }
  }
</script>
<style lang="stylus" scoped>
  @import "./../commons/styl/mixi-style.styl"
  .looking
    .title
      background rgba(0, 0, 0, 0.06)
      padding 10px 10px
      border-top 1px solid rgba(7, 17, 27, 0.1)
      border-1px rgba(7, 17, 27, 0.4)
</style>
