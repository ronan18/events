<template>
<div class="home page">
  <header class="mainHeader">
    <h1>Comma-Hacks</h1>
    <countDown />
  </header>
  <div class="spacer"></div>
  <main>
    <alertMessage v-for="item in alerts" :key="item.title" :heading="item.title" :text="item.message" />
    <h2>Coming Up</h2>
    <event v-for="item in sortedByTime" :key="item.link" :to="item.link" :heading="item.title" :details="item.details" :img="item.img" />
  </main>

</div>
</template>

<script>
import countDown from "@/components/countdown.vue";
import alertMessage from "@/components/alert.vue";
import event from "@/components/event.vue";
import "@/assets/css/home.scss";
import firebase from "firebase/app";
import "firebase/database";
import "firebase/messaging";
import "firebase/auth";
import moment from "moment";
import swal from "sweetalert";

export default {
  name: "home",
  components: {
    countDown: countDown,
    alertMessage: alertMessage,
    event: event
  },
  data() {
    return {
      alerts: [],
      events: []
    };
  },
  mounted() {
    firebase
      .database()
      .ref("/alerts/")
      .on("child_added", snap => {
        let key = snap.key;
        let data = snap.val();

        if (data.view == "once") {
          if (!localStorage.getItem(key)) {
            this.alerts.push(data);
            localStorage[key] = JSON.stringify(data);
          }
        } else {
          if (moment(data.view).diff(moment()) > 0) {
            this.alerts.push(data);
          }
        }
      });
    const messaging = firebase.messaging();
    messaging.usePublicVapidKey(
      "BOPORAkCQ55ShXDcrqarCGEsFd24NCJPUEtgOPZGseFWQ1R4oVEKs00LwVF0iHmaQWz18JatovsyxaGUrXHYNyg"
    );
    firebase
      .database()
      .ref("/schedule/")
      .on("child_added", snap => {
        let key = snap.key;
        let data = snap.val();
        if (moment(data.time.end).diff(moment()) > 0) {
          this.events.push(data);
        }
      });
    firebase
      .auth()
      .signInAnonymously()
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        var uid = user.uid;

        messaging
          .requestPermission()
          .then(function() {
            console.log("Notification permission granted.");
            messaging.onMessage(function(payload) {
              console.log("Message received. ", payload);
              // ...
            });

            messaging
              .getToken()
              .then(function(currentToken) {
                if (currentToken) {
                  firebase
                    .database()
                    .ref("/push/" + uid)
                    .set(currentToken);
                } else {
                  // Show permission request.
                  console.log(
                    "No Instance ID token available. Request permission to generate one."
                  );
                  swal({
                    title: "Please Allow Push Notifications",
                    text:
                      "We use push notifications to send important updates about the hackathon",
                    icon: "warning",
                    button: "ok"
                  });
                }
              })
              .catch(function(err) {
                console.log("An error occurred while retrieving token. ", err);
                showToken("Error retrieving Instance ID token. ", err);
                firebase
                  .database()
                  .ref("/push/" + uid)
                  .set(false);
              });
            messaging.onTokenRefresh(function() {
              messaging
                .getToken()
                .then(function(refreshedToken) {
                  console.log("Token refreshed.");
                  firebase
                    .database()
                    .ref("/push/" + uid)
                    .set(currentToken);
                })
                .catch(function(err) {
                  console.log("Unable to retrieve refreshed token ", err);
                  showToken("Unable to retrieve refreshed token ", err);
                });
            });
          })
          .catch(function(err) {
            console.log("Unable to get permission to notify.", err);
            swal({
              title: "Please Allow Push Notifications",
              text:
                "We use push notifications to send important updates about the hackathon",
              icon: "warning",
              button: "ok"
            });
          });
      }
    });
  },
  computed: {
    sortedByTime() {
      return this.events.sort((a, b) => {
        return moment(a.time.start).diff(moment(b.time.start));
      });
    }
  }
};
</script>
