<template>
  <div class="hello">
    <p class="time">{{timeLeft}}</p>
    <p class="message">{{message}}</p>
  </div>
</template>

<script>
export default {
  name: 'countDown',
  data() {
    return {
      timeLeft: '9h45m',
      message: 'remaining'
    }
  }
}
</script>

<style scoped lang="scss">
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
