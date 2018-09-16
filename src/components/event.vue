<template>
<router-link :to="to" class="event">
  <div v-bind:style='{ backgroundImage: "url("+img+")" }' class="image">
  </div>
  <div class="text">
    <div>
      <h1>{{heading}}</h1>
      <p>{{details}}</p>
    </div>
    <i class="material-icons">arrow_forward_ios</i>
  </div>

</router-link>
</template>

<script>
export default {
  name: 'event',
  props: ['heading', 'details', 'img', 'to']
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/vars.scss';

.event {
  margin-bottom: 5%;
  text-decoration: none;
  color: $primary;
  display: block;
}

.image {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: $rounding;
  height: 19vh;
  display: block;
  background: no-repeat;
  background-size: 100%;
}

h1 {
  font-size: 1.1rem;
  font-weight: 400;
}

p {
  font-weight: 200;
  font-size: 0.6rem;
}

.text {
  margin-top: 2%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  i {
    color: $accent;
    font-size: 1em;
  }
}
</style>
