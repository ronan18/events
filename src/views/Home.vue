<template>
  <div class="home page">
    <header class="mainHeader">
      <h1>Comma-Hacks</h1>
      <countDown/>
    </header>
      <div class="spacer"></div>
    <main>
    <alertMessage v-for="item in alerts" :heading="item.title" :text="item.message"/>
    <h2>Comming Up</h2>
    <event to="/a/advancedjs" heading="Advanced JavaScript" details="Saturday 1:00pm-2:00pm room 5" img="/img/markus-spiske-771011-unsplash.jpg"/>
    </main>
    
  </div>
</template>

<script>
import countDown from '@/components/countdown.vue'
import alertMessage from '@/components/alert.vue'
import event from '@/components/event.vue'
import '@/assets/css/home.scss'
import firebase from 'firebase/app'
import 'firebase/database'
import moment from 'moment'
export default {
  name: 'home',
  components: {
    countDown: countDown,
    alertMessage: alertMessage,
    event: event
  },
  data() {
    return {
      alerts: [],
      allAlerts: {}
    }
  },
  mounted() {
    firebase.database().ref('/alerts/').on('child_added', (snap) => {
       let key = snap.key
       let data = snap.val()
       
       if (data.view == 'once') {
        if (!localStorage.getItem(key)) {
          this.alerts.push(data) 
          localStorage[key] = JSON.stringify(data)
         } 
       } else {
        if ( moment(data.view).diff(moment()) > 0) {
          this.alerts.push(data) 
        }
         
       }
       
    })
  }
}
</script>
