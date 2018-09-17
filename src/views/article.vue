<template>
<v-touch v-on:swiperight="back" class="article page">

  <header class="article__header">
    <i @click="back()" class="material-icons">arrow_back_ios</i>
    <h1 class="article__title">{{article.title}}</h1>
  </header>
  <div class="spacer"></div>
  <div v-bind:style='{ backgroundImage: "url("+article.img+")" }' class="img"></div>
  <main>
    <div v-if="article.time">
      <p class="time">{{startTime}}-{{endTime}}</p>
      <p class="room">{{article.room}}</p>
    </div>
    <p>{{article.text}}</p>

  </main>

</v-touch>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/database'
import '@/assets/css/article.scss'
import moment from 'moment'
export default {
  name: 'articlePage',
  data() {
    return {
      article: '',
      startTime: '',
      endTime: ''
    }
  },
  methods: {
    back() {
      console.log('back')
      this.$router.go(-1)
    }
  },
  mounted() {
    console.log(this.$route.params.id)
    firebase.database().ref('/articles/' + this.$route.params.id).once('value').then((snapshot) => {
      if (!snapshot.val()) {
        this.article = {
          title: '404',
          text: 'Oh No!! it looks like we lost the page you are looking for. Instead here\'s a cute dog.',
          img: '/img/404.jpg'
        }
      } else {
        this.article = snapshot.val()
        if (this.article.time) {
          this.startTime = moment(this.article.time.start).format('h:mma')
          this.endTime = moment(this.article.time.end).format('h:mma')
        }

      }

    });
  }
}
</script>
