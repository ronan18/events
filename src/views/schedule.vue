<template>
<div class="schedule page">
  <header class="mainHeader">
    <h1>Schedule</h1>
    <countDown />
  </header>
    <div class="spacer"></div>
  <main>
    <router-link v-for="item in  sortedByTime" :key="item.link" :to="item.link" class="scheduleItem">
      <div>
        <h1>{{item.title}}</h1>
        <p>{{item.details}}</p>
      </div>
      <i class="material-icons">arrow_forward_ios</i>
    </router-link>
  </main>

</div>
</template>

<script>
import countDown from '@/components/countdown.vue'
import alertMessage from '@/components/alert.vue'
import event from '@/components/event.vue'
import '@/assets/css/schedule.scss'
import firebase from 'firebase/app'
import 'firebase/database'
import moment from 'moment'
export default {
  name: 'schedule',
  components: {
    countDown: countDown,

  },
  data() {
    return {
      events: []
    }
  },
  mounted() {
    firebase.database().ref('/schedule/').on('child_added', (snap) => {
       let key = snap.key
       let data = snap.val()    
        
          this.events.push(data) 
                    
    })
  },
  computed:{
     sortedByTime(){
        return this.events.sort((a,b) => {
            return moment(a.time.start).diff(moment(b.time.start))
    })
  }
  }
}
</script>
