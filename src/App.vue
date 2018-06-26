<template>
  <div id="app">
    <div class="tab">
      <ul>
        <li class="tab-item" @click="movies">
          <router-link to="/movie">
            <p :class="shows[0]=='false'?'icon-folder-outline':'icon-folder'"></p>
            <span class="name">热映</span>
          </router-link>
        </li>
        <li class="tab-item" @click="lookings">
          <router-link to="/looking">
            <p :class="shows[1]=='false'?'icon-paper-plane-o':'icon-paper-plane'"></p>
            <span>找片</span>
          </router-link>
        </li>
        <li class="tab-item" @click="myselfs">
          <router-link to="/myself">
            <p :class="shows[2]=='false'?'icon-user-o':'icon-user'"></p>
            <span>我的</span>
          </router-link>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import movie from "./components/movie"

  export default {
    name: 'App',
    data() {
      return{
        shows:["true","false","false"]
      }
    },
    methods:{
      movies(){
        for(let i=0;i<this.shows.length;i++){
            this.shows[i]="false"
        }
        this.shows[0]="true"
      },
      lookings(){
        for(let i=0;i<this.shows.length;i++){
          this.shows[i]="false"
        }
        this.shows[1]="true"
      },
      myselfs(){
        for(let i=0;i<this.shows.length;i++){
          this.shows[i]="false"
        }
        this.shows[2]="true"
      }
    },
    components: {
      movie,
    }

  }
</script>

<style lang="stylus" scoped>
  .tab
    position fixed
    z-index 50
    bottom 0
    left 0
    background white
    width 100%
    border-top 1px solid rgba(7, 17, 27, 0.1)
    ul
      display flex
      width 100%
      .tab-item
        text-align center
        flex 1
        padding 5px 0
        a
          text-decoration none
          color rgba(7, 17, 27, 0.7)
        .router-link-active
          color rgb(7, 17, 27)
          p
            font-size 20px
          span
            font-size 14px
</style>
