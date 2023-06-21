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

  <Footer />
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import CancelModal from "../components/CancelModal.vue";
import RebookModal from "../components/RebookModal.vue";
import UpcomingCards from "@/components/UpcomingCards.vue";
import PastCards from "@/components/PastCards.vue";
import moment from "moment";

export default {
  data() {
    return {
      // allbookings: [
        // {
        //   id: 4,
        //   startTime: "12:00:00",
        //   endTime: "20:00:00",
        //   date: "15-05-2023",
        //   room: {
        //     roomId: 1,
        //     number: 0,
        //     name: "room1",
        //     activity: null,
        //     type: null,
        //     price: 0.0,
        //     image: 'https://www.propertyfinder.eg/blog/wp-content/uploads/2020/02/coworking.jpg',
        //     space: "Comma",
        //   },
        //   user: {
        //     userId: 1,
        //     email: "test",
        //     firstName: null,
        //     lastName: null,
        //     password: null,
        //     mobileNo: null,
        //     address: null,
        //     birthDate: null,
        //     bio: null,
        //     points: 0,
        //     picture: null,
        //   },
        // },
        // {
        //   id: 5,
        //   startTime: "12:00:00",
        //   endTime: "14:00:00",
        //   date: "15-03-2023",
        //   room: {
        //     roomId: 1,
        //     number: 0,
        //     name: "room2",
        //     activity: null,
        //     type: null,
        //     price: 0.0,
        //     image: null,
        //     space: "Woork Hub",
        //   },
        //   user: {
        //     userId: 1,
        //     email: "test",
        //     firstName: null,
        //     lastName: null,
        //     password: null,
        //     mobileNo: null,
        //     address: null,
        //     birthDate: null,
        //     bio: null,
        //     points: 0,
        //     picture: null,
        //   },
        // },
        // {
        //   id: 6,
        //   startTime: "12:00:00",
        //   endTime: "14:00:00",
        //   date: "15-03-2023",
        //   room: {
        //     roomId: 1,
        //     number: 0,
        //     name: "room3",
        //     activity: null,
        //     type: null,
        //     price: 0.0,
        //     image: null,
        //     space: "302 Labs",
        //   },
        //   user: {
        //     userId: 1,
        //     email: "test",
        //     firstName: null,
        //     lastName: null,
        //     password: null,
        //     mobileNo: null,
        //     address: null,
        //     birthDate: null,
        //     bio: null,
        //     points: 0,
        //     picture: null,
        //   },
        // },
        // {
        //   id: 9,
        //   startTime: "12:00:00",
        //   endTime: "20:00:00",
        //   date: "15-03-2024",
        //   room: {
        //     roomId: 1,
        //     number: 0,
        //     name: "room1",
        //     activity: null,
        //     type: null,
        //     price: 0.0,
        //     image: null,
        //     space: "Square",
        //   },
        //   user: {
        //     userId: 3,
        //     email: "test",
        //     firstName: null,
        //     lastName: null,
        //     password: null,
        //     mobileNo: null,
        //     address: null,
        //     birthDate: null,
        //     bio: null,
        //     points: 0,
        //     picture: null,
        //   },
        // },
        // {
        //   id: 4,
        //   startTime: "12:00:00",
        //   endTime: "20:00:00",
        //   date: "15-03-2023",
        //   room: {
        //     roomId: 1,
        //     number: 0,
        //     name: "room 5",
        //     activity: null,
        //     type: null,
        //     price: 0.0,
        //     image: null,
        //     space: "Geeks Hub",
        //   },
        //   user: {
        //     userId: 1,
        //     email: "test",
        //     firstName: null,
        //     lastName: null,
        //     password: null,
        //     mobileNo: null,
        //     address: null,
        //     birthDate: null,
        //     bio: null,
        //     points: 0,
        //     picture: null,
        //   },
        // },
        // {
        //   id: 5,
        //   startTime: "12:00:00",
        //   endTime: "14:00:00",
        //   date: "15-03-2023",
        //   room: {
        //     roomId: 1,
        //     number: 0,
        //     name: "room1",
        //     activity: null,
        //     type: null,
        //     price: 0.0,
        //     image: null,
        //     space: "Your Space",
        //   },
        //   user: {
        //     userId: 1,
        //     email: "test",
        //     firstName: null,
        //     lastName: null,
        //     password: null,
        //     mobileNo: null,
        //     address: null,
        //     birthDate: null,
        //     bio: null,
        //     points: 0,
        //     picture: null,
        //   },
        // },
        // {
        //   id: 6,
        //   startTime: "12:00:00",
        //   endTime: "14:00:00",
        //   date: "15-03-2023",
        //   room: {
        //     roomId: 1,
        //     number: 0,
        //     name: "room 7",
        //     activity: null,
        //     type: null,
        //     price: 0.0,
        //     image: null,
        //     space: "Maqar",
        //   },
        //   user: {
        //     userId: 1,
        //     email: "test",
        //     firstName: null,
        //     lastName: null,
        //     password: null,
        //     mobileNo: null,
        //     address: null,
        //     birthDate: null,
        //     bio: null,
        //     points: 0,
        //     picture: null,
        //   },
        // },
        // {
        //   id: 9,
        //   startTime: "12:00:00",
        //   endTime: "20:00:00",
        //   date: "15-03-2024",
        //   room: {
        //     roomId: 1,
        //     number: 0,
        //     name: "room 8",
        //     activity: null,
        //     type: null,
        //     price: 0.0,
        //     image: null,
        //     space: "Erro 404",
        //   },
        //   user: {
        //     userId: 3,
        //     email: "test",
        //     firstName: null,
        //     lastName: null,
        //     password: null,
        //     mobileNo: null,
        //     address: null,
        //     birthDate: null,
        //     bio: null,
        //     points: 0,
        //     picture: null,
        //   },
        // },
        // {
        //   id: 9,
        //   startTime: "12:00:00",
        //   endTime: "20:00:00",
        //   date: "15-03-2024",
        //   room: {
        //     roomId: 1,
        //     number: 0,
        //     name: "room 9",
        //     activity: null,
        //     type: null,
        //     price: 0.0,
        //     image: null,
        //     space: "Hello",
        //   },
        //   user: {
        //     userId: 3,
        //     email: "test",
        //     firstName: null,
        //     lastName: null,
        //     password: null,
        //     mobileNo: null,
        //     address: null,
        //     birthDate: null,
        //     bio: null,
        //     points: 0,
        //     picture: null,
        //   },
        // },
      // ],
      currentSlide: 0,
      currentSlidePast: 0,
      userID: null,
      pastBookings:[],
      upComingBookings:[],
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
    this.userID = localStorage.getItem("userID");
    //upcoming bookings
    axios
      .get(`http://localhost:8080/api/bookings/upComingBookings/${userID}`)
      .then((response) => {
        // Handle response
        this.upComingBookings = response.data;
      })
      .catch((err) => {
        // Handle errors
        console.error(err);
      });

      //past bookings
      axios
      .get(`http://localhost:8080/api/bookings/pastBookings/${userID}`)
      .then((response) => {
        // Handle response
        this.upComingBookings = response.data;
      })
      .catch((err) => {
        // Handle errors
        console.error(err);
      });



  },
  methods: {
    nextSlide() {
      if (this.currentSlide == this.bookings.length / 2 - 0.5) {
        this.currentSlide = 0;
      } else {
        this.currentSlide =
          (this.currentSlide + 1) % (this.bookings.length / 2);
      }
    },
    prevSlide() {
      if (this.currentSlide == 0) {
        this.currentSlide = this.bookings.length / 2 - 0.5;
      } else {
        this.currentSlide =
          (this.currentSlide + this.bookings.length - 1) %
          (this.bookings.length / 2);
      }
    },

    nextSlidePast() {
      if (this.currentSlidePast == this.pastbookings.length / 2 - 0.5) {
        this.currentSlidePast = 0;
      } else {
        this.currentSlidePast =
          (this.currentSlidePast + 1) % (this.pastbookings.length / 2);
      }
    },
    prevSlidePast() {
      if (this.currentSlidePast == 0) {
        this.currentSlidePast = this.pastbookings.length / 2 - 0.5;
      } else {
        this.currentSlidePast =
          (this.currentSlidePast + this.pastbookings.length - 1) %
          (this.pastbookings.length / 2);
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
