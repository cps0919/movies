<template>
  <div class="eleheader" ref="movi">
    <div class="search">
      <div class="icon"><span class="icon-location"></span></div>
      <input type="text" class="text" v-model="val" placeholder="电影 / 电视剧 / 影人">
      <span class="btn" @click="submits">搜索</span>
    </div>
    <div class="serarch-list" v-show="shows">
      <div class="exit"  @click="submits"><span class="icon-cheveron-left"></span>返回</div>
      <div class="movies">影视</div>
        <div  class="contents" ref="search1">
          <ul class="search1">
            <li class="search-item border-1px"
                v-for="item,index in search.subjects"
                @click.stop="seens(item,index)">
              <div class="imgscontent">
                <img width="50" :src="item.images.small" alt="">
              </div>
              <div class="content">
                <p class="list-title">
                  {{item.title}}
                </p>
                <div class="list-text">
                  {{item.rating.average}} /{{item.year}}
                </div>
              </div>
            </li>
          </ul>
        </div>
        <subject v-show="shows1" ref="subject1"></subject>
    </div>
  </div>
</template>

<script>
  import subject from "./../movies-item/subjects-item"
  import IScroll from "iscroll"
  export default {
    name: "eleheader",
    components:{subject},
    data(){
      return {
        val: "",
        shows: false,
        search: {},
        shows1: false
      }
    },
    methods: {
      seens(item,index){
        this.$refs.subject1.show1(item.id)
        if (this.shows1 == false) {
          this.shows1 = true
        } else {
          this.shows1 = false
        }
      },
      submits(){
        let host = "api/v2/movie/search?q=" + this.val
        this.$axios.get(host).then((res) => {
          res = res.data
          this.search = res
          this.$nextTick(()=>{
            this.mov=new IScroll(this.$refs.search1,{
              click:true,
              probeType:3
            })
          })
        }).catch((error) => {
          console.log(error)
        })
        if(this.shows==false){
            this.shows=true
        }else{
            this.shows=false
        }
        this.val=""
      }
    },
    /*    mounted(){
     this.submits()
     }*/
  }
</script>

<style scoped lang="stylus">
  @import "./../../commons/styl/mixi-style.styl"
  .eleheader
    box-sizing border-box
    height 60px
    width 100%
    padding 15px 0
    .search
      text-align center
      flex 8
      line-height 30px
      width 100%
      height 100%
      display flex
      .icon
          flex 1
        .icon-location
          line-height 30px
      .text

        flex 7
        display inline-block
        text-align center
        padding-left 10px
        height 100%
        width 100%
        border none
        background rgba(0, 0, 0, 0.06)
        border-radius 6px
        vertical-align middle
        outline none
      .btn
        flex 2
        display inline-block
    .serarch-list
      position fixed
      z-index 100
      top 0
      left 0
      width 100%
      height 100%
      background white
      padding-top 40px
      .exit
        position fixed
        top 0
        left 0
        width 100%
        background-color rgb(35,28,22)
        color white
        line-height 40px
        padding-left 2px
        vertical-align middle
        .icon-cheveron-left
          display inline-block
          vertical-align middle
          font-size 30px
      .movies
        background rgba(0, 0, 0, 0.04)
        color rgba(7,17,27,0.5)
        padding 10px
        letter-spacing 4px
      .contents
        height 700px
        overflow hidden
        .search1
          width 100%
          .search-item
            margin 10px
            display flex
            border-1px(rgba(7,17,27,0.1))
            .imgscontent
              display inline-block
              flex 0 0 50px
              margin-right 15px
            .content
              flex 1
              .list-title
                line-height 15px
                font-weight 700
                font-size 15px
                margin-bottom 10px
              .list-text
                color rgba(7, 17, 27, 0.5)
                font-size 12px
</style>

