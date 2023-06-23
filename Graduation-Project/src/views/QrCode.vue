<template>
  <simple-nav></simple-nav>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-lg-4 col-sm-6">
        <h4 class="text-center profile-text">Booking Details</h4>
      </div>
      <div class="row justify-content-center w-100">
        <div class="col-lg-8 col-sm-10">
          <label for="" class="">Space Name:</label>
          <span class="">{{ booking.spaceName }} </span>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-8 col-sm-10">
          <label class="" for="">Start Time:</label>
          <span class="">{{ booking.startTime }} </span>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-8 col-sm-10">
          <label class="" for="">End Time:</label>
          <span class="">{{ booking.endTime }}</span>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-lg-8 col-sm-10">
          <label class="" for="">Date:</label>
          <span class="">{{ booking.date }} </span>
        </div>
      </div>
    </div>
    <!-- login form -->
    <h4 class="text-center">Please Sign in </h4>
    <div id="app" class="signInCard">
      <div class="card-body">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Username</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
              placeholder="Enter Username" required v-model="username">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required
              v-model="password">
          </div>
          <submit-btn v-bind:class="validClass"></submit-btn>
        </form>
      </div>
    </div>

    <div class="row justify-content-center my-5">
      <button class="main-btn col-lg-2 my-5 mx-2" type="submit" @click="approve">
        Approve
      </button>
    </div>
  </div>
  <v-alert color="error" icon="$error" title="You're not logged in" text="Please Try again" v-if="this.authorizationFlag"
    class="alert align-items-center container">
    <button class="goButton" @click="redirectPage()">Go to Log In</button>
  </v-alert>
  <v-alert
    color="success"
    icon="$success"
    title="Submitted Successfully"
    text="The Request is submitted successfully"
    id="hideme"
    v-if="flag"
  ></v-alert>
  <v-alert
    color="error"
    icon="$error"
    title="Submission Failed"
    text="Please Try again"
    id="hideme"
    v-if="errorAlert"
  ></v-alert>
</template>

<script>
import SimpleNav from "@/components/SimpleNav.vue";
// import  useJwt  from 'jwt-decode';
import axios from 'axios'

export default {
  data() {
    return {
      booking: null,
      id: "",
      authorizationFlag: false,
      securityFlag: localStorage.getItem('securityFlag'),
      username:'',
      password:'',
      user:null,
      flag:false,
      error:false,
      userRole:null,
    };
  },
  beforeMount() {
    // Access ID from the URL
    this.id = this.$route.params.id;
    axios
      .get(`http://localhost:8080/api/bookings/${this.id}?flag=${this.securityFlag}`)
      .then((response) => {
        // Handle response
        this.booking = response.data;
        console.log(this.booking);
      })
      .catch((err) => {
        // Handle errors
        if (err.response.data.message === "Unauthorized request") {
          this.authorizationFlag = true
          console.log(this.authorizationFlag)
        }
      })

  },
  components: {
    SimpleNav,
  },
  methods: {
    approve() {
      const url = `http://localhost:8080/login?username=${this.username}&password=${this.password}`;

      axios
        .post(url, { withCredentials: true })
        .then((response) => {
          if (response.data.error) {
            this.error = true;
          } else {
            this.flag = true;
            // delay
            this.user = response.data;
            this.userRole=this.user.role
            localStorage.setItem("userID", this.user.userId);
            localStorage.setItem("securityFlag", this.user.securityFlag);

          }
            
          
        })
        .catch((err) => {
          // Handle errors
          this.error = true;
          console.error(err);
        });



      //qr function
      if(this.userRole =="Owner"){
      axios.post(`http://localhost:8080/api/bookings/scan/${this.id}`)

        .catch((err) => {
          // Handle errors
          if (err.response.data.message === "Unauthorized request") {
            this.authorizationFlag = true
            console.log(this.authorizationFlag)
          }
        })
      }
      else{
        this.error=true
      }

    },
    redirectPage() {
      this.$router.push('/')
    },
  }
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

.addNew {
  background-color: var(--nav);
  color: white;
  border-radius: 25px;
}

.inputText {
  border-radius: 20px;
  border: none;
  height: 40px;
  font-weight: bold;
  outline: none;
  transition: 0.4s;
}

.main-btn {
  background-color: var(--lightblue) !important;
  color: white !important;
  font-weight: 500 !important;
  border-radius: 15px !important;
  padding: 0.5rem 1.5rem !important;
  border: none;
  height: 50px;
}

.main-btn:hover {
  color: var(--darkblue) !important;
  font-weight: 700 !important;
}

.inputText:focus,
.inputText:active {
  transform: scaleX(1.02);
}

.inputText::-webkit-input-placeholder {
  color: #222;
}

.signInCard {
  width: 25rem;
  margin: 2rem auto;
}

</style>
