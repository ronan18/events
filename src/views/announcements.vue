<template>
<div class="announcements page">
  <header class="mainHeader">
    <h1>Announcements</h1>
    <countDown />
  </header>
  <div class="spacer"></div>
  <main>
    <router-link v-for="item in announcements" :to="'/a/'+item.id" class="scheduleItem">
      <h1>{{item.title}}</h1>
      <i class="material-icons">arrow_forward_ios</i>
    </router-link>
  </main>

</div>
</template>

<script>
import countDown from '@/components/countdown.vue'
import alertMessage from '@/components/alert.vue'
import event from '@/components/event.vue'
import '@/assets/css/announcements.scss'
import firebase from 'firebase/app'
import 'firebase/database'
export default {
  name: 'announcements',
  components: {
    countDown: countDown,
  },
  data() {
    return {
      announcements: {}
    }
  },
  mounted() {
    firebase.database().ref('/announcements/').on('value', (snapshot) =>{
      this.announcements = snapshot.val()
    });
  }
}
</script>
