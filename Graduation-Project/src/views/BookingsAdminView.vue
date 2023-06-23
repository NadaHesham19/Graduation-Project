<template>
    <AdminNav></AdminNav>
    <div class="container">

        <h1 class="my-5 text-center ">All Bookings</h1>

        <div class="my-4 row justify-content-center align-items-center">
            <div class="col-lg-4 my-3">
                <!-- <SearchSection></SearchSection> -->
            </div>

        </div>
    </div>


    <div class="container mt-5 pt-5">

        <div class="row justify-content-center align-items-between" v-for="booking in pagedBookings" :key="booking">

            <BookingsAminCards class="slide my-3 col-lg-10" :booking="booking" />
        </div>
        <div class=" row numbers mt-5 mb-5 text-center">
            <v-pagination active-color="#007CC7" color="#007CC7" v-model="currentPage" :length="totalPages"
                :total-visible="7" prev-icon="mdi-chevron-left" next-icon="mdi-chevron-right"></v-pagination>
        </div>
    </div>
    <v-alert color="error" icon="$error" title="You're not logged in" text="Please Try again" 
            v-if="this.authorizationFlag" class="alert align-items-center container">
            <button class="goButton" @click="redirectPage()">Go to Log In</button>
          </v-alert>

    <Footer class="mt-5"></Footer>
</template>

<script>

import AdminNav from '../components/AdminNav.vue';
import BookingsAminCards from '../components/BookingsAdminCards.vue'
import Footer from '../components/Footer.vue'
import SearchSection from '../components/SearchSection.vue'
import axios from 'axios'
export default {
    data() {
        return {
            bookings: [],
            currentPage: 1,
            bookingsPerPage: 4,
            searchTerm: '',
            authorizationFlag: false,
        }

    },
    components: {
        AdminNav, BookingsAminCards, Footer, SearchSection
    },
    computed: {
        totalPages() {
            const filteredBookings = this.bookings.filter(booking => booking.spaceName.toLowerCase().includes(this.searchTerm.toLowerCase()));
            return Math.ceil(filteredBookings.length / this.bookingsPerPage);
        },

        pagedBookings() {
            let filteredBookings = this.bookings;
            if (this.searchTerm) {
                filteredBookings = this.bookings.filter(booking => booking.spaceName.toLowerCase().includes(this.searchTerm.toLowerCase()));
            }
            const startIndex = (this.currentPage - 1) * this.bookingsPerPage;
            const endIndex = startIndex + this.bookingsPerPage;
            return filteredBookings.slice(startIndex, endIndex);
        },
    },
    beforeMount() {
        this.securityFlag = localStorage.getItem('securityFlag')
            axios.get(`http://localhost:8080/api/bookings/admin/upcomingBookings?flag=${this.securityFlag}`)
          .then((response) => {
            // Handle response
            this.bookings = response.data;
            console.log(this.bookings)
          })
          .catch((err) => {
        // Handle errors
        if(err.response.data.message === "Unauthorized request"){
          this.authorizationFlag = true
          console.log(this.authorizationFlag)
        }
      })
    },
    methods:{
        redirectPage(){
      this.$router.push('/')
    },
    }
}
</script>

<style scoped>
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
</style>
