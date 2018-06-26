<template>
  <div class="wants">
    <div class="top">
      {{subjecteverys.length}} 部
    </div>
    <div class="subjecteverys" ref="subjecteve">
      <ul class="content" >
        <li class="content-item" v-for="item,index in subjecteverys" :key="index">
          <div class="imgs">
            <img width="70" :src="item.images.large" alt="">
          </div>
          <div class="contents">
            <div class="title">
              {{item.title}}
            </div>
            <div class="star">
              <star :count="item.rating.average" :type="24"></star>
              <span>{{item.rating.average}}</span>
            </div>
            <div class="directors">
              <span>导演:</span>
              <span v-for="items,index in item.directors">
                {{items.name}}
              </span>
            </div>
            <div class="casts">
              <span>主演</span>
              <span v-for="items in item.casts">
                {{items.name}}/
              </span>
            </div>
          </div>
          <div class="delete">
            <span class="btn" @click="removes(item,index)">删除</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>

  import IScroll from "iscroll"
  import star from "./../star"
  export default {
    components: {
      star
    },
    created(){
      this.$nextTick(()=>{
        this.subject=new IScroll(this.$refs.subjecteve,{
          click:true,
          probeType:3
        })
      })
    },
    methods:{
      removes(item,index){
        item.show="true"
        let subjectevery=this.$store.state.subjectevery
        let ids=subjectevery.filter(function (items) {
          return items.id==item.id
        })
        if(ids.length!=0){
          subjectevery.splice(index,1)
        }
      }
    },
    computed:{
      subjecteverys(){
        return this.$store.state.subjectevery
      }
    }
  }
</script>
<style lang="stylus" scoped>
.wants
  position fixed
  height 100%
  width 100%
  .top
    height 40px
    background-color rgba(0,0,0,0.04)
    color rgba(7,17,27,0.5)
    line-height 40px
    width 100%
    padding-left 20px
  .subjecteverys
    position relative
    height 370px
    overflow hidden
    .content
      .content-item
        display flex
        margin 20px
        .imgs
          flex 0 0 70px
          margin-right 10px
        .contents
          flex 0 0 190px
          letter-spacing 2px
          position relative
          .title
            font-size 15px
            font-weight 700
          .star
            font-size 12px
            color rgba(7,17,27,0.5)
          .directors
            font-size 13px
            color rgba(7,17,27,0.5)
          .casts
            margin-top 5px
            font-size 13px
            color rgba(7,17,27,0.5)
        .delete
          flex 1
          right 0
          top 0
          text-align center
          .btn
            margin-top 40px
            margin-left 10px
            font-size 16px
            display inline-block
            text-align center
            height 27px
            width 60px
            line-height 27px
            color rgb(255,102,122)
            border 1px solid rgb(255,102,122)
            border-radius 5px

</style>
