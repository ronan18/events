<template>
<div class="hello">
  <p class="time">{{timeLeft}}</p>
  <p class="message">{{message}}</p>
</div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/database'
import {
  setInterval
} from 'timers';
let moment = require('moment');
export default {
  name: 'countDown',
  data() {
    return {
      message: 'loading',
      dateString: '',
      time: ''
    }
  },
  mounted() {
    this.time = moment()
    firebase.database().ref('time/').on('value', (snapshot) => {
      //console.log(snapshot.val())
      this.dateString = moment(snapshot.val().time)
      this.message = snapshot.val().text
      window.setInterval(() => {
        this.time = moment()
      }, 400)
    });

  },
  computed: {
    timeLeft() {
      //console.log('time')
      let time = moment(this.dateString).diff(this.time)
      let dur = moment.duration(time);
      if (!time) {
        return 'loading'
      } else {
        if (dur.hours() > 0) {
          return `${dur.hours()}h${dur.minutes()}m${dur.seconds()}s`
        } else if(dur.minutes() > 0) {
          return `${dur.minutes()}m${dur.seconds()}s`
        } else if (dur.seconds() > 0) {
          return `${dur.seconds()}s`
        } else {
          return `STARTED`
        }
        
      }

    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/vars.scss';

p {
  text-align: right;
}

.time {
  color: $accent;
  font-size: 0.93rem;
  font-weight: 400;
}

.message {
  font-size: 0.5rem;
  font-weight: light;
}
</style>
