<template>
<div class="article page">
  <header class="article__header">
    <i @click="back()" class="material-icons">arrow_back_ios</i>
    <h1 class="article__title">Article Name</h1>
  </header>
  <div class="spacer"></div>
  <div class="img"></div>
  <main>
    
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, sit eligendi rem qui assumenda, exercitationem cupiditate temporibus minima commodi itaque necessitatibus nisi deleniti neque excepturi repellat ad, saepe non similique!</p>
  {{$route.params.id}}
  </main>
  
</div>
</template>

<script>
import '@/assets/css/article.scss'
export default {
  name: 'articlePage',
  methods: {
    back() {
      console.log('back')
      this.$router.go(-1)
    }
  }
}
</script>
