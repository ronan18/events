<template>
<div class="announcements page">
  <header class="mainHeader">
    <h1>Announcements</h1>
    <countDown />
  </header>
    <div class="spacer"></div>
  <main>
    <router-link to="/a/welcome" class="scheduleItem">
      <h1>Welcome To Comma-Hacks</h1>
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
export default {
  name: 'announcements',
  components: {
    countDown: countDown,

  }
}
</script>
