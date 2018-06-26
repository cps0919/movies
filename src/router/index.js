import Vue from 'vue'
import Router from 'vue-router'
import wellreceived from "./../components/movies-item/well-received.vue"
import soon from "./../components/movies-item/soon.vue"
import movie from "./../components/movie.vue"
import looking from "./../components/looking.vue"
import myself from "./../components/myself.vue"
import discuss from '../components/myself-item/discuss.vue'
import critics from "../components/myself-item/Film-critics.vue"
import filmmaker from "../components/myself-item/filmmaker.vue"
import Looking from "../components/myself-item/Looking .vue"
import seen from "../components/myself-item/seen.vue"
import want from "../components/myself-item/Want-see.vue"
import subjects from "../components/movies-item/subjects-item.vue"
Vue.use(Router)

export default new Router({
  routes:[
    {
      path:"/movie",
      component:movie,
      redirect:"/movie/wellreceived",
      children:[
        {
          path:"wellreceived",
          component:wellreceived,
          children:[
            {
              path:"subjects",
              component:subjects
            }
          ]
        },
        {
          path:"soon",
          component:soon
        }
      ]
    },
    {
      path:"/looking",
      component:looking
    },
    {
      path:"/myself",
      component:myself,
      redirect:"/myself/critics",
      children:[
        {
          path:"discuss",
          component:discuss
        },
        {
          path:"critics",
          component:critics
        },{
          path:"filmmaker",
          component:filmmaker
        },{
          path:"Looking",
          component:Looking
        },{
          path:"seen",
          component:seen
        },{
          path:"want",
          component:want
        }
      ]
    },
  ]
})
