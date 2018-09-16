import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Schedule from './views/schedule.vue'
import Announcements from './views/announcements.vue'
import Venue from './views/venue.vue'
import Article from './views/article.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: Schedule
    },

    {
      path: '/announcements',
      name: 'announcements',
      component: Announcements
    },
    {
      path: '/venue',
      name: 'venue',
      component: Venue
    },
    {
      path: '/a/:id',
      name: 'article',
      component: Article
    }
  ]
})
