<template>
  <div class="wellreceived">
    <ul class="theaters ">
      <li class="theaters-item border-1px"
          v-for="item,index in theaters.subjects">
        <div class="lft" @click.stop="subjectsEvery(item,index)">
          <img width="90" height="120" v-lazy="item.images.small" alt="">
        </div>
        <div class="mdl">
          <h2 class="title">{{item.title}}</h2>
          <star :count="item.rating.average" :type="24"></star>
          <span>{{item.rating.average}}</span>
          <p v-if="item.directors[0]"> 导演：{{item.directors[0].name}}</p>
          <p>
            主演：<span v-for="items,index in item.casts">
            {{items.name}}/
          </span>
          </p>
        </div>
        <div class="rig">
          <p class="people">{{Math.floor(item.collect_count / 1000) / 10}}万人看过</p>
          <button class="purchase" @click="wants(item,index)">{{item.show?'已想看':'想看'}}</button>
        </div>
      </li>
    </ul>
    <subject v-show="shows" ref="subject1"></subject>
  </div>
</template>

<script>
  import IScroll from 'iscroll'
  import star from "./../star.vue"
  import subject from "./subjects-item.vue"

  export default {
    name: "well-received",
    props: ["theaters"],
    components: {
      star,
      subject
    },
    data() {
      return {
        shows: false,
        purchase:{}
      }
    },
    methods: {
      wants(item, index) {
        this.purchase=item
        let subjectevery = this.$store.state.subjectevery
        let ids = subjectevery.filter(function (items) {
          return items.id == item.id
        })
        if (ids.length == 0) {
          this.$set(item, 'show', 'false')
          this.$set(item,'index',index)
          subjectevery.push(item)
        }
      },
      subjectsEvery(item, index) {
        this.$refs.subject1.show1(item.id)
        if (this.shows == false) {
          this.shows = true
        } else {
          this.shows = false
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import "./../../commons/styl/mixi-style.styl"
  .wellreceived
    .theaters
      .theaters-item
        padding 10px
        font-size 12px
        border-1px(rgba(7, 17, 27, 0.2))
        color rgba(7, 17, 27, 0.5)
        display flex
        .lft
          flex 0 0 100px
        .mdl
          height 128px
          overflow hidden
          margin-left 20px
          flex 1
          .title
            color rgb(7, 17, 27)
        .rig
          padding-top 20px
          vertical-align middle
          flex 0 0 100px
          text-align center
          color #ff6577
          .people
            vertical-align middle
            font-size 12px
            margin 7px 0
          .purchase
            font-size 16px
            display inline-block
            text-align center
            height 27px
            width 60px
            line-height 27px
            color red
            background none
            border 1px solid red
            border-radius 5px
            outline none
</style>
