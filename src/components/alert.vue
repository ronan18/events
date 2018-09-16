<template>
  <div class="alert">
    <h1>{{heading}}</h1>
    <p>{{text}}</p>
  </div>
</template>
<script>
export default {
  name: 'alert',
  props: ['heading', 'text']
}
</script>
<style scoped lang="scss">
@import '@/assets/css/vars.scss';
h1 {
  font-weight: bold;
  color: $accent;
  font-size: 0.93rem;
}
p {
  font-weight: 400;
  font-size: 0.5rem;
}
.alert {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: $rounding;
  padding: 4%;
  margin-bottom: 5%;
}
</style>
