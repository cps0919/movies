<template>
  <div class="star">
    <span class="star-item" :class="[item,types]" v-for="item,index in counts"></span>
  </div>
</template>
<script>
  export default {
    props: ["count", "type"],
    data(){
      return {countlenth: [],types:"star"+this.type}
    },
    computed: {
      counts(){
        let countlenth =[]
        let count = Math.floor(this.count)/2
        for (var i = 0; i < 5; i++) {
          if (countlenth.length + 1 <= count) {
            countlenth.push("on")
          } else if (countlenth.length + 1 > count && countlenth.length < count) {
            countlenth.push("half")
          } else {
            countlenth.push('off')
          }
        }
        return countlenth
      }
    }
  }
</script>
<style lang="stylus" scoped>
  @import "./../commons/styl/mixi-style.styl"
  .star
    display inline-block
    .star-item
      display inline-block
      &.star24
        height 12px
        width 12px
        background-size 12px 12px
      &.on
        bg-image("../commons/img/star24_on")
      &.half
        bg-image("../commons/img/star24_half")
      &.off
        bg-image("../commons/img/star24_off")
      &.star48
        height 20px
        width 20px
        background-size 20px 20px
      &.on
        bg-image("../commons/img/star48_on")
      &.half
        bg-image("../commons/img/star48_half")
      &.off
        bg-image("../commons/img/star48_off")
    .count
      font-size 12px
      color rgba(7,17,27,0.5)
</style>
