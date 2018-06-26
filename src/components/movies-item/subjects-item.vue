<template>
  <div class="movieone" v-show="shows">
    <div class="exit"  @click="show1">
      <span class="icon-cheveron-left"></span>返回</div>
    <div class="subjectsall" ref="subjectsall">
      <div>
        <div class="images">
          <div class="imgs" v-if="subjects.images">
            <img v-lazy="subjects.images.large" alt="">
          </div>
        </div>
        <div class="subject">
          <div class="content">
            <div class="title">
              {{subjects.title}}
            </div>
            <p class="dec">
              {{subjects.year}} /
              <span v-for="item,index in subjects.genres" :key="index">
            {{item}} /
              </span>
            </p>
            <p class="time">上映时间：{{subjects.year}} (中国大陆)</p>
            <p class="times">片长：120分钟</p>
            <div class="count">
              <p>豆瓣评分</p>
              <p style="font-size: 25px;font-weight: 700;color:rgb(7,17,27)">
                {{subjects.rating.average}}
              </p>
              <div class="star">
                <star :count="subjects.rating.average" :type="24"></star>
              </div>
              <p>{{subjects.collect_count}}人</p>
            </div>
          </div>
          <div class="see">
            <div class="want">
              想看
            </div>
            <div class="seen">
              看过
            </div>
          </div>
          <div class="summary">
            <div class="summary-title">
              简介
            </div>
            <div class="summary-text" ref="summarys">
              {{subjects.summary}}
            </div>
            <span class="summary-more">展开</span>
          </div>
          <div class="people">
            <div class="people-title">
              影人
            </div>
            <div>
              <ul class="wrapper">
                <li class="wrapper-item" v-for="item,index in subjects.directors" >
                  <img width="100" :src="item.avatars.small" alt="">
                  <p class="people-name">{{item.name}}</p>
                  <p>导演</p>
                </li>
                <li class="wrapper-item" v-for="item,index in subjects.casts" v-if="subjects.casts">
                  <img width="100" :src="item.avatars.small" alt="">
                  <p class="people-name">{{item.name}}</p>
                  <p>演员</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import IScroll from "iscroll"
  import star from "./../star"

  export default {
    name: "movieone",
    components: {star},
    data() {
      return {
        shows: false,
        subjects: {
          images:{
            large:""
          },
          rating:{
            average:""
          }
        }
      }
    },
    methods: {
      show1(item) {
        if (this.shows == false) {
          this.shows = true
        } else {
          this.shows = false
        }
        let host = "api/v2/movie/subject/" + item
        this.$axios.get(host).then((res) => {
          res = res.data
          this.subjects = res
          this.$nextTick(() => {
            let subjectsall = this.$refs.subjectsall
            this.isro = new IScroll(subjectsall, {
              click: true,
              probeType: 3
            })
          })
        }).catch((error) => {
          console.log(error)
        })

      }
    }
  }
</script>

<style scoped lang="stylus">
  .movieone
    position fixed
    left 0
    top 0
    z-index 100
    height 100%
    width 100%
    background white
    .exit
      position fixed
      top 0
      left 0
      width 100%
      z-index 100
      height 60px
      color white
      line-height 60px
      background rgb(35,28,22)
      padding-left 2px
      vertical-align middle
      .icon-cheveron-left
        display inline-block
        vertical-align middle
        font-size 30px
    .subjectsall
      position relative
      height 100%
      overflow hidden
      .images
        width 100%
        background rgb(35,28,22)
        padding 60px 0 20px 0
        .imgs
          width 270px
          margin auto
      .subject
        background rgb(247,248,243)
        height 100%
        .content
          padding 20px
          color rgba(7, 17, 27, 0.5)
          position relative
        .title
          color rgb(7, 17, 27)
          font-size 20px
          font-weight 700
          letter-spacing 2px
          margin-bottom 20px
        .count
          position absolute
          text-align center
          background white
          padding 10px
          right 20px
          top 20px
          box-shadow 2px 2px 6px rgba(0,0,0,0.3)
        .see
          display flex
          padding 0 20px
          padding-bottom 20px
          .want
            flex 3
            border 1px solid orange
            text-align center
            padding 15px 0
            margin-right 20px
            color orange
            border-radius 5px
          .seen
            flex 7
            border 1px solid orange
            text-align center
            padding 15px 0
            color orange
            border-radius 5px
        .summary
          position relative
          padding 10px 20px 20px 20px
          .summary-title
            color rgba(7,17,27,0.5)
          .summary-text
            overflow hidden
            text-overflow ellipsis
            height 86px
          .summary-more
            position absolute
            display inline-block
            right 30px
            bottom 0
            color green
        .people
          padding-left 20px
          font-size 16px
          color rgba(7, 17, 27, 0.5)
          .people-title
            margin-bottom 5px
          .wrapper
            display flex
            .wrapper-item
              text-align center
              flex 0 0 100px
              height 100px
              margin-right 10px
              width 100px
            .people-name
              color rgb(7, 17, 27)
</style>
