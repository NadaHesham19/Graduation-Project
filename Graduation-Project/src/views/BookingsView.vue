<template>
  <NavBar></NavBar>
  <div class="container mt-5">
    <div class="row w-100">
      <h5 class="col-lg-3 mt-3">Upcoming Bookings</h5>
    </div>

    <div class="row justify-content-between align-items-center w-100">
      <button class="col-lg-1 control-btn" @click="prevSlide">
        <i class="fa-solid fa-angle-left arow"></i>
      </button>
      <div
        class="col-lg-4 my-5"
        v-for="(booking, index) in evenBookings"
        :key="index"
        v-show="index === currentSlide"
      >
        <UpcomingCards class="slide" :booking="booking" />
      </div>
      <div
        class="col-lg-4 my-5"
        v-for="(booking, index) in oddBookings"
        :key="index"
        v-show="index === currentSlide"
      >
        <UpcomingCards class="slide" :booking="booking" />
      </div>
      <button class="col-lg-1 control-btn" @click="nextSlide">
        <i class="fa-solid fa-angle-right arow"></i>
      </button>
    </div>
  </div>
  <div class="container">
    <div class="row justify-content-center w-100">
      <div class="col-lg-12">
        <hr />
      </div>
      <div class="row w-100">
        <h5 class="col-lg-3 mt-3">Past Bookings</h5>
      </div>
    </div>
    <div class="row justify-content-between align-items-center w-100">
      <button class="col-lg-1 control-btn" @click="prevSlidePast">
        <i class="fa-solid fa-angle-left arow"></i>
      </button>
      <div
        class="col-lg-4 my-5"
        v-for="(booking, index) in evenPastBookings"
        :key="index"
        v-show="index === currentSlidePast"
      >
        <PastCards class="slide" :booking="booking" />
      </div>
      <div
        class="col-lg-4 my-5"
        v-for="(booking, index) in oddPastBookings"
        :key="index"
        v-show="index === currentSlidePast"
      >
        <PastCards class="slide" :booking="booking" />
      </div>
      <button class="col-lg-1 control-btn" @click="nextSlidePast">
        <i class="fa-solid fa-angle-right arow"></i>
      </button>
    </div>
  </div>
  <v-alert color="error" icon="$error" title="You're not logged in" text="Please Try again" 
            v-if="this.authorizationFlag" class="alert align-items-center container">
            <button class="goButton" @click="redirectPage()">Go to Log In</button>
          </v-alert>

  <Footer />
</template>

<script>
import axios from 'axios';
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import CancelModal from "../components/CancelModal.vue";
import RebookModal from "../components/RebookModal.vue";
import UpcomingCards from "@/components/UpcomingCards.vue";
import PastCards from "@/components/PastCards.vue";


