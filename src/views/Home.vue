<template>
  <div class="home page">
    <header class="mainHeader">
      <h1>Comma-Hacks</h1>
      <countDown/>
    </header>
      <div class="spacer"></div>
    <main>
    <alertMessage heading="Lunch will end in 10 minutes" text="please make sure that you have eaten"/>
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
export default {
  name: 'home',
  components: {
    countDown: countDown,
    alertMessage: alertMessage,
    event: event
  }
}
</script>
