<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent width="auto">
      <template v-slot:activator="{ props }">
        <button color="primary" v-bind="props" class="btn mx-auto main-btn ">
          Accept
        </button>
      </template>
      <v-card>
        <v-card-title class="text-h5"> Accept </v-card-title>
        <v-card-text class="question">Are you sure you want to accept this request ?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <button class="btn accept-btn mx-2" @click="Accept()">Yes</button>
          <button class="btn main-btn mx-2" @click="dialog = false">No</button>
        </v-card-actions>

      </v-card>
      <span class="d-none req">{{ requestId }}</span>
    </v-dialog>
  </v-row>
  <v-alert color="error" icon="$error" title="You're not logged in" text="Please Try again" v-if="this.authorizationFlag"
    class="alert align-items-center">
    <button class="goButton" @click="redirectPage()">Go to Log In</button>
  </v-alert>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      dialog: false,
      userID: localStorage.getItem('userID'),
      securityFlag: localStorage.getItem('securityFlag'),
      authorizationFlag: false,


      /*status: 'approved'*/

    };
  },
  props: [
    'requestId'

  ]

  ,
  methods: {
    Accept() {
      const url = `http://localhost:8080/api/admin/requests/?status=approved&requestID=${this.requestId}&flag=${this.securityFlag}`
      axios.post(url)
        .then((response) => {
          this.status = 'approved'
          //console.log(this.status)
          window.location.reload()
        })
      this.dialog = false
      console.log(this.dialog)

        .catch((err) => {
          // Handle errors
          if (err.response.data.message === "Unauthorized request") {
            this.authorizationFlag = true
            console.log(this.authorizationFlag)
          }
        })


    },
    redirectPage(){
      this.$router.push('/')
    }


  },

};
</script>

<style>
.goButton {
  background-color: var(--light) !important;
  color: black !important;
  border-radius: 15px !important;
  height: 40px !important;
  width: 100px !important;
  font-weight: 500 !important;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;

}

.alert {
  width: 400px;
  display: flex;
  border-radius: 25px;



}

.accept-btn {
  background-color: rgb(169, 11, 11) !important;
  color: #fff !important;
  border-radius: 15px !important;
  height: 50px !important;
  width: 70px !important;
  font-weight: 500 !important;
  border: none;
}

.main-btn {
  background-color: var(--lightblue) !important;
  color: white !important;
  font-weight: 500 !important;
  border-radius: 15px !important;
  padding: 0.5rem 1.5rem !important;
  border: none;
  height: 50px !important;
}



.main-btn:hover {
  color: var(--darkblue) !important;
  font-weight: 700 !important;
}

.accept-btn:hover {
  color: var(--darkblue) !important;
  font-weight: 700 !important;
}

.question {
  font-family: 'Roboto';
}

.req {
  display: none !important;
}
</style>