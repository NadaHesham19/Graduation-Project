<template>
  <NavBar></NavBar>
  <div class="container mt-5">
    <div class="row w-100">
      <h5 class="col-lg-3 mt-3">Upcoming Bookings</h5>
    </div>

    <div class="row justify-content-between align-items-center w-100">
      <i class="fa-solid fa-angle-left col-lg-1 arow"></i>
      <div class=" col-lg-4 my-5" v-for="booking in bookings" :key="booking">
        <UpcomingCards class="slide" :firstTitle="booking.title" :firstDate="booking.date"
          :firstStartTime="booking.startTime" :firstDetails="booking.details" :firstEndTime="booking.endTime" />
      </div>
      <i class="fa-solid fa-angle-right col-lg-1 arow"></i>
    </div>
  </div>
  <div class="container">
    <div class="row justify-content-center w-100">
      <div class="col-lg-12">
        <hr />
      </div>
    </div>
  </div>

  <PastCards />

  <Footer />
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import CancelModal from "../components/CancelModal.vue";
import RebookModal from "../components/RebookModal.vue";
import UpcomingCards from "@/components/UpcomingCards.vue";
import PastCards from "@/components/PastCards.vue";

export default {
  data() {
    return {
      bookings: [
        {
          title: "Comma",
          startTime: "12:00 Pm",
          endTime: "2:00 Pm",
          date: "Friday 18th Nov 2022",
          details: "Meeting room for 12",
          imgUrl:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.womansday.com%2Flife%2Fg32979681%2Fcute-cat-photos%2F&psig=AOvVaw3fJXcsY_eWtaDBsP-Xqts0&ust=1682090078900000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOiOjYDguP4CFQAAAAAdAAAAABAE",
        },
        {
          title: "Creativo",
          startTime: "12:00 Pm",
          endTime: "2:00 Pm",
          date: "Saturday 19th Nov 2022",
          details: "Regular room for 4",
          imgUrl:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.womansday.com%2Flife%2Fg32979681%2Fcute-cat-photos%2F&psig=AOvVaw3fJXcsY_eWtaDBsP-Xqts0&ust=1682090078900000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOiOjYDguP4CFQAAAAAdAAAAABAE",
        },
        // {
        //   title: "Woork Hub",
        //   startTime: "12:00 Pm",
        //   endTime: "2:00 Pm",
        //   date: "Sunday 20th Nov 2022",
        //   details: "Meeting room for 12",
        //   imgUrl:
        //     "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.womansday.com%2Flife%2Fg32979681%2Fcute-cat-photos%2F&psig=AOvVaw3fJXcsY_eWtaDBsP-Xqts0&ust=1682090078900000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOiOjYDguP4CFQAAAAAdAAAAABAE",
        // },
        // {
        //   title: "302 Labs",
        //   startTime: "12:00 Pm",
        //   endTime: "2:00 Pm",
        //   date: "Monday 21st Nov 2022",
        //   details: "Regular room for 4",
        //   imgUrl:
        //     "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.womansday.com%2Flife%2Fg32979681%2Fcute-cat-photos%2F&psig=AOvVaw3fJXcsY_eWtaDBsP-Xqts0&ust=1682090078900000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOiOjYDguP4CFQAAAAAdAAAAABAE",
        // },
      ],

      // firstTitle: "Comma",
      // firstImgSrc:
      //   "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.womansday.com%2Flife%2Fg32979681%2Fcute-cat-photos%2F&psig=AOvVaw3fJXcsY_eWtaDBsP-Xqts0&ust=1682090078900000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOiOjYDguP4CFQAAAAAdAAAAABAE",
      //  bookings:null
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
    // axios.get('localhost:8080/api/user/1/bookings')
    //     .then(response => {
    //         // Handle response
    //         this.bookings=response.data
    //     })
    //     .catch(err => {
    //         // Handle errors
    //         console.error(err);
    //     });
  },
  methods: {},
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
}
</style>