export default {
  data() {
    return {
      
      currentSlide: 0,
      currentSlidePast: 0,
      userID: localStorage.getItem("userID"),
      pastBookings:[],
      upComingBookings:[],
      authorizationFlag: false,
      securityFlag : localStorage.getItem('securityFlag')
    };
  },
  components: {
    NavBar,
    Footer,
    RebookModal,
    CancelModal,
    UpcomingCards,
    PastCards,
  },
  beforeMount() {
    
    //upcoming bookings
    axios
      .get(`http://localhost:8080/api/bookings/upComingBookings/${this.userID}?flag=${this.securityFlag}`)
      .then((response) => {
        // Handle response
        this.upComingBookings = response.data;
        console.log(this.upComingBookings)
      })
      .catch((err) => {
        // Handle errors
        if(err.response.data.message === "Unauthorized request"){
          this.authorizationFlag = true
          console.log(this.authorizationFlag)
        }
      })

      //past bookings
      axios
      .get(`http://localhost:8080/api/bookings/pastBookings/${this.userID}?flag=${this.securityFlag}`)
      .then((response) => {
        // Handle response
        this.pastBookings = response.data;
        console.log(this.pastBookings)
      })
      .catch((err) => {
        // Handle errors
        if(err.response.data.message === "Unauthorized request"){
          this.authorizationFlag = true
          console.log(this.authorizationFlag)
        }
      })



  },
  methods: {
    redirectPage(){
      this.$router.push('/')
    },
    nextSlide() {
      if (this.currentSlide == this.upComingBookings.length / 2 - 0.5) {
        this.currentSlide = 0;
      } else {
        this.currentSlide =
          (this.currentSlide + 1) % (this.upComingBookings.length / 2);
      }
    },
    prevSlide() {
      if (this.currentSlide == 0) {
        if(this.upComingBookings.length % 2 != 0){
        this.currentSlide = this.upComingBookings.length /2 - 0.5;
      }
      else{
        this.currentSlide = (this.upComingBookings.length /2) -1 ;
      }
        
      } 
      else {
        this.currentSlide =
          (this.currentSlide + this.upComingBookings.length - 1) %
          (this.upComingBookings.length / 2) ;
      }
    },

    nextSlidePast() {
      if (this.currentSlidePast == this.pastBookings.length / 2 - 0.5) {
        this.currentSlidePast = 0;
      } else {
        this.currentSlidePast =
          (this.currentSlidePast + 1) % (this.pastBookings.length / 2);
      }
    },
    prevSlidePast() {
      if (this.currentSlidePast == 0) {
        if(this.pastBookings.length %2 != 0){
        this.currentSlidePast = this.pastBookings.length/2  - 0.5;
      }
        else{
          this.currentSlidePast = this.pastBookings.length/2 -1
        }
      } else {
        this.currentSlidePast =
          (this.currentSlidePast + this.pastBookings.length - 1) %
          (this.pastBookings.length / 2);
      }
    },
  },
  computed: {
    // currentDate() {
    //   const dateStr = new Date();
    //   return moment(dateStr, "DD-MM-YYYY").toDate();
    // },
    evenBookings() {
      return this.upComingBookings.filter((booking, index) => index % 2 === 0);
    },
    oddBookings() {
      return this.upComingBookings.filter((booking, index) => index % 2 === 1);
    },
    evenPastBookings() {
      return this.pastBookings.filter((pastbooking, index) => index % 2 === 0);
    },
    oddPastBookings() {
      return this.pastBookings.filter((pastbooking, index) => index % 2 === 1);
    },

    // pastbookings() {
    //   return this.allbookings.filter((booking) => {
    //     let bookingDate = moment(booking.date, "DD-MM-YYYY").toDate();
    //     return moment(bookingDate).isBefore(this.currentDate, "day");
    //   });
    // },
    // bookings() {
    //   return this.allbookings.filter((booking) => {
    //     let bookingDate = moment(booking.date, "DD-MM-YYYY").toDate();
    //     return moment(bookingDate).isSameOrAfter(this.currentDate, "day");
    //   });
    // },
  },
};
</script>

<style>
.goButton{
  background-color: var(--light)!important;
  color: black!important;
  border-radius: 15px !important;
  height: 40px !important;
  width:100px !important;
  font-weight: 500 !important;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:10px;

}
.alert{
  width:400px;
  display: flex;
  border-radius: 25px;
}
.icon {
  color: var(--darkblue);
}

.title {
  padding-top: 120px !important;
  margin-left: 90px !important;
  margin-right: 100px !important;
}

.card {
  background-color: var(--darkblue) !important;
  border-radius: 30px !important;
  /* width: 25rem !important; */
}

.card img {
  border-radius: 30px;
  width: 100%;
  height: 200px;
}

.cancel-btn {
  background-color: rgb(169, 11, 11) !important;
  color: #fff !important;
  border-radius: 15px !important;
  height: 50px !important;
  font-weight: 500 !important;
  border: none !important;
}

.arow {
  cursor: pointer;
  height: 45px !important;
  font-size: 38px;
}

.control-btn {
  border: none;
  background-color: #fff;
}
</style>
