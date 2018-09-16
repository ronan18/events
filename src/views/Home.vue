<template>
  <div class="home page">
    <header class="mainHeader">
      <h1>Comma-Hacks</h1>
      <countDown/>
    </header>
    <main>
    <alertMessage heading="Lunch will end in 10 minutes" text="please make sure that you have eaten"/>
    </main>
    
  </div>
</template>

<script>
import countDown from '@/components/countdown.vue'
import alertMessage from '@/components/alert.vue'
import '@/assets/css/home.scss'
export default {
  name: 'home',
  components: {
    countDown: countDown,
    alertMessage: alertMessage
  }
}
</script>
