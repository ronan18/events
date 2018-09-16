<template>
<div class="venu page">
  <header class="mainHeader">
    <h1>Venue</h1>
    <countDown />
  </header>
  <div class="spacer"></div>
  <main>
    <div class="map"></div>
    <p class="adress">755 Ocean Ave San Francisco</p>
    <hr>
    <h2 class="title">Check In</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas illo hic laboriosam voluptates magnam culpa officiis? Veritatis necessitatibus assumenda enim accusamus est dolore voluptatum, natus accusantium, labore ipsa omnis eius.</p>
    <hr>
    <h2 class="title">Contact</h2>
    <a class="contact" href="mailto:rsf.sho@gmail.com">rsf.sho@gmail.com</a>
    <a class="contact" href="tel:5104092752">(510) 409-2752</a>
  </main>

</div>
</template>

<script>

import countDown from '@/components/countdown.vue'
import alertMessage from '@/components/alert.vue'
import event from '@/components/event.vue'
import '@/assets/css/venu.scss'
export default {
  name: 'venue',
  components: {
    countDown: countDown,

  }
}
</script>
