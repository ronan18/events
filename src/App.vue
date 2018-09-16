<template>
  <div id="app">
    <router-view class="router"/>
    <nav class="app__nav">
      <router-link to="/" class="nav__link" :class="{active: $route.path =='/'}">
        <i class="material-icons">event</i>
        <p>event</p>
      </router-link>
      <router-link to="/schedule" class="nav__link" :class="{active: $route.path =='/schedule'}">
        <i class="material-icons">calendar_view_day</i>
        <p>schedule</p>
      </router-link>
        <router-link to="/announcements" class="nav__link" :class="{active: $route.path =='/announcements'}">
        <i class="material-icons">mail_outline</i>
        <p>announcements</p>
      </router-link>
      <router-link to="/venue" class="nav__link" :class="{active: $route.path =='/venue'}">
        <i class="material-icons">near_me</i>
        <p>venue</p>
      </router-link>
    </nav>
  </div>
</template>
<script>
import 'minireset.css'
import '@/assets/css/global.scss'
export default {
  name: 'app',
  data() {
    return {
      page: 'home'
    }
   
  }
}
</script>
