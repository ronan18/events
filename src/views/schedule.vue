<template>
<div class="schedule page">
  <header class="mainHeader">
    <h1>Schedule</h1>
    <countDown />
  </header>
    <div class="spacer"></div>
  <main>
    <router-link to="/a/advancedjs" class="scheduleItem">
      <div>
        <h1>Advanced JavaScript</h1>
        <p>Saturday 10:00am-11:00am room 5</p>
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
export default {
  name: 'schedule',
  components: {
    countDown: countDown,

  }
}
</script>
